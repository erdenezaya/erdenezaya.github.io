'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const DESIGN_PAGES = ['/', '/about', '/impact', '/competency']

export default function Nav() {
  const pathname = usePathname()
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  if (DESIGN_PAGES.includes(path)) return null

  return (
    <header className="site-header">
      <Link href="/" className="site-title">erdenezaya</Link>
      <nav style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/blog" className="nav-link">writing</Link>
        <Link href="/about" className="nav-link">about</Link>
      </nav>
    </header>
  )
}
