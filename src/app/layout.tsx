import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Tai Chi Academy - Deutschlands älteste Tai-Chi-Schule',
  description: 'Lerne authentisches Yang-Stil Tai Chi von Großmeister Frieder Anders – individuell abgestimmt auf Deinen Atemtyp',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

