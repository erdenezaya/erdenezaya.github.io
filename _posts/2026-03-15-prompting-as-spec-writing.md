---
layout: post
title: "The Prompt Is the Spec"
date: 2026-03-15
categories: [ai, craft]
description: "Why writing good prompts is closer to writing good software requirements than it is to asking questions — and how to use that framing."
---

*4 min read*

The framing that's helped me most with prompt engineering isn't about "magic words" or the latest prompting technique. It's this: **a prompt is a specification**.

When a software spec is bad, the engineer builds the wrong thing — not because they failed, but because the spec didn't define success clearly enough. The same is true for a prompt. When a prompt is bad, the model produces something wrong — not because the model failed, but because the prompt didn't define what "right" looked like.

Once I started treating prompts like specs, my outputs improved more than they did from any amount of prompt-specific techniques.

## What a bad spec looks like

Here's a real prompt I wrote early on, trying to extract action items from a meeting transcript:

> *Summarise this meeting and list the action items.*

The model returned a five-paragraph summary followed by a bulleted list. Fine. But the summary was longer than I needed, the action items weren't attributed to anyone, there were no due dates even though the transcript mentioned them, and the format wasn't suitable for pasting into our project tracker.

Every one of those failures was a spec failure. I didn't say how long the summary should be, or that action items needed owners, or that dates were mentioned in the source, or what the output format should be.

## The same prompt, written as a spec

> *You are processing a meeting transcript to produce a structured output for a project tracker.*
>
> *Output format — return only this, no other text:*
>
> *SUMMARY (2–3 sentences maximum): [summary]*
>
> *ACTION ITEMS:*
> *- [ ] [action] — Owner: [name from transcript, or "unassigned"] — Due: [date if mentioned, or "no date"]*
>
> *Rules:*
> *- Extract only explicit commitments, not discussion points*
> *- If a name is ambiguous, use the name as it appears in the transcript*
> *- If no action items exist, write "No action items identified"*
>
> *Transcript:*
> *[transcript]*

Same task, completely different output quality. Not because I used special prompting words — because I specified the format, the edge cases, and what failure looks like.

## The five elements of a good prompt-spec

Drawing the parallel directly to software requirements:

**1. Context (the "why").**
What is this output for? Who uses it? What system will it feed into? A model that knows it's generating input for a project tracker behaves differently than one that thinks it's writing a general summary. *"You are processing a transcript for a project tracker"* does real work.

**2. Output format (the interface contract).**
Define the exact structure you expect. If you want JSON, show the schema. If you want plain text, show the template. Ambiguity in format is the leading cause of outputs you can't use programmatically.

**3. Edge cases (the unhappy paths).**
What should happen when the input is missing something? When there's ambiguity? When the task is impossible given the data? Specs that don't address edge cases produce unpredictable behaviour at the edges — and real inputs are almost always edge cases.

**4. Constraints (the "must nots").**
Be explicit about what the output should not contain. No preamble, no explanation, no "here's your summary:", no caveats unless specifically asked for. Constraints eliminate the padding that makes outputs hard to use downstream.

**5. Examples (the acceptance criteria).**
One good example is worth three paragraphs of description. Show the model a representative input and the exact output you want. If you're asking for something nuanced, show a counterexample too — an input that might superficially look like a positive case but should be handled differently.

## The test

The easiest way to know if your prompt is good: could you hand it to a capable human and get the output you want, without any additional explanation? If you'd need to clarify something verbally, that clarification belongs in the prompt.

---

The "prompting is magic" framing is appealing because it suggests hidden tricks. The boring truth is that prompt quality correlates strongly with how clearly you can define what you want — which is exactly the skill that makes someone good at writing requirements, test cases, or API documentation. If you're already good at any of those, you're closer to a good prompt engineer than you think.
