import React from 'react'
import Link from 'next/link'

interface ServiceData {
  name: string
  slug: string
  description: string
  features: string[]
  priceRange: string
}

interface ServicePageTemplateProps {
  serviceData: ServiceData
}

export default function ServicePageTemplate({ serviceData }: ServicePageTemplateProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
      {/* Hero Section - Premium Enhanced Style */}
      <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/95 via-orange-200/90 to-pink-300/95"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-orange-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="w-full mx-auto text-center relative z-10 px-4">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-pink-200/50">
            <span className="text-3xl">💎</span>
            <span className="text-pink-800 font-bold text-lg">Premium Service in Indore</span>
            <span className="text-3xl">🌟</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
            {serviceData.name}
          </h1>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
              {serviceData.description}
            </p>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <a 
              href="tel:+919372662471" 
              className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 hover:from-pink-700 hover:via-pink-800 hover:to-pink-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-pink-400/30"
            >
              <span className="text-3xl group-hover:animate-bounce">📞</span>
              <span>Call Now: +91 9372 662 471</span>
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 border-2 border-green-400/30"
            >
              <span className="text-3xl group-hover:animate-bounce">💬</span>
              <span>WhatsApp Now</span>
            </a>
          </div>

          {/* Premium Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-700 font-medium">High-end service with professional standards</p>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl mb-3">🎭</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Elite Experience</h3>
              <p className="text-gray-700 font-medium">Sophisticated companions for all occasions</p>
            </div>
            <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Privacy</h3>
              <p className="text-gray-700 font-medium">100% confidential and discreet service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
              Premium Service Features
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Experience the finest quality service with complete professionalism and discretion
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Service Features */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6 text-center">
                  🌟 Service Highlights
                </h3>
                <div className="space-y-4">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-start bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4 border border-pink-100">
                      <span className="text-pink-500 mr-3 text-xl">✨</span>
                      <span className="text-gray-700 font-medium text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Booking */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
                  💎 Pricing & Booking
                </h3>
                
                <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-6 mb-6 border border-pink-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Price Range</h4>
                  <p className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">{serviceData.priceRange}</p>
                  <p className="text-sm text-gray-600 mt-2">*Prices may vary based on duration and specific requirements</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4 border border-pink-100">
                    <span className="text-pink-500 mr-3 text-xl">📞</span>
                    <span className="text-gray-700 font-medium">Available 24/7 for instant booking</span>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                    <span className="text-orange-500 mr-3 text-xl">💳</span>
                    <span className="text-gray-700 font-medium">Multiple payment options accepted</span>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-4 border border-pink-100">
                    <span className="text-pink-500 mr-3 text-xl">🔒</span>
                    <span className="text-gray-700 font-medium">100% confidential and discreet</span>
                  </div>
                  <div className="flex items-start bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-100">
                    <span className="text-orange-500 mr-3 text-xl">✨</span>
                    <span className="text-gray-700 font-medium">Verified and professional companions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-gradient-to-br from-white via-pink-50/30 to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-16">
            Why Choose Our {serviceData.name}?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-pink-100/50 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-pink-600 text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Premium Quality</h3>
              <p className="text-gray-700 text-lg font-medium">
                Top-rated companions with exceptional service standards and professional excellence
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-orange-100/50 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-orange-600 text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Safe & Secure</h3>
              <p className="text-gray-700 text-lg font-medium">
                Complete safety protocols, verified profiles and guaranteed confidentiality
              </p>
            </div>
            
            <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-pink-100/50 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-pink-600 text-3xl">💖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Personalized</h3>
              <p className="text-gray-700 text-lg font-medium">
                Customized experiences tailored to your preferences and special requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Served */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Areas We Serve in Indore
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              'AB Road', 'Palasia', 'Vijay Nagar', 'New Palasia',
              'Rajwada', 'Khajrana', 'Sarafa Bazaar', 'Indore GPO',
              'Kanadiya', 'Scheme No 78', 'Sudama Nagar', 'Bhawar Kuan'
            ].map((area, index) => (
              <Link 
                key={index}
                href={`/locations/${area.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow text-gray-700 hover:text-pink-600"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-pink-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Book {serviceData.name} Now
          </h2>
          <p className="text-xl mb-8">
            Experience premium companionship with complete discretion
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919372662471"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-colors"
            >
              📞 Call +91 9372662471
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-pink-600 transition-colors"
            >
              💬 Send Message
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}