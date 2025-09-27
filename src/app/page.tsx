'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
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
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { name: 'Home', href: '/' }
            ]}
          />
          
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-pink-200/50 via-purple-100/30 to-orange-200/40 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-300/30 to-pink-300/30 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    Premium Escort Service
                  </span>
                  <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    in Indore
                  </span>
                </h1>
                
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 max-w-5xl mx-auto shadow-2xl border-2 border-pink-200/50">
                  <p className="text-xl md:text-2xl text-gray-800 font-semibold leading-relaxed mb-8">
                    Experience premium companionship with verified escorts across Indore. Professional VIP call girls, celebrity companions, and elite services available 24/7 in Vijay Nagar, AB Road, Palasia, Bhawar Kuan, and all major locations with guaranteed satisfaction and complete discretion.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                      href="tel:+919372662471" 
                      className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-pink-300/50 flex items-center gap-3"
                    >
                      ☎️ Call: +91 9372 662 471
                    </a>
                    <a 
                      href="https://wa.me/919372662471" 
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-300/50 flex items-center gap-3"
                    >
                      📱 WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Cards Section - 20 Premium Services */}
          <ServiceCards />

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

          {/* Quick Access Section - Simplified */}
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

          {/* Internal Links for SEO */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <InternalLinks currentPage="/" />
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

              <div className="w-full space-y-12">
                
                {/* First Row - Main 3 Large Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                {/* Third Row - More Locations */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="group bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-indigo-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🏭</div>
                      <h3 className="text-2xl font-bold text-indigo-800 mb-3">Scheme 140</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Industrial and residential mix with premium services</p>
                    </div>
                    <a href="/locations/scheme-140" className="w-full inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                  <div className="group bg-gradient-to-br from-rose-100 to-rose-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-rose-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">✈️</div>
                      <h3 className="text-2xl font-bold text-rose-800 mb-3">Airport Road</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Airport vicinity with luxury hotels and business centers</p>
                    </div>
                    <a href="/locations/airport-road" className="w-full inline-block bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                  <div className="group bg-gradient-to-br from-violet-100 to-violet-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-violet-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🎯</div>
                      <h3 className="text-2xl font-bold text-violet-800 mb-3">Treasure Island</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Entertainment hub with modern facilities</p>
                    </div>
                    <a href="/locations/treasure-island" className="w-full inline-block bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                  <div className="group bg-gradient-to-br from-cyan-100 to-cyan-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border-2 border-cyan-300/60 transform hover:-translate-y-3 min-h-[320px] flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-5xl mb-4">🏬</div>
                      <h3 className="text-2xl font-bold text-cyan-800 mb-3">Rajwada</h3>
                      <p className="text-gray-700 text-base mb-4 leading-relaxed">Historic area with cultural significance and premium venues</p>
                    </div>
                    <a href="/locations/rajwada" className="w-full inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                      📞 Book Now
                    </a>
                  </div>
                </div>
                
                {/* Coverage Summary */}
                <div className="bg-gradient-to-r from-pink-100/80 to-orange-100/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-pink-200/50 mt-16">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-pink-700 mb-6">📍 Complete Coverage Across Indore</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-white/90 rounded-2xl p-6">
                        <div className="text-3xl mb-3">🏨</div>
                        <p className="font-bold text-gray-800">Premium Hotels</p>
                      </div>
                      <div className="bg-white/90 rounded-2xl p-6">
                        <div className="text-3xl mb-3">🏠</div>
                        <p className="font-bold text-gray-800">Home Visits</p>
                      </div>
                      <div className="bg-white/90 rounded-2xl p-6">
                        <div className="text-3xl mb-3">💼</div>
                        <p className="font-bold text-gray-800">Business Events</p>
                      </div>
                      <div className="bg-white/90 rounded-2xl p-6">
                        <div className="text-3xl mb-3">✈️</div>
                        <p className="font-bold text-gray-800">Outcall Services</p>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 font-semibold">
                      Premium escort services in Vijay Nagar, AB Road, Bhawar Kuan, and all major commercial areas with 5-star hotels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form and Map Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-orange-100/40">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  How To Book Our Escort Service In Indore
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Simple and quick booking process for premium escort services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
                  <p className="text-gray-600 mb-6">Call us at +91 9372662471 or WhatsApp to discuss your requirements</p>
                  <div className="flex justify-center gap-4">
                    <a href="/services" className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">📞 Call</a>
                    <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">💬 WhatsApp</a>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Service</h3>
                  <p className="text-gray-600 mb-6">Select your preferred companion type and service duration</p>
                  <a href="/services" className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold">View Services</a>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-100/50 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Enjoy Service</h3>
                  <p className="text-gray-600 mb-6">Meet your professional companion and enjoy premium service</p>
                  <span className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full font-bold">100% Satisfaction</span>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 px-4 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-200/60">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Common questions about our premium escort services in Indore
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

          {/* Contact Form and Map Section */}
          <section className="py-16 px-4 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70 relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-2xl"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-700 via-orange-600 to-pink-800 bg-clip-text text-transparent mb-6">
                  Contact Us For Booking
                </h2>
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto shadow-lg border border-pink-200/50">
                  <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                    ✨ Get in touch for premium escort services across Indore - Available 24/7 ✨
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-pink-200/50">
                    <h3 className="text-3xl font-bold text-pink-700 mb-6">📞 Quick Contact</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                          <span className="text-pink-600 text-xl">📞</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Phone</p>
                          <a href="tel:+919372662471" className="text-pink-600 font-bold text-lg hover:text-pink-800">+91 9372 662 471</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-xl">📱</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">WhatsApp</p>
                          <a href="https://wa.me/919372662471" className="text-green-600 font-bold text-lg hover:text-green-800">Chat Now</a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 text-xl">✉️</span>
                        </div>
                        <div>
                          <p className="font-bold text-gray-800">Email</p>
                          <a href="mailto:contact@indoreescortservice.com" className="text-purple-600 font-bold text-lg hover:text-purple-800">Send Email</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Areas */}
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-orange-200/50">
                  <h3 className="text-3xl font-bold text-orange-700 mb-6">📍 Service Areas</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4">
                      <p className="font-bold text-gray-800">Vijay Nagar</p>
                      <p className="text-sm text-gray-600">Business District</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                      <p className="font-bold text-gray-800">AB Road</p>
                      <p className="text-sm text-gray-600">Commercial Zone</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-4">
                      <p className="font-bold text-gray-800">Palasia</p>
                      <p className="text-sm text-gray-600">City Center</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4">
                      <p className="font-bold text-gray-800">Bhawar Kuan</p>
                      <p className="text-sm text-gray-600">Premium Area</p>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-4">
                      <p className="font-bold text-gray-800">Saket</p>
                      <p className="text-sm text-gray-600">Residential Hub</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4">
                      <p className="font-bold text-gray-800">All Major Areas</p>
                      <p className="text-sm text-gray-600">24/7 Available</p>
                    </div>
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

        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-200 to-orange-200 bg-clip-text text-transparent">
                  Premium Escort Service Indore
                </h3>
                <p className="text-pink-100 text-lg mb-6 leading-relaxed">
                  India's most trusted premium escort service provider offering verified companions, VIP call girls, and professional escort services across all major locations in Indore with complete discretion and satisfaction guarantee.
                </p>
                <div className="flex space-x-4">
                  <a href="tel:+919372662471" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl font-bold transition-colors">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl font-bold transition-colors">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-orange-200">Services</h4>
                <ul className="space-y-3">
                  <li><a href="/services/celebrity-escorts" className="text-pink-100 hover:text-white transition-colors">Celebrity Escorts</a></li>
                  <li><a href="/services/vip-escorts" className="text-pink-100 hover:text-white transition-colors">VIP Companions</a></li>
                  <li><a href="/services/college-girls" className="text-pink-100 hover:text-white transition-colors">College Girls</a></li>
                  <li><a href="/services/event-companion" className="text-pink-100 hover:text-white transition-colors">Event Companions</a></li>
                  <li><a href="/services/housewife-escorts" className="text-pink-100 hover:text-white transition-colors">Mature Companions</a></li>
                </ul>
              </div>
              
              {/* Locations */}
              <div>
                <h4 className="text-xl font-bold mb-6 text-orange-200">Locations</h4>
                <ul className="space-y-3">
                  <li><a href="/locations/vijay-nagar" className="text-pink-100 hover:text-white transition-colors">Vijay Nagar</a></li>
                  <li><a href="/locations/ab-road" className="text-pink-100 hover:text-white transition-colors">AB Road</a></li>
                  <li><a href="/locations/palasia" className="text-pink-100 hover:text-white transition-colors">Palasia</a></li>
                  <li><a href="/locations/bhawar-kuan" className="text-pink-100 hover:text-white transition-colors">Bhawar Kuan</a></li>
                  <li><a href="/locations/saket" className="text-pink-100 hover:text-white transition-colors">Saket</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-pink-400/30 mt-12 pt-8 text-center">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-pink-100 text-lg">
                  © 2024 Premium Escort Service Indore. All rights reserved.
                </p>
                <div className="flex space-x-8">
                  <a href="/privacy" className="text-pink-100 hover:text-white transition-colors">Privacy Policy</a>
                  <a href="/terms" className="text-pink-100 hover:text-white transition-colors">Terms of Service</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}