import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Lora } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const mono  = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' })
const lora  = Lora({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })

const SITE_DESCRIPTION = "Technology executive. 17 years leading banking technology and digital transformation. Now researching AI systems and governance at UWA, Perth."

export const metadata: Metadata = {
  title: { default: "Erdenezaya", template: "%s | Erdenezaya" },
  description: SITE_DESCRIPTION,
  metadataBase: new URL('https://erdenezaya.github.io'),
  openGraph: { siteName: "Erdenezaya", locale: 'en_AU', type: 'website', description: SITE_DESCRIPTION },
  twitter: { card: 'summary_large_image', description: SITE_DESCRIPTION },
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
