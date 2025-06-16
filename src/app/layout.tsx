import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Immanco Cleaning Services',
  description: 'Professional cleaning services for your home and office',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-[#423E37] text-white">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">Immanco</h1>
              
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p>Phone: (443) 608-1634</p>
                <p>Email: joyimmanco@gmail.com</p>
                <p>Address: 10176 Baltimore National Pike<br />
                    
                    Suite #216<br />
                    Ellicott City, MD 21042</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Hours</h3>
                <p>Monday - Friday: 9am - 11pm</p>
                <p>Saturday: 9am - 11pm</p>
                <p>Sunday: Closed</p>
              </div>
              
            </div>
            <div className="mt-8 text-center">
              <p>&copy; 2024 Immanco Cleaning Services. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
