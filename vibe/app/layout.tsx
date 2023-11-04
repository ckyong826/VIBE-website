import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import { Roboto_Condensed } from 'next/font/google'
import { Archivo_Black } from 'next/font/google'
import { Racing_Sans_One } from 'next/font/google'
import Bottombar from './components/Bottombar'

const roboto_con = Roboto_Condensed({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const archivo_black = Archivo_Black({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const racing_sans_one = Racing_Sans_One({
  weight: [ '400'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

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
      <body className={archivo_black.className}>
        <div className={roboto_con.className}>
          <Navbar />
        </div>
        {children}
        <div className={racing_sans_one.className}>
          <Bottombar />
        </div>
      </body>
    </html>
  )
}
