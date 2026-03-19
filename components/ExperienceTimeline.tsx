'use client'
import { useState } from 'react'

const jobs = [
  {
    title: 'Head – IT End-User Services',
    company: 'Khan Bank JSC',
    period: '2023 – Present',
    tag: 'Current',
    points: [
      'Led enterprise-wide IT service delivery for 6,000+ employees across distributed banking operations.',
      'Reduced manual IT interventions by 50% through strategic automation workflows and self-service enablement.',
      'Improved incident resolution time by 40% with AI-enhanced ServiceNow (ITSM) and SLA-driven escalation.',
      'Lowered operational costs by 30% by deploying self-service automation and optimising IT staffing models.',
      'Managed IT service operations budget and vendor relationships across multiple delivery partners.',
    ],
  },
  {
    title: 'Head – IT Automation & Engineering',
    company: 'Khan Bank LLC',
    period: '2022 – 2023',
    points: [
      'Architected and executed enterprise-wide automation and digital transformation roadmap.',
      'Spearheaded hyper-automation reducing human intervention by 60% across banking workflows, unlocking 2,000+ FTE hours annually.',
      'Reduced infrastructure provisioning time by 70% through cloud-native architecture.',
      'Led $7M digital transformation portfolio across multiple concurrent modernisation initiatives.',
      'Established cross-functional governance between Business, IT, and Operations.',
    ],
  },
  {
    title: 'Manager – IT Automation & Engineering',
    company: 'Khan Bank LLC',
    period: '2021 – 2022',
    points: [
      'Built and mentored team of 25+ software engineers and architects, fostering agile culture.',
      'Streamlined release management using CI/CD pipelines and DevOps practices, cutting delivery time by 50%.',
      'Championed core platform modernisation, retiring legacy systems and implementing microservices.',
      'Established architectural principles ensuring open API standards, scalability, security, and maintainability.',
    ],
  },
  {
    title: 'Senior Solution Architect',
    company: 'Khan Bank LLC',
    period: '2020 – 2021',
    points: [
      'Designed API-first banking architecture enabling open banking partnerships and third-party integrations.',
      'Managed enterprise-wide cloud migration from on-premise to hybrid cloud, improving resilience and cost efficiency.',
      'Established enterprise data governance framework aligning data architecture with business capabilities.',
    ],
  },
  {
    title: 'Solution Architect',
    company: 'Khan Bank LLC',
    period: '2018 – 2020',
    points: [
      'Designed cloud-native banking architectures using microservices, containerisation, and DevOps practices.',
      'Implemented Finacle OCH platform enabling omni-channel banking and third-party integrations.',
      'Introduced API patterns and digital banking blueprints for future-state banking platform.',
    ],
  },
  {
    title: 'Developer & System Engineer',
    company: 'Startups & Khan Bank LLC',
    period: '2007 – 2018',
    points: [
      '11 years across IT infrastructure, production systems, and software development.',
      'Built foundational engineering skills across banking and startup environments.',
      'Progressed from junior developer to system engineer roles across multiple teams.',
    ],
  },
]

export default function ExperienceTimeline() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="timeline">
      {jobs.map((job, i) => {
        const isOpen = open === i
        return (
          <div key={i} className={`tl-item${isOpen ? ' tl-item--open' : ''}`}>
            {/* spine line */}
            <div className="tl-spine">
              <div className="tl-dot" />
              {i < jobs.length - 1 && <div className="tl-line" />}
            </div>

            {/* content */}
            <div className="tl-body">
              <button
                className="tl-header"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <div className="tl-meta">
                  <span className="tl-period">{job.period}</span>
                  {job.tag && <span className="tl-tag">{job.tag}</span>}
                </div>
                <div className="tl-title">{job.title}</div>
                <div className="tl-company">{job.company}</div>
                <span className="tl-chevron">{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <ul className="tl-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
