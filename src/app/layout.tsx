import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bikram Gyawali - Senior Backend Engineer',
  description: 'Senior Backend Engineer specializing in distributed systems, PostgreSQL optimization, and scalable architecture. Building robust backend solutions and developer tools.',
  keywords: ['Backend Engineer', 'PostgreSQL', 'Distributed Systems', 'Node.js', 'Python', 'System Design'],
  authors: [{ name: 'Bikram Gyawali' }],
  openGraph: {
    title: 'Bikram Gyawali - Senior Backend Engineer',
    description: 'Senior Backend Engineer specializing in distributed systems and scalable architecture',
    type: 'website',
    url: 'https://bikramgyawali.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bikram Gyawali - Senior Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bikram Gyawali - Senior Backend Engineer',
    description: 'Senior Backend Engineer specializing in distributed systems and scalable architecture',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path
              d="M0,400 Q300,300 600,400 T1200,400"
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M0,500 Q400,400 800,500 T1600,500"
              stroke="rgba(59, 130, 246, 0.08)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse delay-1000"
            />
            <path
              d="M0,300 Q200,200 400,300 T800,300"
              stroke="rgba(59, 130, 246, 0.06)"
              strokeWidth="1"
              fill="none"
              className="animate-pulse delay-2000"
            />
          </svg>
        </div>

        <Navigation />
        <main className="pt-16 relative z-10">{children}</main>
      </body>
    </html>
  )
}
