'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Web Development",
      description: "Professional websites and web applications with modern technologies",
      image: "/images/services/0397121d113ececea2ba9056c9dd0980.webp",
      icon: "💻",
      category: "PREMIUM"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs that engage users",
      image: "/images/services/2b60624548447911360b06ed377bf722.webp",
      icon: "🎨",
      category: "CREATIVE"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android",
      image: "/images/services/3025e0fbb540f802d9608b54286647cc.webp",
      icon: "📱",
      category: "MOBILE"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment integration",
      image: "/images/services/7d861a486a6e06fce0ac060cd0abe731.webp",
      icon: "🛍️",
      category: "BUSINESS"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies and campaigns",
      image: "/images/services/b0489d963dcb46271de22d7478adb06a.webp",
      icon: "📈",
      category: "MARKETING"
    },
    {
      title: "Brand Identity",
      description: "Complete branding solutions including logo design and guidelines",
      image: "/images/services/e3649d9fe77db60518bbf7e230e41987.webp",
      icon: "✨",
      category: "BRAND"
    }
  ]

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer a comprehensive range of digital services including web development, UI/UX design, mobile app development, e-commerce solutions, digital marketing, and complete branding services."
    },
    {
      question: "How long does a project typically take?",
      answer: "Project timelines vary depending on complexity and requirements. Simple websites can be completed in 2-3 weeks, while complex applications may take 2-3 months. I'll provide a detailed timeline after understanding your specific needs."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, I provide comprehensive ongoing support and maintenance for all projects. This includes updates, security patches, performance optimization, and technical support."
    },
    {
      question: "What are your rates?",
      answer: "My rates are competitive and depend on the project scope, complexity, and timeline. I offer both fixed-price packages and hourly rates. Contact me for a detailed quote based on your specific requirements."
    },
    {
      question: "Can you work with my existing team?",
      answer: "Absolutely! I collaborate effectively with existing teams and can adapt to your current workflow, tools, and processes. I'm experienced in working with remote and in-house teams."
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, I include a reasonable number of revisions in all my projects. The exact number depends on the project scope, but I always work with clients to ensure complete satisfaction with the final result."
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
                🌟 Premium Digital Solutions & Creative Design Expert | Professional Services Available 24/7
              </p>
              <p className="text-lg text-white/90 mb-12 max-w-4xl mx-auto">
                Experience the finest digital services with our premium solutions. Professional web development, stunning UI/UX design, and comprehensive digital marketing services.
                ✨ 100% Professional • Creative & Innovative • Client Satisfaction Guaranteed ✨
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
              <a href="tel:+919372662471" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Call Now 24/7
              </a>
              <a href="https://api.whatsapp.com/send?phone=919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                📱 WhatsApp Fast
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-pink-200 text-sm">Verified Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-pink-200 text-sm">Professional & Creative</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">⭐ 4.9/5</div>
                <div className="text-pink-200 text-sm">Rating (150+ Reviews)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-pink-200 text-sm">Available Service</div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-white/80 text-lg">🚀 All Services Available • 30-Min Response Time • Complete Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Premium Services - Our <span className="text-pink-600">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-pink-400 to-blue-500 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 z-10">
                    {service.category}
                  </div>
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-4xl bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center z-10">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a href="#contact" className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold transition-colors">
                    Book {service.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#contact" className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Services
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
              All our services are excellent and professional. We are highly professional and will always meet you with enthusiasm. Our dedication to providing the best services makes us stand out.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">100% Professional</h3>
              <p className="text-gray-600">All our services are thoroughly professional and high-quality</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Available</h3>
              <p className="text-gray-600">Round the clock availability for your convenience</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Discretion</h3>
              <p className="text-gray-600">Your privacy and confidentiality is our top priority</p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">High-class services with exceptional quality and creativity</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-pink-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our services and process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-pink-50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-pink-600 transform transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100">
                    <div className="pt-4">{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for an Unforgettable Experience?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-pink-100">
              Book your premium service today and discover the difference that true professionalism makes.
            </p>
            <p className="text-lg mb-12 text-white/90">
              Discretion guaranteed • Available 24/7 • Premium quality assured
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                📞 Call Now
              </a>
              <a href="https://api.whatsapp.com/send?phone=919372662471" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                💬 WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center">
                <span className="text-2xl mr-2">✓</span>
                100% Discreet
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">⭐</span>
                Premium Quality
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">🕐</span>
                24/7 Available
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-2">👨‍💼</span>
                Professional
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Get in <span className="text-pink-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to book your premium experience. We're available 24/7 for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">📞</span>
                    </div>
                    <div>
                      <p className="text-gray-600">Phone:</p>
                      <p className="text-lg font-semibold text-gray-800">+91 9372662471</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">📧</span>
                    </div>
                    <div>
                      <p className="text-gray-600">Email:</p>
                      <p className="text-lg font-semibold text-gray-800">saumya@professional.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">🕐</span>
                    </div>
                    <div>
                      <p className="text-gray-600">Availability:</p>
                      <p className="text-lg font-semibold text-gray-800">24/7 - Always available</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white">💬</span>
                    </div>
                    <div>
                      <p className="text-gray-600">WhatsApp:</p>
                      <p className="text-lg font-semibold text-gray-800">+91 9372662471</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-pink-100 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Important Notice</h4>
                  <p className="text-sm text-gray-600">
                    All services are for professionals 18+ only. We maintain strict confidentiality and professional standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div>
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                  <p className="text-gray-600 mb-4">Mumbai, Maharashtra</p>
                  <p className="text-sm text-gray-500">Interactive map will be embedded here</p>
                </div>
              </div>
              
              {/* Actual Google Maps Embed - Replace with your location */}
              {/* 
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2763418970436!2d72.8776844!3d19.076090000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b95%3A0x6c8dd86a65c0c4f2!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1635834567890!5m2!1sen!2sin"
                width="100%" 
                height="384" 
                style={{border:0, borderRadius: '1rem'}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              >
              </iframe>
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  Saumya Kapoor
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Premium digital services providing high-class solutions for discerning clients. 
                  Professionalism, quality, and satisfaction guaranteed.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <a href="tel:+919372662471" className="w-10 h-10 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-blue-700 transition-all">
                  📞
                </a>
                <a href="https://api.whatsapp.com/send?phone=919372662471" className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all">
                  💬
                </a>
                <a href="mailto:saumya@professional.com" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all">
                  📧
                </a>
              </div>
            </div>

            {/* Premium Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-pink-400">Premium Services</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Web Development</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Mobile Apps</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">E-commerce</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Digital Marketing</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Brand Identity</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="text-center md:text-left">
                <p className="text-gray-400">📞 +91 9372662471</p>
                <p className="text-gray-500 text-sm">WhatsApp Available</p>
              </div>
              <div className="text-center md:text-center">
                <p className="text-gray-400">📧 saumya@professional.com</p>
                <p className="text-gray-500 text-sm">24/7 Service</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-gray-400">📍 Mumbai, Maharashtra</p>
                <p className="text-gray-500 text-sm">Professional Services</p>
              </div>
            </div>

            <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
              <p>© 2025 Saumya Kapoor. All Rights Reserved. Premium Professional Services.</p>
              <p className="mt-2">Professional & Discreet | Creative & Innovative | 18+ Only</p>
              <p className="mt-1 text-xs">This website is intended for professional services only. All content is for business purposes.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}