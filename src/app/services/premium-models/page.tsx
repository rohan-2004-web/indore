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
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Premium Models in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Professional fashion models for sophisticated experiences - Elegant, refined and stunning
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
                Why Choose Our Premium Models?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/Premium Models.jpg" alt="Premium Models" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📸</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Models</h3>
                      <p className="text-gray-600">Experienced runway and fashion models with industry credentials and professional training.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Sophisticated Style</h3>
                      <p className="text-gray-600">Elegant companions with impeccable fashion sense and refined presentation.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">👗</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fashion Expertise</h3>
                      <p className="text-gray-600">Professional models with extensive fashion industry experience and runway expertise.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Perfect Presentation</h3>
                      <p className="text-gray-600">Always perfectly groomed and professionally presented for any high-end occasion.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-purple-100/80 to-pink-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Premium Model Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">👗</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Fashion Events</h3>
                  <p className="text-gray-600">Professional model companions for fashion shows and style events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">📷</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Photography Shoots</h3>
                  <p className="text-gray-600">Experienced models for professional photography and portfolio work.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Corporate Events</h3>
                  <p className="text-gray-600">Sophisticated companions for business functions and corporate presentations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎪</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Brand Promotions</h3>
                  <p className="text-gray-600">Professional models for brand launches and promotional events.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Luxury Parties</h3>
                  <p className="text-gray-600">Elegant model companions for high-end parties and exclusive gatherings.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Experience</h3>
                  <p className="text-gray-600">Professional modeling standards with sophisticated companionship throughout Indore.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-purple-100/60 via-pink-50/50 to-purple-200/60">
              <div className="w-full px-4">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent mb-6">
                    Frequently Asked Questions - Premium Models
                  </h2>
                  <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Get answers to common questions about premium model services in Indore
                  </p>
                </div>

                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gradient-to-br from-purple-100 to-pink-100 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-purple-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-purple-200/80 hover:to-pink-100/80 transition-all duration-200 flex justify-between items-center group"
                        >
                          <h3 className="text-xl font-bold text-purple-900 pr-4 group-hover:text-pink-700">{faq.question}</h3>
                          <span className={`text-3xl transition-all duration-300 text-purple-700 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                            ▼
                          </span>
                        </button>
                        {openFaq === index && (
                          <div className="px-8 pb-8 bg-gradient-to-r from-purple-50/90 to-pink-50/90">
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Meet Premium Models?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Connect with professional fashion models today. Available for high-end events and sophisticated experiences across Indore.
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