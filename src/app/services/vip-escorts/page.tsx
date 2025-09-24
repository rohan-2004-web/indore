'use client'

import React from 'react'
import Link from 'next/link'

export default function VIPEscortsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              VIP Escorts in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Ultimate luxury companions for discerning clients - Exclusive VIP experience awaits you
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
                Why Choose Our VIP Escorts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/VIP Escorts.jpg" alt="VIP Escorts" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">👑</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Ultimate Luxury</h3>
                      <p className="text-gray-600">Premium VIP escorts offering the highest level of sophistication and elegance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔒</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Absolute Discretion</h3>
                      <p className="text-gray-600">Complete privacy and confidentiality guaranteed for all VIP clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💼</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Elite Companionship</h3>
                      <p className="text-gray-600">Intelligent, cultured companions perfect for high-society events.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Availability</h3>
                      <p className="text-gray-600">Priority booking and immediate response for VIP clients.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our VIP Escort Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Executive Companion</h3>
                  <p className="text-gray-600">High-profile companions for business meetings and executive events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Experience</h3>
                  <p className="text-gray-600">Premium companionship at 5-star hotels and exclusive venues.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎩</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">High Society Events</h3>
                  <p className="text-gray-600">Elegant companions for galas, premieres, and elite gatherings.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Vacation Partner</h3>
                  <p className="text-gray-600">Sophisticated travel companions for luxury holidays and trips.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍾</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Private Celebrations</h3>
                  <p className="text-gray-600">Exclusive companions for intimate parties and special occasions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Service</h3>
                  <p className="text-gray-600">Unmatched luxury service with personalized attention and care.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book VIP Escorts?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Experience ultimate luxury with our VIP escort services. Available 24/7 across premium locations in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-purple-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105">
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