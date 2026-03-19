---
layout: post
title: "TIL: Structured Outputs Made My Pipelines Boring (In a Good Way)"
date: 2026-03-10
categories: [ai, til]
description: "How switching from prompt-and-parse to structured JSON outputs eliminated an entire class of bugs from my AI pipelines."
---

*3 min read*

For the first six months of building AI pipelines, I spent a surprising amount of time on one specific problem: getting the model to return data in a format my code could actually use.

The typical flow looked like this: write a prompt, ask for JSON, get back something almost-JSON with a markdown code fence around it, strip the fence, try to parse it, hit an edge case where the model added a trailing comma, handle that, deploy, hit a different edge case where the model explained itself *after* the JSON block, handle that, repeat.

I wrote a small library of cleanup functions. I was proud of them. They were a mistake.

## What changed

When the major model providers added native structured outputs — where you pass a JSON schema and the model's output is *guaranteed* to match it — I migrated everything over in a week and deleted about 400 lines of cleanup code.

The API call looks roughly like this (using the Anthropic SDK as an example):

```python
response = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": prompt}],
    tools=[{
        "name": "extract_entities",
        "description": "Extract named entities from text",
        "input_schema": {
            "type": "object",
            "properties": {
                "entities": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string"},
                            "type": {"type": "string", "enum": ["person", "org", "place", "concept"]},
                            "confidence": {"type": "number"}
                        },
                        "required": ["name", "type", "confidence"]
                    }
                }
            },
            "required": ["entities"]
        }
    }],
    tool_choice={"type": "tool", "name": "extract_entities"}
)
```

The response is structured data. No parsing, no cleanup, no edge cases. The schema is the contract.

## The less obvious benefit

I expected fewer bugs. What I didn't expect was that defining the schema *first* would make me write better prompts.

When you're forced to specify exactly what fields you want, what types they should be, and what the valid values are, you have to think clearly about what you're actually asking for. That process — schema-first design — surfaces ambiguities in your task definition before they become runtime failures.

"Confidence" in my entity extraction example: is that model confidence or my application's confidence threshold? What's the range — 0 to 1, or 0 to 100? Answering those questions in the schema meant I'd already answered them in my head, which made the prompt itself more precise.

## The trade-off

Structured outputs aren't free. Constraining the output format does reduce the model's expressive range slightly — for tasks where you want the model to "think out loud" before giving an answer, forcing it immediately into a rigid structure can hurt quality.

The pattern I use now: for reasoning-heavy tasks, let the model respond freely first, then use a second structured call to extract the structured output from the reasoning. Two calls, but better results than one constrained call.

---

If you're still hand-parsing model outputs in 2026, stop. Structured outputs are stable, well-supported across the major providers, and will save you more debugging time than almost any other change you can make.
