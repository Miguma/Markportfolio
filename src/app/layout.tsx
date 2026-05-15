import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mark - Full-Stack Developer & Project Manager',
  description: 'Full-stack developer and project manager from Cebu, Philippines. Building modern web and mobile applications.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-gray-200">
        {children}
      </body>
    </html>
  )
}
