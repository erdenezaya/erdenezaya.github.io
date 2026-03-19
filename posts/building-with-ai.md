---
title: "What I've Learned Building with AI Tools"
date: 2026-03-17
categories: [ai, tech]
description: "Six months of building with LLMs, agents, and automation pipelines. What actually stuck, what I got wrong, and the rough edges no one warns you about."
---

*6 min read*

I've spent the past six months building things with AI — LLMs, agents, automation pipelines. Here's what's actually stuck.

## The hype is real, but so are the rough edges

AI tools have genuinely changed how I work. Tasks that used to take hours — drafting, researching, debugging — now take minutes. But the gap between "impressive demo" and "reliable production tool" is still wide.

The failure mode I keep running into isn't the model producing obviously wrong output. It's the model producing *plausible* wrong output — confidently, without hedging. A bad result you can see coming is easy to catch. A bad result that looks right until you check it carefully is the one that ships.

## Prompting is an actual skill

The difference between a vague prompt and a precise one isn't subtle — it's the difference between something useful and something you have to throw out. Writing good prompts is closer to writing good software specifications than it is to magic.

I wrote a longer post on this: [The Prompt Is the Spec](/blog/prompting-as-spec-writing). The short version: define the output format exactly, handle edge cases explicitly, and include at least one example. The improvement in output quality from those three changes alone is dramatic.

## Agents are powerful and fragile

Multi-step AI agents feel like the future right up until they confidently do the wrong thing at step 4 of 7.

I [wrote about this in detail](/blog/when-my-agent-failed), but the core lesson: errors in agentic pipelines don't stay local. A wrong assumption at step 2 propagates silently through every subsequent step. By the time something visibly goes wrong, you might be several irreversible actions in.

The patterns that have worked for me:

- **Irreversibility gates** — any action that can't be undone requires explicit confirmation, no matter how confident the agent is
- **Dry-run mode by default** — log what the agent would do before it does it; opt into execution deliberately
- **Checkpoint summaries** — between major phases, surface a plain-English summary of what's about to happen

The mental model shift that helped most: think of agents as junior engineers who pattern-match brilliantly but don't know when they're out of their depth. You structure work accordingly.

## Structured outputs eliminate a whole class of bugs

For the first few months I was writing cleanup code to parse model outputs — stripping markdown fences, handling trailing commas, catching cases where the model explained itself after the JSON block. I wrote a small library of these utilities. They were a mistake.

Switching to structured outputs (passing a JSON schema and getting guaranteed-conformant responses back) let me delete all of that. The schema is the contract; the model honours it. I wrote more about this [here](/blog/structured-outputs).

## The best use cases are boring

The flashiest AI demos aren't where I get the most value. The best uses are mundane: summarising long documents, drafting first versions of things I'll rewrite anyway, writing boilerplate, explaining unfamiliar code. High volume, low stakes, easy to verify.

The cases where I've got the most leverage are the ones where I'd previously do a task manually, accept that it would be imperfect, and move on. AI doesn't need to be magic to be useful there — it just needs to be faster than me and good enough.

## What I'm thinking about next

Two areas I'm spending time on: **evaluation** (how do you know when a pipeline running without human review has silently drifted?) and **memory and context** (most interesting agent failures come down to the model not knowing something it needs, or "knowing" something incorrectly from earlier in context).

Neither is a solved problem, but both feel tractable.

---

Still learning. The field moves fast enough that half of what I knew a year ago is outdated. The goal is to understand the underlying patterns well enough that the specific tool knowledge stays useful even as the tools change.
