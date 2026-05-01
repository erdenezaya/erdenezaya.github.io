import Link from 'next/link'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

:root {
  --bg: #0a0c0f;
  --bg-elev: #10131a;
  --rule: #262b33;
  --rule-soft: #1c2027;
  --ink: #ece7d9;
  --ink-dim: #8f8d85;
  --ink-faint: #55544f;
  --gold: oklch(80% 0.11 82);
  --gold-dim: oklch(55% 0.09 82);
  --gold-glow: oklch(72% 0.13 82);
  --teal: oklch(72% 0.09 195);
  --teal-dim: oklch(50% 0.07 195);
  --teal-glow: oklch(65% 0.11 195);
  --blue: oklch(68% 0.14 250);
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "Inter Tight", -apple-system, system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html, body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  overflow-x: hidden;
}

.ambient {
  position: fixed; inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 1000px 700px at 20% 30%, rgba(213, 174, 97, 0.10), transparent 60%),
    radial-gradient(ellipse 900px 600px at 80% 70%, rgba(80, 170, 180, 0.08), transparent 60%),
    radial-gradient(ellipse 700px 500px at 50% 100%, rgba(90, 130, 220, 0.06), transparent 60%);
  animation: drift 24s ease-in-out infinite;
}
@keyframes drift {
  0%, 100% { background-position: 0% 0%; }
  33% { background-position: 33% 0%; }
  66% { background-position: 66% 0%; }
}

.grid-overlay {
  position: fixed; inset: 0;
  z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.012) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.012) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%);
}

.grain {
  position: fixed; inset: 0;
  z-index: 1; pointer-events: none;
  opacity: 0.035;
  mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

.card {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 20px 56px;
}

.top-band {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--rule);
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-faint);
}
.top-band .mark {
  display: flex; align-items: center; gap: 10px;
  color: var(--gold);
}
.top-band .mark::before {
  content: "";
  width: 10px; height: 10px;
  border: 1px solid var(--gold);
  transform: rotate(45deg);
  display: inline-block;
}
.top-band .tick {
  display: flex; gap: 18px; color: var(--ink-faint);
}
.top-band .tick span { position: relative; }
.top-band .tick span:not(:last-child)::after {
  content: "·";
  position: absolute;
  right: -12px; color: var(--ink-faint);
}
.top-band .live {
  color: var(--teal);
  display: flex; align-items: center; gap: 8px;
}
.top-band .live::before {
  content: "";
  width: 6px; height: 6px;
  background: var(--teal);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--teal-glow);
  animation: blink 2.2s ease-in-out infinite;
}
@keyframes blink {
  0%, 70%, 100% { opacity: 1; }
  80%, 90% { opacity: 0.25; }
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0 20px;
  text-align: center;
  position: relative;
}

.eyebrow {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 16px;
  display: flex; align-items: center; gap: 14px;
  opacity: 0; transform: translateY(6px);
  animation: rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms forwards;
}
.eyebrow::before, .eyebrow::after {
  content: ""; width: 28px; height: 1px; background: var(--gold);
  opacity: 0.7;
}

@keyframes rise {
  to { opacity: 1; transform: none; }
}

.hero-name {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(34px, 4.8vw, 64px);
  line-height: 0.98;
  letter-spacing: -0.025em;
  color: var(--ink);
  margin-bottom: 10px;
  opacity: 0; transform: translateY(14px);
  animation: rise 1100ms cubic-bezier(0.22, 1, 0.36, 1) 350ms forwards;
}
.hero-name .given { display: block; font-weight: 400; }
.hero-name .family { display: inline-block; }
.hero-name .known {
  display: block;
  margin-top: 10px;
  font-style: italic;
  color: var(--gold);
  font-weight: 400;
  font-size: 0.52em;
  letter-spacing: 0.01em;
}
.hero-name .known::before {
  content: "— ";
  color: var(--ink-faint);
  font-style: normal;
  font-weight: 300;
  margin-right: 4px;
}

.hero-title {
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--ink-dim);
  margin: 12px 0 0;
  display: flex; align-items: center; gap: 14px;
  flex-wrap: wrap; justify-content: center;
  opacity: 0; transform: translateY(6px);
  animation: rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 600ms forwards;
}
.hero-title .sep { color: var(--ink-faint); }
.hero-title .em { color: var(--gold); }

.tagline {
  font-family: var(--serif);
  font-style: italic;
  font-size: clamp(16px, 1.6vw, 20px);
  line-height: 1.4;
  color: var(--ink);
  max-width: 780px;
  margin: 72px auto 0;
  letter-spacing: -0.005em;
  opacity: 0; transform: translateY(6px);
  animation: rise 1000ms cubic-bezier(0.22, 1, 0.36, 1) 1400ms forwards;
}
.tagline .quote { color: var(--gold-dim); font-family: var(--serif); font-size: 1.3em; vertical-align: -2px; margin: 0 4px; }

.bridge {
  position: relative;
  margin: 36px auto 0;
  width: min(900px, 100%);
  height: 200px;
}

.bridge-svg {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  display: block;
  overflow: visible;
}

.deck-line {
  stroke: var(--gold);
  stroke-width: 1.25;
  fill: none;
  filter: drop-shadow(0 0 6px rgba(213, 174, 97, 0.35));
  stroke-dasharray: 900;
  stroke-dashoffset: 900;
  animation: draw 1600ms cubic-bezier(0.22, 1, 0.36, 1) 900ms forwards;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}

.cable {
  stroke: var(--rule);
  stroke-width: 0.75;
  fill: none;
  opacity: 0;
  animation: cableIn 600ms ease 1600ms forwards;
}
@keyframes cableIn {
  to { opacity: 0.7; }
}

.pillar {
  position: absolute;
  top: 48px;
  bottom: 0;
  width: 1px;
  background: var(--gold-dim);
  transform-origin: bottom;
  transform: scaleY(0);
  animation: extend 900ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
.pillar.p1 { left: 12.5%; animation-delay: 700ms; }
.pillar.p2 { left: 37.5%; animation-delay: 800ms; background: var(--gold); box-shadow: 0 0 18px rgba(213, 174, 97, 0.35); }
.pillar.p3 { left: 62.5%; animation-delay: 900ms; background: var(--teal); box-shadow: 0 0 18px rgba(90, 180, 195, 0.30); }
.pillar.p4 { left: 87.5%; animation-delay: 1000ms; }
@keyframes extend { to { transform: scaleY(1); } }

.pillar::before {
  content: "";
  position: absolute;
  top: 0; left: 50%;
  transform: translate(-50%, -50%);
  width: 9px; height: 9px;
  background: var(--bg);
  border: 1px solid var(--gold);
  border-radius: 50%;
}
.pillar.p2::before {
  width: 12px; height: 12px;
  background: var(--gold);
  box-shadow: 0 0 18px var(--gold-glow);
  animation: pulse 3.2s ease-in-out infinite 2s;
}
.pillar.p3::before {
  width: 12px; height: 12px;
  background: var(--teal);
  border-color: var(--teal);
  box-shadow: 0 0 18px var(--teal-glow);
  animation: pulse 3.2s ease-in-out infinite 2.4s;
}
.pillar.p3 .pillar-label { color: var(--teal); }
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 14px var(--gold-glow); }
  50%      { box-shadow: 0 0 28px var(--gold-glow); }
}

.pillar-caption {
  position: absolute;
  top: calc(100% + 18px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.pillar-label {
  font-family: var(--mono);
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink);
  opacity: 0;
  transform: translateY(6px);
  animation: rise 700ms ease 1500ms forwards;
  white-space: nowrap;
}
.pillar.p2 .pillar-label { color: var(--gold); }

.pillar-sub {
  font-family: var(--serif);
  font-style: italic;
  font-size: 12px;
  color: var(--ink-dim);
  opacity: 0;
  transform: translateY(6px);
  animation: rise 700ms ease 1700ms forwards;
  text-align: center;
  max-width: 22ch;
  line-height: 1.35;
  white-space: normal;
}

.bottom-band {
  padding-top: 14px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 24px;
  align-items: center;
}

.roles {
  display: flex;
  flex-wrap: wrap;
  gap: 18px 28px;
  font-family: var(--sans);
  font-size: 12px;
  color: var(--ink-dim);
  letter-spacing: 0.04em;
}

.role-chip {
  display: flex; align-items: center; gap: 10px;
  opacity: 0; transform: translateY(4px);
  animation: rise 700ms ease forwards;
}
.role-chip:nth-child(1) { animation-delay: 2000ms; }
.role-chip:nth-child(2) { animation-delay: 2080ms; }
.role-chip:nth-child(3) { animation-delay: 2160ms; }
.role-chip:nth-child(4) { animation-delay: 2240ms; }

.role-chip::before {
  content: "";
  width: 4px; height: 4px;
  background: var(--teal);
  border-radius: 50%;
  opacity: 0.8;
}
.role-chip.accent::before { background: var(--gold); }

.page-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  opacity: 0; transform: translateY(4px);
  animation: rise 700ms ease 2100ms forwards;
}

.page-links-label {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-faint);
  padding-right: 6px;
  border-right: 1px solid var(--rule);
}

.page-link {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  border: 1px solid var(--rule);
  background: rgba(0,0,0,0.25);
  transition: border-color 300ms ease, color 300ms ease, background 300ms ease, transform 300ms ease;
}
.page-link:hover {
  border-color: var(--teal-dim);
  color: var(--teal);
  background: rgba(80, 170, 180, 0.05);
  transform: translateY(-1px);
}

.links {
  display: flex;
  gap: 8px;
  opacity: 0; transform: translateY(4px);
  animation: rise 700ms ease 2200ms forwards;
}

.ext-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 16px;
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ink);
  text-decoration: none;
  border: 1px solid var(--rule);
  background: rgba(0,0,0,0.25);
  transition: border-color 300ms ease, color 300ms ease, background 300ms ease, transform 300ms ease;
  position: relative;
}
.ext-link:hover {
  border-color: var(--gold);
  color: var(--gold);
  background: rgba(213, 174, 97, 0.05);
  transform: translateY(-1px);
}
.ext-link .ic {
  width: 14px; height: 14px; display: inline-block;
  fill: currentColor;
}
.ext-link .arrow {
  opacity: 0.5;
  transition: transform 300ms ease, opacity 300ms ease;
}
.ext-link:hover .arrow {
  opacity: 1;
  transform: translateX(3px);
}

.card::before, .card::after {
  content: "";
  position: absolute;
  width: 22px; height: 22px;
  border: 1px solid var(--gold-dim);
  opacity: 0.7;
}
.card::before {
  top: 16px; left: 16px;
  border-right: none; border-bottom: none;
}
.card::after {
  bottom: 16px; right: 16px;
  border-left: none; border-top: none;
}

@media (max-width: 720px) {
  .card { padding: 24px 24px; }
  .top-band { flex-direction: column; gap: 10px; align-items: flex-start; }
  .top-band .tick { flex-wrap: wrap; }
  .hero-name .known { display: block; margin-top: 4px; }
  .hero-title { font-size: 11px; gap: 10px; }
  .bridge { height: 220px; margin-top: 56px; }
  .pillar-sub { font-size: 12px; }
  .bottom-band { grid-template-columns: 1fr; }
  .page-links { display: none; }
  .links { justify-content: flex-start; }
  .roles { font-size: 11px; gap: 12px 20px; }
}
`

export default function HomePage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="ambient" />
      <div className="grid-overlay" />
      <div className="grain" />

      <main className="card">

        <div className="top-band">
          <div className="mark">Personal Dossier</div>
          <div className="tick">
            <span>Khan Bank JSC</span>
            <span>Mongolia</span>
            <span>MS in AI · UWA 2026</span>
          </div>
          <div className="live">Open to briefings</div>
        </div>

        <section className="hero">

          <div className="eyebrow">Head of IT · AI Researcher · Bridge Leader</div>

          <h1 className="hero-name">
            <span className="given">Erdenezaya</span>
            <span className="family">Batnasan</span>
            <span className="known">known as &ldquo;Zaya&rdquo;</span>
          </h1>

          <div className="bridge" aria-hidden="true">
            <svg className="bridge-svg" viewBox="0 0 900 180" preserveAspectRatio="none">
              <path className="deck-line" d="M 0 60 Q 450 18, 900 60" />
              <line className="cable" x1="112" y1="60" x2="112" y2="50" />
              <line className="cable" x1="225" y1="60" x2="225" y2="40" />
              <line className="cable" x1="337" y1="60" x2="337" y2="30" />
              <line className="cable" x1="450" y1="60" x2="450" y2="22" />
              <line className="cable" x1="562" y1="60" x2="562" y2="30" />
              <line className="cable" x1="675" y1="60" x2="675" y2="40" />
              <line className="cable" x1="787" y1="60" x2="787" y2="50" />
            </svg>

            <div className="pillar p1">
              <div className="pillar-caption">
                <span className="pillar-label">Executive Strategy</span>
                <span className="pillar-sub" style={{ animationDelay: '1700ms' }}>board · budget · org</span>
              </div>
            </div>
            <div className="pillar p2">
              <div className="pillar-caption">
                <span className="pillar-label">AI Research</span>
                <span className="pillar-sub" style={{ animationDelay: '1750ms' }}>UWA 2026 · applied ML</span>
              </div>
            </div>
            <div className="pillar p3">
              <div className="pillar-caption">
                <span className="pillar-label">AI Engineering</span>
                <span className="pillar-sub" style={{ animationDelay: '1800ms' }}>MLOps · LLM systems</span>
              </div>
            </div>
            <div className="pillar p4">
              <div className="pillar-caption">
                <span className="pillar-label">Policy</span>
                <span className="pillar-sub" style={{ animationDelay: '1850ms' }}>regulation · governance</span>
              </div>
            </div>
          </div>

          <p className="tagline">
            <span className="quote">&ldquo;</span>At the intersection of executive strategy, AI research, engineering, and policy.<span className="quote">&rdquo;</span>
          </p>

        </section>

        <div className="bottom-band">
          <div className="roles">
            <span className="role-chip accent">Head of IT &amp; Digital Transformation</span>
            <span className="role-chip">Banking Automation &amp; AI Strategy</span>
            <span className="role-chip">Solution Architect</span>
          </div>

          <div className="page-links">
            <div className="page-links-label">Portfolio</div>
            <div className="page-link-row">
              <Link href="/about" className="page-link">About</Link>
              <Link href="/impact" className="page-link">Impact</Link>
              <Link href="/competency" className="page-link">Competency</Link>
            </div>
          </div>

          <div className="links">
            <a className="ext-link" href="https://www.linkedin.com/in/erdenezayabatnasan" target="_blank" rel="noopener">
              <svg className="ic" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
              <span className="arrow">→</span>
            </a>
            <a className="ext-link" href="https://github.com/erdenezaya" target="_blank" rel="noopener">
              <svg className="ic" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
              <span className="arrow">→</span>
            </a>
          </div>
        </div>

      </main>
    </>
  )
}
