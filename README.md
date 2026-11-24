# Mozilla Common Voice documentation

The documentation for Mozilla Common Voice: how the project works, how to contribute your voice and your sentences, how to bring your language, and what the datasets contain.

Read it on the site, in your language: [common-voice.github.io/common-voice-docs](https://common-voice.github.io/common-voice-docs/).

## What is here {#contents}

| Section                                               | What it covers                                                                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [Home](src/content/docs/en/index.md)                  | What Mozilla Common Voice is, and the ways to take part                                                                               |
| [About](src/content/docs/en/about/index.md)           | How Common Voice works, how decisions are made, how it is funded, partnerships                                                        |
| [Contribute](src/content/docs/en/contribute/index.md) | Ways to contribute, your account, the [contribution guidelines](src/content/docs/en/contribute/guidelines/index.md), adding sentences |
| [Languages](src/content/docs/en/languages/index.md)   | Adding a language, requesting a dataset, variants and accents, localizing the site                                                    |
| [Community](src/content/docs/en/community/index.md)   | Where to find us, language communities, growing a language                                                                            |
| [Datasets](src/content/docs/en/datasets/index.md)     | What a dataset release contains, where to download it, your data and the dataset                                                      |
| [Developers](src/content/docs/en/developers/index.md) | The datasets for speech recognition, the public API                                                                                   |
| [FAQ](src/content/docs/en/faq.md)                     | Short answers, with links to the full pages                                                                                           |

## Languages {#languages}

The pages are written in English, in `src/content/docs/en/`. Each other language has a folder next to it, named with its Common Voice language code, such as `fr` or `zh-CN`. A page missing in a language shows the English page with a notice.

**Translate a page into your language:** [How to translate to your language](src/content/docs/en/translate.md).

## Files {#files}

| Path                                | What                                                                                                |
| ----------------------------------- | --------------------------------------------------------------------------------------------------- |
| `src/content/docs/<language code>/` | The pages, one folder per language                                                                  |
| `src/content/docs/images/shared/`   | Images without words, used by every language                                                        |
| `src/content/docs/images/<code>/`   | Images with words in them, one copy per language, English as the fallback                           |
| `public/files/`                     | Downloads the pages link to                                                                         |
| `src/assets/brand/`                 | Common Voice artwork for pages and components (see [Brand assets](#brand-assets))                   |
| `public/docs/`                      | The [public API reference](https://common-voice.github.io/common-voice-docs/docs/openapi-docs.html) |

## Writing pages {#writing}

- Give every heading that can be linked to an id that stays the same in every language: `## Background Noise {#background-noise}`.
- Link to another page by its file, as on GitHub: `[Reporting](reporting.md#reporting-content)`.
- Link to a download by its path from the page: `[template file](../../files/template.tsv)`. The file itself lives in `public/files/`; the build fails if it is missing.
- The sidebar's order and section names are set in `astro.config.mjs`.
- A page for a part of Common Voice that is not open yet is a placeholder: a `Soon` badge in its front matter, a "Coming soon" note, and a heading with an id for each topic it will cover, so other pages can already link to it.

## Brand assets {#brand-assets}

`src/assets/brand/` holds the Common Voice artwork for pages and components:

- `shapes/`: the Mozilla Foundation shape primitives, painted in `currentColor`, so they take the text colour where they sit.
- `mars/`: the Mars figure, flat (light and dark ground, and on its tile) and 3D (head, face, waving).
- `lockup-light.svg`, `lockup-dark.svg`: the Mozilla Common Voice lockup.

Import an SVG as a component (`import Drop from '../assets/brand/shapes/drop.svg'`) and a PNG through `astro:assets`, which serves it as WebP. Only the files a page uses are published.

## Local build {#local-build}

Images, fonts and PDFs are stored with [Git LFS](https://git-lfs.com/): run `git lfs install` once before cloning. Then, with Node 24 and pnpm (the version in `package.json`):

```sh
pnpm install
pnpm dev     # local site with live reload
pnpm check   # format, Markdown lint, tests and the build with its link check, as CI runs it
```

`pnpm format` fixes formatting.

## Contributing {#contributing}

To correct a page, add a page, or translate one, open a pull request. Every pull request runs `pnpm check`; a merge to `main` publishes the site to GitHub Pages. Questions go to the [Common Voice Discourse](https://discourse.mozilla.org/c/voice/239).

## License {#license}

[MPL-2.0](LICENSE).
