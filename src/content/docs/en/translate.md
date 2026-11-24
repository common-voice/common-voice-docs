---
title: How to translate to your language
description: Add a page in your language, or update one, with a pull request.
---

These pages are written in English first and translated by people who speak each language. Anyone can
translate a page, and a speaker of the same language reviews it before it goes live.

A page that has no translation in your language shows the English page with a notice. When the translation is
added, the notice goes away.

## Before you start {#before-you-start}

- **Use your language's code.** Every language has a folder named with the code the Common Voice site uses for
  it, for example `fr`, `zh-CN`, `sv-SE` or `ga-IE`. Use the same code, with the same capital letters.
- **Check what is already there.** Open the folder for your language in the
  [docs repository](https://github.com/common-voice/common-voice-docs). Some pages may already be translated.
  Pages in several languages were started from the translations made for the Common Voice site itself.
- **Use the site's words.** The Common Voice site is translated on
  [Pontoon](https://pontoon.mozilla.org/projects/common-voice/). When a page names a button, a page or a term the
  site uses, write it the way the site does in your language, so readers recognize it. Pontoon's search shows
  how each term is translated.

## Translate a page {#translate-a-page}

1. **Fork the [docs repository](https://github.com/common-voice/common-voice-docs)** on GitHub.
2. **Copy the English page** from the `en` folder (in `src/content/docs/`) to the same place in your language's
   folder. Create the folder if it does not exist. Keep the file name: `en/contribute/guidelines/voice.md` becomes
   `fr/contribute/guidelines/voice.md`.
3. **Translate the text:** the `title` and `description` at the top, every heading, paragraph, list item and
   table cell, and the text inside `![...]` (the image description).
4. **Record the English version you translated.** Add a `source_rev` line to the top of the page, with the
   commit id of the English page you started from. You find it on GitHub: open the English file, choose
   **History**, and copy the id of the newest commit.
5. **Open a pull request.** Name it after the page and the language, for example
   _"Add French translation of Voice Collection"_. If your language has no pages yet, say so: the maintainers
   add it to the site's language list.

A page goes live in your language only when all of it is translated. Do not leave English passages in it. If
you cannot finish a page, open the pull request as a draft and say which parts are left.

```yaml
---
title: Collecte de voix
description: ...
source_rev: 4f2c1a9
---
```

## Keep these as they are {#keep}

| Keep                | Example                                                                                  | Why                                                   |
| ------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| Heading ids         | `## Background Noise {#background-noise}` becomes `## Bruit de fond {#background-noise}` | links from the Common Voice site point at them        |
| Link addresses      | `(voice.md#misreadings)`                                                                 | the text of a link is translated, its address is not  |
| Tags                | `[laugh]`, `[noise]`, `[disfluency]`, `[unclear]`                                        | transcribers type them as they are, in every language |
| Code and file names | `en-medical`, `.tsv`                                                                     | they are read by machines                             |
| Markdown            | `**`, `-`, `\|`, `>`                                                                     | they shape the page                                   |

Example sentences, such as the ones in the guidelines, can be replaced with sentences in your language that
show the same thing. Keep what each example is there to show.

## Images {#images}

- **Images with words in them**, such as screenshots, have a copy for each language. To add yours, take the
  screenshot with the Common Voice site set to your language. Save it with the **same file name** in your
  language's image folder (`images/fr/` instead of `images/en/`), and change the path in your page.
- **Images without words**, such as logos, are shared by every language. Leave their paths as they are.
- **Diagrams** are written as text inside the page. Translate their labels like any other text.

## When the English page changes {#when-english-changes}

The site does not warn you when the English page is edited after you translated it, so check from time to
time. To update your page, compare the English page with the commit in your `source_rev`, translate what
changed, and set `source_rev` to the new commit.

## Review {#review}

Each language has one or more reviewers who speak it. They check that the translation is complete, reads
naturally, and uses the site's words. The docs team checks that ids, links and images still work.

## Right-to-left languages {#right-to-left}

Write the text as you normally would. The site sets the page direction from the language, so there is nothing
to add.

## Questions {#questions}

Ask in the [Common Voice Discourse](https://discourse.mozilla.org/c/voice/239) or on
[Matrix](https://chat.mozilla.org/#/room/#common-voice:mozilla.org).
