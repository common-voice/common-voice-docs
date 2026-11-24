---
title: Datasets
description: Datasets for ASR and other NLP contexts - created through community participation.
---

Mozilla Common Voice datasets are now exclusively available on Mozilla Data Collective.

As of Common Voice 23.0, all Common Voice datasets are exclusively available for download through [Mozilla Data Collective](https://datacollective.mozillafoundation.org/)!

We believe that large and publicly available voice datasets foster innovation and healthy commercial competition in machine-learning based speech technology. This is a global effort and we invite everyone to participate. Our aim is to help speech technology be more inclusive, reflecting the diversity of voices from around the world.

## How do I access and use the dataset? {#access}

Every Scripted Speech and Spontaneous Speech dataset is downloaded from [Mozilla Data Collective](https://datacollective.mozillafoundation.org/). Choose the language and the version, and download it.

**You agree** to not attempt to determine the identity of speakers in the Common Voice dataset

License: [CC-0](https://creativecommons.org/publicdomain/zero/1.0/)

If you’re looking for tools to build ASR models, you can connect to other people in the community [on Discourse](https://discourse.mozilla.org/c/voice/239).

## What’s inside the Common Voice dataset? {#whats-inside}

Each entry in the dataset consists of a unique MP3 and corresponding text file. Many of the recorded hours in the dataset also include demographic metadata like age, sex, and accent that can help train the accuracy of speech recognition engines.

### Dataset releases {#releases}

A new version of each dataset is released about every three months. Each release contains everything collected until then. A release also comes as a smaller delta, with only the clips added since the previous one.

We’ve made some changes. Delta Segments just contain the most recent clips since the last release. [Read more about this work](https://foundation.mozilla.org/blog/iterating-dataset-access-on-common-voice).

### Clips in a release {#clips}

| Part             | Holds                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| validated        | clips that at least two people accepted                                     |
| invalidated      | clips that at least two people rejected                                     |
| other            | clips that have not had enough votes yet                                    |
| train, dev, test | the validated clips, split so that no speaker appears in more than one part |

If a clip is rejected by 2 people, it is released in a different subset of the dataset.

## Get Started with Speech Recognition {#get-started}

- [NVIDIA NeMo](https://github.com/NVIDIA/NeMo)™ is an [open-source toolkit](https://docs.nvidia.com/deeplearning/nemo/user-guide/docs/en/main/) for researchers developing state-of-the-art conversational AI models.

## Other Voice Datasets {#other-datasets}

- **LibriSpeech**: LibriSpeech is a corpus of approximately 1000 hours of 16Khz read English speech derived from read audiobooks from the LibriVox project.
- **TED-LIUM Corpus**: The TED-LIUM corpus was made from audio talks and their transcriptions available on the TED website.
- **VoxForge**: VoxForge was set up to collect transcribed speech for use with Free and Open Source Speech Recognition Engines.
- **Tatoeba**: Tatoeba is a large database of sentences, translations, and spoken audio for use in language learning. This download contains spoken English recorded by their community.

- [Data rights](data-rights.md)
