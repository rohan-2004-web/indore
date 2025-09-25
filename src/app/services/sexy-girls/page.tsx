'use client'

import React from 'react'
import Link from 'next/link'

export default function SexyGirlsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Sexy Girls
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Stunning and alluring companions - Captivating beauties with irresistible charm
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
                Why Choose Our Sexy Girls?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/sexy girls.webp" alt="Sexy Girls" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💋</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Irresistible Appeal</h3>
                      <p className="text-gray-600">Stunning companions with captivating beauty and magnetic personalities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌹</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Sensual Grace</h3>
                      <p className="text-gray-600">Elegant and sensual companions who embody femininity and grace.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Mesmerizing Beauty</h3>
                      <p className="text-gray-600">Breathtakingly beautiful companions who turn heads wherever they go.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔥</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Passionate Spirit</h3>
                      <p className="text-gray-600">Passionate and engaging companions who bring warmth to every moment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-rose-100/80 to-pink-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Sexy Girl Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💖</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Romance Partner</h3>
                  <p className="text-gray-600">Perfect companions for romantic dinners, intimate evenings, and special occasions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍾</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Dating</h3>
                  <p className="text-gray-600">Sophisticated dating experiences at premium venues and exclusive locations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌆</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Night Companion</h3>
                  <p className="text-gray-600">Alluring companions for evening entertainment and nightlife adventures.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Photo Sessions</h3>
                  <p className="text-gray-600">Professional modeling for private photo sessions and artistic collaborations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Vacation Partner</h3>
                  <p className="text-gray-600">Beautiful travel companions for vacations, getaways, and romantic trips.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fantasy Experience</h3>
                  <p className="text-gray-600">Role-play and fantasy experiences with creative and imaginative companions.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Meet Sexy Girls?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for enchanting experiences. Our sexy girls are ready to make your dreams come true.
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