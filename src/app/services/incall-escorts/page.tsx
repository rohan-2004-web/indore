'use client'

import React from 'react'
import Link from 'next/link'

export default function IncallEscortsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Incall Escorts in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Premium incall services at luxury locations - Private and comfortable experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                📞 Call Now: +91 9372 662 471
              </a>
              <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* About Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-blue-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Incall Escorts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Incall Escorts.webp" alt="Incall Escorts" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🏨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Locations</h3>
                      <p className="text-gray-600">Premium incall services at luxurious apartments and high-end hotel suites in Indore.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🛡️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Safe Environment</h3>
                      <p className="text-gray-600">Secure and private locations ensuring complete safety and comfort for all clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Amenities</h3>
                      <p className="text-gray-600">Fully equipped luxury spaces with all modern amenities and comfort features.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🚗</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Access</h3>
                      <p className="text-gray-600">Convenient locations with easy access and discrete parking arrangements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-blue-100/80 to-indigo-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Incall Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏰</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Suites</h3>
                  <p className="text-gray-600">Premium hotel suites and upscale apartments with elegant interiors and amenities.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🛁</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Spa Services</h3>
                  <p className="text-gray-600">Relaxation services with spa facilities, jacuzzi, and massage arrangements.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🥂</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">VIP Treatment</h3>
                  <p className="text-gray-600">Complete VIP experience with premium services and personalized attention.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Day Sessions</h3>
                  <p className="text-gray-600">Flexible daytime appointments with comfortable and private environments.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌙</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Evening Sessions</h3>
                  <p className="text-gray-600">Romantic evening encounters in luxurious settings with intimate atmospheres.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Private Apartments</h3>
                  <p className="text-gray-600">Discrete private apartments with homely comfort and complete privacy.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book Incall Service?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our incall locations are available 24/7 across premium areas in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105">
                  🔙 All Services
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  )
}