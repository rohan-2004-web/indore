'use client'

import React from 'react'
import Link from 'next/link'

export default function MatureEscortsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mature Escorts in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Experienced mature companions with sophistication - Wisdom meets beauty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-amber-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Mature Escorts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Mature Escorts.webp" alt="Mature Escorts" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🧠</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Life Experience</h3>
                      <p className="text-gray-600">Mature companions with rich life experience who understand deep conversations and connections.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌹</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Timeless Beauty</h3>
                      <p className="text-gray-600">Elegant mature women who maintain their beauty and charm with grace and sophistication.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎓</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Intellectual Companionship</h3>
                      <p className="text-gray-600">Well-educated companions who can engage in meaningful discussions on various topics.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💝</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Emotional Maturity</h3>
                      <p className="text-gray-600">Emotionally mature companions who provide stable and understanding relationships.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-amber-100/80 to-orange-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Mature Escort Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍷</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Wine & Dine</h3>
                  <p className="text-gray-600">Sophisticated dinner companions who appreciate fine dining and quality wines.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">📚</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Intellectual Discussions</h3>
                  <p className="text-gray-600">Engaging conversations about literature, art, politics, and life experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Events</h3>
                  <p className="text-gray-600">Perfect companions for theater, concerts, art galleries, and cultural activities.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Business Companion</h3>
                  <p className="text-gray-600">Professional companions for business events, conferences, and corporate functions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌙</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Evening Companion</h3>
                  <p className="text-gray-600">Elegant evening companions for intimate dinners and sophisticated social events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏡</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Home Visits</h3>
                  <p className="text-gray-600">Comfortable home companionship with mature women who value genuine connections.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book Mature Escorts?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our mature escorts are available 24/7 across all premium locations in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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