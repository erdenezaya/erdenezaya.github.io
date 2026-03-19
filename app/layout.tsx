import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Lora } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
const lora  = Lora({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  title: { default: "Erdenezaya", template: "%s | Erdenezaya" },
  description: "Software engineer based in Australia, writing about AI systems, LLMs, and building with AI.",
  metadataBase: new URL('https://erdenezaya.github.io'),
  openGraph: { siteName: "Erdenezaya", locale: 'en_AU', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${lora.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
