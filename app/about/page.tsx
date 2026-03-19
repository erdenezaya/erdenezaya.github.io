import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Software engineer based in Australia, focused on AI systems, LLMs, and agents.',
}

export default function AboutPage() {
  return (
    <main>
      <div className="page-wrapper">
        <article className="about-page">
          <h1>About</h1>

          <p>
            Hey, I&apos;m <strong>Erdenezaya</strong> — a software engineer based in Australia, focused on AI systems,
            LLMs, and the tools we use to build with them. I&apos;m particularly drawn to the gap between what AI demos
            promise and what production systems require.
          </p>

          <h2>What I work on</h2>
          <ul>
            <li><strong>AI &amp; LLMs</strong> — agents, structured outputs, evaluation, practical applications</li>
            <li><strong>Software engineering</strong> — building products and infrastructure</li>
            <li><strong>Knowledge systems</strong> — maps, graphs, ways of organising information</li>
          </ul>

          <h2>Projects</h2>
          <p>
            The <a href="https://erdenezaya.github.io/ai-ml-knowledge-graph/" target="_blank" rel="noopener">
            AI/ML Knowledge Graph</a> is an interactive graph mapping concepts, tools, and relationships
            across the AI landscape. Built to answer &quot;how does X relate to Y?&quot; faster than any search.
          </p>

          <h2>This site</h2>
          <p>
            I write about things I&apos;m learning, building, and finding interesting. No schedule — I post
            when I have something worth saying.
          </p>

          <h2>Get in touch</h2>
          <ul>
            <li><a href="https://github.com/erdenezaya" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="https://twitter.com/erdenezaya" target="_blank" rel="noopener">Twitter / X</a></li>
            <li><a href="https://linkedin.com/in/erdenezaya" target="_blank" rel="noopener">LinkedIn</a></li>
          </ul>
        </article>
      </div>
    </main>
  )
}
