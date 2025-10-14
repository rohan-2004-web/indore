'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'

export default function CollegeGirlsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
      <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              College Girls in Indore
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Young energetic companions for memorable experiences - Fresh, vibrant and fun-loving
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
                Why Choose Our College Girls?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                    <img src="/images/services/College Girls.webp" alt="College Girls" className="w-full h-full object-contain" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🎓</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Young & Energetic</h3>
                      <p className="text-gray-600">Vibrant college girls who bring enthusiasm and youthful energy to every encounter.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">💫</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fun & Spontaneous</h3>
                      <p className="text-gray-600">Playful companions perfect for casual dates and adventurous experiences.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">🌸</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh & Beautiful</h3>
                      <p className="text-gray-600">Naturally beautiful young women with charming personalities and innocent appeal.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">📱</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Modern & Connected</h3>
                      <p className="text-gray-600">Tech-savvy companions who understand modern lifestyle and preferences.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Offered */}
            <div className="bg-gradient-to-r from-purple-100/80 to-pink-100/80 rounded-3xl p-12 mb-16">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our College Girl Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎬</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Movie Dates</h3>
                  <p className="text-gray-600">Fun movie companions for cinema dates and entertainment experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🍕</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Casual Hangouts</h3>
                  <p className="text-gray-600">Relaxed companionship for cafes, restaurants and casual meetups.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Party Companions</h3>
                  <p className="text-gray-600">Energetic partners for parties, clubs, and nightlife adventures.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🛍️</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Shopping Partners</h3>
                  <p className="text-gray-600">Stylish companions for shopping trips and fashion consultations.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Adventure Dates</h3>
                  <p className="text-gray-600">Adventurous companions for outdoor activities and exciting experiences.</p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">💝</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Special Occasions</h3>
                  <p className="text-gray-600">Sweet companions for birthdays, anniversaries and celebrations.</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-purple-100/60 via-pink-50/50 to-purple-200/60">
              <div className="w-full px-4">
                <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent mb-6">
                    Frequently Asked Questions - College Girls
                  </h2>
                  <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                    Get answers to common questions about college girl companion services in Indore
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
              <h2 className="text-4xl font-bold mb-6">Ready to Meet College Girls?</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Connect with vibrant college girls today. Available for fun dates and memorable experiences across Indore.
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