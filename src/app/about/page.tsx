'use client'

import Header from '@/components/Header'
import { useState } from 'react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('about')

  const stats = [
    { number: '1000+', label: 'Happy Clients', icon: '👥' },
    { number: '24/7', label: 'Available', icon: '🕒' },
    { number: '100%', label: 'Verified', icon: '✅' },
    { number: '5⭐', label: 'Rating', icon: '⭐' },
    { number: '15+', label: 'Locations', icon: '📍' },
    { number: '3+', label: 'Years Experience', icon: '🏆' }
  ]

  const features = [
    {
      icon: '🔒',
      title: 'Complete Privacy & Discretion',
      description: 'Your privacy and discretion are our top priorities. All interactions are completely confidential with secure communication channels and anonymous booking options.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '✅',
      title: '100% Verified Professional Companions',
      description: 'All our companions are thoroughly verified for authenticity, professionalism, and background checks. We ensure only the finest quality service providers.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Instant Booking & Quick Response',
      description: 'Fast response times with immediate availability across all major areas of Indore. Same-day bookings available with flexible scheduling options.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '💎',
      title: 'Premium Quality Service',
      description: 'Only the finest companions offering premium services with complete professionalism, elegance, and sophistication for all occasions.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: '📱',
      title: '24/7 Customer Support',
      description: 'Round-the-clock customer support available via phone, WhatsApp, and email. Our support team is always ready to assist you with any requirements.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🏆',
      title: 'Trusted & Reliable Service',
      description: 'Years of experience serving clients across Indore with complete satisfaction. Established reputation for reliability and trustworthy service.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🌟',
      title: 'Diverse Selection',
      description: 'Wide range of companions including celebrities, models, college girls, VIP escorts, and specialized categories to meet all preferences.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '💼',
      title: 'Professional Service',
      description: 'Business meetings, social events, parties, and personal companionship services handled with utmost professionalism and attention to detail.',
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const testimonials = [
    {
      name: "Rajesh K.",
      location: "Vijay Nagar",
      rating: 5,
      comment: "Excellent service with complete discretion. The companion was professional and elegant. Highly recommended for anyone seeking premium escort services in Indore."
    },
    {
      name: "Amit S.",
      location: "Palasia",
      rating: 5,
      comment: "Amazing experience! The booking process was smooth and the service exceeded my expectations. Will definitely use their services again."
    },
    {
      name: "Pradeep M.",
      location: "AB Road",
      rating: 5,
      comment: "Professional and reliable service. The companion was exactly as described and the entire experience was wonderful. Great customer support too."
    }
  ]

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality and ensure every client receives premium service that exceeds expectations.",
      icon: "💎"
    },
    {
      title: "Complete Privacy",
      description: "Client confidentiality and discretion are paramount in all our interactions and services.",
      icon: "🔐"
    },
    {
      title: "Professional Excellence",
      description: "Our companions are trained professionals committed to providing exceptional experiences.",
      icon: "🎖️"
    },
    {
      title: "Customer Satisfaction",
      description: "Client satisfaction is our ultimate goal, and we go above and beyond to ensure happiness.",
      icon: "😊"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/60 via-orange-50/40 to-pink-200/60">
      {/* Hero Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-8">
            About Indore Premium Escort Service
          </h1>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-pink-200/50">
            <p className="text-2xl font-semibold text-gray-800 leading-relaxed mb-6">
              ✨ Your trusted partner for premium escort services in Indore ✨
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We are the leading escort service provider in Indore, committed to delivering exceptional experiences 
              with complete professionalism, privacy, and satisfaction. Our verified companions ensure memorable moments 
              across all major locations in the city.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-200/50 to-orange-200/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-pink-200/50 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'about'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-2xl border-2 border-pink-300/50'
                  : 'bg-white/70 text-gray-700 shadow-lg border border-pink-200/50 hover:bg-pink-50'
              }`}
            >
              📖 About Us
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'features'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-2xl border-2 border-blue-300/50'
                  : 'bg-white/70 text-gray-700 shadow-lg border border-pink-200/50 hover:bg-blue-50'
              }`}
            >
              ⭐ Features
            </button>
            <button
              onClick={() => setActiveTab('testimonials')}
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                activeTab === 'testimonials'
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-2xl border-2 border-orange-300/50'
                  : 'bg-white/70 text-gray-700 shadow-lg border border-pink-200/50 hover:bg-orange-50'
              }`}
            >
              💬 Testimonials
            </button>
          </div>

          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-3xl p-10 shadow-2xl border-2 border-pink-200/60">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8">
                  🌟 Our Story
                </h2>
                <div className="space-y-6 text-gray-800">
                  <p className="text-lg leading-relaxed">
                    <strong>Indore Premium Escort Service</strong> has been serving the beautiful city of Indore for years, 
                    establishing ourselves as the most trusted and reliable escort service provider in the region.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We understand that companionship is about more than just physical presence – it's about connection, 
                    understanding, and creating memorable experiences that last a lifetime.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our commitment to excellence has made us the preferred choice for discerning clients across 
                    Vijay Nagar, Saket, Scheme 78, and all major areas of Indore.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-pink-100 rounded-3xl p-10 shadow-2xl border-2 border-orange-200/60">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-8">
                  🎯 Our Mission
                </h2>
                <div className="space-y-6 text-gray-800">
                  <p className="text-lg leading-relaxed">
                    To provide <strong>premium escort services</strong> that exceed expectations while maintaining 
                    the highest standards of professionalism, discretion, and client satisfaction.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We believe in creating a safe, respectful environment where both our clients and companions 
                    can feel comfortable and valued.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our goal is to be the most trusted name in Indore's escort service industry, 
                    known for reliability, quality, and complete customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200/50 hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Testimonials Tab */}
          {activeTab === 'testimonials' && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    What Our Clients Say
                  </span>
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                  Read genuine testimonials from our satisfied clients who experienced our premium escort services.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-white/90 to-pink-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-pink-200/50 group-hover:scale-105 group-hover:-translate-y-3">
                      
                      {/* Quote Icon */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-bold">"</span>
                      </div>
                      
                      {/* Rating Stars */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-2xl mx-1 animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-gray-700 italic mb-6 leading-relaxed text-lg text-center font-medium">
                        "{testimonial.comment}"
                      </p>
                      
                      {/* Client Info */}
                      <div className="flex items-center justify-center pt-6 border-t border-pink-200/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-800 text-lg">{testimonial.name}</div>
                          <div className="text-pink-600 font-semibold flex items-center">
                            <span className="text-sm mr-1">📍</span>
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                      
                      {/* Decorative Elements */}
                      <div className="absolute top-4 right-4 text-pink-300/50 text-6xl font-serif">"</div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Info */}
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 max-w-2xl mx-auto">
                  <p className="text-gray-700 font-semibold text-lg">
                    <span className="text-2xl mr-2">🌟</span>
                    Join hundreds of satisfied clients who trust our premium escort services in Indore
                    <span className="text-2xl ml-2">🌟</span>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-200/70 via-purple-100/60 to-orange-200/70">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-pink-200/50">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-8">
              Ready to Experience Premium Service?
            </h2>
            <p className="text-2xl text-gray-700 mb-10 leading-relaxed">
              Contact us today for the finest escort services in Indore. Available 24/7 across all major locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+919372662471" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-green-300/50"
              >
                📞 Call Now: +91 9372 662 471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-lime-600 hover:to-green-700 text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-lime-300/50"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Same as Homepage */}
      <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
        </div>
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
                <a href="#faq" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">❓ FAQ</a>
                <a href="tel:+919372662471" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
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
  )
}