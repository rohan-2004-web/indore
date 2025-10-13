'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Scheme78EscortsContent from './components/Scheme78EscortsContent'

export default function Scheme78PageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in Scheme 78 with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in Scheme 78 offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication", 
      description: "Premium models in Scheme 78 with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in Scheme 78 with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts in Scheme 78, Indore?",
      answer: "Booking escorts in Scheme 78 is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the Scheme 78 area based on your preferences."
    },
    {
      question: "Are your Scheme 78 escorts verified and professional?",
      answer: "Yes, absolutely! All our escorts in Scheme 78 are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance and sophistication while serving clients in the Scheme 78 residential hub."
    },
    {
      question: "What makes Scheme 78 the best location for escort services in Indore?",
      answer: "Scheme 78 is Indore's upscale residential hub with premium homes, peaceful environment, and private locations. It offers the perfect setting for high-end escort services with excellent privacy and sophisticated residential venues for meetings."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-pink-400/95 via-orange-300/90 to-pink-400/95 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              💎 Scheme 78 Escorts 💎
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium escort services in Indore's upscale residential area. Experience luxury companionship in Scheme 78's sophisticated environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
                📞 Call Now: +91 9372662471
              </a>
              <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Premium Services in Scheme 78
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-pink-600 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-orange-600 transition-all">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <Scheme78EscortsContent />

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left font-semibold text-gray-900 hover:bg-pink-50 transition-colors flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-pink-100/60 via-orange-50/50 to-pink-200/60">
          <div className="w-full px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-600 bg-clip-text text-transparent mb-8">
                💎 Ready for Premium Experience? 💎
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Book your perfect companion in Scheme 78 now! Our premium escort services are just a call away.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  📞 Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}