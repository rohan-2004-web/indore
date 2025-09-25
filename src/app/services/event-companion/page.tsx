'use client'

import React from 'react'
import Link from 'next/link'

export default function EventCompanionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Event Companion in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Perfect companions for social events and parties - Make every occasion memorable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-yellow-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Event Companions?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Event Companion.webp" alt="Event Companion" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎉</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Event Expertise</h3>
                      <p className="text-gray-600">Experienced companions who excel at all types of social events and gatherings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Social Skills</h3>
                      <p className="text-gray-600">Excellent conversationalists who can mingle and network effectively at any event.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Elegant Presence</h3>
                      <p className="text-gray-600">Sophisticated companions who add glamour and elegance to any occasion.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎭</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Adaptable</h3>
                      <p className="text-gray-600">Versatile companions who adapt to any event atmosphere and requirements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-yellow-100/80 to-amber-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Event Companion Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎊</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Party Companion</h3>
                  <p className="text-gray-600">Fun and lively companions for birthday parties, celebrations, and festivities.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Events</h3>
                  <p className="text-gray-600">Professional companions for business events, conferences, and corporate functions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💒</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Wedding Functions</h3>
                  <p className="text-gray-600">Elegant companions for wedding ceremonies, receptions, and related celebrations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Events</h3>
                  <p className="text-gray-600">Sophisticated companions for art exhibitions, cultural shows, and premieres.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🥂</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cocktail Events</h3>
                  <p className="text-gray-600">Charming companions for cocktail parties, networking events, and social mixers.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Special Occasions</h3>
                  <p className="text-gray-600">Perfect partners for anniversaries, launches, and milestone celebrations.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-yellow-600 to-amber-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book Event Companion?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our event companions are available 24/7 for all occasions in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-yellow-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105">
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