'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import VijayNagarEscortsContent from './components/VijayNagarEscortsContent'

export default function VijayNagarPageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in Vijay Nagar with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in Vijay Nagar offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication", 
      description: "Premium models in Vijay Nagar with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in Vijay Nagar with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    }
  ]

  const faqs = [
    {
      question: "Are escort services available in Vijay Nagar 24/7?",
      answer: "Yes, our premium escort services in Vijay Nagar are available round the clock. Call +919372662471 anytime for immediate assistance."
    },
    {
      question: "What makes Vijay Nagar special for escort services?",
      answer: "Vijay Nagar is Indore's premium residential area with luxury hotels, shopping malls, and excellent connectivity making it ideal for high-end escort services."
    },
    {
      question: "How do I book escorts in Vijay Nagar?",
      answer: "Simply call +919372662471 or WhatsApp us. Our team will help you select the perfect companion and arrange meeting in Vijay Nagar area."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-pink-400/95 via-orange-300/90 to-pink-400/95 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              🌟 Vijay Nagar Escorts 🌟
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Premium escort services in Indore's most prestigious locality. Experience luxury companionship in Vijay Nagar's upscale environment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919372662471" className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors">
                📞 Call Now: +91 9372662471
              </a>
              <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Premium Services in Vijay Nagar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-pink-600 font-semibold mb-3">{service.subtitle}</p>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold hover:from-pink-600 hover:to-orange-600 transition-all">
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Premium Services Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
                🌟 Complete Vijay Nagar Services Catalogue 🌟
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover our extensive range of premium escort services in Vijay Nagar. Each service is carefully curated to meet the highest standards of elegance and sophistication.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[
                {
                  title: "Luxury Escorts",
                  image: "/images/services/Luxury Escort.webp",
                  description: "Ultimate luxury companions for sophisticated gentlemen in Vijay Nagar",
                  link: "/services/luxury-escort",
                  gradient: "from-purple-500 to-pink-500",
                  icon: "👑"
                },
                {
                  title: "Russian Escorts", 
                  image: "/images/services/Russian Escort.webp",
                  description: "Exotic Russian beauties available for premium companionship",
                  link: "/services/russian-escort",
                  gradient: "from-red-500 to-orange-500",
                  icon: "🇷🇺"
                },
                {
                  title: "Independent Escorts",
                  image: "/images/services/Independent Escort.webp", 
                  description: "Self-managed premium companions with personal touch",
                  link: "/services/independent-escort",
                  gradient: "from-blue-500 to-purple-500",
                  icon: "💫"
                },
                {
                  title: "Call Girl Service",
                  image: "/images/services/Call Girl.webp",
                  description: "Professional call girls available 24/7 in Vijay Nagar area",
                  link: "/services/call-girl",
                  gradient: "from-pink-500 to-rose-500",
                  icon: "📞"
                },
                {
                  title: "Housewife Escorts",
                  image: "/images/services/Housewife Escorts.webp",
                  description: "Experienced mature women offering warm companionship",
                  link: "/services/housewife-escorts", 
                  gradient: "from-amber-500 to-orange-500",
                  icon: "🏡"
                },
                {
                  title: "High Class Models",
                  image: "/images/services/High-Class Models.webp",
                  description: "Fashion models and beauty queens for elite events",
                  link: "/services/high-class-models",
                  gradient: "from-emerald-500 to-teal-500",
                  icon: "👗"
                },
                {
                  title: "Mature Escorts",
                  image: "/images/services/Mature Escorts.webp", 
                  description: "Sophisticated mature ladies with experience and charm",
                  link: "/services/mature-escorts",
                  gradient: "from-violet-500 to-purple-500",
                  icon: "🌹"
                },
                {
                  title: "Slim Escorts",
                  image: "/images/services/Slim Escorts.webp",
                  description: "Elegant slim figured companions for perfect dates", 
                  link: "/services/slim-escorts",
                  gradient: "from-cyan-500 to-blue-500",
                  icon: "💃"
                },
                {
                  title: "Punjabi Women",
                  image: "/images/services/Punjabi Women.webp",
                  description: "Beautiful Punjabi companions with cultural charm",
                  link: "/services/punjabi-women",
                  gradient: "from-yellow-500 to-orange-500", 
                  icon: "🌻"
                },
                {
                  title: "Sexy Girls",
                  image: "/images/services/Sexy Girls.webp",
                  description: "Attractive young companions for fun and entertainment",
                  link: "/services/sexy-girls",
                  gradient: "from-red-500 to-pink-500",
                  icon: "🔥"
                },
                {
                  title: "Local Beauties",
                  image: "/images/services/Local Beauties.webp",
                  description: "Local Indore beauties familiar with city's best spots",
                  link: "/services/local-beauties",
                  gradient: "from-green-500 to-emerald-500",
                  icon: "🌸"
                },
                {
                  title: "Young Girls",
                  image: "/images/services/Young Girls.webp",
                  description: "Fresh young companions with vibrant energy and charm", 
                  link: "/services/young-girls",
                  gradient: "from-pink-400 to-rose-400",
                  icon: "🌺"
                },
                {
                  title: "Bold Girls",
                  image: "/images/services/Bold Girls.webp",
                  description: "Confident and adventurous companions for exciting experiences",
                  link: "/services/bold-girls", 
                  gradient: "from-indigo-500 to-purple-500",
                  icon: "⚡"
                },
                {
                  title: "Incall Escorts",
                  image: "/images/services/Incall Escorts.webp",
                  description: "Private venues available for discrete meetings",
                  link: "/services/incall-escorts",
                  gradient: "from-teal-500 to-cyan-500", 
                  icon: "🏠"
                },
                {
                  title: "Event Companions",
                  image: "/images/services/Event Companion.webp",
                  description: "Perfect companions for business events and social gatherings",
                  link: "/services/event-companion",
                  gradient: "from-purple-500 to-indigo-500",
                  icon: "🎭"
                },
                {
                  title: "Expert Services", 
                  image: "/images/services/Expert Services.webp",
                  description: "Specialized services with professional expertise and care",
                  link: "/services/expert-services",
                  gradient: "from-orange-500 to-red-500",
                  icon: "⭐"
                },
                {
                  title: "Unsatisfied Females",
                  image: "/images/services/Unsatisfied Females.webp",
                  description: "Mature women seeking companionship and understanding",
                  link: "/services/unsatisfied-females",
                  gradient: "from-rose-500 to-pink-500", 
                  icon: "💕"
                },
                {
                  title: "Unsatisfied Bhabhi",
                  image: "/images/services/Unsatisfied Bhabhi.webp", 
                  description: "Experienced married women for discrete relationships",
                  link: "/services/unsatisfied-bhabhi",
                  gradient: "from-red-400 to-rose-400",
                  icon: "🌹"
                },
                {
                  title: "Pink Special",
                  image: "/images/services/Pink Special.webp",
                  description: "Special premium services with exclusive arrangements",
                  link: "/services/pink-special",
                  gradient: "from-pink-500 to-fuchsia-500",
                  icon: "💖"
                },
                {
                  title: "Premium Escort",
                  image: "/images/services/Premium Escort.webp",
                  description: "Top-tier escort services with luxury amenities",
                  link: "/services/premium-escort", 
                  gradient: "from-gold-500 to-yellow-500",
                  icon: "👑"
                }
              ].map((service, index) => (
                <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 p-2"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="absolute top-4 right-4 text-2xl bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <a 
                        href={service.link}
                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      >
                        Book Now →
                      </a>
                      <div className="text-pink-500 font-semibold text-sm">Available 24/7</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Services CTA */}
            <div className="text-center mt-16">
              <a href="/services" className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
                🌟 View All Indore Services 🌟
              </a>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <VijayNagarEscortsContent />

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    className="w-full px-8 py-6 text-left font-semibold text-gray-900 hover:bg-pink-50 transition-colors flex justify-between items-center"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="text-2xl">{openFaq === index ? '−' : '+'}</span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-br from-pink-100/60 via-orange-50/50 to-pink-200/60">
          <div className="w-full px-4">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-600 bg-clip-text text-transparent mb-8">
                🌟 Ready for Premium Experience? 🌟
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Book your perfect companion in Vijay Nagar now! Our premium escort services are just a call away.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
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
      </main>
    </div>
  )
}