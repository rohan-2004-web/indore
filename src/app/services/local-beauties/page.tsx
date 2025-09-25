'use client'

import React from 'react'
import Link from 'next/link'

export default function LocalBeautiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Local Beauties in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Beautiful local companions who know Indore - Experience authentic local charm
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
                Why Choose Our Local Beauties?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Local Beauties.webp" alt="Local Beauties" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🏛️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Local Knowledge</h3>
                      <p className="text-gray-600">Our local beauties know Indore inside out - best places, restaurants, and hidden gems.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌺</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Natural Beauty</h3>
                      <p className="text-gray-600">Authentic local charm with natural beauty and traditional Indian elegance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🗣️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Language Comfort</h3>
                      <p className="text-gray-600">Comfortable communication in local languages including Hindi, Marathi, and English.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💖</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Warm Hospitality</h3>
                      <p className="text-gray-600">Traditional Indian hospitality with warm, caring, and friendly nature.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-pink-100/80 to-rose-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Local Beauty Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏰</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">City Tours</h3>
                  <p className="text-gray-600">Personal city tours with local beauties who know all the best spots in Indore.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍛</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Food Adventures</h3>
                  <p className="text-gray-600">Explore Indore's famous street food and restaurants with knowledgeable companions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Events</h3>
                  <p className="text-gray-600">Attend local festivals, cultural events, and traditional celebrations together.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Shopping Guide</h3>
                  <p className="text-gray-600">Personal shopping assistance at local markets and popular shopping destinations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Sightseeing</h3>
                  <p className="text-gray-600">Visit historic landmarks and scenic spots with beautiful local companions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Local Nightlife</h3>
                  <p className="text-gray-600">Experience Indore's nightlife and entertainment with local insider knowledge.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Meet Local Beauties?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our local beauties are available 24/7 across all areas of Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-rose-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-rose-600 transition-all duration-300 transform hover:scale-105">
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