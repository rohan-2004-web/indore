import React from 'react'
import Link from 'next/link'

interface ServiceData {
  name: string
  slug: string
  description: string
  features: string[]
  priceRange: string
}

interface ServicePageTemplateProps {
  serviceData: ServiceData
}

export default function ServicePageTemplate({ serviceData }: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {serviceData.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {serviceData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Book Now
              </Link>
              <a 
                href="tel:+919372662471"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors"
              >
                Call +91 9372662471
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Service Features
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <ul className="space-y-3 text-gray-700">
                  {serviceData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pricing & Booking
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Price Range</h3>
                  <p className="text-2xl font-bold text-pink-600">{serviceData.priceRange}</p>
                  <p className="text-sm text-gray-600 mt-1">*Prices may vary based on duration and specific requirements</p>
                </div>
                
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">📞</span>
                    Available 24/7 for instant booking
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">💳</span>
                    Multiple payment options accepted
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">🔒</span>
                    100% confidential and discreet
                  </p>
                  <p className="flex items-start">
                    <span className="text-blue-500 mr-2">✨</span>
                    Verified and professional companions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our {serviceData.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated companions with exceptional service standards
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Safe & Secure</h3>
              <p className="text-gray-600">
                Complete safety protocols and verified profiles
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-pink-600 text-2xl">💖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized</h3>
              <p className="text-gray-600">
                Customized experiences tailored to your preferences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Areas We Serve in Indore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'AB Road', 'Palasia', 'Vijay Nagar', 'New Palasia',
              'Rajwada', 'Khajrana', 'Sarafa Bazaar', 'Indore GPO',
              'Kanadiya', 'Scheme No 78', 'Sudama Nagar', 'Bhawar Kuan'
            ].map((area, index) => (
              <Link 
                key={index}
                href={`/locations/${area.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-gray-700 hover:text-pink-600"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book {serviceData.name} Now
          </h2>
          <p className="text-xl mb-8">
            Experience premium companionship with complete discretion
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919372662471"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors"
            >
              📞 Call +91 9372662471
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              💬 Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}