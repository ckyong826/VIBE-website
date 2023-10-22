import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { Roboto_Condensed } from 'next/font/google'

const roboto_con = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  weight: [ '300', '400','700'],
  subsets: ['latin'],
  display: 'swap'
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VIBE streetwear',
  description: 'VIBE streetwear website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={roboto_con.variable}>
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  )
}
