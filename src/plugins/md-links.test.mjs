// Tests for the relative page link rewrite.
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { fileHref, pageHref } from './md-links.mjs'

const content = '/repo/src/content/docs'
const base = '/common-voice-docs'
const voice = `${content}/tr/contribute/guidelines/voice.md`

test('a sibling page in the same language', () => {
  assert.equal(pageHref('reporting.md', voice, content, base), '/common-voice-docs/tr/contribute/guidelines/reporting/')
})

test('keeps the anchor', () => {
  assert.equal(
    pageHref('sentences.md#public-domain', voice, content, base),
    '/common-voice-docs/tr/contribute/guidelines/sentences/#public-domain'
  )
})

test('an index page becomes its folder', () => {
  assert.equal(pageHref('../../about/index.md', voice, content, base), '/common-voice-docs/tr/about/')
  assert.equal(pageHref('../../index.md', voice, content, base), '/common-voice-docs/tr/')
})

test('a language folder in canonical case gets a lowercase URL', () => {
  const page = `${content}/sv-SE/faq.md`
  assert.equal(pageHref('about/index.md#funding', page, content, base), '/common-voice-docs/sv-se/about/#funding')
})

test('leaves external, absolute, anchor-only and non-page links alone', () => {
  for (const href of ['https://example.org/a.md', 'mailto:x@example.org', '/en/faq/', '#top', '../../files/a.tsv']) {
    assert.equal(pageHref(href, voice, content, base), null)
  }
})

test('leaves a link that leaves the content folder alone', () => {
  assert.equal(pageHref('../../../../../README.md', voice, content, base), null)
})

test('a download in files/ gets its site URL', () => {
  const page = `${content}/tr/contribute/sentences.md`
  assert.equal(
    fileHref('../../files/sample-bulk-submission.tsv', page, content, base),
    '/common-voice-docs/files/sample-bulk-submission.tsv'
  )
})

test('keeps a query or fragment on a download link', () => {
  const page = `${content}/en/datasets/index.md`
  assert.equal(
    fileHref('../../files/guide.pdf#page=2', page, content, base),
    '/common-voice-docs/files/guide.pdf#page=2'
  )
})

test('leaves links outside files/ alone', () => {
  for (const href of ['../../images/en/speak.png', 'https://example.org/files/a.tsv', '#files']) {
    assert.equal(fileHref(href, voice, content, base), null)
  }
})
