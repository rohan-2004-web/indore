'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function SarafaBazaarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions near famous Sarafa Bazaar with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts near Sarafa Bazaar offering gourmet luxury experience",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication",
      description: "Premium models near Sarafa Bazaar with refined taste and sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions near vibrant Sarafa food street with youthful energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions near Sarafa Bazaar with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "👑",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Russian Women",
      subtitle: "International Beauty",
      description: "Exotic Russian companions near cultural Sarafa Bazaar with international charm",
      image: "/images/services/Russian women.webp",
      icon: "💃",
      category: "INTERNATIONAL",
      link: "/services/russian-women"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts near Sarafa Bazaar, Indore?",
      answer: "Booking escorts near Sarafa Bazaar is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the vibrant Sarafa Bazaar food street area based on your preferences."
    },
    {
      question: "Are your Sarafa Bazaar escorts verified and professional?",
      answer: "Yes, absolutely! All our escorts near Sarafa Bazaar are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance and sophistication while serving clients in the bustling food street environment."
    },
    {
      question: "What makes Sarafa Bazaar ideal for escort services in Indore?",
      answer: "Sarafa Bazaar is Indore's famous food street with amazing culinary experiences, vibrant nightlife, traditional markets, and cultural significance. It offers perfect venues for dining experiences with premium escort services in the heart of Indore's food culture."
    },
    {
      question: "Do you provide both incall and outcall services near Sarafa Bazaar?",
      answer: "Yes, we provide both incall and outcall services throughout the Sarafa Bazaar area. Our escorts can accompany you for food street experiences, restaurant visits, or meet you at your preferred location near Sarafa Bazaar."
    },
    {
      question: "What are the rates for escort services near Sarafa Bazaar?",
      answer: "Our rates for escorts near Sarafa Bazaar vary based on the service type, duration, and companion category. We offer competitive pricing for all categories from college girls to VIP escorts. Contact us directly for detailed pricing specific to Sarafa Bazaar area."
    },
    {
      question: "Is privacy and discretion guaranteed for Sarafa Bazaar bookings?",
      answer: "Privacy and discretion are our top priorities for all Sarafa Bazaar bookings. All client information is kept strictly confidential. Our escorts are trained to maintain complete discretion, especially important in the busy and culturally vibrant environment of Sarafa Bazaar."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-red-200/60 via-orange-100/50 to-red-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-red-300/95 via-orange-200/90 to-red-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-red-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-orange-400/25 to-red-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-red-300/20 to-orange-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-100/90 to-orange-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-red-200/50">
              <span className="text-3xl">🍽️</span>
              <span className="text-red-800 font-bold text-lg">Food Street Escorts</span>
              <span className="text-3xl">🌶️</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-red-700 via-orange-500 to-red-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Escorts near Sarafa Bazaar
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                Famous Food Street
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Escort Services in Indore's Culinary Capital
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Verified professional escorts near Sarafa Bazaar • 24/7 availability • Food street experiences • Complete discretion guaranteed
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-red-500/50 border-2 border-red-400/30"
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
                <div className="text-4xl mb-3">🏪</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Famous Food Street</h3>
                <p className="text-gray-700 font-medium">Iconic Sarafa Bazaar with amazing culinary experiences</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Gourmet Companions</h3>
                <p className="text-gray-700 font-medium">Escorts perfect for food street dining experiences</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Cultural Privacy</h3>
                <p className="text-gray-700 font-medium">Discrete service in vibrant food street atmosphere</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-red-100/70 via-orange-50/60 to-red-100/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
                Premium Escort Services near Sarafa Bazaar
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Choose from our carefully selected companions available near Sarafa Bazaar - Indore's famous food street destination
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <h4 className="text-lg font-semibold text-red-600 mb-3">{service.subtitle}</h4>
                  <p className="text-gray-600 mb-6 text-base flex-grow leading-relaxed">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    Book near Sarafa Bazaar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-red-200/70 via-orange-100/60 to-red-200/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Sarafa Bazaar Escorts
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 rounded-2xl shadow-xl border border-red-100/50 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-red-50/50 transition-colors"
                  >
                    <span className="text-lg font-bold text-red-800">{faq.question}</span>
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
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Experience Sarafa Bazaar?</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Contact us now for premium escort services near Sarafa Bazaar. Available 24/7 for food street adventures.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="tel:+919372662471" 
                className="inline-flex items-center justify-center gap-4 bg-white text-red-600 px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
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