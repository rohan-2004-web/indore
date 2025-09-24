'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions with exceptional elegance and sophistication",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY"
    },
    {
      title: "College Girls", 
      subtitle: "Fresh & Young",
      description: "Beautiful young companions with vibrant energy and charming personalities",
      image: "/images/services/College Girls.webp",
      icon: "💎",
      category: "YOUNG"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions with traditional charm and modern sophistication",
      image: "/images/services/Punjabi women.webp",
      icon: "🌟",
      category: "TRADITIONAL"
    },
    {
      title: "Event Companion",
      subtitle: "Social Events",
      description: "Perfect companions for social events, parties and business meetings",
      image: "/images/services/Event Companion.webp",
      icon: "👑",
      category: "EVENTS"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature & Experienced",
      description: "Experienced mature companions with caring personality and wisdom",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "💫",
      category: "MATURE"
    },
    {
      title: "Local Beauties",
      subtitle: "City Locals",
      description: "Beautiful local companions who know the city and provide authentic experiences",
      image: "/images/services/Local Beauties.webp",
      icon: "✨",
      category: "LOCAL"
    },
    {
      title: "Premium Models",
      subtitle: "Luxury Service",
      description: "Premium luxury models providing exclusive high-end companion services",
      image: "/images/services/Premium Models.jpg",
      icon: "🌸",
      category: "PREMIUM"
    },
    {
      title: "Slim Escorts",
      subtitle: "Perfect Figure",
      description: "Slim and fit companions with perfect figures and engaging personalities",
      image: "/images/services/Slim Escorts.webp",
      icon: "💝",
      category: "FITNESS"
    },
    {
      title: "VIP Escorts",
      subtitle: "VIP Treatment",
      description: "Exclusive VIP companions for discerning clients seeking premium experiences",
      image: "/images/services/VIP Escorts.jpg",
      icon: "👸",
      category: "VIP"
    }
  ]

  const faqs = [
    {
      question: "What escort services do you provide in Indore?",
      answer: "We provide premium companion services in Indore with verified, professional, and beautiful escorts. All our services are completely discreet, safe, and tailored to your specific preferences and requirements."
    },
    {
      question: "How can I book an escort in Indore?",
      answer: "Booking is very simple! Just call our 24/7 hotline at +919372662471 or WhatsApp us. We provide instant booking confirmation and quick response times for your convenience."
    },
    {
      question: "Are all your Indore escorts verified and genuine?",
      answer: "Yes, absolutely! All our escorts in Indore are 100% verified, genuine professionals with complete background checks, health certifications, and authentic profiles."
    },
    {
      question: "What are the rates for escort services in Indore?",
      answer: "Our rates vary based on the escort, service type, duration, and location in Indore. Please call us directly for detailed pricing, packages, and special offers available."
    },
    {
      question: "Is your escort service in Indore completely safe and discreet?",
      answer: "Absolutely! We maintain 100% confidentiality and discretion. We follow strict safety protocols, and your privacy is our top priority. All interactions are completely confidential."
    },
    {
      question: "Do you provide 24/7 escort services in Indore?",
      answer: "Yes, we provide round-the-clock escort services in Indore with 24/7 availability. Our booking team is always available for instant booking and quick response times."
    },
    {
      question: "Which areas in Indore do you cover for escort services?",
      answer: "We cover all major areas in Indore including Vijay Nagar, Saket, AB Road, Palasia, Bhawar Kuan, Ring Road, Airport Road, MG Road, and all other prime locations with quick arrival times."
    },
    {
      question: "What makes your Indore escort service different from others?",
      answer: "We provide 100% verified escorts, complete discretion, 24/7 availability, professional service, beautiful companions, competitive rates, and guaranteed satisfaction with instant booking facility."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/70 via-orange-100/50 to-pink-200/60">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-pink-200 via-orange-200 to-pink-300 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-pink-300 rounded-full opacity-30 animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 pt-32 pb-20">
          <div className="text-center text-gray-800 max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 bg-clip-text text-transparent">
                  Saumya Kapoor
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto font-bold">
                🌟 Premium Professional Escorts & Elite Models | Available 24/7 Service
              </p>
              <p className="text-xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
                Experience the finest professional escort companions with our premium services in Indore. Beautiful, elegant, and professional escorts for discerning gentlemen.
                ✨ 100% Verified • Safe & Discreet • Instant Booking • Satisfaction Guaranteed ✨
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 rounded-full text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-xl">
                📞 Call Now 24/7
              </a>
              <a href="#services" className="border-2 border-gray-700 bg-gray-700/20 backdrop-blur-sm text-gray-700 px-12 py-6 rounded-full text-xl font-black hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105">
                View Escorts
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Verified Escorts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">100%</div>
                <div className="text-gray-600 text-sm">Safe & Discreet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">⭐ 4.8/5</div>
                <div className="text-gray-600 text-sm">Rating (2500+ Reviews)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Instant Booking</div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-700 text-lg">🚀 All Indore Areas Covered • 30-Min Arrival Time • Complete Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Quick Access - Moved to Footer */}
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
              {/* Quick Contact */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-200/50 text-center">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Now</h3>
                <a href="tel:+919372662471" className="text-xl text-blue-600 font-bold hover:text-blue-800 transition-colors">
                  +91 9372 662 471
                </a>
                <p className="text-gray-600 mt-2">Instant Response</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-green-200/50 text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                <a href="https://wa.me/919372662471" className="text-xl text-green-600 font-bold hover:text-green-800 transition-colors">
                  Chat Instantly
                </a>
                <p className="text-gray-600 mt-2">Quick Response</p>
              </div>

              {/* Email */}
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

          {/* Why Choose Description */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="p-12">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                All our Pink Bra escorts in Indore are excellent professionals who bring unmatched elegance and sophistication to every encounter. They are highly professional and will always meet you with genuine enthusiasm and warmth. Our independent escorts have a deep understanding of what distinguished gentlemen expect from premium companion services, which is why they are always successful in providing exceptional services with grace and professionalism. Each of our elite escorts possesses exceptional conversational skills, refined social etiquette, and the ability to adapt to any social setting with confidence. We maintain the highest standards of hygiene, safety, and professionalism across our entire network. When you choose our escort services in Indore, you're choosing a premium experience that combines luxury, discretion, and unparalleled satisfaction with 24/7 customer support.
              </p>
            </div>
          </div>

          {/* 4 Feature Cards with Icons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Verified</h3>
              <p className="text-gray-600 leading-relaxed">All our escorts are thoroughly verified and professional</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
              <div className="text-6xl mb-6">🕒</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">24/7 Available</h3>
              <p className="text-gray-600 leading-relaxed">Round the clock availability for your convenience</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
              <div className="text-6xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Discretion</h3>
              <p className="text-gray-600 leading-relaxed">Your privacy and confidentiality is our top priority</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
              <div className="text-6xl mb-6">👑</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">High-class escorts with exceptional beauty and charm</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 3x3 Horizontal Layout */}
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

          {/* 3 Rows of 3 Services Each - Full Width Layout */}
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Row 1 - First 3 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, index) => (
                <a key={index} href="/services" className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 border border-pink-100/50 block cursor-pointer">
                  
                  {/* Enhanced Image Section - Face & Body Visible */}
                  <div className="relative h-96 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                      style={{
                        objectPosition: 'center 20%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-400 to-orange-300 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-black text-white shadow-2xl border border-white/20">
                      {service.icon} {service.category}
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-extrabold mb-2">{service.title}</h3>
                      <p className="text-blue-200 text-lg font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Enhanced Content Section */}
                  <div className="p-8">
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>Verified Professional</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>24/7 Availability</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>Complete Discretion</span>
                      </div>
                    </div>
                    
                    <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                      📞 Book {service.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 - Next 3 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.slice(3, 6).map((service, index) => (
                <div key={index + 3} className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 border border-pink-100/50">
                  
                  <div className="relative h-96 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                      style={{
                        objectPosition: 'center 20%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-bold text-white shadow-2xl border border-white/20">
                      {service.icon} {service.category}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-extrabold mb-2">{service.title}</h3>
                      <p className="text-pink-200 text-lg font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>Verified Professional</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>24/7 Availability</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>Complete Discretion</span>
                      </div>
                    </div>
                    
                    <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                      📞 Book {service.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3 - Last 3 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.slice(6, 9).map((service, index) => (
                <div key={index + 6} className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 border border-pink-100/50">
                  
                  <div className="relative h-96 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                      style={{
                        objectPosition: 'center 20%'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-bold text-white shadow-2xl border border-white/20">
                      {service.icon} {service.category}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-extrabold mb-2">{service.title}</h3>
                      <p className="text-pink-200 text-lg font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>Verified Professional</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>24/7 Availability</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500 text-lg">✓</span> 
                        <span>Complete Discretion</span>
                      </div>
                    </div>
                    
                    <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                      📞 Book {service.title}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="tel:+919372662471" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              📞 Call Now - Book Your Escort
            </a>
          </div>
        </div>
      </section>

      {/* Indore Local Locations Section - 4x4x4 Layout */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              <span className="text-blue-600">Indore</span> Local <span className="text-pink-600">Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Premium companion services available across all major locations in Indore
            </p>
          </div>

          {/* 12 Enhanced Locations in 4 Rows of 3 Each */}
          <div className="max-w-6xl mx-auto space-y-10">
            
            {/* Row 1 - First 3 Locations */}
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

            {/* Row 2 - Next 3 Locations */}
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

            {/* Row 3 - Next 3 Locations */}
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

            {/* Row 4 - Last 3 Locations */}
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

          <div className="text-center mt-16">
            <a href="tel:+919372662471" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-16 py-6 rounded-full text-2xl font-bold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              📞 Call Now - Available in All Indore Areas
            </a>
          </div>
        </div>
      </section>

      {/* How to Book Escorts In Indore Section */}
      <section className="py-20 px-4 relative bg-gradient-to-br from-blue-50/50 via-white to-pink-50/50">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              How to Book Escorts In Indore
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple and secure booking process for your convenience
            </p>
          </div>

          {/* 4 Step Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl">
                1
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 min-h-[280px]">
                <div className="text-5xl mb-6">👀</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose an Escort</h3>
                <p className="text-gray-600 leading-relaxed">Browse our gallery and select your preferred companion</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl">
                2
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-100/50 min-h-[280px]">
                <div className="text-5xl mb-6">📞</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
                <p className="text-gray-600 leading-relaxed">Call or WhatsApp us to discuss your requirements</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl">
                3
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50 min-h-[280px]">
                <div className="text-5xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Confirm Booking</h3>
                <p className="text-gray-600 leading-relaxed">We'll confirm your booking and finalize all details</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="text-center relative">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-2xl">
                4
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-green-100/50 min-h-[280px]">
                <div className="text-5xl mb-6">🎉</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enjoy Your Time</h3>
                <p className="text-gray-600 leading-relaxed">Your chosen escort will arrive at your location as scheduled</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-green-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              📞 Start Booking Process Now
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose <span className="text-pink-600">Saumya Kapoor</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide premium companion services with complete professionalism and discretion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">100% Discreet</h3>
              <p className="text-gray-600 leading-relaxed">Complete privacy and confidentiality guaranteed. Your personal information is always secure.</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">✅</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Verified Professionals</h3>
              <p className="text-gray-600 leading-relaxed">All companions are thoroughly verified with background checks and health certifications.</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Instant Booking</h3>
              <p className="text-gray-600 leading-relaxed">Quick response time with 24/7 availability and instant booking system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Stylish Pink-Orange Theme */}
      <section id="faq" className="py-20 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/40 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-300/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="w-full px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full mb-6 shadow-2xl">
              <span className="text-3xl">❓</span>
            </div>
            <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Get detailed answers to all your questions about our premium escort services in Indore
            </p>
          </div>

          {/* 2-Column FAQ Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-white/95 via-pink-50/50 to-orange-50/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-pink-300/50 transition-all duration-500 transform hover:-translate-y-2">
                      <button
                        className="w-full px-8 py-8 text-left transition-all duration-300 flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-pink-100/40 group-hover:to-orange-100/40"
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex items-center space-x-4 flex-1">
                          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                          <span className="text-gray-800 leading-relaxed font-bold text-lg group-hover:text-pink-700 transition-colors duration-300">{faq.question}</span>
                        </div>
                        <div className={`transform transition-all duration-300 w-10 h-10 bg-gradient-to-br ${openFaq === index ? 'from-orange-500 to-pink-500 rotate-180' : 'from-pink-400 to-orange-400'} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110`}>
                          <span className="text-white text-xl font-bold">⌄</span>
                        </div>
                      </button>
                      {openFaq === index && (
                        <div className="px-8 pb-8 bg-gradient-to-r from-pink-100/50 via-orange-50/30 to-pink-100/50">
                          <div className="w-full h-1 bg-gradient-to-r from-pink-400 via-orange-400 to-pink-500 rounded-full mb-6 shadow-sm"></div>
                          <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-pink-200/50">
                            <p className="text-gray-700 text-lg leading-relaxed font-medium">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => {
                  const actualIndex = index + Math.ceil(faqs.length / 2);
                  return (
                    <div key={actualIndex} className="group">
                      <div className="bg-gradient-to-br from-white/95 via-orange-50/50 to-pink-50/30 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border-2 border-transparent hover:border-orange-300/50 transition-all duration-500 transform hover:-translate-y-2">
                        <button
                          className="w-full px-8 py-8 text-left transition-all duration-300 flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-orange-100/40 group-hover:to-pink-100/40"
                          onClick={() => toggleFaq(actualIndex)}
                        >
                          <div className="flex items-center space-x-4 flex-1">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-bold text-lg">{actualIndex + 1}</span>
                            </div>
                            <span className="text-gray-800 leading-relaxed font-bold text-lg group-hover:text-orange-700 transition-colors duration-300">{faq.question}</span>
                          </div>
                          <div className={`transform transition-all duration-300 w-10 h-10 bg-gradient-to-br ${openFaq === actualIndex ? 'from-pink-500 to-orange-500 rotate-180' : 'from-orange-400 to-pink-400'} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110`}>
                            <span className="text-white text-xl font-bold">⌄</span>
                          </div>
                        </button>
                        {openFaq === actualIndex && (
                          <div className="px-8 pb-8 bg-gradient-to-r from-orange-100/50 via-pink-50/30 to-orange-100/50">
                            <div className="w-full h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-orange-500 rounded-full mb-6 shadow-sm"></div>
                            <div className="bg-white/80 p-6 rounded-2xl shadow-lg border border-orange-200/50">
                              <p className="text-gray-700 text-lg leading-relaxed font-medium">{faq.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gradient-to-br from-pink-100/60 via-orange-100/50 to-pink-200/60">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
              Contact Us & Location
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Get in touch with us or visit our locations across Indore
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/95 via-pink-50/30 to-blue-50/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-200/50">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  📝 Contact Form
                </h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you instantly</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors duration-300 bg-white/80 text-gray-800 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Mobile Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors duration-300 bg-white/80 text-gray-800 placeholder-gray-500"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Address</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors duration-300 bg-white/80 text-gray-800 placeholder-gray-500"
                    placeholder="Your address in Indore"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors duration-300 bg-white/80 text-gray-800">
                    <option>Select Service Type</option>
                    <option>College Girls</option>
                    <option>Celebrity Escorts</option>
                    <option>Housewife</option>
                    <option>Russian Models</option>
                    <option>VIP Escorts</option>
                    <option>Air Hostess</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors duration-300 bg-white/80 text-gray-800 placeholder-gray-500"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-6 py-4 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  📩 Submit Request
                </button>

                <div className="text-center pt-4">
                  <p className="text-gray-600">Or call directly:</p>
                  <a href="tel:+919372662471" className="text-2xl font-bold text-pink-600 hover:text-pink-800 transition-colors">
                    📞 +91 9372 662 471
                  </a>
                </div>
              </form>
            </div>

            {/* Google Map */}
            <div className="bg-gradient-to-br from-white/95 via-blue-50/30 to-pink-50/30 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-200/50">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  📍 Indore Map & Locations
                </h3>
                <p className="text-gray-600">We cover all major areas of Indore city</p>
              </div>

              {/* Interactive Google Map */}
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl border-2 border-pink-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117218.64026851222!2d75.69903597775723!3d22.724509261506667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1703845201234!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>

              {/* Quick Location Links */}
              <div className="mt-6 space-y-3">
                <h4 className="text-xl font-bold text-gray-800 mb-4">🗺️ Quick Access Areas:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#vijay-nagar" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Vijay Nagar
                  </a>
                  <a href="#saket" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Saket
                  </a>
                  <a href="#ab-road" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    AB Road
                  </a>
                  <a href="#palasia" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-4 rounded-2xl text-center font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Palasia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 via-pink-400 to-orange-300">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Book Your <span className="text-yellow-300">Perfect Companion?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Experience premium companion services with complete discretion and professionalism. Available 24/7 for your convenience.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 rounded-2xl text-xl font-black transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-300/50">
                📞 Call Now: +91 9372662471
              </a>
              <a href="#services" className="border-3 border-white bg-white/20 backdrop-blur-sm text-white px-12 py-6 rounded-2xl text-xl font-black hover:bg-white hover:text-purple-700 transition-all duration-300 shadow-2xl">
                Browse Companions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get In <span className="text-pink-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us for premium companion services. Available 24/7 for your convenience and complete discretion.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-600">+91 9372662471</p>
                  <p className="text-sm text-green-600 font-semibold">Available 24/7</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <div className="text-3xl">💬</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">WhatsApp</h3>
                  <p className="text-gray-600">+91 9372662471</p>
                  <p className="text-sm text-green-600 font-semibold">Instant Response</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="text-3xl">🌍</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Service Area</h3>
                  <p className="text-gray-600">All Major Cities</p>
                  <p className="text-sm text-blue-600 font-semibold">Premium Coverage</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Service Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-green-600">Within 30 Minutes</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Availability</span>
                  <span className="font-semibold text-blue-600">24/7</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <span className="text-gray-600">Service Type</span>
                  <span className="font-semibold text-purple-600">Premium Companions</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Privacy</span>
                  <span className="font-semibold text-pink-600">100% Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Light Pink-Orange Theme */}
      <footer className="bg-gradient-to-br from-pink-200 via-orange-200 to-pink-300 text-gray-800 py-16">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 bg-clip-text text-transparent drop-shadow-lg">
                Saumya Kapoor
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Premium escort services in Indore with complete discretion and professionalism. Your satisfaction is our priority.
              </p>
              <div className="flex gap-4">
                <a href="tel:+919372662471" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                  📞 Call Now
                </a>
                <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-700">Services</h4>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li>🌟 VIP Escorts</li>
                <li>👸 Elite Models</li>
                <li>💎 Celebrity Style</li>
                <li>🎯 Premium Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-600">Features</h4>
              <ul className="space-y-3 text-gray-600 text-lg">
                <li>⏰ 24/7 Availability</li>
                <li>✅ Verified Professionals</li>
                <li>🔒 Complete Discretion</li>
                <li>⚡ Instant Booking</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6 text-pink-700">Contact</h4>
              <div className="space-y-3 text-gray-600 text-lg">
                <p>📞 +91 9372662471</p>
                <p>💬 WhatsApp Available</p>
                <p>🗺️ All Indore Areas</p>
                <p>⚡ 24/7 Service</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-400/30 mt-12 pt-8 text-center">
            <p className="text-gray-600 text-xl">
              © 2025 <span className="font-bold bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 bg-clip-text text-transparent">Saumya Kapoor</span>. All rights reserved. | Premium Escort Services in Indore
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
