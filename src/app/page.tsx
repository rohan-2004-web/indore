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
    },
    {
      question: "What are your service charges?",
      answer: "Our charges vary depending on the type of service, duration, and companion selection. Please call +91 9372662471 for detailed pricing information and special packages."
    },
    {
      question: "Do you provide hotel bookings assistance?",
      answer: "Yes, we can assist with hotel bookings at premium locations across Indore. Our team can recommend and arrange suitable accommodations for your requirements."
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200">
        <Header />
        <main className="pt-20">
          <Breadcrumb 
            items={[
              { name: 'Home', href: '/' }
            ]}
          />
          
          <section className="relative py-20 bg-gradient-to-br from-pink-400/95 via-orange-300/90 to-pink-500/95 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-br from-pink-500/40 to-orange-400/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-br from-orange-300/40 to-pink-400/40 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            
            <div className="max-w-8xl mx-auto px-6 relative z-10">
              <div className="text-center">
                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 bg-gradient-to-r from-white via-orange-100 to-white bg-clip-text text-transparent leading-tight drop-shadow-lg">
                  Escorts in Indore - Premium VIP Services
                </h1>
                
                {/* Subheading with badges */}
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl text-white font-bold mb-8 drop-shadow-md">
                    🌟 #1 Verified Escorts in Indore | 24/7 Professional Services | Safe & Discreet
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-white leading-relaxed max-w-6xl mx-auto mb-10 drop-shadow-sm">
                    Book premium escorts in Indore with verified profiles, professional service, and complete privacy. 
                    Our elite escorts in Indore are available 24/7 for outcall services across all major Indore locations 
                    including Vijay Nagar, AB Road, Palasia, Bhawar Kuan, and surrounding areas.
                  </p>
                  
                  {/* Feature badges */}
                  <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <div className="bg-white/95 border-2 border-pink-300 text-pink-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
                      ✨ 100% Verified Escorts
                    </div>
                    <div className="bg-white/95 border-2 border-orange-300 text-orange-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
                      🔒 Safe & Discreet Services
                    </div>
                    <div className="bg-white/95 border-2 border-pink-300 text-pink-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
                      ⚡ Instant Booking in Indore
                    </div>
                    <div className="bg-white/95 border-2 border-orange-300 text-orange-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all">
                      🎯 Premium Quality Guaranteed
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <a
                    href="tel:+919372662471"
                    className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3"
                  >
                    Call Now 24/7
                  </a>
                  <a
                    href="https://wa.me/919372662471"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center gap-3"
                  >
                    WhatsApp Fast
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-center">
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-pink-600">5000+</div>
                    <div className="text-sm text-gray-600">Verified Escorts in Indore</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-purple-600">100%</div>
                    <div className="text-sm text-gray-600">Safe & Private Services</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-yellow-600">⭐ 4.9/5</div>
                    <div className="text-sm text-gray-600">Client Rating (3500+ Reviews)</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-green-600">24/7</div>
                    <div className="text-sm text-gray-600">Available Across Indore</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-blue-600">🏙️</div>
                    <div className="text-sm text-gray-600">All Indore Areas Covered</div>
                  </div>
                </div>
                
                {/* Additional info */}
                <div className="mt-8 text-center">
                  <div className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm">
                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>30-Min Quick Arrival</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎯</span>
                      <span>Premium Escorts in Indore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceCards />

          {/* Quick Access Section */}
          <section className="py-12 bg-gradient-to-r from-purple-200/60 via-pink-200/60 to-orange-200/60">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-purple-200/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">☎️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Instant Booking</h3>
                  <p className="text-gray-600 mb-4">Call now for immediate service</p>
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    ☎️ +91 9372 662 471
                  </a>
                </div>

                <div className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">WhatsApp Chat</h3>
                  <p className="text-gray-600 mb-4">Quick response guaranteed</p>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                    📱 Chat Now
                  </a>
                </div>

                <div className="bg-gradient-to-br from-white/95 to-orange-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-orange-200/50 transform hover:scale-105 transition-all duration-300">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">24/7 Available</h3>
                  <p className="text-gray-600 mb-4">Round the clock service</p>
                  <span className="bg-gradient-to-r from-orange-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold">
                    ⭐ Premium Service
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
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

          {/* Locations Section */}
          <section id="locations" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/80 via-orange-100/70 to-pink-300/80"></div>
            <div className="w-full px-6 relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-8">
                  Premium Escort Services Available In All Major Indore Areas
                </h2>
                <p className="text-2xl text-gray-700 max-w-7xl mx-auto leading-relaxed font-semibold">
                  Professional escort services available across 15+ prime locations in Indore with guaranteed satisfaction and instant response
                </p>
              </div>

              <div className="w-full">
                {/* Enhanced Location Cards - Bigger and More Stylish */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
                  
                  <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-pink-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏢</div>
                      <h3 className="text-2xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Central Business District with premium facilities</p>
                    </div>
                    <a href="/locations/vijay-nagar" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-blue-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏘️</div>
                      <h3 className="text-2xl font-bold text-blue-800 mb-3">Saket</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Upscale Residential Hub with elite services</p>
                    </div>
                    <a href="/locations/saket" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-orange-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💻</div>
                      <h3 className="text-2xl font-bold text-orange-800 mb-3">Scheme 78</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">IT Corporate Sector with modern amenities</p>
                    </div>
                    <a href="/locations/scheme-78" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-purple-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🛍️</div>
                      <h3 className="text-2xl font-bold text-purple-800 mb-3">AB Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Commercial Zone with shopping centers</p>
                    </div>
                    <a href="/locations/ab-road" className="w-full inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-green-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌆</div>
                      <h3 className="text-2xl font-bold text-green-800 mb-3">Palasia</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">City Center with premium facilities</p>
                    </div>
                    <a href="/locations/palasia" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-teal-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏛️</div>
                      <h3 className="text-2xl font-bold text-teal-800 mb-3">Bhawar Kuan</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Premium District with luxury amenities</p>
                    </div>
                    <a href="/locations/bhawar-kuan" className="w-full inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-indigo-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✈️</div>
                      <h3 className="text-2xl font-bold text-indigo-800 mb-3">Airport Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Airport vicinity with luxury hotels</p>
                    </div>
                    <a href="/locations/airport-road" className="w-full inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-rose-100 to-rose-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-rose-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎯</div>
                      <h3 className="text-2xl font-bold text-rose-800 mb-3">Treasure Island</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Entertainment hub with modern facilities</p>
                    </div>
                    <a href="/locations/treasure-island" className="w-full inline-block bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-violet-100 to-violet-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-violet-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏬</div>
                      <h3 className="text-2xl font-bold text-violet-800 mb-3">Rajwada</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Historic area with cultural significance</p>
                    </div>
                    <a href="/locations/rajwada" className="w-full inline-block bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-cyan-100 to-cyan-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-cyan-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏭</div>
                      <h3 className="text-2xl font-bold text-cyan-800 mb-3">MG Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Business center with premium services</p>
                    </div>
                    <a href="/locations/mg-road" className="w-full inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-emerald-100 to-emerald-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-emerald-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏥</div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-3">Bombay Hospital</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Medical district with healthcare facilities</p>
                    </div>
                    <a href="/locations/bombay-hospital" className="w-full inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-amber-100 to-amber-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-amber-300/60 transform hover:-translate-y-3 h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌳</div>
                      <h3 className="text-2xl font-bold text-amber-800 mb-3">Ring Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Well-connected area with easy access</p>
                    </div>
                    <a href="/locations/ring-road" className="w-full inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section - Quick Access */}
          <section className="py-16 bg-gradient-to-r from-pink-100/60 to-orange-100/60">
            <div className="w-full px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                    Contact For Premium Service
                  </h2>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto shadow-lg border border-pink-200/50">
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                      ✨ Ready to book premium escort services? Call or WhatsApp now for immediate assistance ✨
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <div className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">☎️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Phone</h3>
                    <a href="tel:+919372662471" className="text-xl text-pink-600 font-bold hover:text-pink-800 transition-colors">
                      +91 9372 662 471
                    </a>
                    <p className="text-gray-600 mt-2">Instant Response</p>
                  </div>

                  <div className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-green-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                    <a href="https://wa.me/919372662471" className="text-xl text-green-600 font-bold hover:text-green-800 transition-colors">
                      Chat Now
                    </a>
                    <p className="text-gray-600 mt-2">Quick & Private</p>
                  </div>

                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-blue-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">🕐</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Availability</h3>
                    <p className="text-xl text-blue-600 font-bold">24/7 Service</p>
                    <p className="text-gray-600 mt-2">Always Available</p>
                  </div>

                  <div className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-purple-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">✉️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
                    <a href="mailto:contact@indoreescortservice.com" className="text-xl text-pink-600 font-bold hover:text-pink-800 transition-colors">
                      Send Message
                    </a>
                    <p className="text-gray-600 mt-2">Professional Support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-6">
                  Client Testimonials
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  What our satisfied clients say about our premium escort services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-pink-200/50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Amazing Service</h3>
                    <p className="text-gray-600 italic mb-4">"Professional, discrete, and exactly what I was looking for. The booking process was simple and the service exceeded expectations."</p>
                    <p className="font-bold text-pink-600">- VIP Client, Vijay Nagar</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-blue-200/50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Highly Recommend</h3>
                    <p className="text-gray-600 italic mb-4">"Outstanding companions and excellent customer service. Very professional team that maintains complete privacy and confidentiality."</p>
                    <p className="font-bold text-blue-600">- Regular Client, AB Road</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-orange-200/50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Quality</h3>
                    <p className="text-gray-600 italic mb-4">"Top-notch service with beautiful and intelligent companions. The 24/7 availability and quick response time is impressive."</p>
                    <p className="font-bold text-orange-600">- Business Client, Palasia</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-20 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-200/60">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Common questions about our premium escort services and professional companions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
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
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">{faq.answer}</p>
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
      </div>
    </>
  )
}
