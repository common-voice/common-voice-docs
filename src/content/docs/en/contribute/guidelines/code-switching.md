---
title: Code Switching
description: Understand how to contribute and validate on the Common Voice dataset
---

The Code Switching activities are opening soon. These guidelines already apply.

## Adding a Question {#code-switching}

### What makes a good question? {#code-switching-good-question}

A good question for public participation datasets should:

- Be easy to understand and respond to
- Be generally relevant
- Not use, or solicit, harmful or offensive language

You might also want to consider spanning different contexts and domains.

### What types of questions to add? {#code-switching-question-types}

#### Use Bilingual Prompts {#code-switching-bilingual-prompts}

Use bilingual prompts that incorporate both languages in your question: Example:

> “¿Qué te dijo tu mamá when you got home that day?”

#### Ask About Bilingual Contexts {#code-switching-bilingual-contexts}

Use situations where both languages are commonly used (e.g., home, school, community events). Example:

> “When you talk to your cousins, do you mix Spanish and English?”

#### Focus on Emotional or High-Stakes Moments {#code-switching-emotional}

People often codeswitch when expressing emotion or urgency. Example:

> “Tell me what your parents said when you told them your big news — exactly how they said it.”

#### Ask for Direct Quotes or Reenactments {#code-switching-direct-quotes}

Encourage participants to reproduce how things were actually said. Example:

> “What were your exact words when you found out?”

#### Choose Culturally Specific Topics {#code-switching-cultural-topics}

Food, traditions, holidays, and family dynamics often invite codeswitching.

> “How do you describe Día de los Muertos to someone who only speaks English?”

#### Explore Informal Scenarios {#code-switching-informal}

Conversations with friends or texting often include more natural switching. Example:

> “What’s a joke your friends always make — and how do they say it?”

### What to Avoid {#code-switching-avoid}

Questions that might:

- Solicit personally identifiable information
- Solicit hate speech or other biased or offensive sentiments
- Cause someone to share sensitive, potentially triggering responses

#### Don’t {#code-switching-dont}

- Don’t use overly formal language

## Validating a Question {#code-switching-reviewing}

Ensure the question meets the criteria:

- Be easy to understand and respond to
- Be generally relevant
- Not use, or solicit, harmful or offensive language

And **DOES NOT** include:

### Offensive content or sensitive information {#code-switching-offensive}

- Questions which might solicit personally identifiable information
- Questions which might solicit hate speech or other biased or offensive sentiments
- Questions which may cause someone to share sensitive, potentially triggering responses

## Answering a Question {#code-switching-answering}

When responding to a question, the goal is to respond naturally – just like you would in a real-life conversation. We want to capture how languages actually mix in everyday speech.

- Think of real-life moments or situations: jokes, arguments, traditions
- Imagine you’re texting a friend or telling someone a story
- Use words you would actually use, even if borrowed or mixed
- There is no “perfect” way to answer

### Answer Naturally and Authentically {#code-switching-authentic}

**Speak how you would with friends or family.** If you mix languages in real life, do the same here. Example:

> “Pues I told her I couldn’t go, but she was like, ‘You better show up!’”

**Use both languages if that’s how you would normally say it.** Even switching just a word or two is useful. Example:

> “She got really mad porque I didn’t call her back.”

**Include direct quotes or dialogue.** Say exactly what someone said, not a cleaned-up or formal version. Example:

> “Mi mamá dijo, ‘Tú crees que esto es un juego?’ and I was like, ‘Okay chill!’”

**Reflect emotion, identity, and context.** Switching usually happens when people express emotion, urgency, or cultural ideas. Lean into these when answering questions.

**Use full responses with context.** Be as detailed as possible, giving as much detail as you can. Share a story or example in your answers.

### Don’t Overthink or Overedit {#code-switching-dont-overedit}

Don’t

- **“Correct” your language.** This isn’t a test. “Proper” form doesn’t matter here, natural language does.
- **Avoid switching if you normally do it.** It’s fine to switch mid-sentence, mid-thought, or just for one word.
- **Speak like you’re writing formally.** Avoid formal, academic answers. Keep it conversational.
- **Force switching if it’s not natural.** Only switch if that’s how you would naturally talk in that situation.
- **Translate or repeat everything.** Just say it once, the way it would come in a conversation. You don’t have to say a version of the response in each language.

## Transcribing {#code-switching-transcribing}

When transcribing responses that include codeswitching, represent the speaker’s language as it was spoken – without correcting, editing, or simplifying. This is for all switches between languages, informal speech, and mixed-language words.

- Play short segments multiple times to catch subtle switches
- Pause after every sentence to double-check for switches or mixed words

### Capture Speech Exactly as Spoken {#code-switching-capture}

Transcribe both languages as they appear / sound. Don’t “fix” the language or change it to only one language.

### Include filler words and markers {#code-switching-fillers}

Words like “um,” “like,” “pues,” “you know,” and “entonces” are meaningful. Example: “So, um, I told her like, ‘pues no sé, maybe later.’”

### Use standard spelling for each language {#code-switching-spelling}

Try to spell words correctly for each language, unless the speaker clearly pronounces them in a nonstandard way.

### Don’t Clean Up or Simplify the Language {#code-switching-no-cleanup}

Don’t

- Translate or paraphrase – write what the speaker said, not what they “meant.”
- “Correct” grammar or pronunciation – keep the speaker’s natural use.
- Skip switches that seem minor or small – even borrowed words matter.
- Insert punctuation that could change the meaning – keep the flow natural.
- Assume you know the language of every word – tag based on usage.

## Tagging {#code-switching-tagging}

If the transcription contains an error, don't correct it while tagging: send it back to review. Potential errors include:

- Incorrect punctuation or capitalization
- Typos
- Words written in the wrong orthography

### Using Correct Orthography for Each Language {#code-switching-orthography}

Write each word according to the spelling of the language it’s from. For example:

- If the word “kitchen” appears pronounced as in Spanish, it should be written as in English, not as “quichen.”
- If the word quinceaños is pronounced as in English, write it with the ñ.

### Use Pronunciation to Help Determine the Language {#code-switching-pronunciation}

Some words might look the same in both languages but could be pronounced differently. Listen to the pronunciation to help tag correctly. For example: cable, taco, actor, detective.

- English: /ˈkeɪ.bəl/
- Spanish: /ˈkable/

### Tagging in a Single Token {#code-switching-single-token}

A single space-separated token should **not** contain more than one tagged span.

### Tag Punctuation Based on Nearby Language {#code-switching-punctuation}

Tag punctuation using the language closest span to the left. Examples:

![Tag punctuation based on nearby language](../../../images/en/code-switching-punctuation-tagging.png)

- and the one time that Maria screamed at me was porque she was trying to to printear un order. (BangorTalk)
- but tú los puedes comprar rojo, negro, azul, whatever. (BangorTalk)

### Be Careful with Lookalikes {#code-switching-lookalikes}

Some words may look like one language but are used in the other. Tag based on meaning and usage, not appearance. Examples:

- “Footing” used to mean running in Spanish > tag as Spanish
- “No problemo” used in English > tag as English

### When Not to Tag Words {#code-switching-not-tag}

Some words should **not be tagged** with a language label, even if they seem mixed or adapted. Here’s how to handle some examples:

**Proper Names.** Names of people, places, and organisations should not be tagged. Examples:

- People: Maria, John
- Places: Los Angeles, Florida
- Brands/Organisations: Target, Burger King

**Mixed or Morphologically-Adapted Words.** Do not tag words that blend languages or have added endings from another language. Examples:

- Where a root is English but the suffix is Spanish: “parkear”, “printearlo”

**Interjections.** Interjections and filler words, regardless of language, should remain **untagged.** Examples:

- "Eh”
- “No”
- “Yeah”
- “Er”

- [Reporting Content](reporting.md)
