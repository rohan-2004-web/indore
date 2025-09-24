'use client'

import React from 'react'
import Link from 'next/link'

export default function CelebrityEscortsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Celebrity Escorts in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Premium companions with star quality service - Experience luxury like never before
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-pink-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Celebrity Escorts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Celebrity Escorts.webp" alt="Celebrity Escorts" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality Service</h3>
                      <p className="text-gray-600">Our celebrity escorts provide star-quality companionship with sophistication and elegance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎭</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Professional & Discrete</h3>
                      <p className="text-gray-600">Complete confidentiality and professionalism maintained at all times.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💎</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Experience</h3>
                      <p className="text-gray-600">Exclusive companionship for high-profile events, parties, and private meetings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🕐</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Availability</h3>
                      <p className="text-gray-600">Available round the clock for bookings and instant service across Indore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-pink-100/80 to-orange-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Celebrity Escort Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Event Companion</h3>
                  <p className="text-gray-600">Perfect partners for parties, corporate events, and social gatherings.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍽️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Dinner Dates</h3>
                  <p className="text-gray-600">Elegant companions for fine dining experiences and romantic evenings.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">✈️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Travel Partner</h3>
                  <p className="text-gray-600">Sophisticated travel companions for business trips and vacations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Business Events</h3>
                  <p className="text-gray-600">Professional companions for corporate meetings and business functions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Private Parties</h3>
                  <p className="text-gray-600">Exclusive companions for private celebrations and intimate gatherings.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">VIP Treatment</h3>
                  <p className="text-gray-600">Premium celebrity-level service with complete luxury experience.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book Celebrity Escorts?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our celebrity escorts are available 24/7 across all premium locations in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
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