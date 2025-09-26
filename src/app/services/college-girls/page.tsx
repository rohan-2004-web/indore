'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function CollegeGirlsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              College Girls in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Young energetic companions for memorable experiences - Fresh, vibrant and fun-loving
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919372662471" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16 border border-purple-100">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Why Choose Our College Girls?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/College Girls.webp" alt="College Girls" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎓</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Young & Energetic</h3>
                      <p className="text-gray-600">Vibrant college girls who bring enthusiasm and youthful energy to every encounter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💫</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fun & Spontaneous</h3>
                      <p className="text-gray-600">Playful companions perfect for casual dates and adventurous experiences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌸</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh & Beautiful</h3>
                      <p className="text-gray-600">Naturally beautiful young women with charming personalities and innocent appeal.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Modern & Connected</h3>
                      <p className="text-gray-600">Tech-savvy companions who understand modern lifestyle and preferences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-purple-100/80 to-pink-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our College Girl Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎬</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Movie Dates</h3>
                  <p className="text-gray-600">Fun movie companions for cinema dates and entertainment experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍕</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Casual Hangouts</h3>
                  <p className="text-gray-600">Relaxed companionship for cafes, restaurants and casual meetups.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Party Companions</h3>
                  <p className="text-gray-600">Energetic partners for parties, clubs, and nightlife adventures.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Shopping Partners</h3>
                  <p className="text-gray-600">Stylish companions for shopping trips and fashion consultations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Adventure Dates</h3>
                  <p className="text-gray-600">Adventurous companions for outdoor activities and exciting experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Special Occasions</h3>
                  <p className="text-gray-600">Sweet companions for birthdays, anniversaries and celebrations.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Meet College Girls?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Connect with vibrant college girls today. Available for fun dates and memorable experiences across Indore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919372662471" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
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
    </>
  )
}