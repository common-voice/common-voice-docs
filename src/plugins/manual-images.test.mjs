// Tests for the light and dark image pair.
import assert from 'node:assert/strict'
import { test } from 'node:test'
import manualImages, { darkSource, themedPair } from './manual-images.mjs'

const image = (url) => ({ type: 'image', url, alt: 'Header', title: null })

test('a light image has a dark twin; anything else has none', () => {
  assert.equal(
    darkSource('../../images/en/manual/a/header-desktop-light.png'),
    '../../images/en/manual/a/header-desktop-dark.png'
  )
  assert.equal(darkSource('header.png'), null)
  assert.equal(darkSource('x-light.png.bak'), null)
  assert.equal(darkSource(undefined), null)
})

test('the pair keeps the alt text and marks light and dark', () => {
  const [light, dark] = themedPair(image('p/x-light.png'))
  assert.deepEqual(
    [light.data.hProperties.className, dark.data.hProperties.className],
    [['manual-light'], ['manual-dark']]
  )
  assert.equal(dark.url, 'p/x-dark.png')
  assert.equal(light.url, 'p/x-light.png')
  assert.equal(light.alt, dark.alt)
})

test('a plain image or text node is left alone', () => {
  assert.equal(themedPair(image('p/x.png')), null)
  assert.equal(themedPair({ type: 'text', value: 'x' }), null)
})

test('the plugin swaps the image inside a paragraph', () => {
  const tree = { type: 'root', children: [{ type: 'paragraph', children: [image('p/x-light.png')] }] }
  manualImages()(tree)
  assert.equal(tree.children[0].children.length, 2)
})
