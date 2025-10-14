'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function PremiumModelsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I book premium models in Indore?",
      answer: "Booking premium models is easy and professional. Call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team is available 24/7 to help you select the perfect premium model companion based on your event requirements and preferences."
    },
    {
      question: "What makes your premium models different from regular escort services?",
      answer: "Our premium models are professional runway and fashion models with extensive modeling experience, sophisticated style, and impeccable presentation. They bring fashion-industry standards of beauty, professionalism, and elegance to every engagement, making them perfect for high-end events and exclusive occasions."
    },
    {
      question: "Are premium model services available across all areas of Indore?",
      answer: "Yes, our premium model services are available across all premium areas of Indore including Vijay Nagar, AB Road, Palasia, Scheme 78, New Palasia, Bhawar Kuan, Airport Road, and other upscale locations. We provide both incall and outcall services for premium model companions."
    },
    {
      question: "What types of events are premium models perfect for?",
      answer: "Premium models are ideal for fashion shows, photography shoots, product launches, corporate events, brand promotions, luxury parties, high-end social gatherings, business functions, and exclusive events where professional presentation and sophisticated appearance are essential."
    },
    {
      question: "Do your premium models have professional modeling experience?",
      answer: "Yes, all our premium models have genuine professional modeling experience including runway shows, fashion photography, commercial shoots, and brand campaigns. They bring industry-standard professionalism, poise, and presentation skills to every engagement."
    },
    {
      question: "What are the rates for premium model services in Indore?",
      answer: "Premium model rates reflect their professional modeling background and sophisticated service. Rates vary based on the event duration, type of engagement, and specific requirements. Contact us directly for detailed pricing information tailored to your premium model booking needs."
    },
    {
      question: "Can premium models accompany me to corporate and business events?",
      answer: "Absolutely! Our premium models are perfect for corporate events, business functions, product launches, brand promotions, and professional networking events. Their sophisticated appearance and professional demeanor make them ideal companions for business occasions."
    },
    {
      question: "Do you provide same-day bookings for premium models?",
      answer: "While we recommend advance booking for premium models due to their professional schedules and high demand, we do accommodate same-day bookings when possible. Contact us as early as possible to check availability for your preferred premium model companion."
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
              <span className="text-3xl">📸</span>
              <span className="text-blue-800 font-bold text-lg">Premium Fashion Models in Indore</span>
              <span className="text-3xl">⭐</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-700 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Premium Models
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Elegance
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Professional Fashion Models with Industry Experience & Sophistication
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Runway experience • Photography shoots • Corporate events • Fashion shows • Premium companionship across Indore
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
                <div className="text-4xl mb-3">📸</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Professional Models</h3>
                <p className="text-gray-700 font-medium">Experienced runway and fashion models with industry credentials</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sophisticated Style</h3>
                <p className="text-gray-700 font-medium">Elegant presentation and impeccable fashion sense</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🎭</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Event Ready</h3>
                <p className="text-gray-700 font-medium">Perfect for fashion shows and high-end events</p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Model Features */}
        <section className="py-20 bg-gradient-to-br from-blue-200/70 via-purple-100/60 to-blue-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-6">
                Why Choose Premium Models in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience professional fashion modeling companionship with our exclusive premium models
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Premium Model Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Premium Models.jpg" alt="Premium Models in Indore" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                    📸 Professional Fashion Models
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Professional runway and fashion models with extensive industry experience, sophisticated style, and impeccable presentation for high-end events in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                    ⭐ Premium Model Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">📸</span>
                      <p className="font-semibold text-gray-700">Professional Modeling Experience</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">✨</span>
                      <p className="font-semibold text-gray-700">Sophisticated Fashion Expertise</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">👗</span>
                      <p className="font-semibold text-gray-700">Runway & Photography Experience</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">🎭</span>
                      <p className="font-semibold text-gray-700">Perfect for Fashion Events</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">🌟</span>
                      <p className="font-semibold text-gray-700">Premium 5-Star Presentation</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">🎯</span>
                      <p className="font-semibold text-gray-700">Professional & Reliable Service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Model Services Offered */}
              <div className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Premium Model Services in Indore</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">👗</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Fashion Shows</h3>
                    <p className="text-gray-600">Professional runway models with extensive fashion show experience and sophisticated presentation skills.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">📷</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Photography Shoots</h3>
                    <p className="text-gray-600">Experienced models for professional photography, commercial shoots, and brand campaigns throughout Indore.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🏢</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Events</h3>
                    <p className="text-gray-600">Sophisticated model companions for corporate functions, product launches, and business presentations.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🎪</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Brand Promotions</h3>
                    <p className="text-gray-600">Professional models for brand launches, promotional events, and luxury product presentations.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🌟</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Events</h3>
                    <p className="text-gray-600">Elite model companions for high-end parties, exclusive gatherings, and premium social events.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Companionship</h3>
                    <p className="text-gray-600">Exclusive premium model experience with complete professionalism, style, and sophisticated companionship.</p>
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
                Frequently Asked Questions - Premium Models
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about premium model services in Indore
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
                Have more questions about our premium model services? Contact us directly!
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