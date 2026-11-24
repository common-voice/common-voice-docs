// Copies the finished manual screenshots from the captures folder into the site: `pnpm manual:images [section]`.
// The folder is MCV_DOCS_CAPTURES (default below); only `processed/` is read, the raw files stay where they are.
import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import path from 'node:path'

const DEFAULT_ROOT = '/mnt/mfs/data/MCV/__mono/DOCS/captures'
const root = process.env.MCV_DOCS_CAPTURES || DEFAULT_ROOT
const processed = path.join(root, 'processed')
const target = path.resolve('src/content/docs/images/en/manual')
const only = process.argv[2]

if (!existsSync(processed))
  throw new Error(`No processed captures at ${processed}. Mount the disk or set MCV_DOCS_CAPTURES.`)

let count = 0
for (const section of readdirSync(processed, { withFileTypes: true })) {
  if (!section.isDirectory() || section.name.startsWith('_') || (only && section.name !== only)) continue
  mkdirSync(path.join(target, section.name), { recursive: true })
  for (const file of readdirSync(path.join(processed, section.name))) {
    if (!file.endsWith('.png')) continue
    copyFileSync(path.join(processed, section.name, file), path.join(target, section.name, file))
    count++
  }
}
console.log(`${count} images copied to ${path.relative('.', target)}`)
