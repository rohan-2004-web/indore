'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function MGRoadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service", 
      description: "Experience celebrity-level companions in MG Road with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts",
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in MG Road offering ultimate luxury", 
      image: "/images/services/VIP Escorts.jpg",
      icon: "",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication",
      description: "Premium models in MG Road with unmatched sophistication",
      image: "/images/services/Premium Models.jpg", 
      icon: "",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in MG Road with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "", 
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature Experience",
      description: "Experienced mature companions in MG Road with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Local Beauties",
      subtitle: "Know Indore Best",
      description: "Beautiful local companions in MG Road who know the historic area",
      image: "/images/services/Local Beauties.webp",
      icon: "",
      category: "LOCAL",
      link: "/services"
    }
  ]

  const faqs = [
    {
      question: "How can I book premium escorts in MG Road, Indore?",
      answer: "Booking escorts in MG Road is simple and discreet. Call us directly at +91 9372662471 or WhatsApp. Our team is available 24/7 to help you select the perfect companion in the historic MG Road area based on your preferences."
    },
    {
      question: "Are your MG Road escorts verified and professional?", 
      answer: "Yes, absolutely! All our escorts in MG Road are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards while serving clients in the iconic MG Road area."
    },
    {
      question: "What makes MG Road special for escort services in Indore?",
      answer: "MG Road is the historic heart of Indore with heritage buildings, traditional markets, and cultural significance. It offers a unique backdrop for escort services with easy accessibility and numerous meeting venues."
    },
    {
      question: "Do you provide both incall and outcall services in MG Road?",
      answer: "Yes, we provide both incall and outcall services throughout MG Road. Our escorts can visit you at hotels, offices, or residences in the MG Road area, or you can visit our locations nearby."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-300/95 via-orange-200/90 to-pink-300/95"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-br from-orange-400/25 to-pink-400/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="w-full mx-auto text-center relative z-10 px-4">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-100/90 to-orange-100/90 backdrop-blur-sm rounded-full px-8 py-4 mb-8 shadow-xl border border-pink-200/50">
              <span className="text-3xl"></span>
              <span className="text-pink-800 font-bold text-lg">Premium Escorts in MG Road</span>
              <span className="text-3xl"></span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl">
              Escorts in MG Road
              <br />
              <span className="text-5xl md:text-7xl bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Historic Heart of Indore
              </span>
            </h1>

            <div className="max-w-5xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                Premium Escort Services in Historic MG Road
              </p>
              <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
                Verified professional escorts in MG Road  24/7 availability  Historic heritage location  Complete discretion guaranteed
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 hover:from-pink-700 hover:via-pink-800 hover:to-pink-900 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-pink-500/50 border-2 border-pink-400/30"
              >
                <span className="text-3xl group-hover:animate-bounce"></span>
                <span>Call Now: +91 9372 662 471</span>
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="group inline-flex items-center justify-center gap-4 bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white px-16 py-8 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 border-2 border-green-400/30"
              >
                <span className="text-3xl group-hover:animate-bounce"></span>
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Premium Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Historic Heritage Area</h3>
                <p className="text-gray-700 font-medium">Iconic MG Road with heritage buildings and culture</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Premium Companions</h3>
                <p className="text-gray-700 font-medium">Verified high-class escorts perfect for cultural experiences</p>
              </div>
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-xl">
                <div className="text-4xl mb-3"></div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Complete Discretion</h3>
                <p className="text-gray-700 font-medium">100% privacy guaranteed for clients in MG Road</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escort Services in MG Road, Indore
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Experience luxury companionship in Indore's historic heart with our verified professional escorts
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-2xl mb-2">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    Book in MG Road
                  </a>
                </div>
              ))}
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

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-100 to-orange-100 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-pink-200/80 hover:to-orange-100/80 transition-all duration-200 flex justify-between items-center group"
                    >
                      <h3 className="text-xl font-bold text-pink-900 pr-4 group-hover:text-orange-700">{faq.question}</h3>
                      <span className={`text-3xl transition-all duration-300 text-pink-700 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                        
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
                   Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                   WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          <div className="w-full px-4 relative z-10">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                 Escorts in MG Road, Indore
              </h3>
              <p className="text-pink-100 mb-8 leading-relaxed font-semibold text-xl max-w-2xl mx-auto">
                Premium escort services in historic MG Road with verified professional companions. Available 24/7 in the heart of Indore.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-xl">
                   Call Now: +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-12 py-5 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-xl">
                   WhatsApp Available
                </a>
              </div>
              
              {/* Footer Bottom */}
              <div className="border-t-2 border-pink-400/40 pt-8">
                <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">
                   2024 Premium Escorts in MG Road, Indore. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold"> 24/7 MG Road</span>
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold"> 100% Verified</span>
                  <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold"> Complete Discretion</span>
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold"> Premium Quality</span>
                </div>
                <p className="text-pink-200 font-semibold text-lg">
                   Professional escort services in MG Road for adults only. Must be 18+ to use our services.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
