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
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 via-pink-50/20 to-blue-50/30">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-pink-600 via-purple-700 to-blue-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/3 w-64 h-64 bg-purple-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 pt-32 pb-20">
          <div className="text-center text-white max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-pink-200 to-blue-200 bg-clip-text text-transparent">
                  Saumya Kapoor
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto">
                🌟 Premium Professional Escorts & Elite Models | Available 24/7 Service
              </p>
              <p className="text-lg text-white/90 mb-12 max-w-5xl mx-auto">
                Experience the finest professional escort companions with our premium services in Indore. Beautiful, elegant, and professional escorts for discerning gentlemen.
                ✨ 100% Verified • Safe & Discreet • Instant Booking • Satisfaction Guaranteed ✨
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
                📞 Call Now 24/7
              </a>
              <a href="#services" className="border-2 border-white text-white px-12 py-6 rounded-full text-xl font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105">
                View Escorts
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-pink-200 text-sm">Verified Escorts</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-pink-200 text-sm">Safe & Discreet</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">⭐ 4.8/5</div>
                <div className="text-pink-200 text-sm">Rating (2500+ Reviews)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-pink-200 text-sm">Instant Booking</div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-white/80 text-lg">🚀 All Indore Areas Covered • 30-Min Arrival Time • Complete Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Quick Access */}
      <section className="py-16 bg-gradient-to-r from-pink-100/50 to-blue-100/50">
        <div className="w-full px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Quick Contact */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-200/50 text-center">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Now</h3>
                <a href="tel:+919372662471" className="text-xl text-blue-600 font-bold hover:text-blue-800 transition-colors">
                  +91 9372 662 471
                </a>
                <p className="text-gray-600 mt-2">24/7 Available</p>
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

              {/* Location */}
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200/50 text-center">
                <div className="text-6xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">All Indore</h3>
                <p className="text-xl text-blue-600 font-bold">12 Prime Areas</p>
                <p className="text-gray-600 mt-2">Fast Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Escorts In Indore Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 via-white to-blue-50/30"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Why Choose Our Escorts In Indore
            </h2>
          </div>

          {/* Why Choose Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                All our Pink Bra escorts in Indore are excellent professionals. They are highly professional and will always meet you with enthusiasm. Their dedication to providing the best services makes them stand out, ensuring that your time with them is worthwhile. They go the extra mile to make sure you enjoy their companionship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our independent escorts in Indore understand what gentlemen expect from them. This is why they are always successful in providing the services you desire. Their presence will make a significant difference in your life, bringing excitement and thrill. These top-ranking escorts in Indore are all you need to add excitement to your life.
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
      <section id="services" className="py-20 bg-gradient-to-br from-pink-50/40 via-pink-50/30 to-blue-50/40">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-blue-700 bg-clip-text text-transparent mb-6">
              Premium Escorts In Indore - Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Experience the finest professional escort companions with our premium services in Indore
            </p>
          </div>

          {/* 3 Rows of 3 Services Each - Full Width Layout */}
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Row 1 - First 3 Services */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service, index) => (
                <div key={index} className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 border border-pink-100/50">
                  
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
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-blue-600 backdrop-blur-sm px-5 py-3 rounded-2xl text-sm font-bold text-white shadow-2xl border border-white/20">
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
                    
                    <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg">
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
                    
                    <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg">
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
                    
                    <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg">
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

          {/* 12 Enhanced Locations in 3 Rows of 4 Each */}
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Row 1 - First 4 Locations - Enhanced Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Vijay Nagar", area: "Central Indore", icon: "🏢", description: "Business district with premium hotels and shopping centers", color: "blue" },
                { name: "Saket", area: "Residential Hub", icon: "🏘️", description: "Upscale residential area with modern amenities", color: "blue" },
                { name: "Scheme 78", area: "IT Sector", icon: "💻", description: "Tech hub with corporate offices and business hotels", color: "blue" },
                { name: "AB Road", area: "Commercial Zone", icon: "🛍️", description: "Main commercial area with luxury shopping and dining", color: "blue" }
              ].map((location, index) => (
                <div key={index} className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[280px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">{location.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{location.name}</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">{location.area}</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{location.description}</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in {location.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Row 2 - Next 4 Locations - Enhanced Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Palasia", area: "City Center", icon: "🌆", description: "Heart of Indore with premium facilities and accessibility", color: "purple" },
                { name: "Bhawar Kuan", area: "Business District", icon: "🏛️", description: "Corporate area with five-star hotels and restaurants", color: "purple" },
                { name: "Rau", area: "Suburban Area", icon: "🌳", description: "Peaceful suburban location with modern infrastructure", color: "purple" },
                { name: "Ring Road", area: "Connectivity Hub", icon: "🛣️", description: "Well-connected area with easy access to all parts", color: "purple" }
              ].map((location, index) => (
                <div key={index + 4} className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-purple-100/50 transform hover:-translate-y-3 min-h-[280px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">{location.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{location.name}</h3>
                    <p className="text-purple-600 font-bold text-lg mb-4">{location.area}</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{location.description}</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:via-purple-700 hover:to-purple-800 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in {location.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Row 3 - Last 4 Locations - Enhanced Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Bombay Hospital", area: "Medical District", icon: "🏥", description: "Healthcare hub with premium medical facilities", color: "pink" },
                { name: "Airport Road", area: "Aviation Zone", icon: "✈️", description: "Airport vicinity with luxury hotels and services", color: "pink" },
                { name: "MG Road", area: "Heritage Area", icon: "🏛️", description: "Historic area with cultural significance and amenities", color: "pink" },
                { name: "Treasure Island", area: "Entertainment Hub", icon: "🎯", description: "Entertainment and recreation center with modern facilities", color: "pink" }
              ].map((location, index) => (
                <div key={index + 8} className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[280px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">{location.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{location.name}</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">{location.area}</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">{location.description}</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in {location.name}
                  </a>
                </div>
              ))}
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-pink-50/40 via-pink-50/30 to-blue-50/40">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-blue-600 to-blue-700 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Get detailed answers to common questions about our premium escort services in Indore
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-pink-200/50">
                <button
                  className="w-full px-8 py-8 text-left font-bold text-xl text-gray-800 hover:bg-pink-50/50 transition-all duration-300 flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-gray-800 leading-relaxed">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 text-2xl text-blue-600 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ⌄
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8 bg-gradient-to-r from-pink-50/30 to-blue-50/30">
                    <div className="w-full h-px bg-gradient-to-r from-pink-300 to-blue-300 mb-6"></div>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Book Your <span className="text-yellow-300">Perfect Companion?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Experience premium companion services with complete discretion and professionalism. Available 24/7 for your convenience.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a href="tel:+919372662471" className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
                📞 Call Now: +91 9372662471
              </a>
              <a href="#services" className="border-2 border-white text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-purple-700 transition-all duration-300">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
                Saumya Kapoor
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Premium companion services with complete discretion and professionalism. Your satisfaction is our priority.
              </p>
              <div className="flex gap-4">
                <a href="tel:+919372662471" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300">
                  Call Now
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>VIP Companions</li>
                <li>Elite Models</li>
                <li>Celebrity Style</li>
                <li>Premium Service</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Features</h4>
              <ul className="space-y-3 text-gray-300">
                <li>24/7 Availability</li>
                <li>Verified Professionals</li>
                <li>Complete Discretion</li>
                <li>Instant Booking</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3 text-gray-300">
                <p>📞 +91 9372662471</p>
                <p>💬 WhatsApp Available</p>
                <p>🌍 All Major Cities</p>
                <p>⚡ 24/7 Service</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Saumya Kapoor. All rights reserved. | Premium Companion Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}