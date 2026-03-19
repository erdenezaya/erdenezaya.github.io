'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  if (pathname === '/') return null

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
