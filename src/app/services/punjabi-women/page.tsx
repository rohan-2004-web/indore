'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function PunjabiWomenPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Set page metadata
  useEffect(() => {
    document.title = 'Punjabi Women Escorts in Indore | Kudi Call Girls 24/7'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ Punjabi women escorts in Indore with 120+ beautiful kudi companions 🔥 Available 24/7 💯 Premium service ☎️ +91-9372662471')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'Punjabi women Indore, Punjabi kudi escorts, Punjabi call girls, Punjabi companions Indore, sardar girls, North Indian escorts')
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(metaKeywords)
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', 'https://saumyakapoor.in/services/punjabi-women')
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I book Punjabi women in Indore?",
      answer: "Booking our Punjabi women is simple and discreet. Call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team is available 24/7 to help you connect with beautiful Punjabi companions who bring cultural charm and vibrant energy to Indore."
    },
    {
      question: "What makes Punjabi women special for companionship?",
      answer: "Our Punjabi women are known for their natural beauty, warm personalities, and vibrant cultural charm. They bring the authentic Punjabi spirit with their lively nature, traditional values, and modern outlook, making them perfect companions for cultural events and intimate gatherings."
    },
    {
      question: "Are Punjabi women services available in all areas of Indore?",
      answer: "Yes, our Punjabi women services are available across all areas of Indore including Vijay Nagar, AB Road, Palasia, Scheme 78, New Palasia, Bhawar Kuan, Airport Road, and other locations. We provide both incall and outcall services with beautiful Punjabi companions."
    },
    {
      question: "What occasions are Punjabi women perfect for?",
      answer: "Punjabi women are ideal for cultural celebrations, Punjabi festivals, wedding functions, family gatherings, traditional events, dinner dates, and social occasions where their cultural charm and vibrant personality can enhance the experience."
    },
    {
      question: "How do you ensure privacy for Punjabi women bookings?",
      answer: "Privacy and discretion are paramount for Punjabi women services. All client information is kept strictly confidential, our companions understand the importance of discretion, and we use secure communication channels to protect your identity and meeting details."
    },
    {
      question: "What are the rates for Punjabi women services in Indore?",
      answer: "Punjabi women rates vary based on the duration, occasion type, and specific requirements. These companions offer excellent value with their cultural authenticity and warm companionship. Contact us directly for detailed pricing information for Punjabi women bookings."
    },
    {
      question: "Can Punjabi women accompany me to cultural and family events?",
      answer: "Absolutely! Our Punjabi women are perfect for cultural events, family functions, traditional celebrations, and Punjabi festivals. They understand cultural etiquette and can blend naturally into family and cultural gatherings with their authentic charm."
    },
    {
      question: "Are same-day bookings available for Punjabi women?",
      answer: "Yes, we accommodate same-day bookings for Punjabi women when available. Understanding cultural events often happen spontaneously, we try our best to arrange meetings with beautiful Punjabi companions on short notice in Indore."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300/95 via-orange-200/90 to-pink-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-orange-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-pink-200/50">
              <span className="text-3xl">🌸</span>
              <span className="text-pink-800 font-bold text-lg">Beautiful Punjabi Women in Indore</span>
              <span className="text-3xl">💖</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Punjabi Women
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Cultural Charm
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Beautiful Punjabi Companions with Vibrant Culture & Warm Hearts
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Cultural celebrations • Traditional events • Family functions • Warm companionship • 24/7 availability across Indore
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 hover:from-pink-700 hover:via-pink-800 hover:to-pink-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-pink-400/30"
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
                <div className="text-4xl mb-3">🌸</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Cultural Beauty</h3>
                <p className="text-gray-700 font-medium">Authentic Punjabi charm with natural beauty</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">💖</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Warm Hearts</h3>
                <p className="text-gray-700 font-medium">Loving nature with traditional values</p>
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
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Why Choose Punjabi Women in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience authentic Punjabi culture with our beautiful companions offering warmth and vibrant energy
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Punjabi Women Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Punjabi women.webp" alt="Punjabi Women in Indore" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4 text-center">
                    🌸 Beautiful Cultural Companions
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Authentic Punjabi women with natural beauty, cultural charm, and warm hearts perfect for traditional celebrations and intimate companionship in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    💖 Punjabi Women Service Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🌸</span>
                      <span className="text-lg font-semibold text-gray-700">Authentic Punjabi cultural beauty</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">💖</span>
                      <span className="text-lg font-semibold text-gray-700">Warm and loving personalities</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🎭</span>
                      <span className="text-lg font-semibold text-gray-700">Perfect for cultural celebrations</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                      <span className="text-lg font-semibold text-gray-700">Family-oriented and traditional values</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🗣️</span>
                      <span className="text-lg font-semibold text-gray-700">Fluent in Punjabi and Hindi</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🔐</span>
                      <span className="text-lg font-semibold text-gray-700">Complete discretion and privacy</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">⏰</span>
                      <span className="text-lg font-semibold text-gray-700">Available 24/7 across Indore</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">🎉</span>
                      <span className="text-lg font-semibold text-gray-700">Vibrant energy and cultural charm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-pink-100/60 via-orange-50/50 to-pink-200/60">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Punjabi Women
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about Punjabi women escort services in Indore
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-100 to-orange-100 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-pink-200/80 hover:to-orange-100/80 transition-all duration-200 flex justify-between items-center group"
                    >
                      <h3 className="text-xl font-bold text-pink-900 pr-4 group-hover:text-orange-700">{faq.question}</h3>
                      <span className={`text-3xl transition-all duration-300 text-pink-700 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8 bg-gradient-to-r from-pink-50/90 to-orange-50/90">
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
        <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/90 to-orange-600/90"></div>
          <div className="relative z-10 w-full px-4 text-center">
            <h2 className="text-5xl font-bold mb-8">Ready to Meet Beautiful Punjabi Women?</h2>
            <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Connect with authentic Punjabi companions for cultural celebrations and warm companionship. Available 24/7 across Indore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-white text-pink-600 px-12 py-6 rounded-full font-black text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-white/30"
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
                className="group inline-flex items-center justify-center gap-4 bg-orange-500 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-orange-600 transition-all duration-500 transform hover:scale-110 shadow-2xl"
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