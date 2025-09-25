'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function Scheme94Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in Scheme 94 with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in Scheme 94 offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication",
      description: "Premium models in Scheme 94 with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "High Profile Escorts",
      subtitle: "Elite Companionship",
      description: "High-profile companions in prestigious Scheme 94 with elite status",
      image: "/images/services/High profile escorts.jpg",
      icon: "👸",
      category: "ELITE",
      link: "/services/high-profile-escorts"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions in Scheme 94 with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "👑",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Air Hostess",
      subtitle: "Professional Elegance",
      description: "Professional air hostess companions in upscale Scheme 94",
      image: "/images/services/Air hostess.jpg",
      icon: "✈️",
      category: "PROFESSIONAL",
      link: "/services/air-hostess"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts in Scheme 94, Indore?",
      answer: "Booking escorts in Scheme 94 is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the prestigious Scheme 94 residential area based on your preferences."
    },
    {
      question: "Are your Scheme 94 escorts verified and professional?",
      answer: "Yes, absolutely! All our escorts in Scheme 94 are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance and sophistication while serving clients in the upscale Scheme 94 society."
    },
    {
      question: "What makes Scheme 94 ideal for escort services in Indore?",
      answer: "Scheme 94 is one of Indore's most prestigious residential areas with luxurious bungalows, high-end society living, and excellent amenities. It offers perfect privacy for premium escort services with secure gated communities and upscale environment."
    },
    {
      question: "Do you provide both incall and outcall services in Scheme 94?",
      answer: "Yes, we provide both incall and outcall services throughout Scheme 94. Our escorts can visit you at your residence, bungalow, or guest house in Scheme 94, or you can visit our luxury incall locations in the area."
    },
    {
      question: "What are the rates for escort services in Scheme 94?",
      answer: "Our rates for escorts in Scheme 94 vary based on the service type, duration, and companion category. Given the premium nature of Scheme 94, we offer competitive pricing for all categories from college girls to VIP escorts. Contact us directly for detailed pricing."
    },
    {
      question: "Is privacy and discretion guaranteed for Scheme 94 bookings?",
      answer: "Privacy and discretion are our top priorities for all Scheme 94 bookings. All client information is kept strictly confidential. Our escorts are trained to maintain complete discretion, especially important in the prestigious residential environment of Scheme 94."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-indigo-200/60 via-blue-100/50 to-indigo-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-300/95 via-blue-200/90 to-indigo-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-blue-400/25 to-indigo-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-indigo-300/20 to-blue-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-100/90 to-blue-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-indigo-200/50">
              <span className="text-3xl">🏆</span>
              <span className="text-indigo-800 font-bold text-lg">Premium Society Escorts</span>
              <span className="text-3xl">💎</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-indigo-700 via-blue-500 to-indigo-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Escorts in Scheme 94
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Prestigious Society
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Escort Services in Indore's Most Prestigious Residential Area
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Verified professional escorts in Scheme 94 • 24/7 availability • Luxury bungalow visits • Complete discretion guaranteed
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 hover:from-indigo-700 hover:via-indigo-800 hover:to-indigo-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-indigo-500/50 border-2 border-indigo-400/30"
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
                <div className="text-4xl mb-3">🏰</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Prestigious Society</h3>
                <p className="text-gray-700 font-medium">Exclusive Scheme 94 with luxury bungalows & amenities</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">👸</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Elite Companions</h3>
                <p className="text-gray-700 font-medium">High-profile escorts matching society standards</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔐</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Ultimate Privacy</h3>
                <p className="text-gray-700 font-medium">Secure gated community with complete discretion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-100/70 via-blue-50/60 to-indigo-100/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
                Premium Escort Services in Scheme 94
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Choose from our carefully selected companions available in Scheme 94 - Indore's most prestigious residential destination
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-bold">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-3">{service.subtitle}</h4>
                  <p className="text-gray-600 mb-6 text-base flex-grow leading-relaxed">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    Book Now in Scheme 94
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-indigo-200/70 via-blue-100/60 to-indigo-200/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Scheme 94 Escorts
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 rounded-2xl shadow-xl border border-indigo-100/50 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-indigo-50/50 transition-colors"
                  >
                    <span className="text-lg font-bold text-indigo-800">{faq.question}</span>
                    <span className={`text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Book Escorts in Scheme 94?</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Contact us now for premium escort services in Scheme 94. Available 24/7 for luxury bungalow visits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="tel:+919372662471" 
                className="inline-flex items-center justify-center gap-4 bg-white text-indigo-600 px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="text-2xl">📞</span>
                Call: +91 9372 662 471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-flex items-center justify-center gap-4 bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <span className="text-2xl">💬</span>
                WhatsApp Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}