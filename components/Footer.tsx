'use client'
import { usePathname } from 'next/navigation'

const DESIGN_PAGES = ['/', '/about', '/impact', '/competency']

export default function Footer() {
  const pathname = usePathname()
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
  if (DESIGN_PAGES.includes(path)) return null

  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Erdenezaya</span>
      <span>
        <a href="https://github.com/erdenezaya" target="_blank" rel="noopener" style={{ marginRight: '1rem' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/erdenezayabatnasan" target="_blank" rel="noopener">LinkedIn</a>
      </span>
    </footer>
  )
}
