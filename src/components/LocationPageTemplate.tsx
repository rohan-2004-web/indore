import React from 'react'
import Link from 'next/link'

interface LocationData {
  name: string
  slug: string
  description: string
  area: string
  landmarks: string[]
  coordinates?: {
    lat: number
    lng: number
  }
}

interface LocationPageTemplateProps {
  locationData: LocationData
}

export default function LocationPageTemplate({ locationData }: LocationPageTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {locationData.name} Escort Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {locationData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Book Now
              </Link>
              <a 
                href="tel:+919867564994"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Call +91 9867564994
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {locationData.name}
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Area Type</h3>
                  <p className="text-gray-700">{locationData.area}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Landmarks</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {locationData.landmarks.map((landmark, index) => (
                      <li key={index}>{landmark}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Services in {locationData.name}
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    Premium escort companionship
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    24/7 availability in {locationData.name}
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    Verified and professional escorts
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    Complete discretion and privacy
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    Outcall and incall services
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">✓</span>
                    Multiple language support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our {locationData.name} Escort Service?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-picked, verified escorts with exceptional service standards
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Discreet</h3>
              <p className="text-gray-600">
                Complete privacy and confidentiality guaranteed
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-2xl">⏰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Available</h3>
              <p className="text-gray-600">
                Round-the-clock service in {locationData.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Book Your {locationData.name} Escort?
          </h2>
          <p className="text-xl mb-8">
            Contact us now for instant booking and personalized service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919867564994"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors"
            >
              📞 Call +91 9867564994
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              💬 Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}