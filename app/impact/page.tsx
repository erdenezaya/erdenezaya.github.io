'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

.impact-page {
  --bg: #0b0d10;
  --bg-elev: #11141a;
  --bg-card: #14181f;
  --bg-card-2: #0f1318;
  --rule: #262b33;
  --rule-soft: #1c2027;
  --ink: #e8e4d9;
  --ink-dim: #8f8d85;
  --ink-faint: #55544f;
  --gold: oklch(80% 0.11 82);
  --gold-dim: oklch(55% 0.09 82);
  --gold-glow: oklch(72% 0.13 82);
  --blue: oklch(70% 0.17 240);
  --blue-dim: oklch(50% 0.13 240);
  --blue-glow: oklch(65% 0.2 240);
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "Inter Tight", -apple-system, system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;

  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.impact-page::before {
  content: "";
  position: fixed; inset: 0;
  background:
    radial-gradient(ellipse 900px 500px at 20% 0%, rgba(213, 174, 97, 0.05), transparent 60%),
    radial-gradient(ellipse 800px 600px at 80% 100%, rgba(80, 140, 220, 0.045), transparent 60%);
  pointer-events: none; z-index: 0;
}
.impact-page::after {
  content: "";
  position: fixed; inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.015) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.015) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none; z-index: 0;
}

.impact-page .page {
  position: relative; z-index: 1;
  max-width: 1320px; margin: 0 auto;
  padding: 32px 56px 120px;
}

.impact-site-nav {
  display: flex; align-items: center; justify-content: space-between;
  padding-bottom: 20px; border-bottom: 1px solid var(--rule);
  margin-bottom: 48px;
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase;
}
.impact-site-nav .home-link {
  color: var(--gold); text-decoration: none;
  display: flex; align-items: center; gap: 10px; transition: opacity 200ms;
}
.impact-site-nav .home-link:hover { opacity: 0.7; }
.impact-site-nav .home-link::before {
  content: ""; width: 16px; height: 1px; background: var(--gold);
}
.impact-site-nav .nav-links { display: flex; gap: 24px; }
.impact-site-nav .nav-link { color: var(--ink-faint); text-decoration: none; transition: color 200ms; }
.impact-site-nav .nav-link:hover { color: var(--ink); }
.impact-site-nav .nav-link.active { color: var(--blue); }

.impact-page .masthead {
  display: grid; grid-template-columns: 1fr auto;
  align-items: end; padding-bottom: 28px;
  border-bottom: 1px solid var(--rule); margin-bottom: 56px; gap: 32px;
}

.impact-page .eyebrow {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 20px;
  display: flex; align-items: center; gap: 12px;
}
.impact-page .eyebrow::before { content: ""; width: 20px; height: 1px; background: var(--gold); }
.impact-page .eyebrow .dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--blue); box-shadow: 0 0 8px var(--blue-glow);
  animation: impact-blink 2s ease-in-out infinite;
}
@keyframes impact-blink {
  0%, 70%, 100% { opacity: 1; }
  80%, 90% { opacity: 0.3; }
}

.impact-page h1 {
  font-family: var(--serif); font-weight: 500;
  font-size: clamp(36px, 4.6vw, 56px);
  line-height: 1.02; letter-spacing: -0.015em;
  color: var(--ink); max-width: 720px;
}
.impact-page h1 em { font-style: italic; color: var(--gold); font-weight: 400; }

.impact-page .masthead-meta {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.12em; color: var(--ink-dim);
  text-align: right; line-height: 1.8;
  text-transform: uppercase; min-width: 180px;
}
.impact-page .masthead-meta .key { color: var(--ink-faint); }
.impact-page .masthead-meta .val {
  color: var(--ink); font-size: 12px; display: block;
}
.impact-page .masthead-meta .val.blue { color: var(--blue); }

.impact-page .grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--rule); border: 1px solid var(--rule);
}

.impact-page .stat {
  position: relative;
  background: linear-gradient(180deg, var(--bg-card) 0%, var(--bg-card-2) 100%);
  padding: 36px 34px 34px; min-height: 280px;
  display: flex; flex-direction: column; justify-content: space-between;
  overflow: hidden;
  opacity: 0; transform: translateY(12px);
  transition: opacity 800ms cubic-bezier(0.22, 1, 0.36, 1),
              transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
}
.impact-page .stat.in { opacity: 1; transform: none; }

.impact-page .stat::before, .impact-page .stat::after {
  content: ""; position: absolute;
  width: 14px; height: 14px; border: 1px solid var(--gold-dim);
  opacity: 0.55; transition: opacity 400ms ease, border-color 400ms ease;
}
.impact-page .stat::before { top: 10px; left: 10px; border-right: none; border-bottom: none; }
.impact-page .stat::after { bottom: 10px; right: 10px; border-left: none; border-top: none; }
.impact-page .stat:hover::before, .impact-page .stat:hover::after { opacity: 1; border-color: var(--gold); }

.impact-page .stat .glow {
  position: absolute; top: 52%; left: 50%;
  transform: translate(-50%, -50%);
  width: 320px; height: 320px; border-radius: 50%;
  background: radial-gradient(circle, rgba(213, 174, 97, 0.12) 0%, transparent 60%);
  pointer-events: none;
  animation: impact-breathe 5s ease-in-out infinite;
  opacity: 0; transition: opacity 1000ms ease;
}
.impact-page .stat.in .glow { opacity: 1; }
@keyframes impact-breathe {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
  50%       { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
}
.impact-page .stat.accent-blue .glow {
  background: radial-gradient(circle, rgba(80, 140, 220, 0.14) 0%, transparent 60%);
}

.impact-page .stat .hairline {
  position: absolute; top: 0; left: 0;
  height: 1px; width: 0; background: var(--gold);
  transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1) 200ms;
}
.impact-page .stat.accent-blue .hairline { background: var(--blue); }
.impact-page .stat.in .hairline { width: 100%; }

.impact-page .stat-head {
  position: relative; z-index: 2;
  display: flex; justify-content: space-between; align-items: center;
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--ink-faint); margin-bottom: 24px;
}
.impact-page .stat-head .idx { color: var(--ink-dim); }
.impact-page .stat-head .marker { display: inline-flex; align-items: center; gap: 6px; }
.impact-page .stat-head .marker::before {
  content: ""; width: 4px; height: 4px;
  background: var(--gold); border-radius: 50%;
  box-shadow: 0 0 6px var(--gold-glow);
}
.impact-page .stat.accent-blue .stat-head .marker::before {
  background: var(--blue); box-shadow: 0 0 6px var(--blue-glow);
}

.impact-page .stat-num {
  position: relative; z-index: 2;
  font-family: var(--serif); font-weight: 500; font-style: italic;
  color: var(--gold);
  font-size: clamp(68px, 7vw, 96px);
  line-height: 0.95; letter-spacing: -0.025em;
  display: flex; align-items: baseline; gap: 2px;
  text-shadow: 0 0 40px rgba(213, 174, 97, 0.25);
}
.impact-page .stat.accent-blue .stat-num {
  color: var(--blue); text-shadow: 0 0 40px rgba(80, 140, 220, 0.3);
}
.impact-page .stat-num .prefix, .impact-page .stat-num .suffix {
  font-size: 0.55em; font-style: italic; font-weight: 400; color: currentColor; opacity: 0.85;
}
.impact-page .stat-num .suffix { margin-left: 4px; }
.impact-page .stat-num .prefix { margin-right: 2px; }
.impact-page .stat-num .digits { font-variant-numeric: tabular-nums; font-style: italic; }

.impact-page .stat-body {
  position: relative; z-index: 2;
  margin-top: 22px; padding-top: 16px;
  border-top: 1px solid var(--rule-soft);
}
.impact-page .stat-label {
  font-family: var(--sans); font-size: 13px;
  color: var(--ink); font-weight: 400;
  letter-spacing: 0.005em; line-height: 1.45; margin-bottom: 6px;
}
.impact-page .stat-sub {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.14em; color: var(--ink-faint); text-transform: uppercase;
}

.impact-page .coda {
  margin-top: 64px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-faint);
}
.impact-page .coda .center {
  flex: 1; margin: 0 24px; height: 1px;
  background: linear-gradient(to right, var(--rule), transparent 50%, var(--rule));
}

@media (max-width: 900px) { .impact-page .grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .impact-page .grid { grid-template-columns: 1fr; } }
@media (max-width: 720px) {
  .impact-page .page { padding: 24px 24px 80px; }
  .impact-page .masthead { grid-template-columns: 1fr; }
  .impact-page .masthead-meta { text-align: left; }
  .impact-page .stat { padding: 28px 24px; min-height: 240px; }
  .impact-site-nav .nav-links { display: none; }
}
`

export default function ImpactPage() {
  useEffect(() => {
    function easeOutExpo(t: number) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
    }

    function formatNumber(n: number, format: string) {
      n = Math.round(n)
      if (format === 'k') return n.toLocaleString('en-US')
      return String(n)
    }

    function runCount(el: Element) {
      const card = el.closest('.stat') as HTMLElement
      if (!card) return
      const target = parseFloat(card.dataset.value || '0')
      const dur = parseFloat(card.dataset.duration || '1600')
      const format = card.dataset.format || ''
      const digitsEl = card.querySelector('.digits')
      if (!digitsEl) return
      const start = performance.now()

      function tick(now: number) {
        const t = Math.min(1, (now - start) / dur)
        const eased = easeOutExpo(t)
        const val = target * eased
        digitsEl!.textContent = formatNumber(val, format)
        if (t < 1) requestAnimationFrame(tick)
        else digitsEl!.textContent = formatNumber(target, format)
      }
      requestAnimationFrame(tick)
    }

    const cards = document.querySelectorAll('.impact-page .stat')

    function revealCard(card: Element) {
      if (card.classList.contains('in')) return
      const idx = parseInt((card as HTMLElement).dataset.idx || '0', 10)
      setTimeout(() => {
        card.classList.add('in')
        setTimeout(() => runCount(card), 260)
      }, idx * 110)
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealCard(entry.target)
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0, rootMargin: '0px 0px -5% 0px' })

    cards.forEach(c => io.observe(c))

    requestAnimationFrame(() => {
      const vh = window.innerHeight || document.documentElement.clientHeight
      cards.forEach((c) => {
        const rect = c.getBoundingClientRect()
        if (rect.top < vh && rect.bottom > 0) {
          revealCard(c)
          io.unobserve(c)
        }
      })
    })

    setTimeout(() => {
      cards.forEach((c) => {
        if (!c.classList.contains('in')) {
          revealCard(c)
          io.unobserve(c)
        }
      })
    }, 1400)

    return () => io.disconnect()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="impact-page">
        <div className="page">

          <nav className="impact-site-nav">
            <Link href="/" className="home-link">E · B</Link>
            <div className="nav-links">
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/impact" className="nav-link active">Impact</Link>
              <Link href="/competency" className="nav-link">Competency</Link>
            </div>
          </nav>

          <header className="masthead">
            <div>
              <div className="eyebrow">
                <span className="dot"></span>
                Impact Ledger / FY 2024
              </div>
              <h1>Two decades, measured in <em>outcomes</em>.</h1>
            </div>
            <div className="masthead-meta">
              <span className="key">Report</span>
              <span className="val">Career Aggregate</span>
              <span className="key" style={{ marginTop: '10px', display: 'block' }}>Updated</span>
              <span className="val blue">April 2026</span>
            </div>
          </header>

          <section className="grid" id="grid">

            <article className="stat" data-idx="0" data-value="17" data-duration="1600" data-prefix="" data-suffix="+">
              <span className="glow"></span>
              <span className="hairline"></span>
              <div className="stat-head">
                <span className="marker">Tenure</span>
                <span className="idx">01 / 06</span>
              </div>
              <div className="stat-num">
                <span className="prefix"></span>
                <span className="digits">0</span>
                <span className="suffix">+</span>
              </div>
              <div className="stat-body">
                <div className="stat-label">Years of experience across banking &amp; enterprise systems.</div>
                <div className="stat-sub">2007 – Present</div>
              </div>
            </article>

            <article className="stat accent-blue" data-idx="1" data-value="6000" data-duration="2000" data-prefix="" data-suffix="+" data-format="k">
              <span className="glow"></span>
              <span className="hairline"></span>
              <div className="stat-head">
                <span className="marker">Reach</span>
                <span className="idx">02 / 06</span>
              </div>
              <div className="stat-num">
                <span className="prefix"></span>
                <span className="digits">0</span>
                <span className="suffix">+</span>
              </div>
              <div className="stat-body">
                <div className="stat-label">Employees served through IT &amp; end-user services.</div>
                <div className="stat-sub">Nationwide · Khan Bank</div>
              </div>
            </article>

            <article className="stat" data-idx="2" data-value="60" data-duration="1400" data-prefix="" data-suffix="%">
              <span className="glow"></span>
              <span className="hairline"></span>
              <div className="stat-head">
                <span className="marker">Workflow</span>
                <span className="idx">03 / 06</span>
              </div>
              <div className="stat-num">
                <span className="prefix"></span>
                <span className="digits">0</span>
                <span className="suffix">%</span>
              </div>
              <div className="stat-body">
                <div className="stat-label">Reduction in manual banking workflows.</div>
                <div className="stat-sub">Automation program · 2021–2023</div>
              </div>
            </article>

            <article className="stat accent-blue" data-idx="3" data-value="2000" data-duration="1800" data-prefix="" data-suffix="+" data-format="k">
              <span className="glow"></span>
              <span className="hairline"></span>
              <div className="stat-head">
                <span className="marker">Capacity</span>
                <span className="idx">04 / 06</span>
              </div>
              <div className="stat-num">
                <span className="prefix"></span>
                <span className="digits">0</span>
                <span className="suffix">+</span>
              </div>
              <div className="stat-body">
                <div className="stat-label">FTE hours unlocked annually through automation.</div>
                <div className="stat-sub">Recurring · YoY</div>
              </div>
            </article>

            <article className="stat" data-idx="4" data-value="50" data-duration="1400" data-prefix="" data-suffix="%">
              <span className="glow"></span>
              <span className="hairline"></span>
              <div className="stat-head">
                <span className="marker">Efficiency</span>
                <span className="idx">05 / 06</span>
              </div>
              <div className="stat-num">
                <span className="prefix"></span>
                <span className="digits">0</span>
                <span className="suffix">%</span>
              </div>
              <div className="stat-body">
                <div className="stat-label">Reduction in manual IT interventions.</div>
                <div className="stat-sub">Service desk transformation</div>
              </div>
            </article>

            <article className="stat accent-blue" data-idx="5" data-value="7" data-duration="1600" data-prefix="$" data-suffix="M+">
              <span className="glow"></span>
              <span className="hairline"></span>
              <div className="stat-head">
                <span className="marker">Budget</span>
                <span className="idx">06 / 06</span>
              </div>
              <div className="stat-num">
                <span className="prefix">$</span>
                <span className="digits">0</span>
                <span className="suffix">M+</span>
              </div>
              <div className="stat-body">
                <div className="stat-label">Digital transformation budget under management.</div>
                <div className="stat-sub">Annual · multi-year</div>
              </div>
            </article>

          </section>

          <footer className="coda">
            <span>End of record</span>
            <span className="center"></span>
            <span>Source — Khan Bank internal</span>
          </footer>

        </div>
      </div>
    </>
  )
}
