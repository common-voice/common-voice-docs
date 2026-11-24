---
title: Ask about a new language
description: Request a dataset for a language, or a domain-specific dataset for a language that already has one.
---

Check the Dataset statistics page on [Common Voice](https://commonvoice.mozilla.org) first: your language may already have a dataset. If not, open the Scripted Speech overview and choose one of the two requests in its request section. Requests are open for Scripted Speech; the other sections will open theirs later.

## Two kinds of request {#request-kinds}

| Request                   | When to use it                                                                            |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| A dataset for a language  | the language has no Scripted Speech dataset yet                                           |
| A domain-specific dataset | the language has a dataset, and you want sentences for one field, such as medicine or law |

You need to be signed in to send a request.

## A dataset for a language {#language}

1. Pick the language. If it is not listed, type its name and choose to request it.
2. Check what is already known: how much of the site is translated into the language, and which other dataset types it has.
3. Describe a language that is not listed.
4. Add why you want the dataset and anything else the team should know, then send.

Add as much information as you can about the language. This could include:

- Names of your language
- [ISO Codes](variants-and-accents.md#language-codes) if known
- Links to websites that can help us understand the language

The form asks for the English name and the name in the language itself. If you know them, it also asks for the language code, the number of speakers, the script, the language's Pontoon manager, and its [variants and accents](variants-and-accents.md).

## A domain-specific dataset {#domain}

A domain-specific dataset collects sentences about one subject, in a language that already has a dataset. Pick the language, then fill in the fields below.

### Domain {#domain-code}

A short code for the dataset: the language code, a hyphen, and one word for the subject, for example `en-medical`.

### Domain title {#domain-title}

The dataset's name, written in the language itself. This is the name contributors see.

### Annotations {#annotations}

Any labels you want on each sentence or recording besides the text, for example the speaker's profession or the formality of the sentence. List each one and press Enter. Leave it empty if the text alone is enough.

### Text domains {#text-domains}

The topics the sentences should cover. Use the [Sentence Domain](../contribute/guidelines/sentences.md#sentence-domain) list where a topic fits, or add your own.

### How the data will be collected {#collection}

Where the sentences will come from and who will read them: for example, texts a hospital releases under CC0, read by its staff at an event. The sentences must follow the [Sentence Collection](../contribute/guidelines/sentences.md) guidelines.

## License {#license}

The license says what others may do with the dataset once it is released.

**A dataset for a language** is always released under [Creative Commons Zero 1.0](https://creativecommons.org/publicdomain/zero/1.0/) (CC0). CC0 gives up every right to the recordings and sentences, so anyone can use them for any purpose without asking or naming the source. The form shows it; there is nothing to choose.

**A domain-specific dataset** can carry another license, chosen on the form. The form shows each license by its full name and its code, the code being how [Mozilla Data Collective](https://datacollective.mozillafoundation.org/) lists it. CC0 is chosen first, and it is the one we recommend: data under CC0 can be combined with every other Common Voice dataset. Choose another only when the owner of the texts requires it.

| Kind                   | What it allows                                                                                     | Licenses on the form                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public domain          | any use, no conditions                                                                             | Creative Commons Zero 1.0 (`CC0-1.0`), The Unlicense (`Unlicense`)                                                                                                                                                                                                                                                                             |
| Attribution            | any use, as long as the source is named                                                            | Creative Commons Attribution 4.0 (`CC-BY-4.0`), Open Data Commons Attribution License 1.0 (`ODC-By-1.0`), Open Government Licence - Canada 2.0 (`OGL-Canada-2.0`), Open Government Licence - UK 3.0 (`OGL-UK-3.0`), Norwegian Licence for Open Government Data 2.0 (`NLOD-2.0`), Open Government Data License - Taiwan 1.0 (`OGDL-Taiwan-1.0`) |
| Share-alike            | any use, naming the source, but what is built from the data must carry the same license            | Creative Commons Attribution-ShareAlike 4.0 (`CC-BY-SA-4.0`), Creative Commons ShareAlike 1.0 (`CC-SA-1.0`), Open Data Commons Open Database License 1.0 (`ODbL-1.0`)                                                                                                                                                                          |
| Restricted             | no commercial use (NonCommercial), or no changed versions (NoDerivatives); many uses are ruled out | Creative Commons Attribution-NonCommercial 4.0 (`CC-BY-NC-4.0`), Creative Commons Attribution-NonCommercial-ShareAlike 4.0 (`CC-BY-NC-SA-4.0`), Creative Commons Attribution-NoDerivatives 4.0 (`CC-BY-ND-4.0`)                                                                                                                                |
| With their own terms   | read the license text before choosing                                                              | Nwulite Obodo Open Data License 1.0 (`NOODL-1.0`), Lesser General Public License for Linguistic Resources (`LGPLLR`), Open Publication License 1.0 (`OPUBL-1.0`)                                                                                                                                                                               |
| Software and documents | written for code or manuals, rarely a good fit for speech data                                     | Apache License 2.0 (`Apache-2.0`), MIT License (`MIT`), BSD 3-Clause License (`BSD-3-Clause`), GNU General Public License v3.0 (`GPL-3.0`), GNU Affero General Public License v3.0 (`AGPL-3.0`), Mozilla Public License 2.0 (`MPL-2.0`), European Union Public License 1.2 (`EUPL-1.2`), GNU Free Documentation License 1.3 (`GFDL-1.3`)       |

The list is the one [Mozilla Data Collective](https://datacollective.mozillafoundation.org/) accepts, where every dataset is published. If your license is not on it, choose **Other** and give the license's full name, and a link to its text if it has one. The team checks the license with you before the dataset is created.

## Visibility {#visibility}

The visibility says who can see the dataset and read it once it exists.

**A dataset for a language** is always public, like every Common Voice dataset. The form does not ask.

**A domain-specific dataset** can be public, unlisted or private, chosen on the form. Public is chosen first.

| Choice   | Who can see and read the dataset                                                        |
| -------- | --------------------------------------------------------------------------------------- |
| Public   | everyone: it is listed in the catalogue                                                 |
| Unlisted | it is not listed; only the dataset's own staff and its organization's staff can read it |
| Private  | it is not listed; only the organization's staff and the Common Voice team can read it   |

## Who can contribute {#contribute-mode}

This says who may add sentences and recordings to the dataset once it exists.

**A dataset for a language** is always open to everyone, like every Common Voice dataset. The form does not ask.

**A domain-specific dataset** can be limited, chosen on the form. Open is chosen first.

| Choice       | Who can contribute                             |
| ------------ | ---------------------------------------------- |
| Open         | everyone                                       |
| Members only | only the members of the dataset's organization |
| Invite only  | only the people the dataset's staff invite     |

## After you send a request {#after}

- You see "Request received" with a summary of what you sent, and you get a confirmation email.
- The team reviews your request and reaches out to you to offer extra support, and to let you know if there is already a community working on your language
- If you don’t hear from us within a couple of days, reach out at [commonvoice@mozilla.com](mailto:commonvoice@mozilla.com) and we’ll get back to you!

- [How do I add a language?](index.md)
