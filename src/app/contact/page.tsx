'use client'

import Header from '@/components/Header'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message
    const whatsappMessage = `Hello! I would like to book your service.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEmail: ${formData.email}%0AService: ${formData.service}%0ALocation: ${formData.location}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919372662471?text=${whatsappMessage}`, '_blank')
  }

  const services = [
    'Celebrity Escorts',
    'VIP Escorts',
    'Premium Models',
    'College Girls',
    'Housewife Escorts',
    'Punjabi Women',
    'Slim Escorts',
    'Local Beauties',
    'Event Companion',
    'Pink Special',
    'Incall Escorts',
    'Outcall Service',
    'Hotel Visit',
    'Home Visit'
  ]

  const locations = [
    'Vijay Nagar',
    'MG Road',
    'Palasia',
    'New Palasia',
    'AB Road',
    'Sapna Sangeeta Road',
    'Scheme 78',
    'Scheme 94',
    'Bhawar Kuan',
    'Rajwada',
    'Sarafa Bazaar',
    'Other Areas'
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-400/30 to-red-500/20"></div>
          </div>
          
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-cyan-400/40 to-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-56 h-56 bg-gradient-to-br from-pink-400/40 to-purple-500/30 rounded-full blur-2xl animate-pulse delay-700"></div>
          <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-500/20 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/4 w-28 h-28 bg-gradient-to-br from-green-400/30 to-teal-500/20 rounded-full blur-lg animate-bounce delay-1000"></div>
          
          <div className="container mx-auto text-center relative z-10 px-4">
            {/* Icon Group */}
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                <span className="text-2xl text-white">📞</span>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-3xl text-white">💎</span>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce delay-500">
                <span className="text-2xl text-white">✨</span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent mb-8 leading-tight">
              Contact Us
            </h1>
            <div className="relative mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🌟 Premium Escort Services Available 24/7 🌟
              </h2>
              <p className="text-xl md:text-2xl text-pink-100 max-w-5xl mx-auto leading-relaxed font-medium">
                Connect with Indore's finest companions instantly! Quick response, complete discretion, and unforgettable experiences await you.
              </p>
            </div>
            
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              <div className="bg-gradient-to-br from-pink-500/30 to-rose-600/30 backdrop-blur-lg rounded-3xl p-6 border-2 border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">🕒</div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-lg text-pink-100 font-medium">Always Available</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/30 to-cyan-600/30 backdrop-blur-lg rounded-3xl p-6 border-2 border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-3xl font-bold text-white">2 Min</div>
                <div className="text-lg text-blue-100 font-medium">Quick Response</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/30 to-violet-600/30 backdrop-blur-lg rounded-3xl p-6 border-2 border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">🔒</div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-lg text-purple-100 font-medium">Private & Secure</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500/30 to-red-600/30 backdrop-blur-lg rounded-3xl p-6 border-2 border-white/20 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">📍</div>
                <div className="text-3xl font-bold text-white">12+</div>
                <div className="text-lg text-orange-100 font-medium">Prime Locations</div>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-green-500/30"
              >
                <span className="mr-4 text-3xl animate-bounce">📞</span>
                Call Now: +91 9372662471
                <span className="ml-4 text-2xl group-hover:animate-ping">🔥</span>
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 hover:from-pink-600 hover:via-rose-600 hover:to-red-600 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-2xl hover:shadow-pink-500/30"
              >
                <span className="mr-4 text-3xl animate-pulse">💬</span>
                WhatsApp Now
                <span className="ml-4 text-2xl group-hover:animate-bounce">⚡</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-purple-100/60 to-orange-200/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6">
                🌟 Multiple Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                Choose your preferred method to connect with us for premium escort services
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                
                {/* Phone Contact */}
                <div className="bg-gradient-to-br from-pink-50/95 to-rose-100/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-200/50 p-8 text-center transform hover:-translate-y-5 hover:rotate-1 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl text-white">📞</span>
                  </div>
                  <h3 className="text-2xl font-bold text-pink-700 mb-4">Direct Call</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">Call us directly for instant booking and immediate response</p>
                  <a 
                    href="tel:+919372662471" 
                    className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    +91 9372 662 471
                  </a>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="inline-flex items-center text-sm text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Available 24/7
                    </span>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-gradient-to-br from-green-50/95 to-emerald-100/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-green-200/50 p-8 text-center transform hover:-translate-y-5 hover:rotate-1 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl text-white">💬</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 mb-4">WhatsApp Chat</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">Chat with us on WhatsApp for quick responses and easy booking</p>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Start WhatsApp
                  </a>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="inline-flex items-center text-sm text-green-600 font-bold bg-green-100 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Instant Replies
                    </span>
                  </div>
                </div>

                {/* Email Contact */}
                <div className="bg-gradient-to-br from-purple-50/95 to-violet-100/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-purple-200/50 p-8 text-center transform hover:-translate-y-5 hover:rotate-1 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl text-white">✉️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-purple-700 mb-4">Email Us</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">Send us detailed inquiries and requirements via email</p>
                  <a 
                    href="mailto:contact@indoreescortservice.com" 
                    className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Send Email
                  </a>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="inline-flex items-center text-sm text-purple-600 font-bold bg-purple-100 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
                      Detailed Responses
                    </span>
                  </div>
                </div>

                {/* Location/Visit Contact */}
                <div className="bg-gradient-to-br from-orange-50/95 to-yellow-100/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-orange-200/50 p-8 text-center transform hover:-translate-y-5 hover:rotate-1 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                    <span className="text-4xl text-white">📍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-orange-700 mb-4">Visit Locations</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">We serve all major locations across Indore city</p>
                  <a 
                    href="/locations" 
                    className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    View Areas
                  </a>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="inline-flex items-center text-sm text-orange-600 font-bold bg-orange-100 px-3 py-1 rounded-full">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2 animate-pulse"></span>
                      12+ Locations
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Google Map & Location Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-pink-50/80">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                  🗺️ Our Service Coverage in Indore
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                  We provide premium escort services across all major areas of Indore. Find our service locations on the map below
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Google Map */}
                <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200/50 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">📍 Interactive Map</h3>
                    <p className="text-blue-100">Explore Indore and our service areas</p>
                  </div>
                  <div className="h-96 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58921.21775219772!2d75.82137767217883!3d22.719568374762386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302b0e21b4bd3%3A0x1a77abc5e7b08a8a!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1704203040123!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Service Areas List */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-pink-50/90 to-rose-100/80 rounded-3xl p-8 shadow-2xl border-2 border-pink-200/50">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl text-white">🏙️</span>
                      </div>
                      <h3 className="text-2xl font-bold text-pink-700">Prime Locations We Serve</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Vijay Nagar
                      </div>
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        MG Road
                      </div>
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Palasia
                      </div>
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        AB Road
                      </div>
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Scheme 78
                      </div>
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Bhawar Kuan
                      </div>
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Rajwada
                      </div>
                      <div className="flex items-center text-gray-700 font-medium">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                        Saket
                      </div>
                    </div>

                    <div className="mt-6">
                      <a 
                        href="/locations" 
                        className="inline-flex items-center bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span className="mr-2">🗺️</span>
                        View All Locations
                        <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Quick Contact for Location */}
                  <div className="bg-gradient-to-br from-blue-50/90 to-cyan-100/80 rounded-3xl p-8 shadow-2xl border-2 border-blue-200/50">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-2xl text-white">📞</span>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-700">Quick Location Booking</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6 font-medium leading-relaxed">
                      Need service at a specific location? Call us now and we'll arrange your preferred companion at any area in Indore within 30 minutes.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="tel:+919372662471" 
                        className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span className="mr-2">📞</span>
                        Call Now
                      </a>
                      <a 
                        href="https://wa.me/919372662471?text=I need escort service at specific location in Indore" 
                        className="flex-1 inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                      >
                        <span className="mr-2">💬</span>
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/30 to-orange-500/20"></div>
          <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-cyan-400/30 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-pink-400/30 to-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex justify-center items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                    <span className="text-3xl text-white">📝</span>
                  </div>
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-4xl text-white">💎</span>
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-spin-slow">
                    <span className="text-3xl text-white">⚡</span>
                  </div>
                </div>
                <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                  Quick Booking Form
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed font-bold max-w-4xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Fill out this colorful form and we'll contact you instantly via WhatsApp for immediate booking confirmation! 🌈
                </p>
              </div>

              <div className="bg-gradient-to-br from-white/95 via-purple-50/90 to-pink-50/95 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-gradient-to-r from-pink-300 to-purple-300 p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-3">
                        🧑 Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-6 border-4 border-blue-300 rounded-2xl focus:border-blue-500 focus:outline-none text-xl font-bold text-gray-700 bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg transform focus:scale-105 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✨</span>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-2xl font-black text-transparent bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text mb-3">
                        📱 Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-6 border-4 border-green-300 rounded-2xl focus:border-green-500 focus:outline-none text-xl font-bold text-gray-700 bg-gradient-to-r from-green-50 to-teal-50 shadow-lg transform focus:scale-105 transition-all duration-300"
                        placeholder="+91 XXXXX XXXXX"
                      />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🔥</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block text-2xl font-black text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text mb-3">
                      ✉️ Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-8 py-6 border-4 border-purple-300 rounded-2xl focus:border-purple-500 focus:outline-none text-xl font-bold text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg transform focus:scale-105 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💎</span>
                    </div>
                  </div>

                  {/* Service and Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <label className="block text-2xl font-black text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text mb-3">
                        🌟 Preferred Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-6 border-4 border-orange-300 rounded-2xl focus:border-orange-500 focus:outline-none text-xl font-bold text-gray-700 bg-gradient-to-r from-orange-50 to-red-50 shadow-lg transform focus:scale-105 transition-all duration-300"
                      >
                        <option value="">🎭 Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">⚡</span>
                      </div>
                    </div>
                    <div className="relative">
                      <label className="block text-2xl font-black text-transparent bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text mb-3">
                        📍 Location *
                      </label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full px-8 py-6 border-4 border-pink-300 rounded-2xl focus:border-pink-500 focus:outline-none text-xl font-bold text-gray-700 bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg transform focus:scale-105 transition-all duration-300"
                      >
                        <option value="">🏙️ Select location</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>{location}</option>
                        ))}
                      </select>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🌟</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-2xl font-black text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text mb-3">
                      💭 Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-8 py-6 border-4 border-cyan-300 rounded-2xl focus:border-cyan-500 focus:outline-none text-xl font-bold text-gray-700 bg-gradient-to-r from-cyan-50 to-blue-50 shadow-lg transform focus:scale-105 transition-all duration-300 resize-vertical"
                      placeholder="Any specific requirements or questions..."
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💫</span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-8">
                    <button
                      type="submit"
                      className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-20 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-purple-500/50 relative overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-4 text-3xl animate-bounce">📱</span>
                        Send via WhatsApp
                        <span className="ml-4 text-3xl group-hover:animate-ping">🚀</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                    </button>
                    <p className="text-gray-600 mt-6 text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      ✨ This form will open WhatsApp with your message pre-filled ✨
                    </p>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/25 to-pink-600/20"></div>
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-yellow-400/30 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-gradient-to-br from-green-400/30 to-teal-500/20 rounded-full blur-2xl animate-pulse delay-700"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                  <span className="text-3xl text-white">🏙️</span>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl text-white">📍</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce delay-500">
                  <span className="text-3xl text-white">🌟</span>
                </div>
              </div>
              <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                Service Areas in Indore
              </h2>
              <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent max-w-4xl mx-auto leading-relaxed">
                🌈 We provide premium escort services across all major areas in Indore with colorful excellence! 🌈
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                
                {/* Location Cards with Different Colors */}
                <div className="group bg-gradient-to-br from-blue-400/90 to-cyan-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-blue-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce">🏢</div>
                  <h3 className="text-2xl font-black text-white mb-2">Vijay Nagar</h3>
                  <p className="text-blue-100 font-bold">Premium Business District</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-purple-400/90 to-pink-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-purple-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-100">🛣️</div>
                  <h3 className="text-2xl font-black text-white mb-2">MG Road</h3>
                  <p className="text-purple-100 font-bold">Main Commercial Hub</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-4/5 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-green-400/90 to-teal-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-green-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-200">🏛️</div>
                  <h3 className="text-2xl font-black text-white mb-2">Palasia</h3>
                  <p className="text-green-100 font-bold">Shopping Paradise</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse delay-300"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-orange-400/90 to-red-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-orange-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-300">🌟</div>
                  <h3 className="text-2xl font-black text-white mb-2">New Palasia</h3>
                  <p className="text-orange-100 font-bold">Modern Living Area</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-5/6 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse delay-400"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-pink-400/90 to-rose-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-pink-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-400">🛤️</div>
                  <h3 className="text-2xl font-black text-white mb-2">AB Road</h3>
                  <p className="text-pink-100 font-bold">Highway Connect</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-500"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-cyan-400/90 to-blue-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-cyan-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-500">🌈</div>
                  <h3 className="text-2xl font-black text-white mb-2">Sapna Sangeeta Road</h3>
                  <p className="text-cyan-100 font-bold">Entertainment Zone</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-4/5 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse delay-600"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-yellow-400/90 to-orange-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-yellow-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-600">🏘️</div>
                  <h3 className="text-2xl font-black text-white mb-2">Scheme 78</h3>
                  <p className="text-yellow-100 font-bold">Residential Elite</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-700"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-indigo-400/90 to-purple-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-indigo-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-700">🏡</div>
                  <h3 className="text-2xl font-black text-white mb-2">Scheme 94</h3>
                  <p className="text-indigo-100 font-bold">Premium Society</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-5/6 h-2 bg-gradient-to-r from-green-400 to-teal-500 rounded-full animate-pulse delay-800"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-teal-400/90 to-green-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-teal-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-800">⭐</div>
                  <h3 className="text-2xl font-black text-white mb-2">Bhawar Kuan</h3>
                  <p className="text-teal-100 font-bold">Central Location</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse delay-900"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-rose-400/90 to-pink-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-rose-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-900">�</div>
                  <h3 className="text-2xl font-black text-white mb-2">Rajwada</h3>
                  <p className="text-rose-100 font-bold">Historic Royal Area</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-4/5 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse delay-1000"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-amber-400/90 to-yellow-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-amber-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-1000">🛒</div>
                  <h3 className="text-2xl font-black text-white mb-2">Sarafa Bazaar</h3>
                  <p className="text-amber-100 font-bold">Famous Food Street</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-pulse delay-1100"></div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-violet-400/90 to-purple-500/90 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-violet-300/50 p-8 text-center transform hover:-translate-y-6 hover:rotate-3 transition-all duration-500">
                  <div className="text-5xl mb-4 animate-bounce delay-1100">🌆</div>
                  <h3 className="text-2xl font-black text-white mb-2">Other Areas</h3>
                  <p className="text-violet-100 font-bold">All Indore Locations</p>
                  <div className="mt-4 w-full h-2 bg-white/30 rounded-full">
                    <div className="w-full h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse delay-1200"></div>
                  </div>
                </div>

              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 shadow-2xl border-4 border-white/20">
                  <h3 className="text-4xl font-black text-white mb-4">
                    🎯 Need Service at Any Location? 🎯
                  </h3>
                  <p className="text-2xl text-white/90 mb-8 font-bold">
                    Call us now and we'll arrange your preferred companion at any area in Indore within 30 minutes! 
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a 
                      href="tel:+919372662471" 
                      className="group inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-12 py-6 rounded-full font-black text-xl transition-all duration-500 transform hover:scale-110 hover:rotate-2 shadow-2xl hover:shadow-green-500/50"
                    >
                      <span className="mr-4 text-3xl animate-bounce">📞</span>
                      Call Now: +91 9372662471
                      <span className="ml-4 text-2xl group-hover:animate-ping">🚀</span>
                    </a>
                    <a 
                      href="https://wa.me/919372662471?text=I need escort service at specific location in Indore" 
                      className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-12 py-6 rounded-full font-black text-xl transition-all duration-500 transform hover:scale-110 hover:-rotate-2 shadow-2xl hover:shadow-blue-500/50"
                    >
                      <span className="mr-4 text-3xl animate-pulse">💬</span>
                      WhatsApp Location
                      <span className="ml-4 text-2xl group-hover:animate-bounce">⚡</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-pink-600/20"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-8">
                Need Immediate Service?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
                For urgent bookings and immediate assistance, call us directly. We're available 24/7!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  🚨 Emergency Call: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471?text=I%20need%20immediate%20service!" 
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  ⚡ Urgent WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Building Trust Since Years Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
          <div className="w-full px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Building Trust Since Years
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
                Discover how we became Indore's most trusted premium escort service through dedication and excellence
              </p>
              
              {/* Journey Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">Started with a vision to provide premium, professional, and discreet escort services in Indore. Our commitment to quality and customer satisfaction set us apart from day one.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Recognition</h3>
                  <p className="text-gray-600 leading-relaxed">Earned the trust of thousands of clients through consistent quality, reliability, and professional excellence. Became the most sought-after service in Indore.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">💎</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Standards</h3>
                  <p className="text-gray-600 leading-relaxed">Established strict quality standards for companion selection, customer service, and privacy protection. Every aspect designed for premium experience.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Future Vision</h3>
                  <p className="text-gray-600 leading-relaxed">Continuously expanding our services and locations while maintaining the highest standards of quality, discretion, and customer satisfaction.</p>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">😊</div>
                  <div className="text-3xl font-bold mb-1">1000+</div>
                  <div className="text-lg font-semibold">Happy Clients</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">💯</div>
                  <div className="text-3xl font-bold mb-1">99%</div>
                  <div className="text-lg font-semibold">Satisfaction Rate</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="text-3xl font-bold mb-1">12+</div>
                  <div className="text-lg font-semibold">Prime Locations</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">🕐</div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-lg font-semibold">Availability</div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🎖️ Join Our Premium Family 🎖️</h3>
                <p className="text-xl mb-8">Experience the difference that years of dedication and premium service standards make</p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="tel:+919372662471" 
                    className="inline-flex items-center justify-center bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <span className="mr-2">📞</span>
                    Call Now: +91 9372662471
                    <span className="ml-2">→</span>
                  </a>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <span className="mr-2">💬</span>
                    WhatsApp Now
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Same as other pages */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          <div className="w-full px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  ✨ Indore Premium Escort Service
                </h3>
                <p className="text-pink-100 mb-6 leading-relaxed font-semibold text-lg">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
                </p>
                <div className="flex flex-col gap-4">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">🌟 Our Services</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">💎 Celebrity Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👑 VIP Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">✨ Premium Models</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🎓 College Girls</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🏠 Housewife Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">👸 Punjabi Women</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">🔗 Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>
                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>
                  <a href="/gallery" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🖼️ Gallery</a>
                  <a href="/contact" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
                  <a href="/about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">📞 Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">📞</span>
                    <a href="tel:+919372662471" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">💬</span>
                    <a href="https://wa.me/919372662471" className="text-green-200 hover:text-green-100 font-bold text-lg">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-purple-200 hover:text-purple-100 font-bold text-lg">Email Us</a>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">📍</span>
                    <span className="text-pink-200 font-bold text-lg">All Indore Areas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">🕒</span>
                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t-2 border-pink-400/40 mt-16 pt-10 text-center">
              <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">
                © 2024 Indore Premium Escort Service. All rights reserved. 🏆
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold">✅ 24/7 Available</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold">✅ 100% Verified</span>
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold">✅ Complete Discretion</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold">✅ Premium Quality</span>
              </div>
              <p className="text-pink-200 font-semibold text-lg">
                🔞 Professional escort services for adults only. Must be 18+ to use our services. 🔞
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}