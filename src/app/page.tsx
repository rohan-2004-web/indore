'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import { SEOOptimizedContent } from '@/components/SEOContent'
import InternalLinks from '@/components/InternalLinks'
import Breadcrumb from '@/components/Breadcrumb'
import ServiceCards from '@/components/ServiceCards'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "Are your services available 24/7?",
      answer: "Yes, our premium escort services are available round the clock. You can call us anytime at +91 9372662471 for immediate assistance."
    },
    {
      question: "What areas in Indore do you cover?",
      answer: "We provide services across all major areas including Vijay Nagar, AB Road, Bhawar Kuan, Palasia, Saket, Scheme 78, and Airport Road."
    },
    {
      question: "How do I make a booking?",
      answer: "Simply call +91 9372662471 or WhatsApp us. Our team will help you choose the right companion and arrange the service according to your preferences."
    },
    {
      question: "Is privacy and discretion guaranteed?",
      answer: "Absolutely. We maintain complete confidentiality and discretion in all our services. Your privacy is our top priority."
    },
    {
      question: "What types of services do you offer?",
      answer: "We offer a wide range of companion services including celebrity escorts, VIP companions, college girls, event companions, and professional outcall services."
    },
    {
      question: "Are your companions verified?",
      answer: "Yes, all our companions are thoroughly verified and professionally trained to provide premium quality service with complete safety and satisfaction."
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        <Header />
        <main className="pt-20">
          <Breadcrumb 
            items={[
              { name: 'Home', href: '/' }
            ]}
          />
          
          <section className="relative py-20 bg-gradient-to-br from-pink-300/60 via-purple-200/50 to-orange-300/60 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-96 h-96 bg-gradient-to-br from-pink-400/40 to-orange-400/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-purple-300/30 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
                  <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">
                    Premium Escort Service
                  </span>
                  <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    in Indore
                  </span>
                </h1>
                
                <div className="bg-gradient-to-br from-white/95 to-pink-50/90 backdrop-blur-sm rounded-3xl p-10 max-w-6xl mx-auto shadow-2xl border-4 border-pink-300/60 relative">
                  <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed mb-8">
                    Experience premium companionship with verified escorts across Indore. Professional VIP call girls available 24/7 in all major locations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                      href="tel:+919372662471" 
                      className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-6 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                       Call: +91 9372 662 471
                    </a>
                    <a 
                      href="https://wa.me/919372662471" 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    >
                       WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceCards />

          <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4">
              <SEOOptimizedContent 
                h1="Premium Escort Service in Indore"
                h2="Professional Call Girls & VIP Companions Available 24/7"
                services={[
                  'Celebrity Escorts',
                  'VIP Companions', 
                  'College Girl Escorts',
                  'Event Companions',
                  'Premium Call Girls',
                  'Professional Escorts'
                ]}
              />
            </div>
          </section>

          <section id="faq" className="py-16 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-sm rounded-2xl border border-pink-200/50 shadow-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-pink-50/70 transition-all duration-300"
                    >
                      <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
                      <span className={`text-2xl font-bold text-pink-600 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                        
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-8 pb-6 pt-2 border-t border-pink-200/50">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <InternalLinks currentPage="/" />
            </div>
          </section>
        </main>

        <footer className="bg-gradient-to-br from-pink-100 to-pink-200 text-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-pink-600 mb-4"> Pink Bra Indore</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
                </p>
                <div className="flex flex-col gap-2">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center">
                     Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center">
                     WhatsApp
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-4"> Our Services</h3>
                <div className="space-y-2">
                  <a href="#services" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Celebrity Escorts</a>
                  <a href="#services" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">VIP Escorts</a>
                  <a href="#services" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Premium Models</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-4"> Quick Links</h3>
                <div className="space-y-2">
                  <a href="#services" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">All Services</a>
                  <a href="#locations" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Service Areas</a>
                  <a href="#contact" className="block text-gray-700 hover:text-pink-600 transition-colors font-medium">Contact</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-pink-600 mb-4"> Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-pink-500"></span>
                    <a href="tel:+919372662471" className="text-gray-700 hover:text-pink-600 font-medium">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500"></span>
                    <a href="https://wa.me/919372662471" className="text-gray-700 hover:text-green-600 font-medium">WhatsApp Available</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-pink-300 mt-12 pt-8 text-center">
              <p className="text-gray-600 mb-4">
                 2024 Pink Bra Indore Premium Escort Service. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
