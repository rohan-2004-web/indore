'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function HousewifeEscortsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I book housewife escorts in Indore?",
      answer: "Booking our housewife escorts is simple and highly confidential. Call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team is available 24/7 to help you connect with mature, experienced companions who understand your needs in Indore."
    },
    {
      question: "What makes housewife escorts different from other escort services?",
      answer: "Our housewife escorts bring maturity, life experience, and genuine warmth to companionship. They are nurturing, understanding, and offer emotional connection along with physical attraction. Their mature approach and caring nature provide a comfortable, relaxing experience."
    },
    {
      question: "Are housewife escort services available in all areas of Indore?",
      answer: "Yes, our housewife escort services are available across all residential areas of Indore including Vijay Nagar, Scheme 78, New Palasia, AB Road, Palasia, Bhawar Kuan, Airport Road, and other premium localities where mature companions can meet discreetly."
    },
    {
      question: "What occasions are housewife escorts perfect for?",
      answer: "Housewife escorts are ideal for intimate dinners, mature conversations, emotional support, lonely evenings, weekend companionship, travel partners, and situations where you need understanding and mature female company with genuine warmth and care."
    },
    {
      question: "How do you ensure privacy with housewife escort bookings?",
      answer: "Privacy is paramount with housewife escorts as discretion is crucial for both clients and companions. We maintain strict confidentiality, use secure communication channels, and ensure meetings are completely private and discreet to protect everyone's reputation."
    },
    {
      question: "What are the rates for housewife escort services in Indore?",
      answer: "Housewife escort rates vary based on the companion's experience, duration of service, and specific requirements. These mature companions offer exceptional value with their emotional maturity and genuine care. Contact us for detailed pricing information."
    },
    {
      question: "Can housewife escorts provide emotional support and companionship?",
      answer: "Absolutely! Our housewife escorts excel in providing emotional support, mature conversation, and genuine companionship. They understand life's complexities and can offer comfort, understanding, and meaningful connection beyond just physical attraction."
    },
    {
      question: "Are same-day bookings available for housewife escorts?",
      answer: "Yes, we accommodate same-day bookings for housewife escorts when available. Understanding that sometimes you need mature companionship urgently, we try our best to arrange meetings with experienced companions on short notice in Indore."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-green-200/60 via-teal-100/50 to-green-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-300/95 via-teal-200/90 to-green-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-green-400/30 to-teal-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-teal-400/25 to-green-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-green-300/20 to-teal-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100/90 to-teal-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-green-200/50">
              <span className="text-3xl">💚</span>
              <span className="text-green-800 font-bold text-lg">Mature & Caring Housewife Escorts in Indore</span>
              <span className="text-3xl">🏠</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-green-700 via-teal-500 to-green-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Housewife Escorts
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-teal-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                Warm & Understanding
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Mature Experienced Companions with Caring Nature & Emotional Warmth
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Intimate companionship • Emotional support • Mature conversations • Understanding nature • 24/7 availability across Indore
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-green-600 via-green-700 to-green-800 hover:from-green-700 hover:via-green-800 hover:to-green-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 border-2 border-green-400/30"
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
                <div className="text-4xl mb-3">💚</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mature Warmth</h3>
                <p className="text-gray-700 font-medium">Life experience with genuine caring nature</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Emotional Support</h3>
                <p className="text-gray-700 font-medium">Understanding companionship and emotional connection</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Privacy</h3>
                <p className="text-gray-700 font-medium">Utmost discretion and confidentiality guaranteed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-20 relative">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-teal-500 to-green-700 bg-clip-text text-transparent mb-6">
                Why Choose Housewife Escorts in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience mature companionship with our caring housewife escorts offering emotional warmth and understanding
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Housewife Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-green-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Housewife Escorts.jpg" alt="Housewife Escorts in Indore" className="w-full h-full object-cover object-top" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4 text-center">
                    💚 Mature & Caring Companions
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Experienced housewife escorts with mature wisdom, emotional warmth, and genuine caring nature perfect for intimate companionship and meaningful connections in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-teal-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-6">
                    🏠 Housewife Service Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">💚</span>
                      <span className="text-lg font-semibold text-gray-700">Mature life experience & wisdom</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🤗</span>
                      <span className="text-lg font-semibold text-gray-700">Nurturing and caring nature</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">💝</span>
                      <span className="text-lg font-semibold text-gray-700">Emotional support and understanding</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🏡</span>
                      <span className="text-lg font-semibold text-gray-700">Comfortable home-like warmth</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">💬</span>
                      <span className="text-lg font-semibold text-gray-700">Meaningful conversations & company</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🔐</span>
                      <span className="text-lg font-semibold text-gray-700">Strict privacy and discretion</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">⏰</span>
                      <span className="text-lg font-semibold text-gray-700">Available for extended companionship</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🌹</span>
                      <span className="text-lg font-semibold text-gray-700">Genuine warmth and affection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-r from-green-50/80 to-teal-50/80">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Everything you need to know about our housewife escort services in Indore
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-green-100/50 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left focus:outline-none hover:bg-green-50/50 transition-all duration-300"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        <span className={`text-2xl text-green-600 transform transition-transform duration-300 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}>
                          ▼
                        </span>
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 pb-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-teal-600/90"></div>
          <div className="relative z-10 w-full px-4 text-center">
            <h2 className="text-5xl font-bold mb-8">Ready for Mature Companionship?</h2>
            <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with caring housewife escorts for emotional support and meaningful companionship. Available 24/7 across Indore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-white text-green-600 px-12 py-6 rounded-full font-black text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-white/30"
              >
                <span className="text-2xl group-hover:animate-bounce">📞</span>
                <span>Call: +91 9372 662 471</span>
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-green-500 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-green-600 transition-all duration-500 transform hover:scale-110 shadow-2xl"
              >
                <span className="text-2xl group-hover:animate-bounce">💬</span>
                <span>WhatsApp Chat</span>
              </a>
              <Link 
                href="/services" 
                className="group inline-flex items-center justify-center gap-4 bg-teal-500 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-teal-600 transition-all duration-500 transform hover:scale-110 shadow-2xl"
              >
                <span className="text-2xl group-hover:animate-bounce">🔙</span>
                <span>All Services</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
          </div>
          <div className="w-full px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  ✨ Indore Premium Escort Service
                </h3>
                <p className="text-pink-100 mb-6 leading-relaxed font-semibold text-lg">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">🌟 Our Services</h3>
                <div className="space-y-3">
                  <a href="/services/celebrity-escorts" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">💎 Celebrity Escorts</a>
                  <a href="/services/college-girls" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🎓 College Girls</a>
                  <a href="/services/high-class-models" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">✨ Premium Models</a>
                  <a href="/services/local-beauties" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🏠 Local Beauties</a>
                  <a href="/services/unsatisfied-bhabhi" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👸 Unsatisfied Bhabhi</a>
                  <a href="/services/mature-escorts" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🌹 Mature Escorts</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">🔗 Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>
                  <a href="#faq" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">❓ FAQ</a>
                  <a href="tel:+919372662471" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
                  <a href="/" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">📞 Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">📞</span>
                    <a href="tel:+919372662471" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">💬</span>
                    <a href="https://wa.me/919372662471" className="text-green-200 hover:text-green-100 font-bold text-lg">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-purple-200 hover:text-purple-100 font-bold text-lg">Email Us</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-pink-200 font-bold text-lg">All Indore Areas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">🕒</span>
                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t-2 border-pink-400/40 mt-16 pt-10 text-center">
              <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">
                © 2024 Indore Premium Escort Service. All rights reserved. 🏆
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold">✅ 24/7 Available</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold">✅ 100% Verified</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold">✅ Complete Discretion</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold">✅ Premium Quality</span>
              </div>
              <p className="text-pink-200 font-semibold text-lg">
                🔞 Professional escort services for adults only. Must be 18+ to use our services. 🔞
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}