'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function BombayHospitalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in Bombay Hospital with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in Bombay Hospital offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication", 
      description: "Premium models in Bombay Hospital with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in Bombay Hospital with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions in Bombay Hospital with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "👑",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions in Bombay Hospital with traditional charm",
      image: "/images/services/Punjabi women.webp",
      icon: "🌺",
      category: "TRADITIONAL",
      link: "/services"
    },
    {
      title: "Slim Escorts",
      subtitle: "Perfect Figure",
      description: "Elegant slim companions in Bombay Hospital with perfect figures",
      image: "/images/services/Slim Escorts.webp",
      icon: "💃",
      category: "SLIM",
      link: "/services"
    },
    {
      title: "Unsatisfied Bhabhi",
      subtitle: "Seeking Excitement",
      description: "Experienced companions in Bombay Hospital seeking excitement and connection",
      image: "/images/services/Unsatisfied Bhabhi.webp",
      icon: "🔥",
      category: "BHABHI",
      link: "/services"
    },
    {
      title: "Local Beauties",
      subtitle: "Know Indore Best",
      description: "Beautiful local companions in Bombay Hospital who know the city inside out",
      image: "/images/services/Local Beauties.webp",
      icon: "🏙️",
      category: "LOCAL",
      link: "/services"
    },
    {
      title: "Event Companion",
      subtitle: "Perfect Plus One",
      description: "Professional companions in Bombay Hospital for business events and parties",
      image: "/images/services/Event Companion.webp",
      icon: "🎭",
      category: "PROFESSIONAL",
      link: "/services"
    },
    {
      title: "Pink Special",
      subtitle: "Exclusive Experience",
      description: "Special premium companions in Bombay Hospital for exclusive experiences",
      image: "/images/services/Pink Special.webp",
      icon: "💖",
      category: "SPECIAL",
      link: "/services"
    },
    {
      title: "Unsatisfied Females",
      subtitle: "Meaningful Connections",
      description: "Mature women in Bombay Hospital seeking meaningful connections",
      image: "/images/services/Unsatisfied Females.webp",
      icon: "💕",
      category: "FEMALE",
      link: "/services"
    },
    {
      title: "Incall Escorts",
      subtitle: "Luxury Locations",
      description: "Premium incall services in Bombay Hospital at luxury locations",
      image: "/images/services/Incall Escorts.webp",
      icon: "🏨",
      category: "INCALL",
      link: "/services"
    },
    {
      title: "Mature Escorts",
      subtitle: "Experienced Sophistication",
      description: "Experienced mature companions in Bombay Hospital with sophistication",
      image: "/images/services/Mature Escorts.webp",
      icon: "🍷",
      category: "MATURE",
      link: "/services"
    },
    {
      title: "Young Girls",
      subtitle: "Unforgettable Experiences",
      description: "Young beautiful companions in Bombay Hospital for unforgettable experiences",
      image: "/images/services/Young Girls.webp",
      icon: "✨",
      category: "YOUNG",
      link: "/services"
    },
    {
      title: "Indore Escorts",
      subtitle: "Local Expertise",
      description: "Premium local escorts in Bombay Hospital with deep knowledge of Indore",
      image: "/images/services/indore escorts.webp",
      icon: "🏛️",
      category: "LOCAL",
      link: "/services"
    },
    {
      title: "Expert Services",
      subtitle: "Professional Expertise",
      description: "Expert companions in Bombay Hospital with specialized skills",
      image: "/images/services/Expert Services.webp",
      icon: "🎯",
      category: "EXPERT",
      link: "/services"
    },
    {
      title: "High Class Models",
      subtitle: "Elite Fashion Models",
      description: "Stunning high-class models in Bombay Hospital with runway experience",
      image: "/images/services/High Class Models.webp",
      icon: "👗",
      category: "MODEL",
      link: "/services"
    },
    {
      title: "Bold Girls",
      subtitle: "Confident & Adventurous",
      description: "Bold and confident companions in Bombay Hospital ready for adventures",
      image: "/images/services/bold girls.webp",
      icon: "🔥",
      category: "BOLD",
      link: "/services"
    },
    {
      title: "Sexy Girls",
      subtitle: "Mesmerizing Charm",
      description: "Incredibly attractive companions in Bombay Hospital with mesmerizing charm",
      image: "/images/services/sexy girls.webp",
      icon: "💋",
      category: "SEXY",
      link: "/services"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts in Bombay Hospital, Indore?",
      answer: "Booking escorts in Bombay Hospital is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the Bombay Hospital area based on your preferences."
    },
    {
      question: "Are your Bombay Hospital escorts verified and professional?",
      answer: "Yes, absolutely! All our escorts in Bombay Hospital are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance and sophistication while serving clients in the Bombay Hospital residential hub."
    },
    {
      question: "What makes Bombay Hospital the best location for escort services in Indore?",
      answer: "Bombay Hospital is Indore's upscale residential hub with premium homes, peaceful environment, and private locations. It offers the perfect setting for high-end escort services with excellent privacy and sophisticated residential venues for meetings."
    },
    {
      question: "Do you provide both incall and outcall services in Bombay Hospital?",
      answer: "Yes, we provide both incall and outcall services throughout Bombay Hospital. Our escorts can visit you at your home, residence, or private location in Bombay Hospital, or you can visit our luxury incall locations in the area."
    },
    {
      question: "What are the rates for escort services in Bombay Hospital?",
      answer: "Our rates for escorts in Bombay Hospital vary based on the service type, duration, and companion category. We offer competitive pricing for all categories from college girls to VIP escorts. Contact us directly for detailed pricing specific to Bombay Hospital."
    },
    {
      question: "Is privacy and discretion guaranteed for Bombay Hospital bookings?",
      answer: "Privacy and discretion are our top priorities for all Bombay Hospital bookings. All client information is kept strictly confidential. Our escorts are trained to maintain complete discretion, especially important in the residential environment of Bombay Hospital."
    },
    {
      question: "Which locations in Bombay Hospital do you recommend for escort meetings?",
      answer: "Bombay Hospital has several premium residential locations perfect for escort meetings including upscale homes, private apartments, and boutique accommodations. We can recommend the best locations based on your preferences and provide guidance for seamless meetings."
    },
    {
      question: "Are same-day bookings available for escorts in Bombay Hospital?",
      answer: "Yes, we offer same-day bookings for escorts in Bombay Hospital subject to availability. Given Bombay Hospital's popularity and high demand, we recommend booking 2-3 hours in advance to ensure your preferred companion is available in the area."
    }
  ]

  return (
    <>
      <Header />
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
              <span className="text-3xl">🛣️</span>
              <span className="text-pink-800 font-bold text-lg">Premium Escorts in Bombay Hospital</span>
              <span className="text-3xl">✨</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Escorts in Bombay Hospital
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Medical Center
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Escort Services in Bombay Hospital Commercial District
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Verified professional escorts in Bombay Hospital • 24/7 availability • Hotels & commercial venues • Complete discretion guaranteed
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
                <div className="text-4xl mb-3">�</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Residential Hub Location</h3>
                <p className="text-gray-700 font-medium">Upscale Bombay Hospital with premium homes and residential privacy</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Companions</h3>
                <p className="text-gray-700 font-medium">Verified high-class escorts perfect for residential meetings</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Discretion</h3>
                <p className="text-gray-700 font-medium">100% privacy guaranteed for residential clients in Bombay Hospital</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bombay Hospital Information Section */}
        <section className="py-20 bg-gradient-to-br from-orange-100/50 via-pink-50/50 to-orange-200/60">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-pink-500 to-orange-700 bg-clip-text text-transparent mb-6">
                  Why Choose Escorts in Bombay Hospital?
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Bombay Hospital is Indore's upscale residential hub, offering the perfect setting for premium escort services
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Location Benefits */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    �️ Prime Residential Location
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">�</span>
                      <p className="font-semibold text-gray-700">Upscale Residential Hub of Indore</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">�</span>
                      <p className="font-semibold text-gray-700">Premium Homes & Private Locations</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">🌳</span>
                      <p className="font-semibold text-gray-700">Peaceful Residential Environment</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">🚗</span>
                      <p className="font-semibold text-gray-700">Excellent Connectivity & Accessibility</p>
                    </div>
                  </div>
                </div>

                {/* Service Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                    ⭐ Premium Service Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">👔</span>
                      <p className="font-semibold text-gray-700">Perfect for Business Meetings & Events</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">🌟</span>
                      <p className="font-semibold text-gray-700">High-Class Professional Companions</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">⏰</span>
                      <p className="font-semibold text-gray-700">24/7 Availability in Bombay Hospital</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">🔐</span>
                      <p className="font-semibold text-gray-700">Discretion for Corporate Clients</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking Information */}
              <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">
                  📱 Book Escorts in Bombay Hospital - Simple Process
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">1</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Call or WhatsApp</h4>
                    <p className="text-gray-600 text-lg">Contact us with your preferences for Bombay Hospital location</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">2</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Select Companion</h4>
                    <p className="text-gray-600 text-lg">Choose from our verified escorts available in Bombay Hospital</p>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-bold text-white">3</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-3">Meet in Bombay Hospital</h4>
                    <p className="text-gray-600 text-lg">Enjoy premium companionship at your Bombay Hospital location</p>
                  </div>
                </div>
                <div className="text-center mt-8">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                      📞 Call for Bombay Hospital: +91 9372662471
                    </a>
                    <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                      💬 WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-pink-100/60 via-orange-50/50 to-pink-200/60">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Escorts in Bombay Hospital
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about escort services in Bombay Hospital, Indore
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-100 to-orange-100 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
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
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 mb-8">
                Have more questions about our escort services in Bombay Hospital? Contact us directly!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  📞 Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Bombay Hospital Services Catalogue */}
        <section className="py-20 bg-gradient-to-br from-pink-100/80 via-white to-orange-100/80">
          <div className="max-w-7xl mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-pink-600">🌸</span>
                <span className="bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mx-4">
                  Complete Bombay Hospital Services Catalogue
                </span>
                <span className="text-purple-600">🌸</span>
              </h2>
              <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
                Discover our extensive range of premium escort services in Bombay Hospital. Each service is carefully curated to meet the highest standards of elegance and sophistication.
              </p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Luxury Escorts */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/images/services/VIP Escorts.jpg" 
                    alt="Luxury Escorts"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <span className="text-2xl">👑</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-white font-bold text-xl mb-2">Luxury Escorts</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Ultimate luxury companions for sophisticated gentlemen in Bombay Hospital
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href="/services/luxury-escort"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                    >
                      Book Now →
                    </a>
                    <span className="text-pink-500 font-semibold text-sm">Available 24/7</span>
                  </div>
                </div>
              </div>

              {/* Russian Escorts */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/images/services/Celebrity Escorts.webp" 
                    alt="Russian Escorts"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <span className="text-xl">🇷🇺</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-white font-bold text-xl mb-2">Russian Escorts</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Exotic Russian beauties available for premium companionship
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href="/services/russian-escort"
                      className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                    >
                      Book Now →
                    </a>
                    <span className="text-pink-500 font-semibold text-sm">Available 24/7</span>
                  </div>
                </div>
              </div>

              {/* Independent Escorts */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/images/services/indore escorts.webp" 
                    alt="Independent Escorts"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <span className="text-2xl">💫</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-white font-bold text-xl mb-2">Independent Escorts</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Self-managed premium companions with personal touch
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href="/services/independent-escort"
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                    >
                      Book Now →
                    </a>
                    <span className="text-pink-500 font-semibold text-sm">Available 24/7</span>
                  </div>
                </div>
              </div>

              {/* Call Girl Service */}
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="/images/services/College Girls.webp" 
                    alt="Call Girl Service"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <h3 className="text-white font-bold text-xl mb-2">Call Girl Service</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Professional call girls available 24/7 in Bombay Hospital area
                  </p>
                  <div className="flex items-center justify-between">
                    <a 
                      href="/services/call-girl"
                      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg flex items-center gap-2"
                    >
                      Book Now →
                    </a>
                    <span className="text-pink-500 font-semibold text-sm">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-600/20"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                Ready to Book Premium Escorts in Bombay Hospital?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the finest escort services in Indore's upscale residential hub with complete discretion and satisfaction guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


