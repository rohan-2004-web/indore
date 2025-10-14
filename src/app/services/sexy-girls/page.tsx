'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function SexyGirlsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I book sexy girls in Indore?",
      answer: "Booking our sexy girls is simple and discreet. Call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team is available 24/7 to help you select the perfect attractive companion based on your preferences for events, parties, or private meetings in Indore."
    },
    {
      question: "What makes your sexy girls different from regular escort services?",
      answer: "Our sexy girls are premium companions with stunning beauty, attractive personalities, and alluring charm. They are carefully selected for their physical attractiveness, engaging personalities, and complete discretion. Each companion is chosen for their appeal, intelligence, and professional service."
    },
    {
      question: "Are sexy girl services available in all areas of Indore?",
      answer: "Yes, our sexy girl services are available across all areas of Indore including Vijay Nagar, AB Road, Palasia, Scheme 78, New Palasia, Bhawar Kuan, Airport Road, and other locations. We provide both incall and outcall services for attractive companions throughout the city."
    },
    {
      question: "What events are sexy girls perfect for?",
      answer: "Sexy girls are ideal for parties, social gatherings, private events, dinner dates, entertainment functions, and personal companionship. They provide engaging and attractive companionship that enhances your social experiences and personal enjoyment."
    },
    {
      question: "How do you ensure privacy for sexy girl bookings?",
      answer: "Privacy and discretion are absolutely essential for our services. All client information is kept strictly confidential, our companions are trained in complete discretion, and we use secure communication channels. Your identity and meeting details are never shared or disclosed."
    },
    {
      question: "What are the rates for sexy girl services in Indore?",
      answer: "Sexy girl rates vary based on the duration, event type, and specific requirements. As attractive premium companions, rates reflect the quality of service provided. Contact us directly for detailed pricing information tailored to your booking needs."
    },
    {
      question: "Can sexy girls accompany me to social events?",
      answer: "Absolutely! Our sexy girls are perfect for social events, parties, entertainment functions, and casual gatherings. They are engaging, attractive, and understand social dynamics, making them ideal companions for various social occasions and entertainment events."
    },
    {
      question: "Are same-day bookings available for sexy girls?",
      answer: "While we recommend advance booking for the best selection, we do accommodate same-day bookings when possible. Contact us as early as possible to check availability for your preferred attractive companion in Indore."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-200/60 via-purple-100/50 to-blue-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/95 via-purple-200/90 to-blue-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-purple-400/25 to-blue-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-purple-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100/90 to-purple-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-blue-200/50">
              <span className="text-3xl">💋</span>
              <span className="text-blue-800 font-bold text-lg">Attractive Sexy Girls in Indore</span>
              <span className="text-3xl">🌟</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-700 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Sexy Girls
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Attractive & Alluring
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Stunning Attractive Companions with Beauty & Engaging Personalities
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Social events • Entertainment parties • Personal companionship • Engaging charm • Attractive companions across Indore
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50 border-2 border-blue-400/30"
              >
                <span className="text-3xl group-hover:animate-bounce">📞</span>
                <span>Call Now: +91 9372 662 471</span>
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 border-2 border-green-400/30"
              >
                <span className="text-3xl group-hover:animate-bounce">💬</span>
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Premium Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">💋</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Attractive Beauty</h3>
                <p className="text-gray-700 font-medium">Stunning attractive companions with alluring charm</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">�</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Engaging Personality</h3>
                <p className="text-gray-700 font-medium">Charming companions perfect for social events</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Discretion</h3>
                <p className="text-gray-700 font-medium">Total privacy guaranteed for all encounters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sexy Girls Service Features */}
        <section className="py-20 bg-gradient-to-br from-blue-200/70 via-purple-100/60 to-blue-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-6">
                Why Choose Sexy Girls in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience attractive companionship with our stunning sexy girls offering charm and alluring personalities
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Sexy Girls Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/sexy girls.webp" alt="Sexy Girls in Indore" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                    💋 Attractive Sexy Companions
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Stunning attractive companions with engaging charm, alluring personalities, and captivating beauty for memorable experiences in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                    ⭐ Sexy Girl Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">�</span>
                      <p className="font-semibold text-gray-700">Stunning Attractive Beauty</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">�</span>
                      <p className="font-semibold text-gray-700">Engaging & Charming Personality</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">🎭</span>
                      <p className="font-semibold text-gray-700">Perfect for Social Events & Parties</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">✨</span>
                      <p className="font-semibold text-gray-700">Premium Companion Experience</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">🔐</span>
                      <p className="font-semibold text-gray-700">Complete Privacy & Discretion</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">⚡</span>
                      <p className="font-semibold text-gray-700">Available Throughout Indore</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sexy Girl Services Offered */}
              <div className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Sexy Girl Services in Indore</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">�</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Party Companion</h3>
                    <p className="text-gray-600">Attractive companions for parties, social gatherings, and entertainment events with engaging charm.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">💬</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Social Events</h3>
                    <p className="text-gray-600">Charming companions for social gatherings, entertainment events, and casual meetups throughout Indore.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🍽️</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Dinner Dates</h3>
                    <p className="text-gray-600">Attractive companions for dinner dates, restaurant visits, and dining experiences across Indore.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🎭</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Entertainment Events</h3>
                    <p className="text-gray-600">Engaging companions for entertainment functions, parties, and fun social activities.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">💋</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Companionship</h3>
                    <p className="text-gray-600">Attractive personal companions for private meetings, casual encounters, and intimate experiences.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Experience</h3>
                    <p className="text-gray-600">Complete attractive companionship service with charm, beauty, and engaging personalities throughout Indore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-blue-100/60 via-purple-50/50 to-blue-200/60">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Sexy Girls
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about sexy girl services in Indore
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-100 to-purple-100 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-blue-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-blue-200/80 hover:to-purple-100/80 transition-all duration-200 flex justify-between items-center group"
                    >
                      <h3 className="text-xl font-bold text-blue-900 pr-4 group-hover:text-purple-700">{faq.question}</h3>
                      <span className={`text-3xl transition-all duration-300 text-blue-700 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8 bg-gradient-to-r from-blue-50/90 to-purple-50/90">
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 mb-8">
                Have more questions about our sexy girl services? Contact us directly!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  📞 Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  🔙 All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}