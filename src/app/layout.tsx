import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Retirement Age Calculator',
  description:
    'Calculate your retirement age based on your current age and compare with other countries.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
