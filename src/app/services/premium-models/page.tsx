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
      <div className="min-h-screen bg-gradient-to-br from-orange-200/60 via-amber-100/50 to-orange-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-300/95 via-amber-200/90 to-orange-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/30 to-amber-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-amber-400/25 to-orange-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100/90 to-amber-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-orange-200/50">
              <span className="text-3xl">📸</span>
              <span className="text-orange-800 font-bold text-lg">Professional Premium Models in Indore</span>
              <span className="text-3xl">✨</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-700 via-amber-500 to-orange-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Premium Models
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                Fashion & Elegance
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Professional Runway & Fashion Models with Sophisticated Style
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Fashion shows • Photography shoots • Corporate events • Product launches • High-end companionship across Indore
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 hover:from-orange-700 hover:via-orange-800 hover:to-orange-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 border-2 border-orange-400/30"
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
                <p className="text-gray-700 font-medium">Elegant companions with impeccable fashion sense</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Perfect Presentation</h3>
                <p className="text-gray-700 font-medium">Always perfectly groomed for any occasion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Model Features */}
        <section className="py-20 bg-gradient-to-br from-orange-200/70 via-amber-100/60 to-orange-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 bg-clip-text text-transparent mb-6">
                Why Choose Premium Models in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience professional modeling standards with our premium fashion models offering sophisticated companionship
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Premium Model Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Premium Models.jpg" alt="Premium Models in Indore" className="w-full h-full object-cover object-top" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 text-center">
                    📸 Professional Fashion Models
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Experienced runway and fashion models with sophisticated style, professional presentation, and impeccable fashion sense for discerning clients in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-amber-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6">
                    ⭐ Premium Model Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                      <span className="text-2xl mr-4">📸</span>
                      <p className="font-semibold text-gray-700">Professional Modeling Experience</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">👗</span>
                      <p className="font-semibold text-gray-700">Fashion Industry Standards</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                      <span className="text-2xl mr-4">✨</span>
                      <p className="font-semibold text-gray-700">Sophisticated Presentation</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">🎯</span>
                      <p className="font-semibold text-gray-700">Perfect for Corporate Events</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl">
                      <span className="text-2xl mr-4">🌟</span>
                      <p className="font-semibold text-gray-700">High-End Event Companionship</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">⚡</span>
                      <p className="font-semibold text-gray-700">24/7 Professional Availability</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium Model Services Offered */}
              <div className="bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Premium Model Services in Indore</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">👗</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Fashion Events</h3>
                    <p className="text-gray-600">Professional model companions for fashion shows, style events, and luxury brand promotions with runway experience.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">📷</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Photography Shoots</h3>
                    <p className="text-gray-600">Experienced premium models for professional photography, portfolio work, and commercial photo shoots.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🏢</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Events</h3>
                    <p className="text-gray-600">Sophisticated model companions for business functions, product launches, and corporate presentations.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🎪</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Brand Promotions</h3>
                    <p className="text-gray-600">Professional models for brand launches, promotional events, and marketing campaigns with fashion expertise.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🌟</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Parties</h3>
                    <p className="text-gray-600">Elegant premium model companions for high-end parties, exclusive social gatherings, and luxury events.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Experience</h3>
                    <p className="text-gray-600">Professional modeling standards with sophisticated companionship and impeccable presentation throughout Indore.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-orange-100/60 via-amber-50/50 to-orange-200/60">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-orange-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Premium Models
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about premium model services in Indore
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-100 to-amber-100 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-orange-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-orange-200/80 hover:to-amber-100/80 transition-all duration-200 flex justify-between items-center group"
                    >
                      <h3 className="text-xl font-bold text-orange-900 pr-4 group-hover:text-amber-700">{faq.question}</h3>
                      <span className={`text-3xl transition-all duration-300 text-orange-700 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-8 bg-gradient-to-r from-orange-50/90 to-amber-50/90">
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
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  📞 Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  💬 WhatsApp Chat
                </a>
                <Link href="/services" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  🔙 All Services
                </Link>
              </div>
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