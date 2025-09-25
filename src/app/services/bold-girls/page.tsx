'use client'

import React from 'react'
import Link from 'next/link'

export default function BoldGirlsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-pink-500 to-red-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bold Girls
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Confident and adventurous companions - Fearless beauties who embrace life fully
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-red-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Bold Girls?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/bold girls.webp" alt="Bold Girls" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔥</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Confident Spirit</h3>
                      <p className="text-gray-600">Bold and confident companions who bring energy and excitement to every encounter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⚡</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Adventurous Nature</h3>
                      <p className="text-gray-600">Fearless companions ready for new experiences and adventures with you.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💪</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Strong Personality</h3>
                      <p className="text-gray-600">Independent and strong-minded companions with captivating personalities.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌟</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Magnetic Charm</h3>
                      <p className="text-gray-600">Irresistibly charming companions who command attention wherever they go.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-red-100/80 to-orange-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Bold Girl Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Party Companion</h3>
                  <p className="text-gray-600">Energetic party companions who know how to have fun and make memories.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Adventure Trips</h3>
                  <p className="text-gray-600">Adventurous companions for trips, outdoor activities, and exciting experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌃</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Night Out</h3>
                  <p className="text-gray-600">Perfect companions for clubbing, concerts, and vibrant nightlife experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Event Energizer</h3>
                  <p className="text-gray-600">Dynamic companions who bring life and energy to any event or gathering.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💃</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Dance Partner</h3>
                  <p className="text-gray-600">Skilled dancers who love to move and groove on the dance floor.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎤</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Entertainment</h3>
                  <p className="text-gray-600">Multi-talented entertainers with bold personalities and captivating performances.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Meet Bold Girls?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for unforgettable experiences. Our bold girls are ready to bring excitement and adventure to your life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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