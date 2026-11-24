---
title: What is a language on Common Voice?
description: How to decide whether your community needs a language, a variant or an accent, and how to write its code.
---

There are lots of ways to think about language. For the purposes of speech recognition models, Common Voice suggests focussing on ‘mutual intelligibility’, or ‘can speakers of this language mostly understand one another if they try to?’

We want speech models to be better at understanding a diverse range of speakers. For this to happen, a voice dataset must represent lots of different people.

Some languages have enormous variation in grammar, vocabulary and pronunciation. [Variants](https://foundation.mozilla.org/blog/how-we-are-making-common-voice-even-more-linguistically-inclusive/) give communities a way to distinguish their languages within the larger dataset.

The more people a single dataset includes, the better it is. Machines should understand how young and old people speak, how people of every gender speak, and how both first-language speakers and learners speak.

## Definitions {#definitions}

| Term                     | Meaning                                                                                                                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Language**             | A group of speakers who can understand each other (mutual intelligibility). It has to do with history and society as well as with linguistics.                                                     |
| **Written language**     | The way a language is written. Writing does not just reproduce speech; it has rules of its own. Communities that speak the same way can have different rules for writing.                          |
| **Variant** (or dialect) | A way of speaking that a group of speakers identifies with, in vocabulary and grammar. Most variants follow a region. The differences may or may not show in writing.                              |
| **Accent**               | The same vocabulary and grammar, pronounced differently. A speaker can have more than one accent. Every speaker has an accent: it is variation within a language, not a departure from a standard. |

## Do you need your own language code? {#language-codes}

The ISO 639-3 standard gives each language its own three-letter code. There are also older two-letter codes: English is `en` in two letters and `eng` in three.

Often one two-letter code covers several three-letter codes. `ku` (Kurdish) covers `kmr` (Northern Kurdish) and `ckb` (Central Kurdish). A language with its own three-letter code is likely to be a separate language on Common Voice. The choice stays with the community: Western Armenian has its own code, `hyw`, but the Armenian community chose to stay together under `hy`.

Look up codes in the [ISO 639-3 code tables](https://iso639-3.sil.org/code_tables/639/data/all).

## Variant or accent? {#variant-or-accent}

| If speakers...                                                 | Use           | Example                                                                                            |
| -------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| use different words for the same thing, in well-defined places | a **variant** | _computadora_ in Mexico, _ordenador_ in Spain; Valencian _eixir_ and Catalan _sortir_, "to go out" |
| write the same way but pronounce words differently             | an **accent** | _colour_ and _color_ are spelt differently but pronounced the same                                 |
| differ a lot in both spelling and pronunciation                | a **variant** | Catalan _huit_ in the west and _vuit_ in the east, "eight"                                         |
| write the language in a different script                       | a **variant** | Serbian _река_ (Cyrillic) and _reka_ (Latin), "river"; also Konkani, Punjabi, Crimean Tatar        |
| use the same script but different spelling systems             | a **variant** | Basaa "father": _ǹsaŋ_ in the new orthography, _nsañ_ in the older one                             |

Speakers who hear many varieties usually know the differences but use only their own. When the differences are large and well defined, a variant is worth creating.

## Writing a variant code {#variant-codes}

Common Voice writes variants as [BCP 47](https://www.rfc-editor.org/info/bcp47) tags, with up to four parts:

| Part               | Form                                               | Standard  | Example                                |
| ------------------ | -------------------------------------------------- | --------- | -------------------------------------- |
| Language           | 2 or 3 letters, lowercase                          | ISO 639   | `ig` (Igbo), `vot` (Votic)             |
| Script (optional)  | 4 letters, title case                              | ISO 15924 | `Latn`, `Cyrl`, `Deva`, `Beng`, `Arab` |
| Region (optional)  | 2 letters, uppercase                               | ISO 3166  | `MX`, `ES`                             |
| Variant (optional) | 5 to 8 letters, lowercase, chosen by the community | --        | `valencia`, `aranese`, `gascon`        |

Leave out any part that adds nothing. English needs no `Latn`, because it is only written in Latin script. Valencian needs no `ES`, because it is only spoken in Spain. For a diaspora community, a region can matter.

| Code               | Means                                                                    |
| ------------------ | ------------------------------------------------------------------------ |
| `es-MX`            | Spanish as spoken in Mexico                                              |
| `ca-valencia`      | the Valencian variant of Catalan                                         |
| `sr-Latn-ijekavsk` | Serbian in Latin script, ijekavian variant (_rijeka_ rather than _reka_) |
| `rm-vallader`      | the Vallader variant of Romansh                                          |
| `pa-Guru`          | Punjabi in Gurmukhi script                                               |

## Useful resources {#resources}

- [ISO 639-3 code tables](https://iso639-3.sil.org/code_tables/639/data/all)
- [BCP 47 language subtag lookup](https://r12a.github.io/app-subtags/)
- [IETF language tag (Wikipedia)](https://en.wikipedia.org/wiki/IETF_language_tag)
- [ISO 15924 script codes (Wikipedia)](https://en.wikipedia.org/wiki/ISO_15924)
- [ISO 3166 country codes (Wikipedia)](https://en.wikipedia.org/wiki/ISO_3166-1)
