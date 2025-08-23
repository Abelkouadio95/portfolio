import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Portfolio - Abel Kouadio',
  description: 'Data Scientist & Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
