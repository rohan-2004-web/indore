'use client'

import Header from '@/components/Header'
import Image from 'next/image'
import { useState } from 'react'

export default function GalleryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const galleryImages = [
    {
      id: 1,
      src: "/images/services/Celebrity Escorts.webp",
      title: "Celebrity Escorts",
      category: "Premium"
    },
    {
      id: 2,
      src: "/images/services/VIP Escorts.jpg",
      title: "VIP Escorts",
      category: "Luxury"
    },
    {
      id: 3,
      src: "/images/services/Premium Models.jpg",
      title: "Premium Models",
      category: "Elite"
    },
    {
      id: 4,
      src: "/images/services/College Girls.webp",
      title: "College Girls",
      category: "Young"
    },
    {
      id: 5,
      src: "/images/services/Housewife Escorts.jpg",
      title: "Housewife Escorts",
      category: "Mature"
    },
    {
      id: 6,
      src: "/images/services/Punjabi women.webp",
      title: "Punjabi Women",
      category: "Traditional"
    },
    {
      id: 7,
      src: "/images/services/Slim Escorts.webp",
      title: "Slim Escorts",
      category: "Elegant"
    },
    {
      id: 8,
      src: "/images/services/Local Beauties.webp",
      title: "Local Beauties",
      category: "Local"
    },
    {
      id: 9,
      src: "/images/services/Event Companion.webp",
      title: "Event Companion",
      category: "Events"
    },
    {
      id: 10,
      src: "/images/services/Pink Special.webp",
      title: "Pink Special",
      category: "Special"
    },
    {
      id: 11,
      src: "/images/services/Incall Escorts.webp",
      title: "Incall Escorts",
      category: "Services"
    },
    {
      id: 12,
      src: "/images/services/Young Girls.webp",
      title: "Young Girls",
      category: "Fresh"
    },
    {
      id: 13,
      src: "/images/services/Expert Services.webp",
      title: "Expert Services",
      category: "Professional"
    },
    {
      id: 14,
      src: "/images/services/High Class Models.webp",
      title: "High Class Models",
      category: "Elite"
    },
    {
      id: 15,
      src: "/images/services/bold girls.webp",
      title: "Bold Girls",
      category: "Confident"
    },
    {
      id: 16,
      src: "/images/services/sexy girls.webp",
      title: "Sexy Girls",
      category: "Glamour"
    },
    {
      id: 17,
      src: "/images/service17.jpg",
      title: "Travel Companion",
      category: "Travel"
    },
    {
      id: 18,
      src: "/images/service18.jpg",
      title: "High Profile",
      category: "Elite"
    },
    {
      id: 19,
      src: "/images/service19.jpg",
      title: "Corporate Service",
      category: "Business"
    },
    {
      id: 20,
      src: "/images/service20.jpg",
      title: "24/7 Service",
      category: "Anytime"
    }
  ]

  const faqs = [
    {
      question: "What type of escorts are featured in your gallery?",
      answer: "Our gallery showcases a diverse collection of premium escorts including celebrity companions, VIP models, college girls, mature housewives, Punjabi beauties, and professional event companions. Each escort is carefully selected for their beauty, professionalism, and sophistication."
    },
    {
      question: "Are the images in the gallery authentic and recent?",
      answer: "Yes, all images in our gallery are authentic and regularly updated. We maintain strict quality standards and ensure all photographs represent our current available escorts accurately. We believe in complete transparency with our clients."
    },
    {
      question: "How can I book the escort shown in the gallery?",
      answer: "You can book any escort from our gallery by calling +91 9372662471 or messaging us on WhatsApp. Simply mention the category or name of the escort you're interested in, and our team will arrange the booking for you."
    },
    {
      question: "Do you offer different categories of escorts as shown in the gallery?",
      answer: "Absolutely! Our gallery represents various categories including Celebrity Escorts, VIP Companions, College Girls, Mature Escorts, High-Class Models, Event Companions, and many more to suit different preferences and occasions."
    },
    {
      question: "Are all escorts in the gallery available in Indore?",
      answer: "Yes, all escorts featured in our gallery are available for bookings in Indore and surrounding areas. We provide services across all major locations including Vijay Nagar, Palasia, AB Road, Saket, and 15+ other prime areas."
    },
    {
      question: "What makes your escort gallery different from others?",
      answer: "Our gallery features verified, professional escorts with high-quality images. Each escort is categorized for easy selection, and we provide detailed information about their specialties. We focus on quality over quantity."
    },
    {
      question: "Can I request a specific type of escort not shown in the gallery?",
      answer: "Yes, our gallery represents just a sample of our extensive network. If you have specific preferences or requirements not shown in the gallery, please contact us and we'll do our best to fulfill your request."
    },
    {
      question: "How often do you update your gallery with new escorts?",
      answer: "We regularly update our gallery to showcase new escorts joining our agency and refresh existing profiles. Our gallery is updated weekly to ensure you always have access to the latest and most current escorts available."
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/90 via-orange-200/80 to-pink-300/90"></div>
          <div className="w-full mx-auto text-center relative z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-8 leading-tight">
              Premium Escort Gallery
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Explore our gallery of beautiful and professional companions available in Indore
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                📞 Call Now: +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Gallery Grid Section */}
        <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Our Beautiful Companions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Browse through our carefully curated gallery of professional and elegant companions
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {galleryImages.map((image) => (
                  <div 
                    key={image.id}
                    className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-100/50 overflow-hidden transform hover:-translate-y-3 transition-all duration-500 hover:shadow-3xl"
                  >
                    {/* Image */}
                    <div className="relative h-80 w-full overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500/90 to-orange-500/90 text-white px-3 py-2 rounded-full text-sm font-bold">
                        {image.category}
                      </div>
                      
                      {/* Title Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-bold text-xl mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </h3>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <a 
                            href="tel:+919372662471" 
                            className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
                          >
                            📞 Call
                          </a>
                          <a 
                            href="https://wa.me/919372662471" 
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors"
                          >
                            💬 Chat
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-pink-100/80 via-orange-50/60 to-pink-200/70">
          <div className="w-full px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  🔍 Gallery FAQs
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Everything you need to know about our premium escort gallery and booking process
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-100/50 overflow-hidden transform transition-all duration-300 hover:shadow-3xl"
                  >
                    <button
                      className="w-full text-left p-8 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-800 pr-8 leading-relaxed">
                          {faq.question}
                        </h3>
                        <div className={`flex-shrink-0 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                          <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8">
                        <div className="border-t border-pink-200 pt-6">
                          <p className="text-gray-700 leading-loose text-lg font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact CTA within FAQ Section */}
              <div className="mt-16 text-center bg-gradient-to-r from-pink-500/10 to-orange-500/10 rounded-3xl p-12">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  Still have questions about our gallery?
                </h3>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Contact us directly for personalized assistance with your escort selection
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="tel:+919372662471" 
                    className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    📞 Call Now: +91 9372662471
                  </a>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    💬 WhatsApp Now
                  </a>
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
                Ready to Meet Your Perfect Companion?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Contact us now to book any of our beautiful companions for an unforgettable experience
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

        {/* Footer - Same as Homepage */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
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
                  <a href="/gallery" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🖼️ Gallery</a>
                  <a href="/contact" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
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
    </>
  )
}