'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function UnsatisfiedBhabhiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Set page metadata
  useEffect(() => {
    document.title = 'Unsatisfied Bhabhi Escorts in Indore | Married Women 24/7'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ Unsatisfied bhabhi escorts in Indore with 100+ married women companions 🔥 Available 24/7 💯 Discreet service ☎️ +91-9372662471')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'unsatisfied bhabhi Indore, married women escorts, lonely bhabhi, unsatisfied housewife, married companions Indore')
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(metaKeywords)
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', 'https://saumyakapoor.in/services/unsatisfied-bhabhi')
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I book unsatisfied bhabhi services in Indore?",
      answer: "Booking is simple and completely discreet. Call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team understands the sensitive nature of these services and ensures absolute privacy when connecting you with experienced, unsatisfied bhabhis seeking excitement."
    },
    {
      question: "What makes unsatisfied bhabhi services special?",
      answer: "Our unsatisfied bhabhi companions are mature, experienced women who understand the needs of discerning gentlemen. They bring real-life experience, emotional maturity, and genuine desire for meaningful connections. Each bhabhi is carefully selected for their discretion, experience, and authentic companionship."
    },
    {
      question: "Are all your bhabhi companions verified and genuine?",
      answer: "Yes, absolutely! All our unsatisfied bhabhi companions are 100% genuine, verified, and carefully screened. We ensure they are authentic housewives seeking excitement and companionship. Every interaction is real and meaningful, not scripted or artificial."
    },
    {
      question: "What areas in Indore do you provide bhabhi services?",
      answer: "Our unsatisfied bhabhi services are available across all major areas of Indore including Vijay Nagar, AB Road, Saket, Scheme 78, Palasia, Bhawar Kuan, and surrounding areas. We offer both incall and outcall services with complete discretion."
    },
    {
      question: "How do you ensure privacy and discretion?",
      answer: "Privacy is our absolute priority for bhabhi services. All client information is kept strictly confidential, our companions are trained in complete discretion, and we use secure communication channels. Given the sensitive nature, we take extra precautions to protect everyone's identity and reputation."
    },
    {
      question: "What are the rates for unsatisfied bhabhi services?",
      answer: "Our rates vary based on the companion, duration, and service requirements. We offer competitive pricing for authentic experiences with mature companions. Contact us directly for detailed pricing information tailored to your specific preferences and requirements."
    },
    {
      question: "Are these services available 24/7?",
      answer: "Yes, our unsatisfied bhabhi services are available 24/7 across Indore. Whether you need companionship during the day, evening, or late night, our experienced bhabhis are available to provide authentic, mature companionship whenever you need it."
    },
    {
      question: "What can I expect from the experience?",
      answer: "Expect genuine, mature companionship from experienced women who understand life and relationships. Our unsatisfied bhabhis offer authentic connections, meaningful conversations, and intimate experiences that only come with real maturity and life experience."
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
              <span className="text-3xl">💋</span>
              <span className="text-pink-800 font-bold text-lg">Premium Unsatisfied Bhabhi in Indore</span>
              <span className="text-3xl">🌹</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Unsatisfied Bhabhi
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Experienced Companions
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Unsatisfied Bhabhi with Mature Experience & Seeking Excitement
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Mature companions • Experienced service • Private meetings • Discrete relationships • 24/7 companionship across Indore
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
                <div className="text-4xl mb-3">💋</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mature Experience</h3>
                <p className="text-gray-700 font-medium">Experienced companions seeking new excitement</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">�</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Intimate Connections</h3>
                <p className="text-gray-700 font-medium">Perfect for meaningful private encounters</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Discretion</h3>
                <p className="text-gray-700 font-medium">Absolute privacy for mature relationships</p>
              </div>
            </div>
          </div>
        </section>

        {/* Celebrity Service Features */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Why Choose Unsatisfied Bhabhi in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience mature companionship with experienced bhabhis seeking excitement and meaningful connections
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Celebrity Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Unsatisfied Bhabhi.webp" alt="Unsatisfied Bhabhi in Indore" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4 text-center">
                    💋 Premium Bhabhi Companions
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Model-like beauty, sophisticated personalities, and star-quality service for discerning clients seeking the ultimate luxury experience in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    ⭐ Celebrity Service Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">👑</span>
                      <p className="font-semibold text-gray-700">Premium Model-Like Appearance</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">🎭</span>
                      <p className="font-semibold text-gray-700">Perfect for High-Society Events</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">💼</span>
                      <p className="font-semibold text-gray-700">Corporate & Business Functions</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">🌟</span>
                      <p className="font-semibold text-gray-700">VIP Treatment & Luxury Experience</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">🔐</span>
                      <p className="font-semibold text-gray-700">Complete Discretion & Privacy</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">⚡</span>
                      <p className="font-semibold text-gray-700">24/7 Bhabhi Escort Availability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bhabhi Services Offered */}
              <div className="bg-gradient-to-r from-pink-100/80 to-orange-100/80 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Unsatisfied Bhabhi Services in Indore</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">�</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Home Visits</h3>
                    <p className="text-gray-600">Discreet home visit services with mature, experienced bhabhis seeking excitement and intimate companionship in private settings.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">💋</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Intimate Encounters</h3>
                    <p className="text-gray-600">Genuine intimate experiences with unsatisfied bhabhis who bring real emotion, maturity, and authentic connections to every encounter.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">�</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Mature Companionship</h3>
                    <p className="text-gray-600">Experience companionship with mature women who understand life, relationships, and the art of meaningful conversation and connection.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🔒</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Discretion</h3>
                    <p className="text-gray-600">Absolute privacy guaranteed with experienced bhabhis who understand the importance of discretion and maintaining confidentiality.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">💕</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Emotional Connection</h3>
                    <p className="text-gray-600">Form genuine emotional connections with unsatisfied bhabhis seeking meaningful relationships and authentic intimate experiences.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">⏰</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Timing</h3>
                    <p className="text-gray-600">24/7 availability with mature bhabhi companions who understand your schedule and provide companionship at convenient times.</p>
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
                Frequently Asked Questions - Unsatisfied Bhabhi
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about unsatisfied bhabhi services in Indore
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

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 mb-8">
                Have more questions about our unsatisfied bhabhi services? Contact us directly!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  📞 Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
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