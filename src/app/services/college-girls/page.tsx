'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function CollegeGirlsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Set page metadata
  useEffect(() => {
    document.title = 'College Girl Escorts in Indore | Young & Fresh Call Girls 24/7'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ College girl escorts in Indore with 200+ young & fresh companions 🔥 Available 24/7 💯 Safe & discreet service ☎️ +91-9372662471')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'college girl escorts Indore, young call girls Indore, fresh escorts, college girls service, student escorts Indore, young companions')
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(metaKeywords)
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', 'https://saumyakapoor.in/services/college-girls')
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I book college girls in Indore?",
      answer: "Booking college girls is easy and discrete. Call us at +91 9372662471, send a WhatsApp message, or email us. Our team will help you connect with vibrant college companions based on your preferences for fun dates, casual hangouts, or special occasions in Indore."
    },
    {
      question: "What makes college girl companions special?",
      answer: "Our college girls bring youthful energy, fresh perspectives, and genuine enthusiasm to every encounter. They are fun-loving, spontaneous, and perfect for casual dates, movie nights, shopping trips, and adventures. Each college girl is carefully selected for her charm, beauty, and vibrant personality."
    },
    {
      question: "What activities are college girls perfect for?",
      answer: "College girls are ideal for movie dates, casual cafe hangouts, shopping trips, party companionship, adventure dates, birthday celebrations, and fun social activities. They bring energy and excitement to nightlife, concerts, festivals, and any activity requiring youthful enthusiasm and fresh company."
    },
    {
      question: "Are college girl services available throughout Indore?",
      answer: "Yes, our college girl companions are available across all areas of Indore including Vijay Nagar, Sapna Sangeeta, Dewas Road, AB Road, MG Road, and other major locations. We provide service 24/7 with advance booking recommended for the best companion selection."
    },
    {
      question: "How much do college girl companion services cost?",
      answer: "College girl companion rates vary based on duration, activity type, and specific requirements. Our rates are competitive and reasonable for the youthful energy and fun experience provided. Contact us directly for detailed pricing information tailored to your college girl companion booking needs."
    },
    {
      question: "Can I request specific types of college girls?",
      answer: "Absolutely! You can specify preferences for personality types, interests, appearance, age range (within legal limits), and activity preferences. We have college girls with various backgrounds, interests, and personalities to match your ideal companion for any occasion or activity type."
    },
    {
      question: "Is privacy maintained with college girl bookings?",
      answer: "Yes, complete privacy and discretion are guaranteed. All college girl bookings are handled confidentially, and both client and companion privacy is strictly maintained. We use secure communication channels and ensure all interactions remain private and professional."
    },
    {
      question: "Are same-day college girl bookings available?",
      answer: "While we recommend advance booking for the best college girl companion selection, same-day bookings are often possible depending on availability. Contact us as early as possible to check availability for your preferred college girl companion in Indore."
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
              <span className="text-3xl">🎓</span>
              <span className="text-blue-800 font-bold text-lg">Vibrant College Girls in Indore</span>
              <span className="text-3xl">💖</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-700 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              College Girls
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Youthful Energy
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Young Energetic Companions with Fresh Perspectives & Vibrant Personalities
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Fun dates • Movie nights • Shopping trips • Party companionship • Adventure dates • Fresh energy across Indore
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
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Young & Energetic</h3>
                <p className="text-gray-700 font-medium">Vibrant college companions with youthful enthusiasm</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">💖</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Fresh Perspectives</h3>
                <p className="text-gray-700 font-medium">Fun-loving companions with genuine enthusiasm</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Adventure Ready</h3>
                <p className="text-gray-700 font-medium">Perfect for fun activities and memorable experiences</p>
              </div>
            </div>
          </div>
        </section>

        {/* College Girls Features */}
        <section className="py-20 bg-gradient-to-br from-blue-200/70 via-purple-100/60 to-blue-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-blue-700 bg-clip-text text-transparent mb-6">
                Why Choose College Girls in Indore?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience youthful energy and fresh companionship with our vibrant college girl companions
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* College Girls Photo */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-100/50">
                  <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/College Girls.webp" alt="College Girls in Indore" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
                    🎓 Vibrant College Companions
                  </h3>
                  <p className="text-gray-700 text-lg text-center font-medium">
                    Young energetic college girls with fresh perspectives, genuine enthusiasm, and vibrant personalities for memorable experiences in Indore.
                  </p>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                    ⭐ College Girl Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">🎓</span>
                      <p className="font-semibold text-gray-700">Youthful Energy & Enthusiasm</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">💖</span>
                      <p className="font-semibold text-gray-700">Fresh Perspectives & Fun Personalities</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                      <span className="text-2xl mr-4">🎉</span>
                      <p className="font-semibold text-gray-700">Perfect for Fun Activities & Adventures</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="text-2xl mr-4">🌟</span>
                      <p className="font-semibold text-gray-700">Charming & Vibrant Companions</p>
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

              {/* College Girl Services Offered */}
              <div className="bg-gradient-to-r from-blue-100/80 to-purple-100/80 rounded-3xl p-12">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">College Girl Services in Indore</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🎬</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Movie Dates</h3>
                    <p className="text-gray-600">Fun-loving college companions for movie nights, cinema experiences, and entertainment activities throughout Indore.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🛍️</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Shopping Trips</h3>
                    <p className="text-gray-600">Energetic companions for shopping adventures, mall visits, and fashion exploration across Indore.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🎉</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Party Companionship</h3>
                    <p className="text-gray-600">Vibrant college girls for parties, social events, celebrations, and nightlife experiences.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">☕</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Casual Hangouts</h3>
                    <p className="text-gray-600">Relaxed companions for cafe visits, casual dates, and friendly hangout sessions throughout the city.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">🎒</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Adventure Dates</h3>
                    <p className="text-gray-600">Adventurous college companions for outdoor activities, exploring, and fun adventure experiences.</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Youthful Experience</h3>
                    <p className="text-gray-600">Complete college girl experience with fresh energy, enthusiasm, and vibrant companionship throughout Indore.</p>
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
                Frequently Asked Questions - College Girls
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about college girl services in Indore
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
                Have more questions about our college girl services? Contact us directly!
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