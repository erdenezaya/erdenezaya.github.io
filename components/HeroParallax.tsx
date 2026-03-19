'use client'
import { useEffect, useRef } from 'react'

export default function HeroParallax() {
  const imgRef = useRef<HTMLImageElement>(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number | null>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const onMouseMove = (e: MouseEvent) => {
      target.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      target.current = {
        x: (t.clientX / window.innerWidth  - 0.5) * 10,
        y: (t.clientY / window.innerHeight - 0.5) * 6,
      }
    }

    const loop = () => {
      const c = current.current
      const t = target.current
      c.x += (t.x - c.x) * 0.04
      c.y += (t.y - c.y) * 0.04
      if (img) {
        img.style.transform = `scale(1.08) translate(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchmove', onTouchMove, { passive: true })
    raf.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src="/images/hero.png"
      alt=""
      className="hero-bg"
      aria-hidden="true"
    />
  )
}
