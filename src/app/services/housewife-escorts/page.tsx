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
                    <img src="/images/services/Housewife Escorts.jpg" alt="Housewife Escorts in Indore" className="w-full h-full object-contain" />
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
        <section className="py-20 bg-gradient-to-br from-green-100/60 via-teal-50/50 to-green-200/60">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-teal-500 to-green-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Housewife Escorts
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about housewife escort services in Indore
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-100 to-teal-100 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-green-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-green-200/80 hover:to-teal-100/80 transition-all duration-200 flex justify-between items-center group"
                    >
                      <h3 className="text-xl font-bold text-green-900 pr-4 group-hover:text-teal-700">{faq.question}</h3>
                      <span className={`text-3xl transition-all duration-300 text-green-700 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8 bg-gradient-to-r from-green-50/90 to-teal-50/90">
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
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
      </div>
    </>
  )
}