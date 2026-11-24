// Remark plugin: a manual image written as its light file also shows its dark twin when the site is dark.
// It runs on the Markdown tree, before the build collects the page's images, so both files are optimized.

const LIGHT_FILE = /-light\.png$/

/** The dark twin of a light image path, or null when the path is not a light image. */
export function darkSource(url) {
  return typeof url === 'string' && LIGHT_FILE.test(url) ? url.replace(LIGHT_FILE, '-dark.png') : null
}

const withClass = (node, className, url) => ({
  ...node,
  url,
  data: { ...node.data, hProperties: { ...node.data?.hProperties, className: [className] } },
})

/** The two images that replace a light image: itself marked light, and its twin marked dark; null for any other node. */
export function themedPair(node) {
  if (node.type !== 'image') return null
  const dark = darkSource(node.url)
  if (dark === null) return null
  return [withClass(node, 'manual-light', node.url), withClass(node, 'manual-dark', dark)]
}

function walk(node) {
  if (!node.children) return
  node.children = node.children.flatMap((child) => themedPair(child) ?? [child])
  for (const child of node.children) walk(child)
}

/** Replaces each `-light.png` image of a page with the light and dark pair; the theme rules in `theme.css` show one. */
export default function manualImages() {
  return (tree) => walk(tree)
}
