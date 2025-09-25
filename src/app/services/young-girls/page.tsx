'use client'

import React from 'react'
import Link from 'next/link'

export default function YoungGirlsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Young Girls in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Young beautiful companions for unforgettable experiences - Fresh energy and charm
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-emerald-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Young Girls?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Young Girls.webp" alt="Young Girls" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌸</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Beauty</h3>
                      <p className="text-gray-600">Young companions with natural beauty, fresh energy, and youthful charm.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Energetic Spirit</h3>
                      <p className="text-gray-600">Vibrant and enthusiastic companions who bring excitement to every encounter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎉</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fun-Loving Nature</h3>
                      <p className="text-gray-600">Playful companions who love adventure and creating memorable experiences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💫</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Open-Minded</h3>
                      <p className="text-gray-600">Modern young women with open attitudes and willingness to explore new experiences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-emerald-100/80 to-green-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Young Girl Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Party Companion</h3>
                  <p className="text-gray-600">Energetic companions perfect for parties, celebrations, and nightlife adventures.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Adventure Partner</h3>
                  <p className="text-gray-600">Adventurous companions for outdoor activities, trips, and exciting experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Modern Connection</h3>
                  <p className="text-gray-600">Tech-savvy young companions who understand modern lifestyle and trends.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Entertainment</h3>
                  <p className="text-gray-600">Fun companions for concerts, clubs, entertainment venues, and social events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💕</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Romance</h3>
                  <p className="text-gray-600">Sweet romantic companions who bring passion and excitement to relationships.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fresh Experience</h3>
                  <p className="text-gray-600">New and exciting experiences with young companions full of life and energy.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Meet Young Girls?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our young companions are available 24/7 across all trendy locations in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
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