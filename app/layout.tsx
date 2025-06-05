import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdul Wahab Laghari',
  description: 'Portfolio Of Abdul Wahab Laghari Flutter Developer Backend Developer API Integration Expert',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
