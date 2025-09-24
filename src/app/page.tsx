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
      title: "Elite Models",
      subtitle: "Top Class Models",
      description: "Professional elite models with stunning looks and sophisticated charm",
      image: "/images/services/Elite Models.webp",
      icon: "🌟",
      category: "ELITE"
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
      question: "What services do you offer?",
      answer: "We offer premium companion services with verified professionals. All services are discreet, safe, and tailored to your preferences."
    },
    {
      question: "How to book a companion?",
      answer: "Simply call our 24/7 hotline or use our instant booking system. We ensure quick response and professional service."
    },
    {
      question: "Are all companions verified?",
      answer: "Yes, all our companions are thoroughly verified professionals with complete background checks and health certifications."
    },
    {
      question: "What are your rates?",
      answer: "Our rates vary based on the companion and service type. Contact us for detailed pricing and package information."
    },
    {
      question: "Is the service discreet and safe?",
      answer: "Absolutely! We maintain complete discretion and follow strict safety protocols. Your privacy and security are our top priorities."
    },
    {
      question: "Do you provide 24/7 service?",
      answer: "Yes, we provide round-the-clock service with instant booking and quick response times. Our team is available 24/7."
    }
  ]

  return (
    <div className="min-h-screen">
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
        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center text-white">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-pink-200 to-blue-200 bg-clip-text text-transparent">
                  Saumya Kapoor
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-3xl mx-auto">
                🌟 Premium Professional Companions & Elite Models | Available 24/7 Service
              </p>
              <p className="text-lg text-white/90 mb-12 max-w-4xl mx-auto">
                Experience the finest professional companions with our premium services. Beautiful, elegant, and professional companions for discerning gentlemen.
                ✨ 100% Verified • Safe & Discreet • Instant Booking • Satisfaction Guaranteed ✨
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
                📞 Call Now 24/7
              </a>
              <a href="#services" className="border-2 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-105">
                View Companions
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-pink-200 text-sm">Verified Companions</div>
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
              <p className="text-white/80 text-lg">🚀 All Areas Covered • 30-Min Arrival Time • Complete Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 3x3 Grid Layout */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Premium Companions - Our <span className="text-pink-600">Professionals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the finest companions with our premium professionals
            </p>
          </div>

          {/* 3x3 Grid Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-3 border border-pink-100/50">
                  
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                      style={{
                        objectPosition: 'center top'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Floating Category Badge */}
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-blur-sm px-4 py-2 rounded-2xl text-sm font-bold text-white shadow-2xl border border-white/20">
                      {service.icon} {service.category}
                    </div>

                    {/* Name Overlay at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-blue-200 mb-2 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-pink-200 text-lg font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-8">
                    <div className="space-y-6">
                      {/* Description */}
                      <p className="text-gray-600 text-lg leading-relaxed font-medium">
                        {service.description}
                      </p>
                      
                      {/* Premium Features */}
                      <div className="grid grid-cols-1 gap-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span> Verified Professional
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span> 24/7 Availability
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-500">✓</span> Discreet Service
                        </div>
                      </div>
                      
                      {/* Book Button - Pink Color */}
                      <div className="pt-4">
                        <a 
                          href="tel:+919372662471" 
                          className="w-full inline-block bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:from-pink-600 hover:via-pink-700 hover:to-pink-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-pink-400 text-center"
                        >
                          📞 Book {service.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="tel:+919372662471" className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
              📞 Call Now - Book Your Companion
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
      <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-pink-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our companion services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100">
                <button
                  className="w-full px-8 py-6 text-left font-semibold text-lg text-gray-800 hover:bg-pink-50 transition-colors duration-300 flex items-center justify-between"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    ⌄
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-pink-200 to-blue-200 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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