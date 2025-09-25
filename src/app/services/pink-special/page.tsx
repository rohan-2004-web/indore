'use client'

import React from 'react'
import Link from 'next/link'

export default function PinkSpecialPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Pink Special in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Special premium companions for exclusive experiences - Unique luxury service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-rose-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Pink Special Service?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Pink Special.webp" alt="Pink Special" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💖</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Exclusive Experience</h3>
                      <p className="text-gray-600">Unique premium experiences designed for discerning clients seeking something special.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌟</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
                      <p className="text-gray-600">Highest quality companions with exceptional beauty and sophisticated charm.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Customized Service</h3>
                      <p className="text-gray-600">Personalized experiences tailored to your specific desires and preferences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💎</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Luxury Treatment</h3>
                      <p className="text-gray-600">VIP treatment with attention to every detail for an unforgettable experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-rose-100/80 to-pink-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Pink Special Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fantasy Fulfillment</h3>
                  <p className="text-gray-600">Special companions who understand and fulfill unique fantasies with discretion.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌹</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Romantic Getaways</h3>
                  <p className="text-gray-600">Perfect companions for romantic weekends and intimate vacation experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">👑</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Royal Treatment</h3>
                  <p className="text-gray-600">Experience royal-level service with companions who treat you like royalty.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Theme Experiences</h3>
                  <p className="text-gray-600">Specialized theme-based experiences with creative and imaginative companions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💕</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Intimate Sessions</h3>
                  <p className="text-gray-600">Private intimate experiences designed for maximum pleasure and satisfaction.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Venues</h3>
                  <p className="text-gray-600">Premium experiences at luxury hotels and exclusive private locations.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready for Pink Special Experience?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our Pink Special companions are available 24/7 for exclusive experiences in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-rose-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105">
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