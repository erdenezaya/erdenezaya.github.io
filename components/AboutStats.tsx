'use client'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 17,   suffix: '+', label: 'Years of Experience',       sub: 'From developer to enterprise leader' },
  { value: 7,    suffix: 'M+', label: 'Digital Budget Managed',   sub: 'USD · Khan Bank transformation portfolio', prefix: '$' },
  { value: 60,   suffix: '%', label: 'Workflow Automation',       sub: 'Manual banking processes eliminated' },
  { value: 2000, suffix: '+', label: 'FTE Hours Unlocked / yr',   sub: 'Through hyper-automation initiatives' },
  { value: 6000, suffix: '+', label: 'Employees Served',          sub: 'Enterprise-wide IT service delivery' },
  { value: 25,   suffix: '+', label: 'Engineers Mentored',        sub: 'Built high-performing agile teams' },
]

function Counter({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1200
        const steps = 50
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current = Math.min(current + increment, target)
          setCount(Math.floor(current))
          if (current >= target) clearInterval(timer)
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function AboutStats() {
  return (
    <div className="about-stats">
      {stats.map((s, i) => (
        <div key={i} className="stat-card">
          <div className="stat-value">
            <Counter target={s.value} prefix={s.prefix} suffix={s.suffix} />
          </div>
          <div className="stat-label">{s.label}</div>
          <div className="stat-sub">{s.sub}</div>
        </div>
      ))}
    </div>
  )
}
