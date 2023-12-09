import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mashiur Ahmed Hridoy | Portfolio',
  description: 'Full-stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-200 text-gray-950 pt-28 sm:pt-36`}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
