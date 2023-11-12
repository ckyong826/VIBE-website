import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import { roboto_con, archivo_black, racing_sans_one } from './components/useFont'
import Bottombar from './components/Bottombar'

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
    <html lang="en" className='scrollbar-hide'>
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
