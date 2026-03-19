import type { Metadata } from 'next'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export const metadata: Metadata = {
  title: 'About',
  description: 'Senior Technology Executive — Head of IT & Digital Transformation, Banking Automation & AI Strategy, Solution Architect.',
}

export default function AboutPage() {
  return (
    <main>
      <div className="page-wrapper">
        <article className="about-page">

          <h1>Erdenezaya (Zaya) Batnasan</h1>

          <p className="about-role">
            Head of IT &amp; Digital Transformation &nbsp;·&nbsp; Banking Automation &amp; AI Strategy &nbsp;·&nbsp; Solution Architect
          </p>

          <p>
            Senior Technology Executive with <strong>17+ years of experience</strong>, progressing from software
            systems engineering and solution architecture to enterprise-scale leadership. Proven track record
            of modernising legacy banking systems into cloud-native architectures, delivering hyper-automation
            solutions, and managing multimillion-dollar technology portfolios.
          </p>
          <p>
            Expert in bridging business strategy with technical execution to design resilient digital ecosystems
            that drive operational efficiency, reduce costs, and accelerate innovation. Currently deepening
            expertise in AI/ML at <strong>UWA (Class of 2026)</strong>, combining executive experience with
            cutting-edge technical knowledge.
          </p>

          <h2>Key Highlights</h2>
          <ul>
            <li><strong>Leadership</strong> — Head of IT Automation at Khan Bank, leading teams of 25+ engineers and managing $7M+ digital budgets.</li>
            <li><strong>Impact</strong> — Hyper-automation initiatives reducing manual banking workflows by 60%, unlocking 2,000+ FTE hours annually.</li>
            <li><strong>Future-Ready</strong> — Master of IT (AI) at The University of Western Australia, combining executive experience with hands-on AI/ML engineering.</li>
          </ul>

          <h2>Core Competencies</h2>
          <ul>
            <li><strong>Strategic Leadership</strong> — Digital Transformation, Data &amp; AI Strategy, Executive Stakeholder Management, Change Management</li>
            <li><strong>Architecture &amp; Modernisation</strong> — Enterprise Architecture (TOGAF), Cloud Native, API ecosystems, Open Banking, MLOps &amp; AIOps, AI-Driven Automation</li>
            <li><strong>Governance &amp; Operations</strong> — IT Governance (COBIT, ITIL), Risk &amp; Compliance, Vendor &amp; Budget Oversight, Cross-Functional Team Leadership</li>
          </ul>

          <h2>Experience</h2>
          <ExperienceTimeline />

          <h2>Education</h2>
          <ul>
            <li><strong>Master of IT (Artificial Intelligence)</strong> · The University of Western Australia · 2026</li>
            <li><strong>Bachelor of IT (Computer Science)</strong> · The National University of Mongolia · 2008</li>
          </ul>

          <h2>Certifications</h2>
          <ul>
            <li>TOGAF 9.2 · ITIL · COBIT5</li>
            <li>Oracle Certified Administrator (OCA 12c) · Microsoft MCSA / MCP</li>
          </ul>

          <h2>Recognition</h2>
          <ul>
            <li>Speaker, <strong>WIT 2021</strong> – Women in Technology Conference, Mongolia</li>
            <li>Speaker, <strong>DevSummit 2022</strong> – Technology &amp; Digital Innovation Conference, Mongolia</li>
            <li>Featured Interview – <strong>Applied Technology Review</strong> (2023)</li>
            <li>Vice Chairman, IT Professional Council – <strong>Mongolian Bankers Association</strong> (2024)</li>
            <li>Participant, <strong>Study Australia Industry Experience Program (SAIEP)</strong> – 2025</li>
          </ul>

          <h2>Get in touch</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/erdenezayabatnasan" target="_blank" rel="noopener">LinkedIn</a></li>
            <li><a href="https://github.com/erdenezaya" target="_blank" rel="noopener">GitHub</a></li>
            <li><a href="mailto:erdenezayanmaa@gmail.com">erdenezayanmaa@gmail.com</a></li>
          </ul>

        </article>
      </div>
    </main>
  )
}
