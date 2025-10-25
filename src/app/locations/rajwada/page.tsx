'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'

export default function RajwadaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Set page metadata
  useEffect(() => {
    document.title = 'Escorts Service Rajwada Indore | Call Girls 24/7 | Historic Area'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ Best escorts service Rajwada with 500+ verified call girls & VIP escorts 🔥 Available 24/7 in historic district 💯 escorts service Rajwada ☎️ +91-9372662471')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'escorts service rajwada, escorts in Rajwada, call girls in Rajwada, historic area escorts')
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(metaKeywords)
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', 'https://saumyakapoor.in/locations/rajwada')
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in Rajwada with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in Rajwada offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication", 
      description: "Premium models in Rajwada with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in Rajwada with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions in Rajwada with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "👑",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions in Rajwada with traditional charm",
      image: "/images/services/Punjabi women.webp",
      icon: "🌺",
      category: "TRADITIONAL",
      link: "/services/punjabi-women"
    },
    {
      title: "Slim Escorts",
      subtitle: "Perfect Figure",
      description: "Elegant slim companions in Rajwada with perfect figures",
      image: "/images/services/Slim Escorts.webp",
      icon: "💃",
      category: "SLIM",
      link: "/services/slim-escorts"
    },
    {
      title: "Unsatisfied Bhabhi",
      subtitle: "Seeking Excitement",
      description: "Experienced companions in Rajwada seeking excitement and connection",
      image: "/images/services/Unsatisfied Bhabhi.webp",
      icon: "🔥",
      category: "BHABHI",
      link: "/services/unsatisfied-bhabhi"
    },
    {
      title: "Local Beauties",
      subtitle: "Know Indore Best",
      description: "Beautiful local companions in Rajwada who know the city inside out",
      image: "/images/services/Local Beauties.webp",
      icon: "🏙️",
      category: "LOCAL",
      link: "/services/local-beauties"
    },
    {
      title: "Event Companion",
      subtitle: "Perfect Plus One",
      description: "Professional companions in Rajwada for business events and parties",
      image: "/images/services/Event Companion.webp",
      icon: "🎭",
      category: "PROFESSIONAL",
      link: "/services/event-companion"
    },
    {
      title: "Pink Special",
      subtitle: "Exclusive Experience",
      description: "Special premium companions in Rajwada for exclusive experiences",
      image: "/images/services/Pink Special.webp",
      icon: "💖",
      category: "SPECIAL",
      link: "/services/pink-special"
    },
    {
      title: "Unsatisfied Females",
      subtitle: "Meaningful Connections",
      description: "Mature women in Rajwada seeking meaningful connections",
      image: "/images/services/Unsatisfied Females.webp",
      icon: "💕",
      category: "FEMALE",
      link: "/services/unsatisfied-females"
    },
    {
      title: "Incall Escorts",
      subtitle: "Luxury Locations",
      description: "Premium incall services in Rajwada at luxury locations",
      image: "/images/services/Incall Escorts.webp",
      icon: "🏨",
      category: "INCALL",
      link: "/services/incall-escorts"
    },
    {
      title: "Mature Escorts",
      subtitle: "Experienced Sophistication",
      description: "Experienced mature companions in Rajwada with sophistication",
      image: "/images/services/Mature Escorts.webp",
      icon: "🍷",
      category: "MATURE",
      link: "/services/mature-escorts"
    },
    {
      title: "Young Girls",
      subtitle: "Unforgettable Experiences",
      description: "Young beautiful companions in Rajwada for unforgettable experiences",
      image: "/images/services/Young Girls.webp",
      icon: "✨",
      category: "YOUNG",
      link: "/services/young-girls"
    },
    {
      title: "Indore Escorts",
      subtitle: "Local Expertise",
      description: "Premium local escorts in Rajwada with deep knowledge of Indore",
      image: "/images/services/indore escorts.webp",
      icon: "🏛️",
      category: "LOCAL",
      link: "/services"
    },
    {
      title: "Expert Services",
      subtitle: "Professional Expertise",
      description: "Expert companions in Rajwada with specialized skills",
      image: "/images/services/Expert Services.webp",
      icon: "🎯",
      category: "EXPERT",
      link: "/services/expert-services"
    },
    {
      title: "High Class Models",
      subtitle: "Elite Fashion Models",
      description: "Stunning high-class models in Rajwada with runway experience",
      image: "/images/services/High Class Models.webp",
      icon: "👗",
      category: "MODEL",
      link: "/services/high-class-models"
    },
    {
      title: "Bold Girls",
      subtitle: "Confident & Adventurous",
      description: "Bold and confident companions in Rajwada ready for adventures",
      image: "/images/services/bold girls.webp",
      icon: "🔥",
      category: "BOLD",
      link: "/services/bold-girls"
    },
    {
      title: "Sexy Girls",
      subtitle: "Mesmerizing Charm",
      description: "Incredibly attractive companions in Rajwada with mesmerizing charm",
      image: "/images/services/sexy girls.webp",
      icon: "💋",
      category: "SEXY",
      link: "/services/sexy-girls"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts in Rajwada, Indore?",
      answer: "Booking escorts in Rajwada is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the Rajwada area based on your preferences."
    },
    {
      question: "What types of escort services are available in Rajwada?",
      answer: "We offer a comprehensive range including VIP escorts, celebrity companions, college girls, mature escorts, Russian escorts, high-class models, and specialized services like event companions and incall services throughout Rajwada area."
    },
    {
      question: "Are escort services in Rajwada safe and discreet?",
      answer: "Absolutely. All our Rajwada escort services prioritize client safety and complete discretion. We maintain strict privacy policies, secure booking processes, and our companions are thoroughly verified professionals."
    },
    {
      question: "What areas in Rajwada do you cover for escort services?",
      answer: "We provide escort services across all areas of Rajwada including Marriott Hotel area, Central Mall, Brilliant Convention Centre, business districts, and surrounding commercial complexes with both incall and outcall options."
    },
    {
      question: "What are the rates for escort services in Rajwada?",
      answer: "Escort service rates in Rajwada vary based on companion type, duration, and specific services. Contact us directly at +91 9372662471 for detailed pricing information tailored to your requirements."
    },
    {
      question: "Do you provide 24/7 escort services in Rajwada?",
      answer: "Yes, our Rajwada escort services operate 24/7. Whether you need a companion for business events, social gatherings, or personal time, we're available round the clock to serve you in the Rajwada area."
    },
    {
      question: "Can I book multiple escorts for events in Rajwada?",
      answer: "Certainly! We can arrange multiple companions for corporate events, parties, or group activities in Rajwada. Contact us to discuss your event requirements and we'll provide suitable arrangements."
    },
    {
      question: "Are same-day bookings available for Rajwada escort services?",
      answer: "While we recommend advance booking for the best selection, we do accommodate same-day bookings in Rajwada when possible. Contact us as early as possible to check availability for your preferred companion."
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
              <span className="text-pink-800 font-bold text-lg">Premium Escorts in Rajwada</span>
              <span className="text-3xl">🌟</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Rajwada Escorts
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Royal Heritage
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Companions in Rajwada with Historic royal palace area
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Corporate events • Business meetings • Social gatherings • Professional companionship • Elite services across Rajwada
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
                Our Premium Services in Rajwada
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
                Experience the finest escort services in Rajwada with our professional companions
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

        {/* Rajwada Service Features */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Why Choose Rajwada Escorts?
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
                    ⭐ Rajwada Features
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
                      <p className="font-semibold text-gray-700">Available Throughout Rajwada</p>
                    </div>
                  </div>
                </div>

                {/* Booking Information */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100/50">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-8 text-center">
                    📱 Book Escorts in Rajwada - Simple Process
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">1</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-3">Call or WhatsApp</h4>
                      <p className="text-gray-600 text-lg">Contact us with your preferences for Rajwada location</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">2</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-3">Select Companion</h4>
                      <p className="text-gray-600 text-lg">Choose from our verified escorts available in Rajwada</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-bold text-white">3</span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-3">Meet in Rajwada</h4>
                      <p className="text-gray-600 text-lg">Enjoy premium companionship at your Rajwada location</p>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
                        📞 Call for Rajwada: +91 9372662471
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
                Frequently Asked Questions - Escorts in Rajwada
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about escort services in Rajwada, Indore
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
                Have more questions about our escort services in Rajwada? Contact us directly!
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

        {/* Escorts in Rajwada Content Section */}
        <section className="bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50 px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-pink-200/50">
              
              {/* Main Title */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-6">
                  🌟 Ultimate Guide to Premium Escorts in Rajwada 🌟
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
              </div>

              <div className="space-y-8 text-lg leading-relaxed text-gray-800">
                
                {/* Introduction Section */}
                <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-2xl p-6 md:p-8 border-l-4 border-pink-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4 flex items-center">
                    💎 Welcome to Rajwada's Royal Escort Services
                  </h3>
                  <p className="mb-4">
                    Welcome to the most comprehensive guide about professional escort services in Rajwada, Indore's crown jewel and the most magnificent symbol of royal heritage! 👑 As the historic palace of the Holkar dynasty and the heart of Indore's cultural identity, Rajwada represents the perfect blend of regal grandeur, historical significance, and cultural richness. Our detailed guide provides everything you need to know about the elite escort industry in this majestic royal district.
                  </p>
                  <p>
                    Rajwada, renowned for its architectural splendor, royal heritage, cultural festivals, and vibrant traditional markets, creates an extraordinarily unique environment for premium escort services. Whether you're exploring the magnificent palace complex, experiencing the cultural richness of the surrounding areas, or immersing yourself in the royal ambiance, understanding the professional escort services landscape in Rajwada is essential for enhancing your royal experience. ✨
                  </p>
                </div>

                {/* Why Rajwada for Escort Services */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-purple-700 mb-6 flex items-center">
                    🎭 Why Rajwada is India's Premier Royal Heritage Escort Destination
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                      <h4 className="text-xl font-semibold text-purple-800 mb-3">👑 Royal Heritage</h4>
                      <p>
                        Rajwada's status as a magnificent royal palace and UNESCO heritage site attracts cultured individuals who appreciate grandeur, sophistication, and historical significance. This refined clientele values escort services that can match the regal ambiance and provide companions who understand and appreciate royal heritage and cultural refinement.
                      </p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                      <h4 className="text-xl font-semibent text-orange-800 mb-3">🎨 Cultural Hub</h4>
                      <p>
                        The area's rich cultural environment, with traditional markets, cultural events, and artistic heritage, creates a sophisticated atmosphere where professional escort services can provide culturally enriching experiences. Clients appreciate escorts who can enhance their understanding and enjoyment of Rajwada's magnificent cultural offerings.
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    Rajwada's position as the cultural and spiritual heart of Indore makes it the natural choice for escort services that specialize in heritage tourism and cultural experiences. The palace's magnificent architecture, royal gardens, and cultural significance provide extraordinary settings for sophisticated escort companionship. The area's numerous festivals and cultural events create opportunities for escorts to provide culturally immersive experiences. 🏆
                  </p>
                  
                  <p>
                    The royal heritage of Rajwada has established it as a destination for discerning individuals who seek experiences that match the grandeur and sophistication of royal culture. Professional escort services in this area have evolved to provide companions who can appreciate and enhance the regal experience, from cultural interpretation to sophisticated social interaction in royal settings. 👑
                  </p>
                </div>

                {/* Royal Heritage Services Available */}
                <div className="bg-gradient-to-r from-blue-100 to-teal-100 rounded-2xl p-6 md:p-8 border-l-4 border-blue-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6 flex items-center">
                    🎨 Royal Heritage and Cultural Escort Services at Rajwada
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🏰</div>
                      <h4 className="font-semibold text-blue-800 mb-2">Palace Guides</h4>
                      <p className="text-sm">Knowledgeable escorts for royal palace tours and heritage experiences</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🎭</div>
                      <h4 className="font-semibold text-blue-800 mb-2">Cultural Companions</h4>
                      <p className="text-sm">Sophisticated partners for cultural events and traditional festivals</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">👗</div>
                      <h4 className="font-semibent text-blue-800 mb-2">Royal Escorts</h4>
                      <p className="text-sm">Elegant companions who embody royal grace and sophistication</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    Rajwada's magnificent royal setting requires escort services that can match the grandeur and cultural significance of the palace environment. Professional escorts specializing in heritage tourism provide culturally enriching companionship for palace tours, historical exploration, and cultural immersion experiences. The palace's stunning architecture and royal gardens provide extraordinary venues for sophisticated escort interactions. 🌟
                  </p>
                  
                  <p>
                    The area's cultural richness, with traditional markets, artisan workshops, and cultural performances, creates opportunities for escort services that can enhance clients' understanding and appreciation of royal heritage. Professional escorts familiar with Holkar history and royal traditions can provide invaluable cultural interpretation that transforms a simple visit into a deeply enriching royal experience. 🎨
                  </p>
                </div>

                {/* Cultural Events and Festivals */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 flex items-center">
                    🎪 Cultural Events and Festival Celebrations at Rajwada
                  </h3>
                  
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200 mb-6">
                    <h4 className="text-xl font-semibold text-green-800 mb-3">🎉 Festival Celebrations</h4>
                    <p>
                      Rajwada hosts numerous cultural festivals and traditional celebrations throughout the year, creating unique opportunities for escort services that specialize in cultural events. Professional escorts can provide appropriate companionship for festival participation, cultural performances, and traditional celebrations that showcase the rich heritage of the Holkar dynasty.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    The palace's role as a venue for cultural events, including classical music performances, traditional dance shows, and heritage festivals, creates demand for escort services that can enhance cultural experiences. Professional escorts familiar with Indian classical arts and cultural traditions can provide enriching companionship that deepens clients' appreciation of the artistic and cultural heritage displayed at Rajwada. 🎭
                  </p>
                  
                  <p>
                    The seasonal festivals and cultural celebrations at Rajwada attract visitors from across India and international tourists who appreciate escort companions knowledgeable about local traditions and cultural significance. These events provide opportunities for cultural immersion that require escorts who can bridge cultural differences and enhance cross-cultural understanding. 🌺
                  </p>
                </div>

                {/* Traditional Markets and Artisan Culture */}
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 md:p-8 border-l-4 border-rose-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-rose-700 mb-6 flex items-center">
                    🛍️ Traditional Markets and Artisan Experiences
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">🧵</div>
                      <h4 className="font-semibold text-rose-800 mb-2">Artisan Tours</h4>
                      <p className="text-sm">Expert guides for traditional craft workshops and artisan experiences</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl mb-2">💎</div>
                      <h4 className="font-semibold text-rose-800 mb-2">Heritage Shopping</h4>
                      <p className="text-sm">Sophisticated companions for traditional jewelry and textile shopping</p>
                    </div>
                  </div>
                  
                  <p className="mb-4">
                    The traditional markets surrounding Rajwada offer authentic experiences in Indian craftsmanship, textiles, and jewelry that require knowledgeable escort companions who can guide clients through the intricacies of traditional Indian arts and crafts. Professional escorts familiar with local artisan traditions can enhance shopping experiences by providing cultural context and quality guidance. 🎨
                  </p>
                  
                  <p>
                    The area's concentration of traditional craftsmen and artisan workshops creates opportunities for cultural tourism that benefits from escort companionship. From understanding the techniques of traditional Indian textiles to appreciating the artistry of local jewelry makers, professional escorts can provide valuable insights that transform shopping into cultural education. 💎
                  </p>
                </div>

                {/* Tourism and International Visitors */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6 flex items-center">
                    🌍 International Tourism and Heritage Appreciation
                  </h3>
                  
                  <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200 mb-6">
                    <h4 className="text-xl font-semibold text-indigo-800 mb-3">🗺️ Heritage Tourism</h4>
                    <p>
                      Rajwada attracts international tourists and heritage enthusiasts who seek authentic Indian royal experiences. Professional escort services can provide culturally sensitive companionship that enhances visitors' understanding of Indian history, architecture, and royal traditions while ensuring appropriate cultural interaction and interpretation.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    International visitors to Rajwada often require escort companions who can bridge cultural differences and provide appropriate guidance for experiencing Indian royal heritage. Professional escorts with cultural awareness and language skills can enhance the visitor experience by facilitating meaningful cultural exchange and ensuring respectful interaction with local traditions. 🌍
                  </p>
                  
                  <p>
                    The growing international recognition of Rajwada as a heritage destination creates opportunities for escort services that specialize in cross-cultural communication and heritage interpretation. Professional escorts can serve as cultural ambassadors, helping international visitors appreciate the depth and significance of Indian royal heritage while maintaining cultural sensitivity and respect. 🏛️
                  </p>
                </div>

                {/* Luxury and Hospitality */}
                <div className="bg-gradient-to-r from-violet-100 to-purple-100 rounded-2xl p-6 md:p-8 border-l-4 border-violet-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-violet-700 mb-6 flex items-center">
                    👑 Royal Luxury and Premium Hospitality Services
                  </h3>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md mb-6">
                    <h4 className="text-xl font-semibold text-violet-800 mb-3">🏰 Palace Experiences</h4>
                    <p>
                      The magnificent setting of Rajwada provides opportunities for luxury escort services that can match the grandeur of royal environments. Professional escorts trained in royal etiquette and cultural protocols can provide sophisticated companionship that enhances the regal experience while maintaining appropriate respect for the historical and cultural significance of the palace.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    The luxury hospitality sector serving Rajwada's visitors includes high-end hotels and cultural venues that cater to affluent tourists and heritage enthusiasts. Professional escort services in this environment must meet the highest standards of sophistication, cultural awareness, and personal presentation to serve clientele who expect luxury experiences that match the royal grandeur of Rajwada. 👑
                  </p>
                  
                  <p>
                    The intersection of royal heritage and modern luxury tourism at Rajwada creates unique opportunities for escort services that can provide companions who embody both cultural sophistication and contemporary elegance. This specialized positioning has attracted escort agencies that focus on serving discerning clients who appreciate both historical significance and luxury service standards. ✨
                  </p>
                </div>

                {/* Legacy and Future */}
                <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 md:p-8 border-l-4 border-amber-500">
                  <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6 flex items-center">
                    🚀 Preserving Heritage and Future Tourism Growth
                  </h3>
                  
                  <div className="bg-white rounded-lg p-4 shadow-md mb-6">
                    <h4 className="text-xl font-semibold text-amber-800 mb-3">🏛️ Heritage Conservation</h4>
                    <p>
                      Ongoing conservation efforts and heritage preservation projects at Rajwada are enhancing its appeal as a world-class heritage destination. These improvements create better opportunities for premium escort services that can serve the growing number of heritage tourists and cultural enthusiasts visiting this magnificent royal palace.
                    </p>
                  </div>
                  
                  <p className="mb-4">
                    The continued development of Rajwada as a premier heritage tourism destination will increase demand for sophisticated escort services that can enhance visitor experiences while respecting the cultural and historical significance of the royal palace. Future growth in cultural tourism will create expanding opportunities for specialized escort services that understand heritage tourism. 🏰
                  </p>
                  
                  <p>
                    Rajwada's enduring significance as a symbol of Indian royal heritage and its growing recognition as an international tourist destination position it as an ideal location for escort service providers seeking to serve the luxury heritage tourism market. The palace's timeless appeal ensures sustained opportunities for premium escort services that can match its royal grandeur. 👑
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 md:p-8 border-2 border-pink-300 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4">
                    📞 Experience Rajwada's Royal Heritage Escort Services Today
                  </h3>
                  <p className="mb-6 text-lg">
                    Ready to discover the finest escort services at Rajwada? Our culturally sophisticated and heritage-aware team is available 24/7 to help you find the perfect companion for any royal experience in Indore's magnificent palace district. Whether you need a knowledgeable guide for palace tours, a cultured partner for heritage festivals, or an elegant companion who can enhance your royal cultural experience, we have the ideal escort to make your Rajwada visit truly memorable.
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
                Ready to Book Premium Escorts in Rajwada?
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