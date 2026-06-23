import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Cormorant_SC } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'
import Footer from '@/components/Footer'

/* ── Fonts ────────────────────────────────────────────────── */
const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const sc = Cormorant_SC({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-sc',
  display: 'swap',
})

/* ── Metadata ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://noah-tate.vercel.app'),
  title: {
    default: 'Anthony De Baere',
    template: '%s — Anthony De Baere',
  },
  description: 'Music, live sessions and fragments.',
  openGraph: {
    title: 'Anthony De Baere',
    description: 'Music, live sessions and fragments.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/hero.jpg', width: 1200, height: 630, alt: 'Anthony De Baere' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthony De Baere',
    description: 'Music, live sessions and fragments.',
    images: ['/hero.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0908',
}

/* ── Root Layout ──────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sc.variable}`}
    >
      <body>
        {/* Custom cursor — client component */}
        <Cursor />

        {/* Persistent navigation */}
        <Nav />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
