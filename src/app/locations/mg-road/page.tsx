'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'

export default function MGRoadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Set page metadata
  useEffect(() => {
    document.title = 'Escorts in MG Road Indore | Premium Call Girls 24/7 | Premium Shopping Area'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ Best escorts in MG Road, Indore with 500+ verified call girls & VIP escorts 🔥 Available 24/7 in premium area 💯 Luxury service ☎️ +91-9372662471')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'escorts in MG Road, escorts in MG Road Indore, call girls in MG Road, MG Road escorts, escort service in MG Road, premium shopping escorts, luxury companions Indore')
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(metaKeywords)
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', 'https://saumyakapoor.in/locations/mg-road')
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in MG Road with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in MG Road offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication", 
      description: "Premium models in MG Road with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in MG Road with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions in MG Road with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "👑",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions in MG Road with traditional charm",
      image: "/images/services/Punjabi women.webp",
      icon: "🌺",
      category: "TRADITIONAL",
      link: "/services/punjabi-women"
    },
    {
      title: "Slim Escorts",
      subtitle: "Perfect Figure",
      description: "Elegant slim companions in MG Road with perfect figures",
      image: "/images/services/Slim Escorts.webp",
      icon: "💃",
      category: "SLIM",
      link: "/services/slim-escorts"
    },
    {
      title: "Unsatisfied Bhabhi",
      subtitle: "Seeking Excitement",
      description: "Experienced companions in MG Road seeking excitement and connection",
      image: "/images/services/Unsatisfied Bhabhi.webp",
      icon: "🔥",
      category: "BHABHI",
      link: "/services/unsatisfied-bhabhi"
    },
    {
      title: "Local Beauties",
      subtitle: "Know Indore Best",
      description: "Beautiful local companions in MG Road who know the city inside out",
      image: "/images/services/Local Beauties.webp",
      icon: "🏙️",
      category: "LOCAL",
      link: "/services/local-beauties"
    },
    {
      title: "Event Companion",
      subtitle: "Perfect Plus One",
      description: "Professional companions in MG Road for business events and parties",
      image: "/images/services/Event Companion.webp",
      icon: "🎭",
      category: "PROFESSIONAL",
      link: "/services/event-companion"
    },
    {
      title: "Pink Special",
      subtitle: "Exclusive Experience",
      description: "Special premium companions in MG Road for exclusive experiences",
      image: "/images/services/Pink Special.webp",
      icon: "💖",
      category: "SPECIAL",
      link: "/services/pink-special"
    },
    {
      title: "Unsatisfied Females",
      subtitle: "Meaningful Connections",
      description: "Mature women in MG Road seeking meaningful connections",
      image: "/images/services/Unsatisfied Females.webp",
      icon: "💕",
      category: "FEMALE",
      link: "/services/unsatisfied-females"
    },
    {
      title: "Incall Escorts",
      subtitle: "Luxury Locations",
      description: "Premium incall services in MG Road at luxury locations",
      image: "/images/services/Incall Escorts.webp",
      icon: "🏨",
      category: "INCALL",
      link: "/services/incall-escorts"
    },
    {
      title: "Mature Escorts",
      subtitle: "Experienced Sophistication",
      description: "Experienced mature companions in MG Road with sophistication",
      image: "/images/services/Mature Escorts.webp",
      icon: "🍷",
      category: "MATURE",
      link: "/services/mature-escorts"
    },
    {
      title: "Young Girls",
      subtitle: "Unforgettable Experiences",
      description: "Young beautiful companions in MG Road for unforgettable experiences",
      image: "/images/services/Young Girls.webp",
      icon: "✨",
      category: "YOUNG",
      link: "/services/young-girls"
    },
    {
      title: "Indore Escorts",
      subtitle: "Local Expertise",
      description: "Premium local escorts in MG Road with deep knowledge of Indore",
      image: "/images/services/indore escorts.webp",
      icon: "🏛️",
      category: "LOCAL",
      link: "/services"
    },
    {
      title: "Expert Services",
      subtitle: "Professional Expertise",
      description: "Expert companions in MG Road with specialized skills",
      image: "/images/services/Expert Services.webp",
      icon: "🎯",
      category: "EXPERT",
      link: "/services/expert-services"
    },
    {
      title: "High Class Models",
      subtitle: "Elite Fashion Models",
      description: "Stunning high-class models in MG Road with runway experience",
      image: "/images/services/High Class Models.webp",
      icon: "👗",
      category: "MODEL",
      link: "/services/high-class-models"
    },
    {
      title: "Bold Girls",
      subtitle: "Confident & Adventurous",
      description: "Bold and confident companions in MG Road ready for adventures",
      image: "/images/services/bold girls.webp",
      icon: "🔥",
      category: "BOLD",
      link: "/services/bold-girls"
    },
    {
      title: "Sexy Girls",
      subtitle: "Mesmerizing Charm",
      description: "Incredibly attractive companions in MG Road with mesmerizing charm",
      image: "/images/services/sexy girls.webp",
      icon: "💋",
      category: "SEXY",
      link: "/services/sexy-girls"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts in MG Road, Indore?",
      answer: "Booking escorts in MG Road is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the MG Road area based on your preferences."
    },
    {
      question: "What types of escort services are available in MG Road?",
      answer: "We offer a comprehensive range including VIP escorts, celebrity companions, college girls, mature escorts, Russian escorts, high-class models, and specialized services like event companions and incall services throughout MG Road area."
    },
    {
      question: "Are escort services in MG Road safe and discreet?",
      answer: "Absolutely. All our MG Road escort services prioritize client safety and complete discretion. We maintain strict privacy policies, secure booking processes, and our companions are thoroughly verified professionals."
    },
    {
      question: "What areas in MG Road do you cover for escort services?",
      answer: "We provide escort services across all areas of MG Road including Marriott Hotel area, Central Mall, Brilliant Convention Centre, business districts, and surrounding commercial complexes with both incall and outcall options."
    },
    {
      question: "What are the rates for escort services in MG Road?",
      answer: "Escort service rates in MG Road vary based on companion type, duration, and specific services. Contact us directly at +91 9372662471 for detailed pricing information tailored to your requirements."
    },
    {
      question: "Do you provide 24/7 escort services in MG Road?",
      answer: "Yes, our MG Road escort services operate 24/7. Whether you need a companion for business events, social gatherings, or personal time, we're available round the clock to serve you in the MG Road area."
    },
    {
      question: "Can I book multiple escorts for events in MG Road?",
      answer: "Certainly! We can arrange multiple companions for corporate events, parties, or group activities in MG Road. Contact us to discuss your event requirements and we'll provide suitable arrangements."
    },
    {
      question: "Are same-day bookings available for MG Road escort services?",
      answer: "While we recommend advance booking for the best selection, we do accommodate same-day bookings in MG Road when possible. Contact us as early as possible to check availability for your preferred companion."
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
              <span className="text-3xl">🏢</span>
              <span className="text-pink-800 font-bold text-lg">Premium Escorts in MG Road</span>
              <span className="text-3xl">🌟</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              MG Road Escorts
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Shopping Paradise
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Companions in MG Road with Premier shopping district
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Corporate events • Business meetings • Social gatherings • Professional companionship • Elite services across MG Road
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
                <div className="text-4xl mb-3">🏢</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Business District</h3>
                <p className="text-gray-700 font-medium">Elite companions for corporate events and business meetings</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Quality</h3>
                <p className="text-gray-700 font-medium">Sophisticated companions with professional expertise</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Discretion</h3>
                <p className="text-gray-700 font-medium">Total privacy guaranteed for all business encounters</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-blue-50">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6 leading-tight">
                Our Premium Services in MG Road
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Experience the finest escort services in MG Road with our professional companions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-80 overflow-hidden flex items-center justify-center">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-pink-600 to-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-sm text-pink-600 font-medium mb-3">{service.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{service.description}</p>
                    <a 
                      href={service.link}
                      className="inline-block w-full text-center bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-700 hover:to-orange-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
                    >
                      Book {service.title} Escorts
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MG Road Service Features */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Why Choose MG Road Escorts?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience professional companionship in Indore's premier business district with sophisticated partners
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              {/* Why Choose Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Features */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    ⭐ MG Road Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">🏢</span>
                      <p className="font-semibold text-gray-700">Business District Expertise</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">💎</span>
                      <p className="font-semibold text-gray-700">Premium Professional Companions</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">🎭</span>
                      <p className="font-semibold text-gray-700">Corporate Event Specialists</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">✨</span>
                      <p className="font-semibold text-gray-700">Sophisticated Elegance</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl">
                      <span className="text-2xl mr-4">🔐</span>
                      <p className="font-semibold text-gray-700">Complete Business Discretion</p>
                    </div>
                    <div className="flex items-center p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                      <span className="text-2xl mr-4">⚡</span>
                      <p className="font-semibold text-gray-700">Available Throughout MG Road</p>
                    </div>
                  </div>
                </div>

                {/* Booking Information */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">
                    📱 Book Escorts in MG Road - Simple Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">1</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-3">Call or WhatsApp</h4>
                      <p className="text-gray-600 text-lg">Contact us with your preferences for MG Road location</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">2</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-3">Select Companion</h4>
                      <p className="text-gray-600 text-lg">Choose from our verified escorts available in MG Road</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">3</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-3">Meet in MG Road</h4>
                      <p className="text-gray-600 text-lg">Enjoy premium companionship at your MG Road location</p>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                        📞 Call for MG Road: +91 9372662471
                      </a>
                      <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                        💬 WhatsApp Now
                      </a>
                    </div>
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
                Frequently Asked Questions - Escorts in MG Road
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about escort services in MG Road, Indore
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
                Have more questions about our escort services in MG Road? Contact us directly!
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

        {/* Escorts in MG Road Content Section */}
        <section className="bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
              
              {/* Main Title */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-6">
                  🌟 Ultimate Guide to Premium Escorts in MG Road 🌟
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-8 text-lg leading-relaxed text-gray-800">
                
                {/* Introduction Section */}
                <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl p-6 md:p-8 border-l-4 border-pink-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4 flex items-center">
                    💎 Welcome to MG Road's Premier Escort Services
                  </h3>
                  <p className="mb-4">
                    Welcome to the most comprehensive guide about professional escort services in MG Road, one of Indore's most prestigious and historically significant streets! 🏛️ Named after Mahatma Gandhi, MG Road represents the perfect blend of historical importance, commercial significance, and cultural heritage. Our detailed guide provides everything you need to know about the elite escort industry in this distinguished thoroughfare that forms the backbone of Indore's commercial and social life.
                  </p>
                  <p>
                    MG Road, renowned for its iconic status, bustling commercial activity, historical landmarks, and vibrant street life, creates an exceptional environment for premium escort services. Whether you're conducting business in the numerous commercial establishments, exploring the area's cultural attractions, or experiencing the vibrant social scene, understanding the professional escort services landscape in MG Road is essential for making informed choices. ✨
                  </p>
                </div>

                {/* Why MG Road for Escort Services */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 flex items-center">
                    🎭 Why MG Road is Indore's Premier Cultural and Commercial Escort Destination
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h4 className="text-xl font-semibold text-purple-800 mb-3">🏛️ Historical Significance</h4>
                      <p>
                        MG Road's status as one of Indore's most important historical and cultural streets attracts educated, culturally aware individuals who appreciate sophisticated escort services. The street's rich heritage and cultural importance create a clientele that values intellectual companionship and cultural awareness in their escort experiences.
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                      <h4 className="text-xl font-semibent text-orange-800 mb-3">🛍️ Commercial Hub</h4>
                      <p>
                        The concentration of shops, restaurants, offices, and entertainment venues along MG Road creates a vibrant commercial environment where escort services can thrive. The diverse mix of businesses attracts professionals and visitors who appreciate high-quality companionship services that complement their commercial and social activities.
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    MG Road's unique position as both a historical landmark and modern commercial center makes it ideal for escort services that can cater to diverse clientele. The street's cultural significance attracts visitors interested in Indore's heritage, while its commercial activity draws business professionals and shoppers. This diversity creates opportunities for escort services that can adapt to different cultural and commercial contexts. 🏆
                  </p>
                  
                  <p>
                    The road's iconic status in Indore's urban landscape has established it as a natural meeting place for people from all walks of life. This cosmopolitan environment has fostered escort services that are culturally sensitive, professionally competent, and capable of providing appropriate companionship for the diverse range of activities and events that take place along this famous street. 🤝
                  </p>
                </div>

                {/* Cultural and Commercial Services Available */}
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 flex items-center">
                    🎨 Cultural and Commercial Escort Services on MG Road
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🎭</div>
                      <h4 className="font-semibold text-blue-800 mb-2">Cultural Guides</h4>
                      <p className="text-sm">Knowledgeable escorts for historical tours and cultural experiences</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🛍️</div>
                      <h4 className="font-semibold text-blue-800 mb-2">Shopping Companions</h4>
                      <p className="text-sm">Sophisticated partners for retail therapy and commercial experiences</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🍽️</div>
                      <h4 className="font-semibent text-blue-800 mb-2">Dining Partners</h4>
                      <p className="text-sm">Elegant companions for restaurants and culinary experiences</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    MG Road's rich cultural heritage and diverse commercial offerings create unique opportunities for specialized escort services. Professional escorts familiar with the street's history can provide cultural guidance for visitors interested in exploring Indore's heritage, while those experienced in commercial environments can enhance shopping and business experiences. The numerous restaurants and cafes provide ideal venues for sophisticated dining companionship. 🌟
                  </p>
                  
                  <p>
                    The street's position as a cultural and commercial hub attracts diverse clientele seeking different types of escort experiences. From intellectual conversations about local history to sophisticated shopping assistance and dining companionship, MG Road's escort services have evolved to meet the varied needs of culturally aware and commercially active clients. 🎨
                  </p>
                </div>

                {/* Street Life and Social Integration */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 flex items-center">
                    🚶‍♀️ Street Life and Social Integration on MG Road
                  </h3>
                  
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
                    <h4 className="text-xl font-semibold text-green-800 mb-3">🌆 Urban Energy</h4>
                    <p>
                      MG Road's vibrant street life and constant activity create a dynamic environment where escort services can operate naturally and discreetly. The busy pedestrian traffic, diverse crowd, and continuous commercial activity provide excellent cover for professional escort meetings while maintaining the natural flow of urban social interaction.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    The street's role as a social hub where people meet, shop, dine, and conduct business creates numerous opportunities for escort services that specialize in social integration and urban experiences. Professional escorts can seamlessly blend into the street's diverse social environment, providing companionship that enhances clients' experiences of MG Road's unique urban culture. 🏙️
                  </p>
                  
                  <p>
                    The cosmopolitan atmosphere of MG Road, with its mix of locals, visitors, business people, and cultural enthusiasts, creates an ideal setting for escort services that can adapt to different social contexts. Professional escorts operating in this environment are skilled at reading social situations and providing appropriate companionship that enhances rather than disrupts the natural social dynamics of the street. 🎪
                  </p>
                </div>

                {/* Business and Professional Services */}
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 md:p-8 border-l-4 border-rose-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-rose-700 mb-6 flex items-center">
                    💼 Business and Professional Services on MG Road
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🏢</div>
                      <h4 className="font-semibold text-rose-800 mb-2">Business Meetings</h4>
                      <p className="text-sm">Professional escorts for commercial meetings and business networking</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🤝</div>
                      <h4 className="font-semibold text-rose-800 mb-2">Professional Networking</h4>
                      <p className="text-sm">Sophisticated companions for business events and professional gatherings</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    MG Road's concentration of offices, banks, and commercial establishments creates a professional environment where business-oriented escort services can thrive. Professional escorts familiar with business protocols can provide valuable companionship for business meetings, client entertainment, and professional networking events that take place in the area's numerous commercial venues. 💼
                  </p>
                  
                  <p>
                    The street's business community appreciates escort services that understand commercial etiquette and can contribute positively to business relationships. From accompanying clients to important business lunches to providing sophisticated companionship at professional events, MG Road's escort services have developed expertise in business-oriented companionship that enhances commercial success. 📈
                  </p>
                </div>

                {/* Entertainment and Nightlife */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                    🌃 Entertainment and Social Scene on MG Road
                  </h3>
                  
                  <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200 mb-6">
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">🎉 Vibrant Social Life</h4>
                    <p>
                      MG Road's restaurants, cafes, and entertainment venues create a vibrant social scene that extends into the evening hours. Professional escort services can provide sophisticated companionship for dining experiences, cultural events, and social gatherings that showcase the street's dynamic entertainment offerings and social atmosphere.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    The street's diverse entertainment options, from traditional restaurants serving local cuisine to modern cafes and cultural venues, provide numerous opportunities for escort companionship that enhances social experiences. Professional escorts can guide clients through MG Road's entertainment landscape while providing engaging conversation and cultural insights. 🍽️
                  </p>
                  
                  <p>
                    The social diversity of MG Road, attracting people from different backgrounds and interests, creates demand for versatile escort services that can adapt to various entertainment preferences. Whether clients prefer quiet cultural experiences or vibrant social interactions, professional escorts in this area can provide appropriate companionship that matches individual preferences and social styles. 🎭
                  </p>
                </div>

                {/* Heritage and Tourism */}
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl p-6 md:p-8 border-l-4 border-violet-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-violet-700 mb-6 flex items-center">
                    🏛️ Heritage Tourism and Cultural Escort Services
                  </h3>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md mb-6">
                    <h4 className="text-xl font-semibold text-violet-800 mb-3">📚 Historical Knowledge</h4>
                    <p>
                      MG Road's historical significance and cultural landmarks attract tourists and heritage enthusiasts who appreciate escort companions with deep knowledge of local history and culture. Professional escorts specializing in heritage tourism can provide educational and entertaining companionship that enhances visitors' understanding and appreciation of Indore's cultural heritage.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    The street's role in Indore's historical and cultural narrative creates opportunities for escort services that specialize in cultural interpretation and heritage tourism. Professional escorts with knowledge of local history, architecture, and cultural traditions can provide valuable guidance for visitors seeking to understand and appreciate MG Road's significance in Indore's development. 🏛️
                  </p>
                  
                  <p>
                    Cultural tourism on MG Road requires escort services that can bridge historical knowledge with modern social interaction, providing companions who can discuss local heritage while adapting to contemporary social contexts. This specialized approach has attracted visitors who value both cultural education and sophisticated companionship during their exploration of Indore's heritage. 📖
                  </p>
                </div>

                {/* Urban Development and Future */}
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 md:p-8 border-l-4 border-amber-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6 flex items-center">
                    🚀 Urban Development and Future of MG Road Services
                  </h3>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md mb-6">
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">🏗️ Modernization Projects</h4>
                    <p>
                      Ongoing urban development and modernization projects along MG Road are enhancing its commercial appeal while preserving its historical character. These improvements create better infrastructure for professional services, including escort agencies that serve the street's diverse commercial and cultural community.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    The balance between preserving MG Road's historical significance and adapting to modern commercial needs creates unique opportunities for escort services that can appreciate both traditional and contemporary aspects of the street's character. Future development will likely increase the demand for sophisticated escort services that can serve both heritage tourists and modern business clients. 🏛️
                  </p>
                  
                  <p>
                    MG Road's continued evolution as both a cultural landmark and commercial hub positions it as an ideal location for escort service providers seeking to establish themselves in a market that values both cultural sophistication and commercial professionalism. The street's enduring importance in Indore's urban landscape ensures sustained opportunities for quality escort services. 🌟
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 md:p-8 border-2 border-pink-300 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4">
                    📞 Experience MG Road's Cultural and Commercial Escort Services Today
                  </h3>
                  <p className="mb-6 text-lg">
                    Ready to discover the finest escort services on MG Road? Our culturally aware and professionally trained team is available 24/7 to help you find the perfect companion for any occasion on Indore's most iconic street. Whether you need a knowledgeable guide for cultural exploration, a sophisticated partner for business meetings, or an elegant companion for dining and entertainment, we have the ideal escort to enhance your MG Road experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:+919372662471" 
                      className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      📞 Call +91 9372662471
                    </a>
                    <a 
                      href="https://wa.me/919372662471" 
                      className="inline-block bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      💬 WhatsApp Now
                    </a>
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
                Ready to Book Premium Escorts in MG Road?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the finest escort services in Indore's premier commercial district with complete discretion and satisfaction guarantee
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





