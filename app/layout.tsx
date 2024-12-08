import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umair Mirza - Software Engineer',
  description: 'Portfolio of Umair Mirza, a passionate Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}

