'use client'

import React from 'react'
import Link from 'next/link'

export default function UnsatisfiedFemalesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-500 to-violet-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Unsatisfied Females in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Mature women seeking meaningful connections - Experience authentic companionship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-violet-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-violet-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Female Companions?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Unsatisfied Females.webp" alt="Unsatisfied Females" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💗</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Emotional Connection</h3>
                      <p className="text-gray-600">Mature companions who value genuine emotional connections and meaningful relationships.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌺</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Life Experience</h3>
                      <p className="text-gray-600">Experienced women who understand life's complexities and offer wisdom and companionship.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🤗</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Nurturing Nature</h3>
                      <p className="text-gray-600">Caring companions who provide emotional support and understanding relationships.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌟</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Authentic Approach</h3>
                      <p className="text-gray-600">Genuine companions seeking real connections rather than superficial interactions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-violet-100/80 to-purple-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Female Companion Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Deep Conversations</h3>
                  <p className="text-gray-600">Meaningful conversations with intelligent women who appreciate deep discussions.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍷</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Dinner Dates</h3>
                  <p className="text-gray-600">Sophisticated dinner companions who appreciate fine dining and good conversation.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏡</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Home Companionship</h3>
                  <p className="text-gray-600">Comfortable home visits for intimate and personal companionship experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💕</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Emotional Support</h3>
                  <p className="text-gray-600">Caring support and understanding from mature women who value emotional intimacy.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌹</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Romance</h3>
                  <p className="text-gray-600">Romantic experiences with mature women who appreciate genuine affection and connection.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Activities</h3>
                  <p className="text-gray-600">Cultured companions for theater, art galleries, and intellectual social events.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Meet Female Companions?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our female companions are available 24/7 for meaningful connections in Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-violet-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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