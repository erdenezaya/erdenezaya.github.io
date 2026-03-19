---
layout: post
title: "How I Built the AI/ML Knowledge Graph"
date: 2026-02-28
categories: [ai, projects]
description: "A walkthrough of the design decisions behind my interactive AI/ML knowledge graph — the taxonomy problem, tech choices, and what I'd do differently."
---

*5 min read*

A few months ago I kept running into the same frustration: I'd read about a new AI technique or tool, understand it in isolation, and then immediately lose track of how it fit into everything else I knew. What's the difference between RAG and fine-tuning, really? Where does RLHF sit relative to PPO? How does a vector store relate to an embedding model?

Search doesn't help with this. Neither does a list of links. What I wanted was a map — something I could navigate spatially, following relationships instead of clicking through pages. So I built one.

## The core idea

The [AI/ML Knowledge Graph](https://erdenezaya.github.io/ai-ml-knowledge-graph/) is an interactive graph where nodes are concepts, tools, techniques, and frameworks, and edges represent relationships between them: *uses*, *is a type of*, *enables*, *competes with*, *was superseded by*.

The goal isn't completeness. It's orientation. If you're new to transformers and you click on "attention mechanism", you should be able to immediately see that it's a component of transformer architecture, that it solved the vanishing gradient problem that plagued RNNs, and that it's the foundation for models like BERT and GPT. That chain of context is what makes something actually stick.

## The hardest part: taxonomy

I thought the hard part would be the visualisation. It wasn't — D3.js handles force-directed graphs well, and the rendering came together quickly. The hard part was deciding what the nodes and edges *should be*.

Every taxonomy decision is a commitment. Is "LLM" a node, or is it a category that contains nodes like GPT-4, Claude, and Llama? Are "embeddings" one node or several (word embeddings, sentence embeddings, multimodal embeddings)? Is the relationship between "fine-tuning" and "LoRA" *is implemented by* or *is a technique for*?

I went through three full restructures before settling on the current version. The rules I landed on:

- **Nodes are things you could Google.** If searching for it would return a coherent set of results, it gets its own node.
- **Relationships are directional and typed.** "A uses B" is different from "A is a type of B". Both matter.
- **Depth over breadth.** Better to have 80 well-connected nodes than 300 orphaned ones.

## Tech choices

- **D3.js** for the force simulation and rendering. Verbose API, but nothing else gives you this level of control over graph physics.
- **Plain JSON** for the data. I considered a proper graph database (Neo4j, etc.) but the overhead wasn't worth it for a static site. The whole graph is a `nodes.json` and `edges.json` file.
- **GitHub Pages** for hosting. Zero infrastructure, automatic deploys on push.

## What I'd do differently

**Search.** The current version has no search — you have to visually scan for what you're looking for, which breaks down once the graph gets large. A fuzzy-search input that highlights matching nodes is the obvious next feature.

**Versioning the taxonomy.** As the field moves fast, nodes become outdated or need restructuring. I have no good way to track that right now beyond git history.

**Collaborative editing.** The most valuable knowledge graph would be one that other people can contribute to. I haven't solved the moderation problem that introduces, so it remains a solo project for now.

---

The graph is live at [erdenezaya.github.io/ai-ml-knowledge-graph](https://erdenezaya.github.io/ai-ml-knowledge-graph/). If there's a concept you think is missing or a relationship that's wrong, open an issue on the repo.
