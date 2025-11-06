import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Indore Escort Service',
  description: 'The page you are looking for could not be found. Browse our premium escort services in Indore.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mb-4">
            404
          </h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back to our premium escort services.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🏠 Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 shadow-md border border-pink-200"
            >
              📋 Our Services
            </Link>
            
            <Link
              href="/locations"
              className="inline-block bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 shadow-md border border-purple-200"
            >
              📍 Locations
            </Link>
            
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-md border border-blue-200"
            >
              📞 Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-3">🔥 Popular Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/services/vip-escorts" className="text-pink-600 hover:text-pink-700 hover:underline">
              VIP Escorts Indore
            </Link>
            <Link href="/services/college-girls" className="text-purple-600 hover:text-purple-700 hover:underline">
              College Girls
            </Link>
            <Link href="/locations/ab-road" className="text-blue-600 hover:text-blue-700 hover:underline">
              AB Road Escorts
            </Link>
            <Link href="/locations/vijay-nagar" className="text-pink-600 hover:text-pink-700 hover:underline">
              Vijay Nagar Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}