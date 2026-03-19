---
layout: post
title: "When My Agent Confidently Did the Wrong Thing"
date: 2026-03-12
categories: [ai, agents]
description: "A post-mortem on an AI agent that went sideways at step 4 of 7, and the design patterns I've adopted since."
---

*4 min read*

Last year I built a file organisation agent. The task seemed simple: given a directory of project files, read their contents, infer their purpose, and reorganise them into a logical folder structure. Seven steps, fully automated, no human in the loop. I ran it on a test directory, it worked beautifully, and I felt confident.

Then I ran it on my actual project directory.

## What happened at step 4

The agent's steps were:

1. List all files in the target directory
2. Read each file and infer its type and purpose
3. Propose a new folder structure
4. Create the new directories
5. Move files to their new locations
6. Verify the moves completed
7. Delete the now-empty original directories

Step 4 is where it went wrong. The agent created the new directory structure correctly. But when it reached step 5 — moving files — it encountered a set of files it hadn't expected: build artifacts that shared names with source files, living in the same flat directory. It had to make a decision about which to move where, and it made that decision confidently and incorrectly.

By step 7, it had deleted three directories that still had files in them. Not the artifacts. The source files.

Git saved me. But I'd gotten lucky.

## Why it felt fine until it wasn't

The failure wasn't random. Each individual step looked correct in isolation. The agent's reasoning at every stage was coherent — I could read the logs and follow the logic. The problem was that an assumption made early (that filenames would be unique) propagated silently through every subsequent step, and nothing in the pipeline was designed to catch it.

This is the core danger with multi-step agents: **errors don't stay local**. A wrong assumption at step 2 becomes a wrong directory structure at step 3, wrong moves at step 5, and data loss at step 7. The agent has no way to know that its confident execution of step 7 is built on a flawed foundation four steps back.

## What I changed

**Irreversibility gates.** Any action that can't be undone — deleting files, sending emails, making API calls with side effects — now requires explicit human confirmation, regardless of how confident the agent is. This is annoying. It's also non-negotiable.

**Dry-run mode by default.** Every agent I build now has a `dry_run=True` default that logs what it *would* do without actually doing it. You have to actively opt into execution. I've caught at least a dozen would-be failures this way.

**Checkpoints with summaries.** Between major phases of a pipeline, the agent now surfaces a plain-English summary: "I've analysed 47 files. I'm about to create 8 new directories and move 43 files. The following 4 files are ambiguous and I'm not sure where to put them. Proceed?" That summary exists as much for me as for the agent — it forces an articulation that often reveals problems before they happen.

**Scope constraints.** The reorganisation agent now refuses to operate on directories above a certain size without an explicit `--large-directory` flag. If the scope feels unexpectedly large, stop and ask.

## The mental model shift

I used to think of agents as automated versions of tasks I'd do manually. Now I think of them as junior engineers who are excellent at pattern-matching and terrible at noticing when they're out of their depth. You wouldn't give a junior engineer access to production on day one without oversight. The same logic applies.

The goal isn't to make agents that never make mistakes. It's to make agents where mistakes are small, visible, and reversible before you've committed to them.

---

The agent now works well, and I use it regularly. The same logic that reorganised my project files has since been applied to other tasks. The difference is that I trust it now because I understand exactly when and how it can fail.
