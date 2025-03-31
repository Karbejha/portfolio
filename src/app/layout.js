import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mohamad Karbejha Portfolio',
  description: 'Experienced web developer portfolio showcasing skills, projects, and achievements.',
  keywords: 'web developer, portfolio, fullstack, React, Next.js, Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
