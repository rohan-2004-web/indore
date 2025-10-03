'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import RajwadaEscortsContent from './components/RajwadaEscortsContent'

export default function RajwadaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
      icon: "💝",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Charm",
      description: "Beautiful Punjabi companions in Rajwada with traditional appeal",
      image: "/images/services/Punjabi women.webp",
      icon: "🌺",
      category: "CULTURAL",
      link: "/services/punjabi-women"
    },
    {
      title: "Slim Escorts",
      subtitle: "Perfect Figure",
      description: "Elegant slim companions in Rajwada with perfect physique",
      image: "/images/services/Slim Escorts.webp",
      icon: "✨",
      category: "FIGURE",
      link: "/services/slim-escorts"
    },
    {
      title: "High Class Models",
      subtitle: "Runway Excellence",
      description: "Professional models in Rajwada with runway experience",
      image: "/images/services/High Class Models.webp",
      icon: "👑",
      category: "MODEL",
      link: "/services/high-class-models"
    }
  ]

  const faqs = [
    {
      question: "Are your escort services available 24/7 in Rajwada?",
      answer: "Yes, our premium escort services in Rajwada are available 24/7. We provide round-the-clock companionship services with advance booking to ensure availability of your preferred companion."
    },
    {
      question: "How do I book an escort in Rajwada?",
      answer: "Booking is simple and discreet. Call us at +91 9372662471 or use our WhatsApp service. We'll discuss your preferences, confirm availability, and arrange the meeting details while maintaining complete confidentiality."
    },
    {
      question: "Do you provide outcall services in Rajwada?",
      answer: "Yes, we provide both outcall and incall services in Rajwada. Our companions can visit your hotel, residence, or preferred location within Rajwada area with complete discretion and professionalism."
    },
    {
      question: "What areas of Rajwada do you cover?",
      answer: "We cover all areas of Rajwada including the historic palace area, traditional markets, surrounding residential areas, and nearby commercial zones. Our companions are familiar with the entire Rajwada region."
    },
    {
      question: "Are your escorts verified and genuine?",
      answer: "Absolutely! All our escorts in Rajwada are thoroughly verified with authentic profiles and recent photographs. We maintain strict quality standards and ensure all companions are genuine and professional."
    },
    {
      question: "What languages do your Rajwada escorts speak?",
      answer: "Our escorts in Rajwada are multilingual and speak Hindi, English, and other regional languages. This ensures comfortable communication and cultural understanding for both local and visiting clients."
    },
    {
      question: "Do you ensure privacy and discretion?",
      answer: "Privacy and discretion are our top priorities. We maintain strict confidentiality protocols, secure communication channels, and ensure all meetings in Rajwada are completely private and discreet."
    },
    {
      question: "What are your service charges in Rajwada?",
      answer: "Our service charges vary based on companion selection, duration, and specific requirements. Please contact us directly for detailed pricing information. We offer competitive rates for premium quality services in Rajwada."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 to-orange-600/30"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                🏛️ Premium Escorts in Rajwada 🏛️
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the finest heritage-inspired escort services in Indore's royal cultural heart with complete discretion and cultural sophistication
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  📞 Call: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-white/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                🌟 Premium Escort Services in Rajwada 🌟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our exclusive collection of heritage-inspired escort services in Rajwada's royal cultural district
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-pink-100">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-pink-600 font-semibold mb-3">{service.subtitle}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <a 
                      href={service.link}
                      className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-pink-50 to-orange-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                👑 Why Choose Our Rajwada Escort Service? 👑
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the perfect blend of heritage charm and premium luxury in Indore's cultural heart
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Heritage Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Culturally aware escorts with deep knowledge of Rajwada's royal heritage and traditional values
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">🔒</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Discretion</h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolute privacy and confidentiality guaranteed with secure booking and professional conduct
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center group hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">⏰</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Round-the-clock premium escort services in Rajwada with instant response and flexible scheduling
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                ❓ Frequently Asked Questions ❓
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our premium escort services in Rajwada
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-pink-100">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-pink-50 transition-colors duration-300"
                  >
                    <span className="font-semibold text-gray-900 text-lg pr-4">{faq.question}</span>
                    <span className={`text-pink-600 text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
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

        {/* Rajwada Escorts Content Section */}
        <RajwadaEscortsContent />

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-600/20"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                Ready to Book Premium Escorts in Rajwada?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the finest heritage-inspired escort services in Indore's royal cultural heart with complete discretion and satisfaction guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  📞 Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}