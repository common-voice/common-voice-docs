// Rehype plugin: turns relative links to markdown pages and downloads into site URLs, in every language.
import { existsSync } from 'node:fs'
import path from 'node:path'

const EXTERNAL = /^([a-z][a-z0-9+.-]*:|\/|#)/i

/** The site URL for a relative `.md` link in a page, or null when the link is not a relative page link. */
export function pageHref(href, sourceFile, contentDir, base) {
  if (EXTERNAL.test(href)) return null
  const suffixAt = href.search(/[?#]/)
  const target = suffixAt === -1 ? href : href.slice(0, suffixAt)
  const suffix = suffixAt === -1 ? '' : href.slice(suffixAt)
  if (!target.endsWith('.md')) return null
  const resolved = path.relative(contentDir, path.resolve(path.dirname(sourceFile), target))
  if (resolved.startsWith('..')) return null
  const slug = resolved
    .split(path.sep)
    .join('/')
    .replace(/\.md$/, '')
    .replace(/(^|\/)index$/, '')
    .toLowerCase()
  const root = base.replace(/\/+$/, '')
  return `${root}/${slug ? `${slug}/` : ''}${suffix}`
}

/** The site URL for a relative link to a download in `files/`, or null when the link is not one. */
export function fileHref(href, sourceFile, contentDir, base) {
  if (EXTERNAL.test(href)) return null
  const suffixAt = href.search(/[?#]/)
  const target = suffixAt === -1 ? href : href.slice(0, suffixAt)
  const suffix = suffixAt === -1 ? '' : href.slice(suffixAt)
  const resolved = path
    .relative(contentDir, path.resolve(path.dirname(sourceFile), target))
    .split(path.sep)
    .join('/')
  if (!resolved.startsWith('files/')) return null
  return `${base.replace(/\/+$/, '')}/${resolved}${suffix}`
}

function walk(node, visit) {
  visit(node)
  for (const child of node.children ?? []) walk(child, visit)
}

/** Rewrites every relative page link and `files/` link in a page to its site URL under `base`; a missing download fails. */
export default function mdLinks({
  base = '/',
  contentDir = path.resolve('src/content/docs'),
  publicDir = path.resolve('public'),
} = {}) {
  return (tree, file) => {
    if (!file.path) return
    walk(tree, (node) => {
      if (node.type !== 'element' || node.tagName !== 'a') return
      const href = node.properties?.href
      if (typeof href !== 'string') return
      const page = pageHref(href, file.path, contentDir, base)
      if (page) {
        node.properties.href = page
        return
      }
      const download = fileHref(href, file.path, contentDir, base)
      if (!download) return
      const onDisk = path.join(publicDir, download.slice(base.replace(/\/+$/, '').length).replace(/[?#].*$/, ''))
      if (!existsSync(onDisk)) throw new Error(`${file.path}: ${href} has no file at ${path.relative('.', onDisk)}`)
      node.properties.href = download
    })
  }
}
