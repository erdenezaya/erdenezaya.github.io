'use client'
import { useState } from 'react'

const groups = [
  {
    category: 'Strategic Leadership',
    color: 'teal',
    skills: ['Digital Transformation', 'Data & AI Strategy', 'Executive Stakeholder Management', 'Change Management', 'Strategic Vision', 'Innovation Alignment'],
  },
  {
    category: 'Architecture & Modernisation',
    color: 'blue',
    skills: ['Enterprise Architecture (TOGAF)', 'Cloud Native', 'API Ecosystems', 'Open Banking', 'MLOps & AIOps', 'AI-Driven Automation', 'Microservices', 'DevOps & CI/CD'],
  },
  {
    category: 'Governance & Operations',
    color: 'purple',
    skills: ['IT Governance (COBIT)', 'ITIL', 'Risk & Compliance', 'Vendor Management', 'Budget Oversight', 'Cross-Functional Leadership', 'SLA Management'],
  },
  {
    category: 'Technology Stack',
    color: 'orange',
    skills: ['Cloud Platforms (AWS / Azure)', 'Kubernetes & Docker', 'ServiceNow (ITSM)', 'RPA Tools', 'Python / AI/ML', 'Oracle DB', 'Finacle OCH', 'REST / OpenAPI'],
  },
]

const colorMap: Record<string, string> = {
  teal:   'skill-teal',
  blue:   'skill-blue',
  purple: 'skill-purple',
  orange: 'skill-orange',
}

export default function AboutSkills() {
  const [active, setActive] = useState<string | null>(null)

  const displayed = active
    ? groups.filter(g => g.category === active)
    : groups

  return (
    <div className="about-skills">
      {/* Filter tabs */}
      <div className="skill-tabs">
        <button
          className={`skill-tab${active === null ? ' skill-tab--on' : ''}`}
          onClick={() => setActive(null)}
        >All</button>
        {groups.map(g => (
          <button
            key={g.category}
            className={`skill-tab skill-tab--${g.color}${active === g.category ? ' skill-tab--on' : ''}`}
            onClick={() => setActive(active === g.category ? null : g.category)}
          >{g.category}</button>
        ))}
      </div>

      {/* Skill groups */}
      {displayed.map(g => (
        <div key={g.category} className="skill-group">
          <h3 className={`skill-group-title skill-group-title--${g.color}`}>{g.category}</h3>
          <div className="skill-pills">
            {g.skills.map(s => (
              <span key={s} className={`skill-pill ${colorMap[g.color]}`}>{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
