import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '🔥 Escorts In Indore | #1 Call Girls Service 24/7 ⭐ 5000+ Verified | Saumya Kapoor',
  description: '🌟 #1 Escorts In Indore with 5000+ verified call girls ⚡ Available 24/7 in all areas 🔒 100% discreet ☎️ +919372662471 instant booking',
  keywords: 'escorts in indore, call girls indore, indore escorts, vip escorts indore, independent escorts indore, call girls service indore, saumya kapoor escorts',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Escorts In Indore | #1 Call Girls Service 24/7',
    description: '#1 Escorts In Indore with 5000+ verified call girls & VIP companions available 24/7',
    url: 'https://saumyakapoor.in',
    siteName: 'Escorts In Indore - Saumya Kapoor',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://saumyakapoor.in'
  },
  verification: {
    google: 'escorts-in-indore-verification'
  },
  other: {
    'geo.region': 'IN-MP',
    'geo.placename': 'Indore',
    'ICBM': '22.7196, 75.8577'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Escorts In Indore - Saumya Kapoor Service",
              "description": "Premium escorts in Indore with 5000+ verified call girls and VIP companions available 24/7",
              "url": "https://saumyakapoor.in",
              "telephone": "+919372662471",
              "priceRange": "₹₹₹",
              "openingHours": "Mo-Su 00:00-23:59",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Indore",
                "addressRegion": "Madhya Pradesh",
                "addressCountry": "IN",
                "postalCode": "452001"
              },
              "areaServed": [
                {"@type": "Place", "name": "Vijay Nagar, Indore"},
                {"@type": "Place", "name": "Palasia, Indore"},
                {"@type": "Place", "name": "AB Road, Indore"},
                {"@type": "Place", "name": "Saket, Indore"}
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2847",
                "bestRating": "5"
              }
            })
          }}
        />
        <link rel="canonical" href="https://saumyakapoor.in" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <meta name="ICBM" content="22.7196, 75.8577" />
      </head>
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