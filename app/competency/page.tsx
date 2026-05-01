'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap');

.comp-page {
  --bg: #0b0d10;
  --bg-elev: #11141a;
  --bg-card: #14181f;
  --rule: #262b33;
  --rule-soft: #1c2027;
  --ink: #e8e4d9;
  --ink-dim: #8f8d85;
  --ink-faint: #55544f;
  --gold: oklch(80% 0.11 82);
  --gold-dim: oklch(55% 0.09 82);
  --gold-glow: oklch(72% 0.13 82);
  --teal: oklch(72% 0.09 195);
  --teal-dim: oklch(50% 0.07 195);
  --teal-glow: oklch(65% 0.11 195);
  --serif: "Cormorant Garamond", Georgia, serif;
  --sans: "Inter Tight", -apple-system, system-ui, sans-serif;
  --mono: "JetBrains Mono", ui-monospace, monospace;

  background: var(--bg);
  color: var(--ink);
  font-family: var(--sans);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.comp-page::before {
  content: "";
  position: fixed; inset: 0;
  background:
    radial-gradient(ellipse 800px 500px at 30% 20%, rgba(213, 174, 97, 0.05), transparent 60%),
    radial-gradient(ellipse 700px 500px at 80% 80%, rgba(90, 180, 180, 0.04), transparent 60%);
  pointer-events: none; z-index: 0;
}
.comp-page::after {
  content: "";
  position: fixed; inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.012) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.012) 1px, transparent 1px);
  background-size: 80px 80px;
  pointer-events: none; z-index: 0;
}

.comp-page .page {
  position: relative; z-index: 1;
  max-width: 1320px; margin: 0 auto;
  padding: 32px 56px 120px;
}

.comp-site-nav {
  display: flex; align-items: center; justify-content: space-between;
  padding-bottom: 20px; border-bottom: 1px solid var(--rule);
  margin-bottom: 48px;
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase;
}
.comp-site-nav .home-link {
  color: var(--gold); text-decoration: none;
  display: flex; align-items: center; gap: 10px; transition: opacity 200ms;
}
.comp-site-nav .home-link:hover { opacity: 0.7; }
.comp-site-nav .home-link::before { content: ""; width: 16px; height: 1px; background: var(--gold); }
.comp-site-nav .nav-links { display: flex; gap: 24px; }
.comp-site-nav .nav-link { color: var(--ink-faint); text-decoration: none; transition: color 200ms; }
.comp-site-nav .nav-link:hover { color: var(--ink); }
.comp-site-nav .nav-link.active { color: var(--teal); }

.comp-page .masthead {
  display: grid; grid-template-columns: 1fr auto;
  align-items: end; padding-bottom: 28px;
  border-bottom: 1px solid var(--rule); margin-bottom: 56px; gap: 32px;
}
.comp-page .eyebrow {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.24em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 20px;
}
.comp-page h1 {
  font-family: var(--serif); font-weight: 500;
  font-size: clamp(36px, 4.6vw, 56px);
  line-height: 1.02; letter-spacing: -0.015em; color: var(--ink); max-width: 720px;
}
.comp-page h1 em { font-style: italic; color: var(--gold); font-weight: 400; }
.comp-page .masthead-meta {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.12em; color: var(--ink-dim);
  text-align: right; line-height: 1.8; text-transform: uppercase;
}
.comp-page .masthead-meta .key { color: var(--ink-faint); }
.comp-page .masthead-meta .val { color: var(--ink); font-size: 12px; display: block; }
.comp-page .masthead-meta .val.teal { color: var(--teal); }

.comp-page .stage {
  display: grid; grid-template-columns: 1.2fr 0.8fr;
  gap: 48px; align-items: start;
  background: linear-gradient(180deg, var(--bg-card) 0%, var(--bg-elev) 100%);
  border: 1px solid var(--rule); padding: 40px; position: relative;
}
.comp-page .stage::before, .comp-page .stage::after {
  content: ""; position: absolute;
  width: 18px; height: 18px; border: 1px solid var(--gold-dim); opacity: 0.7;
}
.comp-page .stage::before { top: 10px; left: 10px; border-right: none; border-bottom: none; }
.comp-page .stage::after { bottom: 10px; right: 10px; border-left: none; border-top: none; }

.comp-page .chart-wrap {
  position: relative; width: 100%; aspect-ratio: 1 / 1;
  max-width: 520px; margin: 0 auto;
}
.comp-page .chart-wrap svg {
  width: 100%; height: 100%; display: block; overflow: visible;
}

.ring { fill: none; stroke: var(--rule); stroke-width: 1; opacity: 0.7; }
.ring.outer { stroke: var(--teal-dim); opacity: 0.5; }
.ring-label {
  font-family: var(--mono); font-size: 9px;
  letter-spacing: 0.1em; fill: var(--ink-faint); opacity: 1;
}
.spoke-line { stroke: var(--rule); stroke-width: 1; opacity: 0.8; }
.poly-stroke {
  fill: none; stroke: var(--gold); stroke-width: 1.5;
  stroke-linejoin: round; stroke-linecap: round;
  filter: drop-shadow(0 0 8px rgba(213, 174, 97, 0.4));
}
.poly-fill { fill: var(--gold); opacity: 0.08; }
.vertex {
  fill: var(--bg); stroke: var(--gold); stroke-width: 1.5; opacity: 1;
  transition: r 300ms cubic-bezier(0.22, 1, 0.36, 1), stroke 300ms ease, fill 300ms ease;
}
.spoke.active .vertex { fill: var(--gold); stroke: var(--gold); }
.axis-label {
  font-family: var(--sans); font-size: 13px; font-weight: 500;
  fill: var(--ink); letter-spacing: 0.01em; opacity: 0.92;
  transition: fill 300ms ease; pointer-events: none;
}
.spoke.active .axis-label { fill: var(--gold); opacity: 1; }
.axis-score {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.08em; fill: var(--ink-faint); opacity: 1;
  transition: fill 300ms ease; pointer-events: none;
}
.spoke.active .axis-score { fill: var(--teal); }
.hit { fill: rgba(255,255,255,0.001); cursor: pointer; }
.center-readout {
  font-family: var(--mono); font-size: 9px;
  letter-spacing: 0.2em; fill: var(--ink-faint);
  text-transform: uppercase; text-anchor: middle; opacity: 1;
}
.center-val {
  font-family: var(--serif); font-style: italic; font-size: 34px;
  fill: var(--gold); text-anchor: middle; opacity: 1;
}

.comp-page .sidebar { padding: 8px 0; }
.comp-page .sidebar-head {
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--ink-faint); margin-bottom: 18px;
  display: flex; justify-content: space-between; align-items: center;
}
.comp-page .sidebar-head .divider {
  flex: 1; height: 1px; background: var(--rule); margin: 0 14px;
}

.comp-page .legend { display: flex; flex-direction: column; border-top: 1px solid var(--rule-soft); }
.comp-page .legend-row {
  display: grid; grid-template-columns: 28px 1fr auto;
  gap: 14px; align-items: center;
  padding: 14px 4px; border-bottom: 1px solid var(--rule-soft);
  cursor: pointer;
  transition: background 300ms ease, padding 300ms ease;
  opacity: 0; transform: translateX(6px);
  animation: comp-slideIn 500ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
}
@keyframes comp-slideIn { to { opacity: 1; transform: none; } }
.comp-page .legend-row:hover, .comp-page .legend-row.active {
  background: rgba(213, 174, 97, 0.04); padding-left: 10px;
}
.comp-page .legend-row .num {
  font-family: var(--mono); font-size: 10px;
  color: var(--ink-faint); letter-spacing: 0.1em;
}
.comp-page .legend-row.active .num { color: var(--gold); }
.comp-page .legend-row .name { font-size: 14px; color: var(--ink); font-weight: 400; transition: color 300ms ease; }
.comp-page .legend-row.active .name { color: var(--gold); }
.comp-page .legend-row .score {
  font-family: var(--serif); font-style: italic; font-size: 18px;
  color: var(--ink-dim); transition: color 300ms ease;
}
.comp-page .legend-row .score .max {
  color: var(--ink-faint); font-size: 12px; font-style: normal;
  font-family: var(--mono);
}
.comp-page .legend-row.active .score { color: var(--teal); }

.comp-page .tooltip {
  position: absolute; pointer-events: none;
  background: linear-gradient(180deg, #1a1e25 0%, #13171d 100%);
  border: 1px solid var(--gold-dim);
  padding: 14px 16px 16px; min-width: 260px; max-width: 300px;
  opacity: 0; transform: translate(-50%, -100%) translateY(-14px);
  transition: opacity 220ms ease, transform 220ms ease;
  z-index: 10;
  box-shadow: 0 12px 30px rgba(0,0,0,0.5), 0 0 20px rgba(213, 174, 97, 0.08);
}
.comp-page .tooltip::before {
  content: ""; position: absolute; top: 0; left: -1px;
  width: 2px; height: 22px; background: var(--gold);
}
.comp-page .tooltip.visible {
  opacity: 1; transform: translate(-50%, -100%) translateY(-8px);
}
.comp-page .tip-label {
  font-family: var(--mono); font-size: 9px;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--gold); margin-bottom: 6px;
  display: flex; justify-content: space-between;
}
.comp-page .tip-label .score { color: var(--teal); }
.comp-page .tip-name {
  font-family: var(--serif); font-size: 18px;
  color: var(--ink); font-weight: 500; margin-bottom: 10px; line-height: 1.2;
}
.comp-page .tip-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.comp-page .tip-tag {
  font-family: var(--mono); font-size: 10px;
  padding: 3px 8px; border: 1px solid var(--rule);
  color: var(--ink-dim); letter-spacing: 0.06em; background: rgba(0,0,0,0.25);
}

.comp-page .coda {
  margin-top: 48px;
  display: flex; justify-content: space-between; align-items: center;
  font-family: var(--mono); font-size: 10px;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-faint);
}
.comp-page .coda .center {
  flex: 1; margin: 0 24px; height: 1px;
  background: linear-gradient(to right, var(--rule), transparent 50%, var(--rule));
}

@media (max-width: 980px) { .comp-page .stage { grid-template-columns: 1fr; } }
@media (max-width: 720px) {
  .comp-page .page { padding: 24px 24px 80px; }
  .comp-page .masthead { grid-template-columns: 1fr; }
  .comp-page .masthead-meta { text-align: left; }
  .comp-site-nav .nav-links { display: none; }
}
`

const DATA = [
  { name: "Strategic Leadership",    score: 9, tags: ["Exec sponsorship", "OKRs / roadmap", "Board reporting", "P&L ownership"] },
  { name: "Enterprise Architecture", score: 9, tags: ["TOGAF 9.2", "Target-state design", "Integration patterns", "ARB chair"] },
  { name: "AI / ML Engineering",     score: 8, tags: ["MLOps", "LLM pipelines", "Model serving", "Feature stores"] },
  { name: "Cloud & Automation",      score: 9, tags: ["Cloud Native", "Kubernetes", "Terraform", "RPA at scale"] },
  { name: "IT Governance",           score: 8, tags: ["ITIL v4", "SOX / audit", "Risk & controls", "Change mgmt"] },
  { name: "Stakeholder Management",  score: 9, tags: ["C-suite comms", "Vendor mgmt", "Cross-functional", "Board-level"] },
  { name: "Data & AI Strategy",      score: 8, tags: ["Data platforms", "Gen-AI adoption", "Analytics ops", "Data mesh"] },
]

export default function CompetencyPage() {
  useEffect(() => {
    const MAX = 10
    const W = 600, H = 600
    const CX = W / 2, CY = H / 2
    const R = 220
    const N = DATA.length
    const SVGNS = 'http://www.w3.org/2000/svg'

    const angleFor = (i: number) => -Math.PI / 2 + (i / N) * Math.PI * 2
    const ptAt = (i: number, value: number) => {
      const a = angleFor(i)
      const rr = (value / MAX) * R
      return { x: CX + Math.cos(a) * rr, y: CY + Math.sin(a) * rr }
    }

    const svg = document.getElementById('radar') as unknown as SVGSVGElement
    if (!svg || svg.children.length > 0) return

    function make(tag: string, attrs: Record<string, string | number> = {}, cls = '') {
      const el = document.createElementNS(SVGNS, tag)
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, String(v))
      if (cls) el.setAttribute('class', cls)
      return el
    }

    const ringValues = [2, 4, 6, 8, 10]
    ringValues.forEach((v) => {
      const pts = Array.from({ length: N }, (_, i) => {
        const p = ptAt(i, v)
        return `${p.x},${p.y}`
      }).join(' ')
      const isOuter = v === MAX
      const ring = make('polygon', { points: pts }, 'ring' + (isOuter ? ' outer' : ''))
      svg.appendChild(ring)
    })

    ringValues.forEach((v) => {
      const p = ptAt(0, v)
      const lbl = make('text', { x: p.x + 6, y: p.y + 3, 'text-anchor': 'start' }, 'ring-label')
      lbl.textContent = String(v)
      svg.appendChild(lbl)
    })

    const spokeGroups: { g: Element; hit: Element; line: Element; txt: Element; score: Element; i: number }[] = []
    DATA.forEach((d, i) => {
      const g = make('g', { 'data-i': i }, 'spoke')
      const outer = ptAt(i, MAX)
      const line = make('line', { x1: CX, y1: CY, x2: outer.x, y2: outer.y }, 'spoke-line')
      const halfA = Math.PI / N
      const a = angleFor(i)
      const rHit = R * 1.18
      const h1x = CX + Math.cos(a - halfA) * rHit
      const h1y = CY + Math.sin(a - halfA) * rHit
      const h2x = CX + Math.cos(a + halfA) * rHit
      const h2y = CY + Math.sin(a + halfA) * rHit
      const hit = make('polygon', { points: `${CX},${CY} ${h1x},${h1y} ${h2x},${h2y}` }, 'hit')
      g.appendChild(hit)
      g.appendChild(line)
      const lblPt = { x: CX + Math.cos(a) * (R + 38), y: CY + Math.sin(a) * (R + 38) }
      let anchor = 'middle'
      if (lblPt.x < CX - 20) anchor = 'end'
      else if (lblPt.x > CX + 20) anchor = 'start'
      const txt = make('text', { x: lblPt.x, y: lblPt.y, 'text-anchor': anchor, 'dominant-baseline': 'middle' }, 'axis-label')
      txt.textContent = d.name
      const scoreEl = make('text', { x: lblPt.x, y: lblPt.y + 16, 'text-anchor': anchor, 'dominant-baseline': 'middle' }, 'axis-score')
      scoreEl.textContent = `${d.score} / 10`
      g.appendChild(txt)
      g.appendChild(scoreEl)
      svg.appendChild(g)
      spokeGroups.push({ g, hit, line, txt, score: scoreEl, i })
    })

    const polyPts = DATA.map((d, i) => {
      const p = ptAt(i, d.score)
      return `${p.x},${p.y}`
    }).join(' ')

    const polyFill = make('polygon', { points: polyPts }, 'poly-fill')
    const polyStroke = make('polygon', { points: polyPts }, 'poly-stroke')
    svg.appendChild(polyFill)
    svg.appendChild(polyStroke)

    const vertices: Element[] = []
    DATA.forEach((d, i) => {
      const p = ptAt(i, d.score)
      const v = make('circle', { cx: p.x, cy: p.y, r: 4.5 }, 'vertex')
      v.setAttribute('data-i', String(i))
      svg.appendChild(v)
      vertices.push(v)
    })

    const avg = (DATA.reduce((s, d) => s + d.score, 0) / DATA.length).toFixed(1)
    const centerLabel = make('text', { x: CX, y: CY - 6 }, 'center-readout')
    centerLabel.textContent = 'Composite'
    svg.appendChild(centerLabel)
    const centerVal = make('text', { x: CX, y: CY + 26 }, 'center-val')
    centerVal.textContent = avg
    svg.appendChild(centerVal)

    const legendEl = document.getElementById('legend')
    if (legendEl) {
      DATA.forEach((d, i) => {
        const row = document.createElement('div')
        row.className = 'legend-row'
        row.dataset.i = String(i)
        row.style.animationDelay = (1200 + i * 80) + 'ms'
        row.innerHTML = `
          <span class="num">${String(i + 1).padStart(2, '0')}</span>
          <span class="name">${d.name}</span>
          <span class="score">${d.score}<span class="max">/10</span></span>
        `
        legendEl.appendChild(row)
      })
    }

    const tooltip = document.getElementById('radar-tooltip')
    const tipLabel = document.getElementById('tipLabel')
    const tipName = document.getElementById('tipName')
    const tipScore = document.getElementById('tipScore')
    const tipTags = document.getElementById('tipTags')

    function showTip(i: number, pageX: number, pageY: number) {
      const d = DATA[i]
      if (tipLabel) tipLabel.textContent = `Dimension · ${String(i + 1).padStart(2, '0')}`
      if (tipName) tipName.textContent = d.name
      if (tipScore) tipScore.textContent = `${d.score}/10`
      if (tipTags) tipTags.innerHTML = d.tags.map(t => `<span class="tip-tag">${t}</span>`).join('')
      const wrap = document.getElementById('chartWrap')
      if (!wrap || !tooltip) return
      const rect = wrap.getBoundingClientRect()
      const x = pageX - rect.left - window.scrollX
      const y = pageY - rect.top - window.scrollY
      tooltip.style.left = x + 'px'
      tooltip.style.top = y + 'px'
      tooltip.classList.add('visible')
    }
    function hideTip() {
      tooltip?.classList.remove('visible')
    }

    function setActive(i: number | null, pageX?: number, pageY?: number) {
      document.querySelectorAll('.comp-page .spoke').forEach(s => s.classList.remove('active'))
      document.querySelectorAll('.comp-page .legend-row').forEach(r => r.classList.remove('active'))
      if (i === null || i === undefined) { hideTip(); return }
      spokeGroups[i].g.classList.add('active')
      const row = document.querySelector(`.comp-page .legend-row[data-i="${i}"]`)
      if (row) row.classList.add('active')
      vertices.forEach(v => v.setAttribute('r', '4.5'))
      vertices[i].setAttribute('r', '7')
      if (pageX != null && pageY != null) showTip(i, pageX, pageY)
    }

    spokeGroups.forEach((s) => {
      s.hit.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent
        setActive(s.i, me.pageX, me.pageY)
      })
      s.hit.addEventListener('mouseleave', () => setActive(null))
      s.hit.addEventListener('click', (e: Event) => {
        const me = e as MouseEvent
        setActive(s.i, me.pageX, me.pageY)
      })
    })

    document.querySelectorAll('.comp-page .legend-row').forEach((row) => {
      row.addEventListener('mouseenter', () => {
        const i = parseInt((row as HTMLElement).dataset.i || '0', 10)
        const wrap = document.getElementById('chartWrap')
        if (!wrap) return
        const rect = wrap.getBoundingClientRect()
        const p = ptAt(i, DATA[i].score)
        const sx = rect.left + (p.x / W) * rect.width + window.scrollX
        const sy = rect.top + (p.y / H) * rect.height + window.scrollY
        setActive(i, sx, sy)
      })
      row.addEventListener('mouseleave', () => setActive(null))
    })

    // Entrance animation
    function setOp(el: Element, v: number) { (el as HTMLElement).style.opacity = String(v) }
    function tween(el: Element, from: number, to: number, dur: number, delay = 0) {
      setOp(el, from)
      setTimeout(() => {
        const start = performance.now()
        function step(now: number) {
          const t = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - t, 3)
          setOp(el, from + (to - from) * eased)
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }, delay)
    }

    const polyCoords = DATA.map((d, i) => ptAt(i, d.score))
    let perim = 0
    for (let i = 0; i < polyCoords.length; i++) {
      const a = polyCoords[i]
      const b = polyCoords[(i + 1) % polyCoords.length]
      perim += Math.hypot(b.x - a.x, b.y - a.y)
    }

    function animatePolyStroke(dur: number) {
      polyStroke.setAttribute('stroke-dasharray', String(perim))
      polyStroke.setAttribute('stroke-dashoffset', String(perim))
      const start = performance.now()
      function step(now: number) {
        const t = Math.min(1, (now - start) / dur)
        const eased = 1 - Math.pow(1 - t, 3)
        polyStroke.setAttribute('stroke-dashoffset', String(perim * (1 - eased)))
        if (t < 1) requestAnimationFrame(step)
        else polyStroke.removeAttribute('stroke-dasharray')
      }
      requestAnimationFrame(step)
    }

    const allEls = svg.querySelectorAll('.ring, .ring-label, .spoke-line, .axis-label, .axis-score, .vertex, .poly-fill, .center-readout, .center-val')
    allEls.forEach(el => setOp(el, 0))
    setOp(polyStroke, 1)
    polyStroke.setAttribute('stroke-dasharray', String(perim || 2000))
    polyStroke.setAttribute('stroke-dashoffset', String(perim || 2000))

    svg.querySelectorAll('.ring').forEach((r, idx) => {
      const target = r.classList.contains('outer') ? 0.5 : 0.7
      tween(r, 0, target, 500, 100 + idx * 90)
    })
    svg.querySelectorAll('.ring-label').forEach((r, idx) => tween(r, 0, 1, 400, 600 + idx * 60))
    spokeGroups.forEach((s, idx) => {
      tween(s.line, 0, 0.8, 400, 400 + idx * 110)
      tween(s.txt, 0, 0.92, 400, 400 + idx * 110)
      tween(s.score, 0, 1, 400, 450 + idx * 110)
    })
    setTimeout(() => animatePolyStroke(1600), 1400)
    setTimeout(() => tween(polyFill, 0, 0.08, 800), 1600)
    vertices.forEach((v, idx) => tween(v, 0, 1, 400, 2200 + idx * 80))
    tween(centerLabel, 0, 1, 600, 2600)
    tween(centerVal, 0, 1, 600, 2700)

    return () => {
      if (svg) svg.innerHTML = ''
      if (legendEl) legendEl.innerHTML = ''
    }
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="comp-page">
        <div className="page">

          <nav className="comp-site-nav">
            <Link href="/" className="home-link">E · B</Link>
            <div className="nav-links">
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/impact" className="nav-link">Impact</Link>
              <Link href="/competency" className="nav-link active">Competency</Link>
            </div>
          </nav>

          <header className="masthead">
            <div>
              <div className="eyebrow">Competency Matrix / Self-assessed</div>
              <h1>Capability, mapped on <em>seven axes</em>.</h1>
            </div>
            <div className="masthead-meta">
              <span className="key">Scale</span>
              <span className="val">0 – 10</span>
              <span className="key" style={{ marginTop: '10px', display: 'block' }}>Method</span>
              <span className="val teal">Executive CV</span>
            </div>
          </header>

          <section className="stage">

            <div className="chart-wrap" id="chartWrap">
              <svg id="radar" viewBox="0 0 600 600" aria-label="Competency radar chart" />
              <div className="tooltip" id="radar-tooltip">
                <div className="tip-label">
                  <span id="tipLabel">Capability</span>
                  <span className="score" id="tipScore">9/10</span>
                </div>
                <div className="tip-name" id="tipName">—</div>
                <div className="tip-tags" id="tipTags"></div>
              </div>
            </div>

            <aside className="sidebar">
              <div className="sidebar-head">
                <span>Dimensions</span>
                <span className="divider"></span>
                <span>07</span>
              </div>
              <div className="legend" id="legend"></div>
            </aside>

          </section>

          <footer className="coda">
            <span>Hover or tap any axis</span>
            <span className="center"></span>
            <span>Report – April 2026</span>
          </footer>

        </div>
      </div>
    </>
  )
}
