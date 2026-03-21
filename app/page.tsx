import HeroParallax from '@/components/HeroParallax'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <HeroParallax />

        {/* Writing — top of tree */}
        <Link href="/blog" className="hero-anchor hero-anchor--top">
          Writing
        </Link>

        {/* Name centered */}
        <div className="hero-center">
          <h1 className="hero-name">Erdenezaya</h1>
          <a href="https://github.com/erdenezaya" target="_blank" rel="noopener" className="hero-link">
            GitHub
          </a>
        </div>

        {/* About — bottom of tree */}
        <Link href="/about" className="hero-anchor hero-anchor--bottom">
          About
        </Link>
      </section>
    </main>
  )
}
