import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Escort Services In Indore',
  description: 'Professional escort services in Indore with verified companions available 24/7.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-primary-pink">
                  Saumya Kapoor
                </Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-primary-pink transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-primary-pink transition-colors">
                  Services
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-primary-pink transition-colors">
                  About
                </Link>
                <Link href="/gallery" className="text-gray-600 hover:text-primary-pink transition-colors">
                  Gallery
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-primary-pink transition-colors">
                  Contact
                </Link>
                <a href="tel:+919372662471" className="bg-primary-pink text-white px-4 py-2 rounded-lg hover:bg-primary-pink-dark transition-colors">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2024 Saumya Kapoor Services. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}