'use client'

import React from 'react'
import Link from 'next/link'

export default function SlimEscortsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Slim Escorts in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Elegant slim companions with perfect figure - Experience beauty in its finest form
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-teal-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Slim Escorts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Slim Escorts.webp" alt="Slim Escorts" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Perfect Figure</h3>
                      <p className="text-gray-600">Our slim escorts maintain perfect figures with elegant proportions and graceful appearance.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💃</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Graceful Movements</h3>
                      <p className="text-gray-600">Experience the elegance of companions who carry themselves with poise and sophistication.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌟</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fashion Forward</h3>
                      <p className="text-gray-600">Stylish companions who understand fashion and look stunning in any attire.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Focused Service</h3>
                      <p className="text-gray-600">Dedicated to providing exceptional companionship with attention to every detail.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-teal-100/80 to-cyan-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Slim Escort Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">📸</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Photo Shoots</h3>
                  <p className="text-gray-600">Professional companions for photography sessions and modeling events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">👗</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fashion Events</h3>
                  <p className="text-gray-600">Stylish partners for fashion shows, launches, and designer events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍸</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cocktail Parties</h3>
                  <p className="text-gray-600">Elegant companions for cocktail parties and social networking events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏖️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Beach Companion</h3>
                  <p className="text-gray-600">Perfect partners for beach vacations and outdoor leisure activities.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Entertainment</h3>
                  <p className="text-gray-600">Fun-loving companions for entertainment venues and nightlife experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Dates</h3>
                  <p className="text-gray-600">Sophisticated dating experiences with elegant and charming companions.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book Slim Escorts?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our slim escorts are available 24/7 across all premium locations in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
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