import HeroParallax from '@/components/HeroParallax'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <HeroParallax />
        <div className="hero-content">
          <h1 className="hero-name">Erdenezaya</h1>
          <p className="hero-sub">Software engineer. Building with AI.</p>
          <div className="hero-links">
            <Link href="/about" className="hero-link">About</Link>
            <Link href="/blog" className="hero-link">Writing</Link>
            <a href="https://github.com/erdenezaya" target="_blank" rel="noopener" className="hero-link">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  )
}
