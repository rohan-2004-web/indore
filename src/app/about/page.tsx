'use client'

import Header from '@/components/Header'
import { useState } from 'react'

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('about')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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

  const faqs = [
    {
      question: "What makes your escort service different from others in Indore?",
      answer: "Our escorts are highly professional, verified, and trained in providing exceptional companion services. We ensure complete discretion, customer satisfaction, and only work with premium quality companions who undergo thorough background checks."
    },
    {
      question: "How do you ensure the privacy and discretion of your clients?",
      answer: "Client privacy is our top priority. All communications are confidential, we use secure booking systems, and our companions are bound by strict confidentiality agreements. Your personal information and interactions remain completely private."
    },
    {
      question: "What areas of Indore do you serve?",
      answer: "We provide our premium escort services across all major areas of Indore including Vijay Nagar, Palasia, AB Road, Saket, MG Road, Rajwada, Sarafa Bazaar, and 15+ other prime locations throughout the city."
    },
    {
      question: "Are all your escorts verified and professional?",
      answer: "Yes, absolutely. All our escorts go through a rigorous verification process including background checks, professional training, and continuous quality monitoring to ensure they meet our premium standards."
    },
    {
      question: "What types of escort services do you offer?",
      answer: "We offer various categories including Celebrity Escorts, College Girls, VIP Companions, Event Companions, Travel Partners, Dinner Dates, and more. Each service is tailored to meet specific client preferences and occasions."
    },
    {
      question: "How can I book your escort services?",
      answer: "You can book our services by calling us at +91 9372 662 471, WhatsApp, or through our contact form. We're available 24/7 for instant bookings and provide immediate confirmation."
    },
    {
      question: "Do you provide both incall and outcall services?",
      answer: "Yes, we provide both incall and outcall services. Our escorts can visit your hotel, home, or preferred location across Indore, or you can visit our discrete and comfortable locations."
    },
    {
      question: "What are your rates and payment options?",
      answer: "Our rates vary based on the type of service, duration, and companion category. Please contact us directly for detailed pricing information. We accept various payment methods and offer flexible packages."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100/80 via-pink-200/70 to-orange-100/80 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-br from-orange-400/25 to-pink-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-pink-500/15 to-purple-500/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Ultra Premium Hero Section - Home Page Style */}
      <section className="pt-32 pb-20 px-4 relative z-10 overflow-hidden">
        {/* Enhanced Animated Background Elements - Home Page Style */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/95 via-orange-200/90 to-pink-300/95"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-orange-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          {/* Additional floating elements */}
          <div className="absolute top-32 right-1/4 w-60 h-60 bg-gradient-to-br from-emerald-400/25 to-teal-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2500ms'}}></div>
          <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-gradient-to-tr from-yellow-400/20 to-orange-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3000ms'}}></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Premium Badge - Home Page Style */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-pink-200/50">
            <span className="text-3xl">💎</span>
            <span className="text-pink-800 font-bold text-lg">About Premium Escort Services</span>
            <span className="text-3xl">✨</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
            About Our
            <br />
            <span className="text-6xl md:text-8xl bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Premium Service
            </span>
          </h1>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
              Experience Ultimate Luxury & Sophistication
            </p>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Trusted professionals • Complete privacy • Premium locations • 3+ Years experience
            </p>
          </div>

          {/* Enhanced CTA Buttons - Home Page Style */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <a 
              href="tel:+919372662471" 
              className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 hover:from-pink-700 hover:via-pink-800 hover:to-pink-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-pink-400/30"
            >
              <span className="text-3xl group-hover:animate-bounce">📞</span>
              <span>Call Now: +91 9372662471</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
            <a 
              href="https://wa.me/919372662471" 
              className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 border-2 border-orange-400/30"
            >
              <span className="text-3xl group-hover:animate-bounce">💬</span>
              <span>WhatsApp Now</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Trust Indicators - Home Page Style */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-gray-800 font-bold text-lg">100% Discreet</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-orange-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">✅</div>
              <div className="text-gray-800 font-bold text-lg">Verified Escorts</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">�</div>
              <div className="text-gray-800 font-bold text-lg">24/7 Available</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-orange-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">⭐</div>
              <div className="text-gray-800 font-bold text-lg">Premium Quality</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-purple-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-2">🏆</div>
              <div className="text-gray-800 font-bold text-lg">3+ Years Exp</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100/90 to-pink-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-orange-200/50">
              <span className="text-3xl">📍</span>
              <span className="text-orange-800 font-bold text-xl">Service Coverage Areas</span>
              <span className="text-3xl">🌆</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
              12 Prime Locations in Indore
            </h2>
            
            <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-medium mb-12">
              Premium escort services available across all major areas of Indore with instant booking and 24/7 availability
            </p>
          </div>

          {/* Ultra Premium 12 Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              { name: "Vijay Nagar", icon: "🏢", description: "Elite business district with 5-star hotels", color: "from-violet-500 via-purple-500 to-fuchsia-500" },
              { name: "Palasia", icon: "🛍️", description: "Luxury shopping & entertainment paradise", color: "from-fuchsia-500 via-pink-500 to-rose-500" },
              { name: "AB Road", icon: "🏨", description: "Premier commercial with luxury hotels", color: "from-rose-500 via-pink-500 to-orange-500" },
              { name: "Saket", icon: "🏡", description: "Ultra-luxury residential enclave", color: "from-orange-500 via-amber-500 to-yellow-500" },
              { name: "MG Road", icon: "🌟", description: "Central business & cultural nucleus", color: "from-yellow-500 via-lime-500 to-green-500" },
              { name: "Rajwada", icon: "🏰", description: "Royal heritage & cultural center", color: "from-green-500 via-emerald-500 to-teal-500" },
              { name: "Bhanwar Kuwa", icon: "🎭", description: "Premium nightlife & entertainment", color: "from-teal-500 via-cyan-500 to-blue-500" },
              { name: "Ring Road", icon: "🚗", description: "Modern luxury development zone", color: "from-blue-500 via-indigo-500 to-purple-500" },
              { name: "Geeta Bhawan", icon: "🕉️", description: "Traditional meets modern luxury", color: "from-purple-500 via-violet-500 to-fuchsia-500" },
              { name: "C21 Mall Area", icon: "🏬", description: "Elite shopping & dining destination", color: "from-pink-500 via-rose-500 to-red-500" },
              { name: "Airport Road", icon: "✈️", description: "Business travel luxury hub", color: "from-red-500 via-orange-500 to-amber-500" },
              { name: "Bhawarkua", icon: "🌆", description: "Prime central luxury location", color: "from-amber-500 via-yellow-500 to-lime-500" }
            ].map((location, index) => (
              <div key={index} className={`group bg-gradient-to-br from-white/98 to-purple-50/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-3 border-purple-200/60 hover:border-white/80 transform hover:scale-110 hover:-translate-y-6 transition-all duration-700 text-center cursor-pointer hover:shadow-4xl relative overflow-hidden`}>
                {/* Enhanced Background Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${location.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl`}></div>
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/30 rounded-full blur-xl group-hover:scale-150 group-hover:rotate-180 transition-all duration-700"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-pink-300/20 to-violet-300/30 rounded-full blur-xl group-hover:scale-125 group-hover:-rotate-90 transition-all duration-700"></div>
                
                <div className="relative z-10">
                  <div className="text-8xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 filter drop-shadow-2xl">
                    {location.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-black mb-4 bg-gradient-to-r ${location.color} bg-clip-text text-transparent group-hover:scale-110 transition-all duration-500`}>
                    {location.name}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 font-bold leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {location.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className={`inline-block bg-gradient-to-r ${location.color} text-white px-6 py-3 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      ⭐ Available 24/7 ⭐
                    </div>
                    
                    <div className="flex gap-3">
                      <a href="tel:+919372662471" className="flex-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                        📞 Call
                      </a>
                      <a href="https://wa.me/919372662471" className="flex-1 bg-gradient-to-r from-green-600 to-lime-500 hover:from-green-700 hover:to-lime-600 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                        💬 Chat
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/90 to-purple-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-pink-200/50">
              <span className="text-3xl">💫</span>
              <span className="text-pink-800 font-bold text-xl">About Our Company</span>
              <span className="text-3xl">🌟</span>
            </div>
            
            <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-pink-600 via-purple-500 to-orange-600 bg-clip-text text-transparent mb-12 leading-tight">
              Your Trusted Escort Service Partner
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Enhanced Left Content - Mission & Vision */}
            <div className="space-y-10">
              <div className="group bg-gradient-to-br from-violet-200/90 via-purple-100/90 to-fuchsia-200/90 backdrop-blur-lg rounded-4xl p-10 shadow-2xl border-3 border-white/60 hover:border-white/80 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
                {/* Mission Background Effects */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-violet-300/30 to-fuchsia-400/30 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-purple-300/20 to-pink-400/30 rounded-full blur-xl group-hover:scale-125 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🎯</span>
                    <h3 className="text-4xl font-black bg-gradient-to-r from-violet-700 via-purple-700 to-fuchsia-700 bg-clip-text text-transparent">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-bold">
                    To deliver the world's finest escort services in Indore with uncompromising professionalism, absolute discretion, and 
                    complete customer satisfaction. We connect distinguished clients with verified premium companions for extraordinary experiences.
                  </p>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-blue-200/90 via-cyan-100/90 to-teal-200/90 backdrop-blur-lg rounded-4xl p-10 shadow-2xl border-3 border-white/60 hover:border-white/80 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
                {/* Vision Background Effects */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-300/30 to-cyan-400/30 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-r from-cyan-300/20 to-teal-400/30 rounded-full blur-xl group-hover:scale-125 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">👁️</span>
                    <h3 className="text-4xl font-black bg-gradient-to-r from-blue-700 via-cyan-700 to-teal-700 bg-clip-text text-transparent">Our Vision</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-bold">
                    To become India's most prestigious escort service provider, establishing global standards for luxury companionship, 
                    reliability, and customer excellence while maintaining the highest levels of privacy and professional integrity.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Right Content - Why Choose Us */}
            <div className="space-y-10">
              <div className="group bg-gradient-to-br from-orange-200/90 via-amber-100/90 to-yellow-200/90 backdrop-blur-lg rounded-4xl p-10 shadow-2xl border-3 border-white/60 hover:border-white/80 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
                {/* Why Choose Us Background Effects */}
                <div className="absolute -top-4 -right-4 w-28 h-28 bg-gradient-to-r from-orange-300/30 to-yellow-400/30 rounded-full blur-xl group-hover:scale-150 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-amber-300/20 to-orange-400/30 rounded-full blur-xl group-hover:scale-125 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">🏆</span>
                    <h3 className="text-4xl font-black bg-gradient-to-r from-orange-700 via-amber-700 to-yellow-700 bg-clip-text text-transparent">Why Choose Us?</h3>
                  </div>
                  <div className="space-y-5">
                    {[
                      { icon: "✅", text: "100% Verified Premium Companions", color: "from-green-500 to-emerald-500" },
                      { icon: "🔒", text: "Complete Privacy & Discretion", color: "from-blue-500 to-cyan-500" },
                      { icon: "⚡", text: "24/7 Instant Booking Available", color: "from-purple-500 to-pink-500" },
                      { icon: "💎", text: "Premium Quality Service", color: "from-orange-500 to-red-500" },
                      { icon: "🌟", text: "5+ Years Experience", color: "from-violet-500 to-fuchsia-500" },
                      { icon: "📍", text: "12+ Prime Locations", color: "from-teal-500 to-green-500" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-white/50 hover:border-white/80 hover:bg-white/95 transition-all duration-300 group/item">
                        <span className="text-3xl group-hover/item:scale-125 transition-transform duration-300">{item.icon}</span>
                        <span className={`text-lg font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                          {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Premium CTA Card */}
              <div className="bg-gradient-to-br from-pink-500/95 via-fuchsia-600/95 to-violet-600/95 rounded-4xl p-10 shadow-2xl border-3 border-white/30 text-center text-white hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-4xl font-black mb-6">🚀 Ready for Premium Experience? 🚀</h3>
                  <p className="text-xl font-bold mb-8 opacity-95">Contact us now for instant booking and premium companionship</p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a href="tel:+919372662471" className="bg-white text-pink-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:scale-105 transform">
                      📞 Call Now: +91 9372662471
                    </a>
                    <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:scale-105 transform">
                      💬 WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section with Premium Styling */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/80 via-orange-200/70 to-pink-400/80"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black bg-gradient-to-r from-pink-700 via-orange-600 to-pink-700 bg-clip-text text-transparent mb-6">
              Our Premium Service Statistics
            </h2>
            <p className="text-2xl text-gray-800 font-bold max-w-4xl mx-auto">
              Trusted by thousands • Verified excellence • Available round the clock
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/95 to-pink-50/90 backdrop-blur-lg rounded-3xl p-8 text-center shadow-2xl border-2 border-pink-200/60 hover:border-orange-300/80 transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 hover:shadow-pink-500/30">
                {/* Icon with enhanced styling */}
                <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:animate-bounce transition-all duration-300">
                  {stat.icon}
                </div>
                
                {/* Number with gradient and animation */}
                <div className="text-5xl font-black mb-3 bg-gradient-to-br from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent transform group-hover:scale-110 transition-all duration-300">
                  {stat.number}
                </div>
                
                {/* Label with enhanced typography */}
                <div className="text-gray-800 font-bold text-xl group-hover:text-pink-700 transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Safe & Secure</h3>
              <p className="text-gray-600 font-medium">Complete safety protocols</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-orange-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Instant Response</h3>
              <p className="text-gray-600 font-medium">Quick booking process</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">💯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 font-medium">100% client happiness</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-orange-200/50 transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🎖️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 font-medium">Luxury service standards</p>
            </div>
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

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Common questions about our premium escort services and professional companions
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