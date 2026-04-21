# Editorial Guidelines

Guidelines for writing and maintaining content on this blog.

## Voice & Tone

**Conversational but technical.** Write like you're explaining something to a smart friend — not dumbing it down, but also not hiding behind jargon. First-person is fine. Contractions are fine.

**Direct.** Say what you mean. Cut filler words. If a sentence works without "basically", "essentially", or "in order to", remove them.

**Honest about uncertainty.** If something is an opinion, frame it that way. If you don't know something, say so. Readers trust writers who acknowledge limitations.

## Content Types

### Technical posts
- Focus on the *why* and *how*, not just the *what*
- Include real examples from your own experience
- Share what didn't work, not just what did
- Add read time estimates for posts over 3 minutes
- Link to repos, tools, or resources where relevant

### Personal reflections
- Keep them grounded in specific observations
- Avoid generic advice — write from your own experience
- It's okay to be brief

### Project walkthroughs
- Lead with the problem you were solving
- Explain key decisions and trade-offs
- Include "what I'd do differently" sections
- Link to live demos or source code

## Structure

**Headlines:** Use sentence case. Keep them descriptive but concise.

**Sections:** Break up longer posts with headers. Readers should be able to skim and find what they need.

**Bullet points:** Good for lists of 3+ items. Don't overuse — prose often flows better.

**Code snippets:** Include when they clarify. Keep them short and commented where helpful.

## Formatting

### Front matter
Every post needs:
```yaml
---
layout: post
title: "Your Title Here"
date: YYYY-MM-DD
categories: [category1, category2]
description: "Optional one-line description for SEO/social"
---
```

### Categories
Use these consistently:
- `ai` — AI tools, LLMs, machine learning
- `projects` — Walkthroughs of things you've built
- `tech` — Software development, tools, opinions
- `personal` — Reflections, updates, non-technical posts

### Links
- Internal links: Use relative paths (`/about/`)
- External links: Include `target="_blank" rel="noopener"` for external sites
- Always link to sources when referencing others' work

## Quality Checklist

Before publishing, verify:

- [ ] Title is clear and accurate
- [ ] Opening paragraph hooks the reader
- [ ] No placeholder text or TODOs left in
- [ ] Links work
- [ ] Code snippets are tested
- [ ] Read time estimate added (if >3 min)
- [ ] At least one category assigned
- [ ] Proofread once out loud

## What Not to Write

- Posts that exist only to have posted something
- Hot takes without substance
- Content that requires constant updating (unless you'll maintain it)
- Anything you'd be embarrassed to re-read in a year

## Publishing Cadence

No schedule. Write when you have something worth saying. A few good posts are better than many mediocre ones.

---

*These guidelines are for internal reference. They're meant to be helpful, not restrictive.*
