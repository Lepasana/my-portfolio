import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '| My Portfolio |',
  description: 'Professional portfolio showcasing web development projects, skills, and experience. Specializing in React, Node.js, and modern web technologies.',
  keywords: ['web developer', 'full stack developer', 'react', 'node.js', 'typescript', 'portfolio'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Your Name - Full Stack Developer',
    description: 'Professional portfolio showcasing web development projects, skills, and experience.',
    url: 'https://your-portfolio.com',
    siteName: 'Your Name Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Your Name - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name - Full Stack Developer',
    description: 'Professional portfolio showcasing web development projects, skills, and experience.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#4ade80',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
} 