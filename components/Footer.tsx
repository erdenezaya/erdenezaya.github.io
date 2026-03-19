'use client'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const isHome = usePathname() === '/'
  return (
    <footer className={`site-footer${isHome ? '' : ''}`} style={isHome ? { background: '#edeae3', borderTopColor: 'rgba(0,0,0,0.07)', color: '#aaa', maxWidth: 'none' } : {}}>
      <span>© {new Date().getFullYear()} Erdenezaya</span>
      <span>
        <a href="https://github.com/erdenezaya" target="_blank" rel="noopener" style={{ marginRight: '1rem' }}>GitHub</a>
        <a href="https://www.linkedin.com/in/erdenezayabatnasan" target="_blank" rel="noopener">LinkedIn</a>
      </span>
    </footer>
  )
}
