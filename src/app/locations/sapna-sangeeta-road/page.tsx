'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function SapnaSangeetaRoadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions on Sapna Sangeeta Road with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts on Sapna Sangeeta Road offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication",
      description: "Premium models on Sapna Sangeeta Road with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions on Sapna Sangeeta Road with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions on Sapna Sangeeta Road with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "👑",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Russian Women",
      subtitle: "International Beauty",
      description: "Exotic Russian companions on Sapna Sangeeta Road with international appeal",
      image: "/images/services/Russian women.webp",
      icon: "💃",
      category: "INTERNATIONAL",
      link: "/services/russian-women"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts on Sapna Sangeeta Road, Indore?",
      answer: "Booking escorts on Sapna Sangeeta Road is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the vibrant Sapna Sangeeta Road entertainment area based on your preferences."
    },
    {
      question: "Are your Sapna Sangeeta Road escorts verified and professional?",
      answer: "Yes, absolutely! All our escorts on Sapna Sangeeta Road are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance and sophistication while serving clients in the bustling entertainment district."
    },
    {
      question: "What makes Sapna Sangeeta Road ideal for escort services in Indore?",
      answer: "Sapna Sangeeta Road is Indore's entertainment hub with restaurants, cafes, shopping complexes, and vibrant nightlife. It offers perfect venues for private meetings with premium escort services and is centrally located with excellent connectivity."
    },
    {
      question: "Do you provide both incall and outcall services on Sapna Sangeeta Road?",
      answer: "Yes, we provide both incall and outcall services throughout Sapna Sangeeta Road. Our escorts can visit you at your hotel, restaurant, or preferred location on Sapna Sangeeta Road, or you can visit our luxury incall locations in the area."
    },
    {
      question: "What are the rates for escort services on Sapna Sangeeta Road?",
      answer: "Our rates for escorts on Sapna Sangeeta Road vary based on the service type, duration, and companion category. We offer competitive pricing for all categories from college girls to VIP escorts. Contact us directly for detailed pricing specific to Sapna Sangeeta Road."
    },
    {
      question: "Is privacy and discretion guaranteed for Sapna Sangeeta Road bookings?",
      answer: "Privacy and discretion are our top priorities for all Sapna Sangeeta Road bookings. All client information is kept strictly confidential. Our escorts are trained to maintain complete discretion, especially important in the busy entertainment zone of Sapna Sangeeta Road."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-purple-200/60 via-pink-100/50 to-purple-300/60">
        
        {/* Hero Section - Premium Enhanced Style */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-300/95 via-pink-200/90 to-purple-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/30 to-pink-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-pink-400/25 to-purple-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100/90 to-pink-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-purple-200/50">
              <span className="text-3xl">🎭</span>
              <span className="text-purple-800 font-bold text-lg">Entertainment Zone Escorts</span>
              <span className="text-3xl">🌈</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-700 via-pink-500 to-purple-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Escorts on Sapna Sangeeta Road
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Entertainment Hub
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Escort Services in Indore's Entertainment Capital
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Verified professional escorts on Sapna Sangeeta Road • 24/7 availability • Restaurant & hotel visits • Complete discretion guaranteed
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-purple-500/50 border-2 border-purple-400/30"
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
                <div className="text-4xl mb-3">🎪</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Entertainment Zone</h3>
                <p className="text-gray-700 font-medium">Vibrant Sapna Sangeeta Road with restaurants & nightlife</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">💫</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Companions</h3>
                <p className="text-gray-700 font-medium">Verified high-class escorts for entertainment venues</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Privacy</h3>
                <p className="text-gray-700 font-medium">Discrete service in bustling entertainment district</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100/70 via-pink-50/60 to-purple-100/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Premium Escort Services on Sapna Sangeeta Road
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Choose from our carefully selected companions available on Sapna Sangeeta Road - Indore's vibrant entertainment destination
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-64 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <h4 className="text-lg font-semibold text-purple-600 mb-3">{service.subtitle}</h4>
                  <p className="text-gray-600 mb-6 text-base flex-grow leading-relaxed">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    Book on Sapna Sangeeta Road
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-purple-200/70 via-pink-100/60 to-purple-200/70">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - Sapna Sangeeta Road Escorts
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/90 rounded-2xl shadow-xl border border-purple-100/50 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-purple-50/50 transition-colors"
                  >
                    <span className="text-lg font-bold text-purple-800">{faq.question}</span>
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Book on Sapna Sangeeta Road?</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto">
              Contact us now for premium escort services on Sapna Sangeeta Road. Available 24/7 for entertainment venue visits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <a 
                href="tel:+919372662471" 
                className="inline-flex items-center justify-center gap-4 bg-white text-purple-600 px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
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