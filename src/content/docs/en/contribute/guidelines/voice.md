---
title: Voice Collection
description: Understand what to look for when listening to voice clips and help make your voice recordings richer too!
---

Understand how to contribute and validate on the Common Voice dataset

## How do I record a high quality voice clip? {#recording}

- Speak in your normal voice! The way you speak is welcome here - we want your accent as it is, and we want your usual volume, style and intonation.
- Avoid too much background noise - it should be easy to hear you.
- Read the sentence carefully - don’t miss, change or add words.
- Make sure the platform is recording before you start speaking, and that it only stops once you’re finished.

## How do I know whether to approve a voice clip? {#validating}

If you could **hear them** and **understand them**, it’s usually **best to approve**.

**Do not reject clips where the speaker ‘has an accent’ that is different to your own** - this is important for voice recognition to work better for everyone.

If you think the pronunciation makes it **impossible to understand**, or there’s a **lot of background noise**, or there are **other people speaking too**, then you should reject the clip. See more information in the sections below.

If a clip is rejected by 2 people, it is released in a different subset of the dataset.

## Varying Pronunciations {#varying-pronunciations}

We welcome different accents! Be very cautious before rejecting a clip on the ground that you think the reader has mispronounced a word, has put the stress in the wrong place, or has ignored punctuation. There are a wide variety of pronunciations in use around the world, some of which you may not have heard in your local community. Please provide a generous margin of appreciation for those who may speak differently from you.

On the other hand, if you think that the reader has never come across the word before, and is making an incorrect guess at the pronunciation, please reject. If you are unsure, use the skip button.

### Example {#varying-pronunciations-example}

> The route was unclear.

- ✓ The route was unclear. [Canadian English might make "route" sound like "rowt"]
- ✓ The route was unclear. [British English might make "root"]

## Misreadings {#misreadings}

Reading all the words on the page correctly does matter. When listening, check very carefully that what has been recorded is exactly what has been written; reject if they have added, contracted or missed words.

Very common mistakes include:

- Missing 'A' or 'The' at the beginning of the recording.
- Missing an 's' at the end of a word.
- Reading contractions that aren't actually there, such as "We're" instead of "We are", or vice versa.
- Missing the end of the last word by cutting off the recording too quickly.
- Taking several attempts to read a word.

### Example {#misreadings-example}

> We are going out to get coffee.

- ✓ We are going out to get coffee.
- ✗ We're going out to get coffee. [Should be “We are”]
- ✗ We are going out to get a coffee. [No ‘a’ in the original text]
- ✗ The bumblebee sped by. [Mismatched content]

## Offensive Content {#offensive-content}

Sentences are vetted through a community-moderation process, however this process is not perfect. If you see or hear a sentence that offends or upsets you - for example because it violates our [community participation guidelines](https://www.mozilla.org/about/governance/policies/participation/) - please do use the Report button (or press R). You can also reach out to us at [commonvoice@mozilla.com](mailto:commonvoice@mozilla.com).

## Background Noise {#background-noise}

You need to be able to hear every word of the recording. We want machine learning algorithms to be able to handle a variety of background noise, and even relatively loud noises or quiet background music can be accepted provided that they don’t prevent you from hearing the entirety of the text. Crackles or ‘breaking up’ that prevent you hearing the text means you should reject the clip.

### Example {#background-noise-example}

> The giant dinosaurs of the Triassic.

- ✓ The giant dinosaurs of the Triassic.
- ✗ [Sneeze] The giant dinosaurs of the [cough] Triassic. [interrupted by background noise]
- ✗ The giant dino [cough] the Triassic. [Part of the text can’t be heard]
- ✗ [Crackle] giant dinosaurs of [crackle] -riassic. [Part of the text can’t be heard]

## Background Voices {#background-voices}

A little background noise is okay, but if you can hear another person speaking distinct words, the clip should be rejected. Typically this happens where the TV has been left on, or where there is a conversation going on nearby.

### Example {#background-voices-example}

> The giant dinosaurs of the Triassic.

- ✗ The giant dinosaurs of the Triassic. [read by one voice] Are you coming? [called by another]

## Volume {#volume}

There will be natural variations in volume between readers. Reject only if the volume is so high that the recording breaks up, or (more commonly) if it is so low that you can’t hear what is being said without reference to the written text.

## Reader Effects {#reader-effects}

Most recordings are of people talking in their natural voice. You can accept the occasional non-standard recording that is shouted, whispered, or obviously delivered in a ‘dramatic’ voice. Please reject sung recordings and those using a computer-synthesized voice.

## Just Unsure? {#just-unsure}

If you come across something that these guidelines don’t cover, please vote according to your best judgement. If you really can’t decide, use the skip button and go on to the next recording.

## Still have questions? {#still-have-questions}

- [Contact the Common Voice team](mailto:commonvoice@mozilla.com)
- [Reporting Content](reporting.md)
