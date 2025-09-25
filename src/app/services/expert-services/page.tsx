'use client'

import React from 'react'
import Link from 'next/link'

export default function ExpertServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Expert Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Professional escort services with specialized expertise - The masters of their craft
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-cyan-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our Expert Services?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/expert services.webp" alt="Expert Services" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎓</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Highly Trained</h3>
                      <p className="text-gray-600">Professionally trained companions with specialized skills in various service areas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Top Rated</h3>
                      <p className="text-gray-600">Our expert services have consistently received 5-star ratings from satisfied clients.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🔧</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Specialized Skills</h3>
                      <p className="text-gray-600">Each companion specializes in specific areas to provide expert-level service.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🏆</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Award Winning</h3>
                      <p className="text-gray-600">Industry-recognized excellence with multiple awards for service quality.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-cyan-100/80 to-teal-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Expert Service Categories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Business Expert</h3>
                  <p className="text-gray-600">Professional companions with business acumen for corporate events and meetings.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Cultural Expert</h3>
                  <p className="text-gray-600">Art, culture, and heritage specialists for sophisticated social gatherings.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Travel Expert</h3>
                  <p className="text-gray-600">Multilingual travel companions with extensive knowledge of destinations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍷</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Lifestyle Expert</h3>
                  <p className="text-gray-600">Specialists in fine dining, wine, and luxury lifestyle experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💃</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Entertainment Expert</h3>
                  <p className="text-gray-600">Professional entertainers with skills in dancing, music, and performance arts.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🧘</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Wellness Expert</h3>
                  <p className="text-gray-600">Certified wellness and relaxation specialists for therapeutic companionship.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-cyan-600 to-teal-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Book Expert Services?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Contact us now to discuss your specific needs. Our experts are available for consultations and bookings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  📞 Call: +91 9372 662 471
                </a>
                <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105">
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