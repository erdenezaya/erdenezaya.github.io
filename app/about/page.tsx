'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

.about-design-page {
  --bg: #0e1113;
  --bg-elev: #15181b;
  --bg-card: #1a1e22;
  --rule: #2a2f34;
  --rule-soft: #1f2327;
  --ink: #e8e4d9;
  --ink-dim: #9a978f;
  --ink-faint: #5f5d58;
  --gold: oklch(78% 0.11 85);
  --gold-dim: oklch(58% 0.08 85);
  --teal: oklch(72% 0.07 195);
  --teal-dim: oklch(48% 0.05 195);
  --serif: "Cormorant Garamond", "GT Sectra", Georgia, serif;
  --sans: "Inter Tight", -apple-system, system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;

  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  position: relative;
}

.about-design-page::before {
  content: "";
  position: fixed; inset: 0;
  background:
    radial-gradient(ellipse at 50% -10%, rgba(255, 220, 160, 0.04), transparent 60%),
    radial-gradient(ellipse at 50% 110%, rgba(100, 180, 180, 0.03), transparent 60%);
  pointer-events: none; z-index: 0;
}

.about-design-page .page {
  position: relative; z-index: 1;
  max-width: 960px; margin: 0 auto;
  padding: 32px 48px 160px;
}

.about-site-nav {
  display: flex; align-items: center; justify-content: space-between;
  padding-bottom: 20px; border-bottom: 1px solid var(--rule);
  margin-bottom: 52px;
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase;
}
.about-site-nav .home-link {
  color: var(--gold); text-decoration: none;
  display: flex; align-items: center; gap: 10px; transition: opacity 200ms;
}
.about-site-nav .home-link:hover { opacity: 0.7; }
.about-site-nav .home-link::before { content: ""; width: 16px; height: 1px; background: var(--gold); }
.about-site-nav .nav-links { display: flex; gap: 24px; }
.about-site-nav .nav-link { color: var(--ink-faint); text-decoration: none; transition: color 200ms; }
.about-site-nav .nav-link:hover { color: var(--ink); }
.about-site-nav .nav-link.active { color: var(--teal); }

.about-design-page .masthead {
  display: grid; grid-template-columns: 1fr auto;
  align-items: end; padding-bottom: 28px;
  border-bottom: 1px solid var(--rule); margin-bottom: 56px;
}
.about-design-page .eyebrow {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 18px;
}
.about-design-page .eyebrow::before {
  content: ""; display: inline-block; width: 18px; height: 1px;
  background: var(--gold); vertical-align: middle;
  margin-right: 10px; transform: translateY(-2px);
}
.about-design-page h1 {
  font-family: var(--serif); font-weight: 500;
  font-size: clamp(40px, 5.6vw, 64px);
  line-height: 1.02; letter-spacing: -0.015em; color: var(--ink);
}
.about-design-page h1 em { font-style: italic; color: var(--gold); font-weight: 400; }
.about-design-page .masthead-meta {
  font-family: var(--mono); font-size: 11px;
  color: var(--ink-dim); text-align: right;
  letter-spacing: 0.05em; line-height: 1.8;
}
.about-design-page .masthead-meta .val {
  color: var(--ink); display: block; font-size: 13px; margin-top: 2px;
}

/* Bio section */
.about-bio {
  margin-bottom: 64px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
}
.about-bio-text p {
  font-size: 14px; line-height: 1.8; color: var(--ink-dim);
  margin-bottom: 14px; font-weight: 300;
}
.about-bio-text p strong { color: var(--ink); font-weight: 500; }

.about-meta-grid {
  display: flex; flex-direction: column; gap: 1px;
  background: var(--rule); border: 1px solid var(--rule); align-self: start;
}
.about-meta-row {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.08em; text-transform: uppercase;
  padding: 11px 14px; background: var(--bg-elev);
  display: flex; justify-content: space-between; align-items: baseline; gap: 12px;
}
.about-meta-row .k { color: var(--ink-faint); font-size: 9px; flex-shrink: 0; }
.about-meta-row .v { color: var(--teal); font-weight: 500; font-size: 11px; text-align: right; text-transform: none; }
.about-meta-row .v a { color: inherit; text-decoration: none; }
.about-meta-row .v a:hover { color: var(--ink); }

/* Section headers */
.about-section-label {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 28px;
  display: flex; align-items: center; gap: 14px;
}
.about-section-label::before { content: ""; width: 18px; height: 1px; background: var(--gold); }
.about-section-label::after { content: ""; flex: 1; height: 1px; background: var(--rule); }

/* Extras grid (edu, certs, recognition) */
.about-extras {
  margin-top: 80px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 48px;
}
.about-extra-block { }
.about-extra-block h3 {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 18px;
  padding-bottom: 10px; border-bottom: 1px solid var(--rule);
}
.about-extra-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.about-extra-list li {
  display: grid; grid-template-columns: 12px 1fr; gap: 12px;
  align-items: baseline; font-size: 13px; line-height: 1.5; color: var(--ink-dim);
}
.about-extra-list li::before {
  content: ""; width: 5px; height: 1px;
  background: var(--gold-dim); margin-top: 8px; justify-self: center;
}
.about-extra-list li strong { color: var(--ink); font-weight: 500; font-size: 13px; }
.about-extra-list li a { color: var(--teal); text-decoration: none; }
.about-extra-list li a:hover { color: var(--ink); }

/* Timeline (same as /timeline page, scoped here) */
.about-design-page .timeline {
  position: relative; padding-left: 128px;
}
.about-design-page .timeline::before {
  content: ""; position: absolute;
  left: 118px; top: 8px; bottom: 20px; width: 1px;
  background: linear-gradient(to bottom, transparent 0, var(--rule) 20px, var(--rule) calc(100% - 40px), transparent 100%);
}

.about-design-page .role {
  position: relative; padding: 0 0 44px 40px;
  opacity: 0; transform: translateY(14px);
  transition: opacity 720ms cubic-bezier(0.22, 1, 0.36, 1), transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
}
.about-design-page .role.in { opacity: 1; transform: none; }
.about-design-page .role:last-child { padding-bottom: 0; }

.about-design-page .role .year {
  position: absolute; left: -128px; top: 4px; width: 108px;
  font-family: var(--mono); font-size: 11px;
  letter-spacing: 0.06em; color: var(--ink-faint);
  text-align: right; line-height: 1.5;
}
.about-design-page .role .year .primary {
  display: block; font-size: 13px; color: var(--ink-dim); font-weight: 500; letter-spacing: 0.04em;
}
.about-design-page .role.current .year .primary,
.about-design-page .role.open .year .primary { color: var(--gold); }

.about-design-page .role .node {
  position: absolute; left: -18px; top: 8px;
  width: 11px; height: 11px; border-radius: 50%;
  background: var(--bg); border: 1px solid var(--rule);
  transition: all 300ms ease; z-index: 2;
}
.about-design-page .role .node::after {
  content: ""; position: absolute; inset: 2px;
  border-radius: 50%; background: var(--ink-faint); transition: all 300ms ease;
}
.about-design-page .role.current .node {
  border-color: var(--gold);
  box-shadow: 0 0 0 4px rgba(0,0,0,0.6), 0 0 16px rgba(213, 174, 97, 0.35);
}
.about-design-page .role.current .node::after { background: var(--gold); }
.about-design-page .role.current .node::before {
  content: ""; position: absolute; inset: -4px; border-radius: 50%;
  border: 1px solid var(--gold); opacity: 0;
  animation: about-tl-pulse 2.4s ease-out infinite;
}
@keyframes about-tl-pulse {
  0%   { transform: scale(0.8); opacity: 0.7; }
  70%  { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}
.about-design-page .role.open .node { border-color: var(--teal); }
.about-design-page .role.open .node::after { background: var(--teal); }

.about-design-page .role-head {
  cursor: pointer; padding: 2px 0 10px; display: block;
}
.about-design-page .role-head:hover .role-title { color: var(--gold); }

.about-design-page .role-tag {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--teal); margin-bottom: 8px;
  display: flex; align-items: center; gap: 10px;
}
.about-design-page .role.current .role-tag { color: var(--gold); }
.about-design-page .role-tag .duration { color: var(--ink-faint); font-size: 10px; }

.about-design-page .role-title {
  font-family: var(--serif); font-size: 28px; font-weight: 500;
  line-height: 1.15; letter-spacing: -0.005em;
  color: var(--ink); transition: color 300ms ease; margin-bottom: 6px;
}
.about-design-page .role-org {
  font-size: 13px; color: var(--ink-dim); font-weight: 400;
}
.about-design-page .role-org::before { content: "·"; color: var(--ink-faint); margin-right: 10px; }

.about-design-page .role-chevron {
  float: right; margin-top: 8px;
  font-family: var(--mono); font-size: 10px;
  color: var(--ink-faint); letter-spacing: 0.1em;
  transition: color 300ms ease; user-select: none;
}
.about-design-page .role-head:hover .role-chevron { color: var(--gold); }
.about-design-page .role.open .role-chevron { color: var(--teal); }

.about-design-page .role-body {
  display: grid; grid-template-rows: 0fr;
  transition: grid-template-rows 520ms cubic-bezier(0.22, 1, 0.36, 1);
}
.about-design-page .role.open .role-body { grid-template-rows: 1fr; }
.about-design-page .role-body-inner { overflow: hidden; min-height: 0; }

.about-design-page .role-card {
  margin-top: 14px; padding: 24px 28px 26px;
  background: linear-gradient(180deg, var(--bg-card) 0%, var(--bg-elev) 100%);
  border: 1px solid var(--rule); border-left: 1px solid var(--gold-dim);
  position: relative;
  opacity: 0; transform: translateY(-6px);
  transition: opacity 420ms ease 120ms, transform 420ms cubic-bezier(0.22, 1, 0.36, 1) 120ms;
  display: grid; grid-template-columns: 1fr 220px; gap: 32px;
}
.about-design-page .role.open .role-card { opacity: 1; transform: none; }
.about-design-page .role-card::before {
  content: ""; position: absolute; top: 0; left: -1px;
  width: 2px; height: 36px; background: var(--gold);
}

.about-design-page .card-label {
  grid-column: 1 / -1; font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-faint);
  margin-bottom: 4px; padding-bottom: 14px;
  border-bottom: 1px solid var(--rule-soft);
  display: flex; justify-content: space-between; align-items: center;
}
.about-design-page .card-label .divider { flex: 1; height: 1px; background: var(--rule); margin: 0 16px; }

.about-design-page .achievements { list-style: none; display: flex; flex-direction: column; gap: 10px; }
.about-design-page .achievements li {
  display: grid; grid-template-columns: 16px 1fr; gap: 12px;
  align-items: baseline; font-size: 14px; line-height: 1.5; color: var(--ink); font-weight: 300;
}
.about-design-page .achievements li::before {
  content: ""; width: 6px; height: 1px;
  background: var(--gold); margin-top: 8px; justify-self: center;
}
.about-design-page .achievements li strong {
  color: var(--gold); font-weight: 500; font-family: var(--mono); font-size: 13px;
}

.about-design-page .metrics {
  display: flex; flex-direction: column; gap: 1px;
  background: var(--rule-soft); border: 1px solid var(--rule-soft); align-self: start;
}
.about-design-page .metric {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.08em; color: var(--ink-dim);
  padding: 10px 12px; background: var(--bg-elev);
  display: flex; justify-content: space-between; align-items: baseline; gap: 10px;
  text-transform: uppercase;
}
.about-design-page .metric .k { color: var(--ink-faint); font-size: 9px; }
.about-design-page .metric .n {
  color: var(--teal); font-weight: 500; font-size: 12px;
  letter-spacing: 0; text-transform: none; text-align: right;
}
.about-design-page .role.current .metric .n { color: var(--gold); }

.about-design-page .coda {
  margin-top: 64px; padding-top: 32px; border-top: 1px solid var(--rule);
  display: flex; justify-content: space-between; align-items: baseline;
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-faint);
}
.about-design-page .coda .right { color: var(--ink-dim); }

@media (max-width: 820px) {
  .about-design-page .role-card { grid-template-columns: 1fr; gap: 20px; }
  .about-bio { grid-template-columns: 1fr; gap: 28px; }
  .about-extras { grid-template-columns: 1fr; gap: 36px; }
}
@media (max-width: 720px) {
  .about-design-page .page { padding: 24px 24px 96px; }
  .about-design-page .masthead { grid-template-columns: 1fr; gap: 20px; }
  .about-design-page .masthead-meta { text-align: left; }
  .about-design-page .timeline { padding-left: 28px; }
  .about-design-page .timeline::before { left: 8px; }
  .about-design-page .role { padding-left: 28px; }
  .about-design-page .role .node { left: -24px; }
  .about-design-page .role .year { position: static; width: auto; text-align: left; margin-bottom: 8px; }
  .about-design-page .role-title { font-size: 22px; }
  .about-design-page .role-card { padding: 22px 20px; }
  .about-site-nav .nav-links { display: none; }
}
`

export default function AboutPage() {
  useEffect(() => {
    const roles = document.querySelectorAll('.about-design-page .role')

    function revealRole(el: Element) {
      if (el.classList.contains('in')) return
      const idx = parseInt((el as HTMLElement).dataset.role || '0', 10)
      setTimeout(() => el.classList.add('in'), idx * 90)
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealRole(entry.target)
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' })

    roles.forEach(r => io.observe(r))

    requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      roles.forEach((r) => {
        const rect = r.getBoundingClientRect()
        if (rect.top < vh && rect.bottom > 0) {
          revealRole(r)
          io.unobserve(r)
        }
      })
    })

    setTimeout(() => {
      roles.forEach((r) => {
        if (!r.classList.contains('in')) { revealRole(r); io.unobserve(r) }
      })
    }, 1200)

    function toggleRole(role: Element) {
      const isOpen = role.classList.contains('open')
      document.querySelectorAll('.about-design-page .role.open').forEach(r => {
        if (r !== role) {
          r.classList.remove('open')
          const chev = r.querySelector('.role-chevron')
          if (chev) chev.textContent = '[ +  expand ]'
          const head = r.querySelector('.role-head')
          if (head) head.setAttribute('aria-expanded', 'false')
        }
      })
      role.classList.toggle('open', !isOpen)
      const chev = role.querySelector('.role-chevron')
      const head = role.querySelector('.role-head')
      if (chev) chev.textContent = !isOpen ? '[ −  collapse ]' : '[ +  expand ]'
      if (head) head.setAttribute('aria-expanded', String(!isOpen))
    }

    const heads = document.querySelectorAll('.about-design-page .role-head')
    heads.forEach((head) => {
      head.addEventListener('click', () => toggleRole(head.parentElement!))
      head.addEventListener('keydown', (e: Event) => {
        const ke = e as KeyboardEvent
        if (ke.key === 'Enter' || ke.key === ' ') { ke.preventDefault(); toggleRole(head.parentElement!) }
      })
    })

    setTimeout(() => {
      const current = document.querySelector('.about-design-page .role.current')
      if (current) toggleRole(current)
    }, 600)

    return () => {
      io.disconnect()
      heads.forEach(h => h.replaceWith(h.cloneNode(true)))
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="about-design-page">
        <div className="page">

          <nav className="about-site-nav">
            <Link href="/" className="home-link">E · B</Link>
            <div className="nav-links">
              <Link href="/about" className="nav-link active">About</Link>
              <Link href="/impact" className="nav-link">Impact</Link>
              <Link href="/competency" className="nav-link">Competency</Link>
            </div>
          </nav>

          <header className="masthead">
            <div>
              <div className="eyebrow">Curriculum Vitae / Profile</div>
              <h1>Nineteen years,<br />one <em>ascent</em>.</h1>
            </div>
            <div className="masthead-meta">
              Tenure
              <span className="val">2007 – Present</span>
            </div>
          </header>

          {/* Bio */}
          <div className="about-bio">
            <div className="about-bio-text">
              <p>
                Senior Technology Executive with <strong>17+ years of experience</strong>, progressing from
                software systems engineering and solution architecture to enterprise-scale leadership. Proven
                track record of modernising legacy banking systems into cloud-native architectures, delivering
                hyper-automation solutions, and managing multimillion-dollar technology portfolios.
              </p>
              <p>
                Expert in bridging business strategy with technical execution to design resilient digital
                ecosystems that drive operational efficiency, reduce costs, and accelerate innovation.
                Currently deepening expertise in AI/ML at <strong>UWA (Class of 2026)</strong>, combining
                executive experience with cutting-edge technical knowledge.
              </p>
            </div>
            <div className="about-meta-grid">
              <div className="about-meta-row"><span className="k">Location</span><span className="v">UB · Mongolia</span></div>
              <div className="about-meta-row"><span className="k">Current role</span><span className="v">Head of IT End-User Services</span></div>
              <div className="about-meta-row"><span className="k">Education</span><span className="v">M.IT (AI) · UWA · 2026</span></div>
              <div className="about-meta-row"><span className="k">LinkedIn</span><span className="v"><a href="https://www.linkedin.com/in/erdenezayabatnasan" target="_blank" rel="noopener">erdenezayabatnasan</a></span></div>
              <div className="about-meta-row"><span className="k">GitHub</span><span className="v"><a href="https://github.com/erdenezaya" target="_blank" rel="noopener">erdenezaya</a></span></div>
              <div className="about-meta-row"><span className="k">Email</span><span className="v"><a href="mailto:erdenezayanmaa@gmail.com">erdenezayanmaa@gmail.com</a></span></div>
            </div>
          </div>

          {/* Timeline */}
          <div className="about-section-label">Career Timeline</div>
          <section className="timeline">

            <article className="role current" data-role="0">
              <span className="node"></span>
              <div className="year"><span className="primary">2023</span>Present</div>
              <div className="role-head" role="button" tabIndex={0} aria-expanded="false">
                <div className="role-tag"><span>★ Current Role</span><span className="duration">3 yrs</span></div>
                <span className="role-chevron">[ +  expand ]</span>
                <h2 className="role-title">Head – IT End-User Services</h2>
                <div className="role-org">Khan Bank JSC</div>
              </div>
              <div className="role-body"><div className="role-body-inner"><div className="role-card">
                <div className="card-label"><span>Mandate &amp; Outcomes</span><span className="divider"></span><span>01 / 06</span></div>
                <ul className="achievements">
                  <li><div><strong>50%</strong> reduction in manual IT interventions through service-desk automation and self-service tooling.</div></li>
                  <li><div>Leading end-user services across <strong>540+</strong> branches and <strong>6,800</strong> staff nationwide.</div></li>
                  <li><div>Rearchitected endpoint management &amp; identity lifecycle — zero-touch provisioning, SLA compliance above <strong>98%</strong>.</div></li>
                  <li><div>Chair of the bank&apos;s IT Change Advisory Board; accountable for user-impacting production changes.</div></li>
                </ul>
                <div className="metrics">
                  <span className="metric"><span className="k">SCOPE</span><span className="n">540+ branches</span></span>
                  <span className="metric"><span className="k">SLA</span><span className="n">98.2%</span></span>
                  <span className="metric"><span className="k">TICKET VOL</span><span className="n">↓50%</span></span>
                  <span className="metric"><span className="k">HEADCOUNT</span><span className="n">32</span></span>
                </div>
              </div></div></div>
            </article>

            <article className="role" data-role="1">
              <span className="node"></span>
              <div className="year"><span className="primary">2022</span>2023</div>
              <div className="role-head" role="button" tabIndex={0} aria-expanded="false">
                <div className="role-tag"><span>Previous</span><span className="duration">1 yr</span></div>
                <span className="role-chevron">[ +  expand ]</span>
                <h2 className="role-title">Head – IT Automation &amp; Engineering</h2>
                <div className="role-org">Khan Bank LLC</div>
              </div>
              <div className="role-body"><div className="role-body-inner"><div className="role-card">
                <div className="card-label"><span>Mandate &amp; Outcomes</span><span className="divider"></span><span>02 / 06</span></div>
                <ul className="achievements">
                  <li><div>Owned a <strong>$7M</strong> annual technology budget across automation, engineering, and platform tooling.</div></li>
                  <li><div>Managed a cross-functional team of <strong>25+</strong> engineers spanning DevOps, RPA, and integration.</div></li>
                  <li><div>Delivered the bank&apos;s internal automation platform — <strong>140+</strong> production bots, ~11,000 staff-hours returned annually.</div></li>
                  <li><div>Established engineering standards, code review gates, and on-call rotations now used bank-wide.</div></li>
                </ul>
                <div className="metrics">
                  <span className="metric"><span className="k">BUDGET</span><span className="n">$7.0M</span></span>
                  <span className="metric"><span className="k">TEAM</span><span className="n">25+</span></span>
                  <span className="metric"><span className="k">BOTS IN PROD</span><span className="n">140</span></span>
                  <span className="metric"><span className="k">HOURS SAVED</span><span className="n">11k/yr</span></span>
                </div>
              </div></div></div>
            </article>

            <article className="role" data-role="2">
              <span className="node"></span>
              <div className="year"><span className="primary">2021</span>2022</div>
              <div className="role-head" role="button" tabIndex={0} aria-expanded="false">
                <div className="role-tag"><span>Previous</span><span className="duration">1 yr</span></div>
                <span className="role-chevron">[ +  expand ]</span>
                <h2 className="role-title">Manager – IT Automation &amp; Engineering</h2>
                <div className="role-org">Khan Bank LLC</div>
              </div>
              <div className="role-body"><div className="role-body-inner"><div className="role-card">
                <div className="card-label"><span>Mandate &amp; Outcomes</span><span className="divider"></span><span>03 / 06</span></div>
                <ul className="achievements">
                  <li><div>Stood up the bank&apos;s first dedicated automation function — hired and onboarded the founding <strong>8-person</strong> team.</div></li>
                  <li><div>Defined the automation intake, ROI-scoring and prioritisation framework still in use today.</div></li>
                  <li><div>Shipped early wins in KYC, reconciliation, and reporting automations — <strong>payback &lt; 6 months</strong>.</div></li>
                </ul>
                <div className="metrics">
                  <span className="metric"><span className="k">TEAM BUILT</span><span className="n">8</span></span>
                  <span className="metric"><span className="k">PAYBACK</span><span className="n">&lt; 6 mo</span></span>
                  <span className="metric"><span className="k">DOMAINS</span><span className="n">KYC · Recon · Reporting</span></span>
                </div>
              </div></div></div>
            </article>

            <article className="role" data-role="3">
              <span className="node"></span>
              <div className="year"><span className="primary">2020</span>2021</div>
              <div className="role-head" role="button" tabIndex={0} aria-expanded="false">
                <div className="role-tag"><span>Previous</span><span className="duration">1 yr</span></div>
                <span className="role-chevron">[ +  expand ]</span>
                <h2 className="role-title">Senior Solution Architect</h2>
                <div className="role-org">Khan Bank LLC</div>
              </div>
              <div className="role-body"><div className="role-body-inner"><div className="role-card">
                <div className="card-label"><span>Mandate &amp; Outcomes</span><span className="divider"></span><span>04 / 06</span></div>
                <ul className="achievements">
                  <li><div>Principal architect on the bank&apos;s digital onboarding rebuild — cut time-to-open from <strong>3 days → 12 min</strong>.</div></li>
                  <li><div>Led architecture review board for enterprise integrations; authored the target-state reference architecture.</div></li>
                  <li><div>Mentored <strong>5</strong> mid-level architects; established the architecture guild.</div></li>
                </ul>
                <div className="metrics">
                  <span className="metric"><span className="k">ONBOARDING</span><span className="n">3 days → 12 min</span></span>
                  <span className="metric"><span className="k">MENTEES</span><span className="n">5</span></span>
                  <span className="metric"><span className="k">ARB</span><span className="n">Lead</span></span>
                </div>
              </div></div></div>
            </article>

            <article className="role" data-role="4">
              <span className="node"></span>
              <div className="year"><span className="primary">2018</span>2020</div>
              <div className="role-head" role="button" tabIndex={0} aria-expanded="false">
                <div className="role-tag"><span>Previous</span><span className="duration">2 yrs</span></div>
                <span className="role-chevron">[ +  expand ]</span>
                <h2 className="role-title">Solution Architect</h2>
                <div className="role-org">Khan Bank LLC</div>
              </div>
              <div className="role-body"><div className="role-body-inner"><div className="role-card">
                <div className="card-label"><span>Mandate &amp; Outcomes</span><span className="divider"></span><span>05 / 06</span></div>
                <ul className="achievements">
                  <li><div>Designed <strong>20+</strong> enterprise integrations across core banking, card switch, and mobile channels.</div></li>
                  <li><div>Led vendor-selection for the bank&apos;s API gateway and message broker — platforms still in production.</div></li>
                  <li><div>Introduced contract-first API design; reduced integration defects by roughly <strong>40%</strong>.</div></li>
                </ul>
                <div className="metrics">
                  <span className="metric"><span className="k">INTEGRATIONS</span><span className="n">20+</span></span>
                  <span className="metric"><span className="k">DEFECT RATE</span><span className="n">↓40%</span></span>
                  <span className="metric"><span className="k">STANDARD</span><span className="n">Contract-first</span></span>
                </div>
              </div></div></div>
            </article>

            <article className="role" data-role="5">
              <span className="node"></span>
              <div className="year"><span className="primary">2007</span>2018</div>
              <div className="role-head" role="button" tabIndex={0} aria-expanded="false">
                <div className="role-tag"><span>Formation</span><span className="duration">11 yrs</span></div>
                <span className="role-chevron">[ +  expand ]</span>
                <h2 className="role-title">Developer &amp; System Engineer</h2>
                <div className="role-org">Startups &amp; Khan Bank LLC</div>
              </div>
              <div className="role-body"><div className="role-body-inner"><div className="role-card">
                <div className="card-label"><span>Foundations</span><span className="divider"></span><span>06 / 06</span></div>
                <ul className="achievements">
                  <li><div>Full-stack engineering across <strong>four</strong> early-stage ventures — built from prototype to production.</div></li>
                  <li><div>Joined Khan Bank as a systems engineer — owned core-banking interfaces, batch jobs, and internal tooling.</div></li>
                  <li><div>Ground-level exposure to <strong>Oracle, WebLogic, Linux, Java, .NET</strong> — the foundation every later role is built on.</div></li>
                  <li><div>Promoted four times before moving into architecture in 2018.</div></li>
                </ul>
                <div className="metrics">
                  <span className="metric"><span className="k">VENTURES</span><span className="n">4</span></span>
                  <span className="metric"><span className="k">PROMOTIONS</span><span className="n">4</span></span>
                  <span className="metric"><span className="k">STACK</span><span className="n">Oracle · Java · .NET</span></span>
                </div>
              </div></div></div>
            </article>

          </section>

          {/* Education, Certs, Recognition */}
          <div className="about-extras">
            <div className="about-extra-block">
              <h3>Education</h3>
              <ul className="about-extra-list">
                <li><div><strong>Master of IT (Artificial Intelligence)</strong><br />The University of Western Australia · 2026</div></li>
                <li><div><strong>Bachelor of IT (Computer Science)</strong><br />The National University of Mongolia · 2008</div></li>
              </ul>
            </div>
            <div className="about-extra-block">
              <h3>Certifications</h3>
              <ul className="about-extra-list">
                <li><div>TOGAF 9.2 · ITIL · COBIT5</div></li>
                <li><div>Oracle Certified Administrator (OCA 12c)</div></li>
                <li><div>Microsoft MCSA / MCP</div></li>
              </ul>
            </div>
            <div className="about-extra-block">
              <h3>Recognition</h3>
              <ul className="about-extra-list">
                <li><div>Speaker, <strong>WIT 2021</strong> – Women in Technology Conference, Mongolia</div></li>
                <li><div>Speaker, <strong>DevSummit 2022</strong> – Technology &amp; Digital Innovation Conference</div></li>
                <li><div>Featured Interview – <strong>Applied Technology Review</strong> (2023)</div></li>
                <li><div>Vice Chairman, IT Professional Council – <strong>Mongolian Bankers Association</strong> (2024)</div></li>
                <li><div>Participant, <strong>SAIEP</strong> – Study Australia Industry Experience Program · 2025</div></li>
              </ul>
            </div>
            <div className="about-extra-block">
              <h3>Core Competencies</h3>
              <ul className="about-extra-list">
                <li><div>Digital Transformation · Data &amp; AI Strategy · OKRs</div></li>
                <li><div>Enterprise Architecture (TOGAF) · Cloud Native · MLOps</div></li>
                <li><div>IT Governance (COBIT, ITIL) · Risk &amp; Compliance</div></li>
                <li><div>Vendor &amp; Budget Oversight · Cross-Functional Leadership</div></li>
              </ul>
            </div>
          </div>

          <footer className="coda">
            <span>End of Record</span>
            <span className="right">Click any role to expand</span>
          </footer>

        </div>
      </div>
    </>
  )
}
