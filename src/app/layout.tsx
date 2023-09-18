import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "@/components/Providers";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next.js app template with authentication and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <Providers>
        <body className="dark bg-gray-900 h-full">
          <Navigation />
          {children}
        </body>
      </Providers>
    </html>
  )
}
