import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ThemesProvider } from '@/components/providers/ThemesProvider'
// import Navbar from './components/Navbar'
// import { AnimatePresence } from 'framer-motion'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-mont' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <body className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
        {/* <AnimatePresence mode='wait'></AnimatePresence> */}
        <ThemesProvider>
          {/* <Navbar /> */}
          {children}
        </ThemesProvider>
      </body>
    </html>
  )
}
