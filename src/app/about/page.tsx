'use client'

import { useState } from 'react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('about')

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '👥' },
    { number: '24/7', label: 'Available', icon: '🕒' },
    { number: '100%', label: 'Verified', icon: '✅' },
    { number: '5⭐', label: 'Rating', icon: '⭐' }
  ]

  const features = [
    {
      icon: '🔒',
      title: 'Complete Privacy',
      description: 'Your privacy and discretion are our top priorities. All interactions are completely confidential.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '✅',
      title: '100% Verified Companions',
      description: 'All our companions are thoroughly verified for authenticity and professionalism.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description: 'Fast response times with immediate availability across all major areas of Indore.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '💎',
      title: 'Premium Quality',
      description: 'Only the finest companions offering premium services with complete professionalism.',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: '📱',
      title: '24/7 Support',
      description: 'Round-the-clock customer support available via phone, WhatsApp, and email.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🏆',
      title: 'Trusted Service',
      description: 'Years of experience serving clients across Indore with complete satisfaction.',
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  const testimonials = [
    {
      name: 'Raj K.',
      location: 'Vijay Nagar',
      rating: 5,
      comment: 'Excellent service with complete professionalism. Highly recommended!',
      color: 'from-pink-400 to-rose-400'
    },
    {
      name: 'Amit S.',
      location: 'Saket',
      rating: 5,
      comment: 'Very discreet and professional. Exactly what I was looking for.',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Priya M.',
      location: 'Scheme 78',
      rating: 5,
      comment: 'Outstanding service quality. Will definitely use again.',
      color: 'from-purple-400 to-pink-400'
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`bg-gradient-to-br ${testimonial.color} rounded-3xl p-8 text-white shadow-2xl border-2 border-white/30 hover:scale-105 transition-all duration-300`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{testimonial.name}</h4>
                      <p className="text-white/80">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-300 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg italic leading-relaxed">"{testimonial.comment}"</p>
                </div>
              ))}
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
    </div>
  )
}