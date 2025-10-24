'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function VIPEscortsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Set page metadata
  useEffect(() => {
    document.title = 'VIP Escorts in Indore | Luxury High-Class Call Girls 24/7'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ VIP escorts in Indore with 300+ luxury high-class companions 🔥 Available 24/7 💯 Elite service ☎️ +91-9372662471')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'VIP escorts Indore, luxury call girls Indore, high-class escorts, elite companions Indore, premium VIP service, luxury escort service')
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(metaKeywords)
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', 'https://saumyakapoor.in/services/vip-escorts')
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What makes VIP escort services different from regular escort services?",
      answer: "VIP escort services offer the ultimate luxury experience with premium companions who provide exclusive, high-end companionship. Our VIP escorts are carefully selected for their beauty, sophistication, intelligence, and discretion. They cater to discerning clients who demand the finest quality service and complete privacy."
    },
    {
      question: "How can I book VIP escorts in Indore?",
      answer: "Booking VIP escorts is simple and discreet. Call us directly at +91 9372662471, send a WhatsApp message, or email us. Our VIP booking team provides personalized service and is available 24/7 to help you select the perfect VIP companion based on your exclusive requirements and preferences."
    },
    {
      question: "Are VIP escort services available in all premium areas of Indore?",
      answer: "Yes, our VIP escort services are available across all premium areas of Indore including Vijay Nagar, AB Road, Palasia, Scheme 78, New Palasia, Bhawar Kuan, Airport Road, and other luxury locations. We provide both incall at luxury venues and outcall services for VIP clients."
    },
    {
      question: "What type of events are VIP escorts perfect for?",
      answer: "VIP escorts are ideal for high-end corporate events, business meetings, luxury dinners, exclusive parties, VIP gatherings, award ceremonies, premium travel, and sophisticated social functions. They provide elite companionship that enhances your status at prestigious occasions."
    },
    {
      question: "How do you ensure complete privacy for VIP clients?",
      answer: "Privacy and discretion are absolutely paramount for VIP escort services. All client information is kept strictly confidential with advanced security measures, our VIP escorts are trained in ultimate discretion, and we use secure communication channels. Your identity and arrangements are never disclosed."
    },
    {
      question: "What are the rates for VIP escort services in Indore?",
      answer: "VIP escort rates reflect the premium, exclusive nature of the service and vary based on duration, specific requirements, and companion selection. As our most luxurious offering, VIP services command premium pricing. Contact us directly for detailed VIP pricing information tailored to your needs."
    },
    {
      question: "Can VIP escorts accompany me to high-profile business events?",
      answer: "Absolutely! Our VIP escorts are perfect for high-profile business events, corporate functions, executive meetings, and professional networking events. They are highly intelligent, well-educated, and understand business protocol, making them ideal VIP companions for important business occasions."
    },
    {
      question: "Do you provide same-day VIP escort bookings?",
      answer: "While we recommend advance booking for VIP escorts due to their exclusive availability and high demand, we do accommodate same-day VIP bookings when possible. For the best VIP experience, please contact us as early as possible to ensure your preferred VIP companion is available."
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
              <span className="text-3xl">👑</span>
              <span className="text-blue-800 font-bold text-lg">Ultimate VIP Escorts in Indore</span>
              <span className="text-3xl">💎</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-700 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              VIP Escorts
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ultimate Luxury
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Elite VIP Companions for Discerning Clients Seeking Ultimate Luxury
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Exclusive VIP experience • High-profile events • Corporate functions • Ultimate discretion • Premium companionship across Indore
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
                <div className="text-4xl mb-3">👑</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Ultimate Luxury</h3>
                <p className="text-gray-700 font-medium">Premium VIP companions with highest sophistication</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🏆</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Elite Companionship</h3>
                <p className="text-gray-700 font-medium">Intelligent, cultured companions for high-society events</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Absolute Discretion</h3>
                <p className="text-gray-700 font-medium">Complete privacy guaranteed for VIP clients</p>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Service Features */}
        <section className="py-20 bg-gradient-to-br from-blue-200/70 via-purple-100/60 to-blue-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-6">
                Why Choose VIP Escorts in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience ultimate luxury companionship with our exclusive VIP escorts offering elite service
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* VIP Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/VIP Escorts.jpg" alt="VIP Escorts in Indore" className="w-full h-full object-cover object-center" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                    👑 Ultimate VIP Companions
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Elite luxury companions offering the highest level of sophistication, intelligence, and discretion for discerning clients seeking the ultimate VIP experience in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                    ⭐ VIP Service Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">👑</span>
                      <p className="font-semibold text-gray-700">Ultimate Luxury Companionship</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">🏆</span>
                      <p className="font-semibold text-gray-700">Elite Level Intelligence & Culture</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">💼</span>
                      <p className="font-semibold text-gray-700">Perfect for Executive & VIP Events</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">🌟</span>
                      <p className="font-semibold text-gray-700">Premium 5-Star Service Experience</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">🔐</span>
                      <p className="font-semibold text-gray-700">Maximum Privacy & Confidentiality</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">⚡</span>
                      <p className="font-semibold text-gray-700">Priority VIP Booking & Response</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VIP Services Offered */}
              <div className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">VIP Escort Services in Indore</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Executive Companion</h3>
                    <p className="text-gray-600">High-profile VIP companions for business meetings, executive events, and corporate functions with ultimate sophistication.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🌟</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Experience</h3>
                    <p className="text-gray-600">Premium VIP companionship at 5-star hotels, exclusive venues, and luxury locations throughout Indore.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🎭</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">High-Society Events</h3>
                    <p className="text-gray-600">Elite VIP escorts for exclusive parties, award ceremonies, galas, and high-profile social gatherings.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">✈️</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Travel</h3>
                    <p className="text-gray-600">Premium VIP travel companions for business trips, luxury vacations, and exclusive getaway experiences.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🍽️</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Fine Dining</h3>
                    <p className="text-gray-600">Sophisticated VIP companions for exclusive restaurant experiences and luxury dining at Indore's finest venues.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">👑</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Ultimate VIP Service</h3>
                    <p className="text-gray-600">Exclusive, premium VIP escort experience with complete luxury, discretion, and personalized attention.</p>
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
                Frequently Asked Questions - VIP Escorts
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about VIP escort services in Indore
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
                Have more questions about our VIP escort services? Contact us directly!
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