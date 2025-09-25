'use client'

import React from 'react'
import Link from 'next/link'

export default function HighClassModelsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-violet-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              High Class Models
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Elite fashion models and sophisticated companions - The epitome of elegance and grace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-purple-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our High Class Models?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/high class models.webp" alt="High Class Models" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">👑</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Elite Models</h3>
                      <p className="text-gray-600">Professional fashion models from top agencies with runway and photo shoot experience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💎</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Standard</h3>
                      <p className="text-gray-600">Sophisticated companions who understand and appreciate the finer things in life.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📸</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">Portfolio Ready</h3>
                      <p className="text-gray-600">Experienced in photo shoots, fashion shows, and high-profile events.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌟</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Celebrity Level</h3>
                      <p className="text-gray-600">Models with celebrity status and recognition in fashion and entertainment industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-purple-100/80 to-violet-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Model Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🥂</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">VIP Events</h3>
                  <p className="text-gray-600">Elite companions for exclusive parties, galas, and high-society events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fashion Shows</h3>
                  <p className="text-gray-600">Professional models available for fashion shows, product launches, and brand events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Hotels</h3>
                  <p className="text-gray-600">Sophisticated companionship at premium hotels and luxury resorts.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">✈️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Travel Companion</h3>
                  <p className="text-gray-600">Elegant travel companions for business trips and luxury vacations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎬</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Media Events</h3>
                  <p className="text-gray-600">Professional models for film premieres, awards shows, and media appearances.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💄</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Styling</h3>
                  <p className="text-gray-600">Fashion consultation and personal styling services from industry professionals.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-purple-600 to-violet-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book High Class Models?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us for exclusive bookings. Our high-class models are available for premium events and sophisticated companionship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-violet-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-violet-600 transition-all duration-300 transform hover:scale-105">
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