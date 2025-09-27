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
          
          <section className="relative py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-200/30 to-purple-300/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-blue-300/30 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center">
                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-800 leading-tight">
                  Escorts in Indore - Premium VIP Services
                </h1>
                
                {/* Subheading with badges */}
                <div className="mb-8">
                  <h2 className="text-xl md:text-2xl text-pink-600 font-bold mb-6">
                    🌟 #1 Verified Escorts in Indore | 24/7 Professional Services | Safe & Discreet
                  </h2>
                  
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                    Book premium escorts in Indore with verified profiles, professional service, and complete privacy. 
                    Our elite escorts in Indore are available 24/7 for outcall services across all major Indore locations 
                    including Vijay Nagar, AB Road, Palasia, Bhawar Kuan, and surrounding areas.
                  </p>
                  
                  {/* Feature badges */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <div className="bg-pink-100 border-2 border-pink-300 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                      ✨ 100% Verified Escorts
                    </div>
                    <div className="bg-purple-100 border-2 border-purple-300 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                      🔒 Safe & Discreet Services
                    </div>
                    <div className="bg-blue-100 border-2 border-blue-300 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      ⚡ Instant Booking in Indore
                    </div>
                    <div className="bg-green-100 border-2 border-green-300 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
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
          <section id="locations" className="py-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70"></div>
            <div className="w-full px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  Premium Escort Services Available In All Major Indore Areas
                </h2>
                <p className="text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-semibold">
                  Professional escort services available across 15+ prime locations in Indore with guaranteed satisfaction and instant response
                </p>
              </div>

              <div className="w-full">
                {/* Consistent 4x3 Grid - All 12 Locations Same Size */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-pink-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🏢</div>
                      <h3 className="text-3xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                      <p className="text-pink-600 font-bold text-xl mb-4">Central Business District</p>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Premium business district with luxury hotels, shopping centers and corporate offices. Elite escort services available 24/7.</p>
                    </div>
                    <a href="/locations/vijay-nagar" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                      📞 Book Premium Escorts in Vijay Nagar
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-blue-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🏘️</div>
                      <h3 className="text-3xl font-bold text-blue-800 mb-3">Saket</h3>
                      <p className="text-blue-600 font-bold text-xl mb-4">Upscale Residential Hub</p>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious residential area with modern amenities and gated communities. Discrete home visit services available.</p>
                    </div>
                    <a href="/locations/saket" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                      📞 Book VIP Escorts in Saket
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-orange-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-6">💻</div>
                      <h3 className="text-3xl font-bold text-orange-800 mb-3">Scheme 78</h3>
                      <p className="text-orange-600 font-bold text-xl mb-4">IT Corporate Sector</p>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Technology hub with corporate offices, business hotels and modern infrastructure. Professional companions available.</p>
                    </div>
                    <a href="/locations/scheme-78" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                      📞 Book Elite Escorts in Scheme 78
                    </a>
                  </div>
                </div>

                {/* Second Row - Additional 3 Large Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-purple-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🛍️</div>
                      <h3 className="text-3xl font-bold text-purple-800 mb-3">AB Road</h3>
                      <p className="text-purple-600 font-bold text-xl mb-4">Commercial Zone</p>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Main commercial area with luxury shopping, dining and premium hotels. Elite companions for business meetings.</p>
                    </div>
                    <a href="/locations/ab-road" className="w-full inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                      📞 Book Premium Escorts in AB Road
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-green-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🌆</div>
                      <h3 className="text-3xl font-bold text-green-800 mb-3">Palasia</h3>
                      <p className="text-green-600 font-bold text-xl mb-4">City Center</p>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Heart of Indore with premium facilities, accessibility and upscale venues. Professional escort services 24/7.</p>
                    </div>
                    <a href="/locations/palasia" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                      📞 Book VIP Escorts in Palasia
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-teal-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-6">🏛️</div>
                      <h3 className="text-3xl font-bold text-teal-800 mb-3">Bhawar Kuan</h3>
                      <p className="text-teal-600 font-bold text-xl mb-4">Premium District</p>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious business and residential area with luxury amenities and high-end establishments.</p>
                    </div>
                    <a href="/locations/bhawar-kuan" className="w-full inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                      📞 Book Elite Escorts in Bhawar Kuan
                    </a>
                  </div>
                </div>

                {/* Third Row - More Locations - 6 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-indigo-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">✈️</div>
                      <h3 className="text-2xl font-bold text-indigo-800 mb-3">Airport Road</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Airport vicinity with luxury hotels and business centers</p>
                    </div>
                    <a href="/locations/airport-road" className="w-full inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-rose-100 to-rose-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-rose-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🎯</div>
                      <h3 className="text-2xl font-bold text-rose-800 mb-3">Treasure Island</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Entertainment hub with modern facilities</p>
                    </div>
                    <a href="/locations/treasure-island" className="w-full inline-block bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-violet-100 to-violet-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-violet-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🏬</div>
                      <h3 className="text-2xl font-bold text-violet-800 mb-3">Rajwada</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Historic area with cultural significance and premium venues</p>
                    </div>
                    <a href="/locations/rajwada" className="w-full inline-block bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                </div>

                {/* Fourth Row - Additional 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group bg-gradient-to-br from-cyan-100 to-cyan-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-cyan-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🏪</div>
                      <h3 className="text-2xl font-bold text-cyan-800 mb-3">MG Road</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Shopping district with premium services</p>
                    </div>
                    <a href="/locations/mg-road" className="w-full inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-emerald-100 to-emerald-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-emerald-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🏥</div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-3">Bombay Hospital</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Medical district with premium healthcare facilities</p>
                    </div>
                    <a href="/locations/bombay-hospital" className="w-full inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-amber-100 to-amber-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-amber-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🌳</div>
                      <h3 className="text-2xl font-bold text-amber-800 mb-3">Ring Road</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Well-connected area with easy access to all parts of city</p>
                    </div>
                    <a href="/locations/ring-road" className="w-full inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
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

          <section id="faq" className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Common questions about our premium escort services and professional companions
              </p>
              
              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => {
                  const colors = [
                    'from-pink-500 to-pink-600 border-pink-200 bg-pink-50',
                    'from-blue-500 to-blue-600 border-blue-200 bg-blue-50', 
                    'from-purple-500 to-purple-600 border-purple-200 bg-purple-50',
                    'from-green-500 to-green-600 border-green-200 bg-green-50',
                    'from-orange-500 to-orange-600 border-orange-200 bg-orange-50',
                    'from-teal-500 to-teal-600 border-teal-200 bg-teal-50',
                    'from-red-500 to-red-600 border-red-200 bg-red-50',
                    'from-indigo-500 to-indigo-600 border-indigo-200 bg-indigo-50'
                  ];
                  const colorClass = colors[index % colors.length];
                  const bgClass = colorClass.split(' ')[2] + ' ' + colorClass.split(' ')[3];
                  const gradientClass = 'bg-gradient-to-r ' + colorClass.split(' ')[0] + ' ' + colorClass.split(' ')[1];
                  
                  return (
                    <div key={index} className={`rounded-2xl shadow-xl border-2 ${bgClass} overflow-hidden transform hover:scale-[1.02] transition-all duration-300`}>
                      <button
                        onClick={() => toggleFaq(index)}
                        className={`w-full px-8 py-6 text-left flex justify-between items-center hover:opacity-90 transition-all duration-300 focus:outline-none ${gradientClass}`}
                      >
                        <span className="font-bold text-white text-lg pr-4">{faq.question}</span>
                        <span className={`text-2xl font-bold text-white transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      {openFaq === index && (
                        <div className={`px-8 pb-6 ${bgClass}`}>
                          <div className="pt-6">
                            <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <InternalLinks currentPage="/" />
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-2xl font-bold text-pink-400 mb-4">✨ Indore Premium Escort Service</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  India's most trusted premium escort service provider offering verified companions, VIP call girls, and professional escort services across all major locations in Indore with complete discretion and satisfaction guarantee.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-4">🌟 Our Services</h3>
                <div className="space-y-2">
                  <a href="#services" className="block text-gray-300 hover:text-pink-400 transition-colors">💎 Celebrity Escorts</a>
                  <a href="#services" className="block text-gray-300 hover:text-pink-400 transition-colors">👑 VIP Companions</a>
                  <a href="#services" className="block text-gray-300 hover:text-pink-400 transition-colors">✨ Premium Models</a>
                  <a href="#services" className="block text-gray-300 hover:text-pink-400 transition-colors">🎓 College Girls</a>
                  <a href="#services" className="block text-gray-300 hover:text-pink-400 transition-colors">🏠 Housewife Escorts</a>
                  <a href="#services" className="block text-gray-300 hover:text-pink-400 transition-colors">👸 Punjabi Women</a>
                </div>
              </div>
              
              {/* Popular Locations */}
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-4">📍 Popular Locations</h3>
                <div className="space-y-2">
                  <a href="#locations" className="block text-gray-300 hover:text-pink-400 transition-colors">🏢 Vijay Nagar</a>
                  <a href="#locations" className="block text-gray-300 hover:text-pink-400 transition-colors">🛍️ AB Road</a>
                  <a href="#locations" className="block text-gray-300 hover:text-pink-400 transition-colors">🌆 Palasia</a>
                  <a href="#locations" className="block text-gray-300 hover:text-pink-400 transition-colors">🏛️ Bhawar Kuan</a>
                  <a href="#locations" className="block text-gray-300 hover:text-pink-400 transition-colors">🏘️ Saket</a>
                  <a href="#locations" className="block text-gray-300 hover:text-pink-400 transition-colors">💻 Scheme 78</a>
                </div>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold text-pink-400 mb-4">📞 Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-pink-400">📞</span>
                    <a href="tel:+919372662471" className="text-gray-300 hover:text-pink-400 font-medium">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400">💬</span>
                    <a href="https://wa.me/919372662471" className="text-gray-300 hover:text-green-400 font-medium">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">✉️</span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-gray-300 hover:text-blue-400 font-medium">Email Us</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">📍</span>
                    <span className="text-gray-300">All Indore Areas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🕒</span>
                    <span className="text-gray-300">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-12 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Areas */}
                <div>
                  <h4 className="text-lg font-bold text-pink-400 mb-4">🗺️ More Areas</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-semibold">Escort Services in Indore:</span> Premium companions available in Airport Road, Treasure Island, Rajwada, MG Road, Bombay Hospital, Ring Road, New Palasia, Indore GPO, Sarafa Bazaar, Khajrana, Kanadiya, and Sudama Nagar areas.
                  </p>
                </div>
                
                {/* Service Categories */}
                <div>
                  <h4 className="text-lg font-bold text-pink-400 mb-4">🎯 Service Categories</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-semibold">Professional Services:</span> VIP Escort Service, Premium Escorts, Luxury Companions, Call Girl Service, Independent Escorts, Russian Escorts, Event Companions, Travel Companions with 24/7 availability and verified profiles.
                  </p>
                </div>
              </div>
              
              {/* Copyright */}
              <div className="text-center mt-8 pt-6 border-t border-gray-700">
                <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
                  <div className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full">
                    ✅ 24/7 Available
                  </div>
                  <div className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">
                    ✅ 100% Verified
                  </div>
                  <div className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full">
                    ✅ Complete Discretion
                  </div>
                  <div className="bg-pink-900/50 text-pink-300 px-3 py-1 rounded-full">
                    ✅ Premium Quality
                  </div>
                </div>
                
                <p className="text-gray-400 mb-2">
                  © 2024 Indore Premium Escort Service. All rights reserved. 🏆
                </p>
                <p className="text-gray-500 text-sm">
                  🔞 Professional escort services for adults only. Must be 18+ to use our services. 🔞
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
