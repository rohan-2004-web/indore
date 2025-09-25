'use client'

import React from 'react'
import Link from 'next/link'

export default function IndoreEscortsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Indore Escorts
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Premium local escorts with deep knowledge of Indore city - Your perfect local companions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-indigo-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Indore Escorts?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/indore escorts.webp" alt="Indore Escorts" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🏛️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">City Experts</h3>
                      <p className="text-gray-600">Local escorts who know every corner of Indore - best restaurants, hotels, and attractions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌆</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Locations</h3>
                      <p className="text-gray-600">Services available across all premium areas including Vijay Nagar, MG Road, and Palasia.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🚗</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fast Service</h3>
                      <p className="text-gray-600">Quick response times with companions available within 30 minutes across Indore.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💎</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Quality Assured</h3>
                      <p className="text-gray-600">Premium quality companions who maintain the highest standards of service.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-indigo-100/80 to-blue-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Indore Escort Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏨</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Hotel Services</h3>
                  <p className="text-gray-600">Premium services at all major hotels in Indore including Radisson, Marriott, and Lemon Tree.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Home Visits</h3>
                  <p className="text-gray-600">Private home visits across all residential areas of Indore with complete discretion.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Event Companion</h3>
                  <p className="text-gray-600">Perfect companions for business events, parties, and social gatherings in Indore.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Shopping Tours</h3>
                  <p className="text-gray-600">Personal shopping companions for visits to Treasure Island, C21 Mall, and local markets.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌃</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Nightlife Guide</h3>
                  <p className="text-gray-600">Experience Indore's nightlife with companions who know the best clubs and restaurants.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎭</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Local Culture</h3>
                  <p className="text-gray-600">Explore Indore's rich culture, food, and heritage with knowledgeable local companions.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book Indore Escorts?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now for instant booking. Our Indore escorts are available 24/7 across all areas of the city.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
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
}