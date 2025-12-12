import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DentPulse - Transform Your Dental Practice\'s Cash Flow Into Wealth',
  description: 'Boost Cash Flow, Grow Profits & Build a More Valuable Dental Practice – While You Focus 100% On Patient Care. DentPulse\'s Proprietary, Proven Process Makes It Effortless',
  keywords: 'dental practice management, cash flow, dental finance, practice profitability',
  openGraph: {
    title: 'DentPulse - Transform Your Dental Practice\'s Cash Flow Into Wealth',
    description: 'Boost Cash Flow, Grow Profits & Build a More Valuable Dental Practice',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

