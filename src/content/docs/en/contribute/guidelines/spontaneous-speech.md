---
title: Spontaneous Speech
description: Understand how to contribute and validate on the Common Voice dataset
---

These guidelines apply to every Spontaneous Speech activity.

## Answer Questions {#answer-questions}

### General guidance {#answer-general}

Think for a moment about the prompt, consider what kind of thing you’d like to say, but don’t script yourself too much.

Remember - don’t worry if you stutter, pause or repeat a word. This is all useful data for engineers trying to build inclusive, real-world speech recognition tools.

- Record in a reasonably quiet place
- Choose somewhere with a good internet connection
- Try to keep your response to 15-30 seconds
- Avoid hateful, inflammatory or otherwise offensive speech
- Speak naturally, as you would with a friend - use your own real variant, dialect and accent
- Keep your volume consistent - don’t shout or sing

## Transcribe the Audio {#transcribe-the-audio}

### General guidance {#transcribe-general}

In general, you should write down everything you hear. This includes;

- Writing down disfluencies, including hesitations and repetitions
- Labeling noise events like coughing or laughing
- Labeling significant noise pollution, like background chatter or car horns
- Grammatical variation and slang should be recorded exactly as it occurs. Do not correct or edit people’s speech.

### Numbers and acronyms {#numbers-and-acronyms}

Numbers and symbols should be spelled out in words rather than using numerals or special characters. Example:

- ✓ **Correct**: It’s one hundred miles away from here
- ✗ **Wrong**: It’s 100 miles away from here
- ✓ **Correct**: See you in <u>twenty fifteen</u>
- ✗ **Wrong**: See you in <u>2015</u>
- ✓ **Correct**: It was twenty per cent off
- ✗ **Wrong**: It was 20% off

Acronyms should be written as they are normally written in the language, following standard capitalization rules. They should not be transcribed phonetically. Example:

- ✓ **Correct**: They were arrested by the <u>FBI</u> last Thursday
- ✗ **Wrong**: They were arrested by the <u>eff bee eye</u> last Thursday

### Special Tags {#special-tags}

The following special tags should be used to mark disfluencies, fillers and other types of non-verbal content (in English).

| Tag            | Meaning                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `[laugh]`      | **Laugh**: The sound of laughter.                                                                                                                                              |
| `[disfluency]` | **Disfluency**: A filler word or sound used as a placeholder whilst a speaker decides what to say. In English, some common hesitation sounds are “err”, “um”, “huh”, etc.      |
| `[unclear]`    | **Unclear**: A word or sequence of words that cannot be understood.                                                                                                            |
| `[noise]`      | **Noise**: Any other type of noise, such as the speaker coughing or clearing their throat, a car honking, the sound of something hitting the microphone, a phone buzzing, etc. |

> And then I [noise] went on holiday.
> Well, [noise] [laugh] it wasn’t exactly a holiday [laugh]

### Word segments, false starts, repeated words {#false-starts}

Spontaneous Speech naturally contains false starts where only a fragment of a full word is produced. For these instances, please transcribe to the best of your ability the word fragment and attach a hyphen at the end of the word (-) to indicate the word is a false start. Example:

> His name is <u>Jo- Jona-</u> Jonathan.

Sometimes speakers will repeat a word or word fragment multiple times. This should be transcribed too. Example:

> And then I went to <u>the the the bed- the</u> bedroom

### Grammatical mistakes and colloquialisms {#grammar-and-colloquialisms}

Spontaneous Speech will naturally contain grammatical mistakes. These should not be corrected when transcribing. The transcription should reflect the spoken content exactly.

Speakers may use colloquialisms (such as, in English, “gonna”, “cuz”, etc.) which may not be considered formally correct. These should be transcribed as they are, and not changed to their more formal equivalents.

## Review the Transcription {#review-the-transcription}

### General guidance {#review-general}

In general, we advise that the person who checks the transcription should not be the same person who did the original transcription. It is very hard to check your own work! Having multiple lines of review can help make quality assurance more robust, and help mitigate biases and issues.

Review the transcription guidelines above in order to check that a transcription is accurate. You can provide edits and submit them.

Again, you can report content that is offensive, harmful or otherwise worrying.

- [Reporting Content](reporting.md)
