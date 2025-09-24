'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How can I book an escort service in Indore?",
      answer: "You can book our services by calling us at +91 9372 662 471, WhatsApp, or through our contact form. We're available 24/7 for instant bookings."
    },
    {
      question: "Are your escort services available across all areas of Indore?",
      answer: "Yes, we provide our premium escort services across all major areas of Indore including Vijay Nagar, Palasia, AB Road, Saket, and 12+ prime locations."
    },
    {
      question: "What makes your escort service different from others in Indore?",
      answer: "Our escorts are highly professional, verified, and trained in providing exceptional companion services. We ensure complete discretion and customer satisfaction."
    },
    {
      question: "Do you provide outcall escort services?",
      answer: "Yes, we provide both incall and outcall services. Our escorts can visit your hotel, home, or preferred location across Indore with complete discretion."
    },
    {
      question: "Are your escort services safe and discreet?",
      answer: "Absolutely. We prioritize client safety and privacy. All our services are completely confidential with verified professional companions."
    },
    {
      question: "What are your service rates?",
      answer: "Our rates vary based on the type of service and duration. Please contact us directly for detailed pricing information and special packages."
    },
    {
      question: "Do you have different categories of escorts available?",
      answer: "Yes, we offer various categories including Celebrity Escorts, College Girls, VIP Companions, Event Companions, and more to suit different preferences."
    },
    {
      question: "How can I ensure the authenticity of your services?",
      answer: "All our escorts are verified professionals. You can call us directly to discuss your requirements and we'll provide complete transparency about our services."
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Indore Premium Escort Service
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Experience luxury companionship with verified professional escorts available 24/7 across all prime locations in Indore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                📞 Call Now: +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                💬 WhatsApp Now
              </a>
            </div>
            <div className="text-center">
              <span className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                ⭐ 24/7 Available | 100% Verified | Complete Discretion
              </span>
            </div>
          </div>
        </section>

        {/* Contact & Location Quick Access */}
        <section className="py-16 bg-gradient-to-r from-pink-100/60 to-orange-100/60">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  Ready to Book? Contact Us Now
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  24/7 available for instant bookings. Professional service across all Indore locations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-200/50 text-center">
                  <div className="text-6xl mb-4">📞</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Now</h3>
                  <a href="tel:+919372662471" className="text-xl text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    +91 9372 662 471
                  </a>
                  <p className="text-gray-600 mt-2">Instant Response</p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-green-200/50 text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                  <a href="https://wa.me/919372662471" className="text-xl text-green-600 font-bold hover:text-green-800 transition-colors">
                    Chat Instantly
                  </a>
                  <p className="text-gray-600 mt-2">Quick Response</p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200/50 text-center">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
                  <a href="mailto:contact@indoreescortservice.com" className="text-xl text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Send Message
                  </a>
                  <p className="text-gray-600 mt-2">Professional Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Escorts In Indore Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-orange-50/30 to-pink-200/40"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Why Choose Our Escorts In Indore
              </h2>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="p-12">
                <p className="text-xl text-gray-700 leading-relaxed text-center">
                  All our Pink Bra escorts in Indore are excellent professionals who bring unmatched elegance and sophistication to every encounter. They are highly professional and will always meet you with genuine enthusiasm and warmth. Our independent escorts have a deep understanding of what distinguished gentlemen expect from premium companion services, which is why they are always successful in providing exceptional services with grace and professionalism. Each of our elite escorts possesses exceptional conversational skills, refined social etiquette, and the ability to adapt to any social setting with confidence. We maintain the highest standards of hygiene, safety, and professionalism across our entire network. When you choose our escort services in Indore, you're choosing a premium experience that combines luxury, discretion, and unparalleled satisfaction with 24/7 customer support.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
                <p className="text-gray-600">Verified professional companions with exceptional standards</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Discretion</h3>
                <p className="text-gray-600">100% confidential service with guaranteed privacy</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Available</h3>
                <p className="text-gray-600">Round-the-clock service across all Indore locations</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">💯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">Premium experience with complete customer satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Link to Services Page */}
        <section id="services" className="py-20 bg-gradient-to-br from-pink-100/50 via-orange-50/40 to-pink-200/50">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escorts In Indore - Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the finest professional escort companions with our premium services in Indore
              </p>
              <div className="max-w-4xl mx-auto text-center">
                <a 
                  href="/services" 
                  className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  🔗 View All Services & Book Online
                </a>
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="text-6xl mb-4">⭐</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Celebrity Escorts</h3>
                  <p className="text-gray-600 mb-4">Premium companions with star quality service and exceptional elegance</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-2xl font-bold">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="text-6xl mb-4">💎</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">VIP Escorts</h3>
                  <p className="text-gray-600 mb-4">Ultimate luxury companions for discerning clients seeking perfection</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-bold">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Companions</h3>
                  <p className="text-gray-600 mb-4">High-end companions offering sophistication and unparalleled service</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl font-bold">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-orange-100/40"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-6">
                Escort Services Available In All Indore Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Premium escort services available across all major locations in Indore with fast response time
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏢</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Vijay Nagar</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Central Indore</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Business district with premium hotels and shopping centers</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Vijay Nagar
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏘️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Saket</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">Residential Hub</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Upscale residential area with modern amenities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Saket
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">💻</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Scheme 78</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">IT Sector</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Tech hub with corporate offices and business hotels</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Scheme 78
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🛍️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">AB Road</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Commercial Zone</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Main commercial area with luxury shopping and dining</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in AB Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🌆</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Palasia</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">City Center</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Heart of Indore with premium facilities and accessibility</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Palasia
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏛️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Bhawar Kuan</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">Business District</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Corporate area with five-star hotels and restaurants</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Bhawar Kuan
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🌳</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Rau</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Suburban Area</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Peaceful suburban location with modern infrastructure</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Rau
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🛣️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Ring Road</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">Connectivity Hub</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Well-connected area with easy access to all parts</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Ring Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏥</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Bombay Hospital</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">Medical District</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Healthcare hub with premium medical facilities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Bombay Hospital
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">✈️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Airport Road</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Aviation Zone</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Airport vicinity with luxury hotels and services</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Airport Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏛️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">MG Road</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">Heritage Area</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Historic area with cultural significance and amenities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in MG Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🎯</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Treasure Island</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">Entertainment Hub</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Entertainment and recreation center with modern facilities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Treasure Island
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Book Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-orange-100/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-6">
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
                  <a href="tel:+919372662471" className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">📞 Call</a>
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
        <section className="py-20 px-4 bg-gradient-to-br from-pink-100/50 via-orange-50/40 to-blue-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-blue-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Common questions about our escort services in Indore
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-8 text-left hover:bg-gray-50/50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-lg font-bold text-gray-800 pr-4">{faq.question}</h3>
                    <span className={`text-2xl transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-orange-100/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-6">
                Contact Us For Booking
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get in touch for premium escort services across Indore
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-pink-100 p-4 rounded-full">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Phone</h4>
                        <a href="tel:+919372662471" className="text-pink-600 hover:text-pink-700 font-bold">+91 9372 662 471</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-4 rounded-full">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">WhatsApp</h4>
                        <a href="https://wa.me/919372662471" className="text-green-600 hover:text-green-700 font-bold">Chat Now</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-4 rounded-full">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Email</h4>
                        <a href="mailto:contact@indoreescortservice.com" className="text-blue-600 hover:text-blue-700 font-bold">contact@indoreescortservice.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-100 p-4 rounded-full">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Service Area</h4>
                        <p className="text-gray-600">All Indore Areas - 24/7 Available</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-4">Quick Booking</h4>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href="tel:+919372662471" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105">
                        📞 Call Now
                      </a>
                      <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl font-bold text-center transition-all duration-300 transform hover:scale-105">
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Service Coverage Area</h3>
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117060.47677400194!2d75.7674914!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indore Map - Escort Service Coverage Area"
                  ></iframe>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
                  <p className="text-blue-800 font-semibold text-center">
                    🗺️ We cover all major areas of Indore with fast response time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Indore Premium Escort Service
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations with complete discretion and satisfaction guarantee.
                </p>
                <div className="flex space-x-4">
                  <a href="tel:+919372662471" className="bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full transition-colors">
                    📞 Call
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full transition-colors">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-gray-300 hover:text-white transition-colors">Our Services</a>
                  <a href="/locations" className="block text-gray-300 hover:text-white transition-colors">Service Areas</a>
                  <a href="#faq" className="block text-gray-300 hover:text-white transition-colors">FAQ</a>
                  <a href="tel:+919372662471" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-400">📞</span>
                    <a href="tel:+919372662471" className="text-gray-300 hover:text-white">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-400">💬</span>
                    <a href="https://wa.me/919372662471" className="text-gray-300 hover:text-white">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-400">✉️</span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-gray-300 hover:text-white">contact@indoreescortservice.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-orange-400">📍</span>
                    <span className="text-gray-300">All Indore Areas</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400 mb-4">
                © 2024 Indore Premium Escort Service. All rights reserved. | 
                <span className="text-pink-400"> 24/7 Available</span> | 
                <span className="text-blue-400"> 100% Verified</span> | 
                <span className="text-green-400"> Complete Discretion</span>
              </p>
              <p className="text-gray-500 text-sm">
                Professional escort services for adults only. Must be 18+ to use our services.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}