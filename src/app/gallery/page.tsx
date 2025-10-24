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
      src: "/images/services/Unsatisfied Bhabhi.webp",
      title: "Travel Companion",
      category: "Travel"
    },
    {
      id: 18,
      src: "/images/services/Unsatisfied Females.webp",
      title: "High Profile",
      category: "Elite"
    },
    {
      id: 19,
      src: "/images/services/Expert Services.webp",
      title: "Corporate Service",
      category: "Business"
    },
    {
      id: 20,
      src: "/images/services/Local Beauties.webp",
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
            <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-8 leading-tight">
              Premium Escort Gallery
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Explore our gallery of beautiful and professional companions available in Indore
            </p>
            <div className="flex justify-center mb-10">
              <p className="text-sm text-gray-800">For more information or to make an inquiry, please visit our contact page.</p>
            </div>
          </div>
        </section>

        {/* Services Section removed per request (keeps page focused on gallery and FAQ) */}

        {/* Stylish Gallery Content Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  ✨ Why Choose Our Gallery ✨
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                  Step into a world of elegance and sophistication with our premium escort gallery featuring the finest companions in Indore
                </p>
              </div>

              {/* Gallery Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-gradient-to-br from-pink-100/80 to-rose-200/60 rounded-3xl p-8 shadow-2xl border-2 border-pink-200/50 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-4xl text-white">🎨</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Authentic Profiles</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">Every image in our gallery represents authentic, verified companions with genuine profiles and real photographs</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100/80 to-violet-200/60 rounded-3xl p-8 shadow-2xl border-2 border-purple-200/50 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-4xl text-white">💎</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Quality</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">Our gallery showcases only the highest quality companions, each selected for their beauty, intelligence, and professionalism</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100/80 to-cyan-200/60 rounded-3xl p-8 shadow-2xl border-2 border-blue-200/50 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-4xl text-white">🌟</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Diverse Selection</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">From college girls to mature companions, our diverse gallery ensures you find exactly the type of companion you desire</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-100/80 to-yellow-200/60 rounded-3xl p-8 shadow-2xl border-2 border-orange-200/50 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-4xl text-white">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Regular Updates</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">Our gallery is constantly updated with fresh faces and new companions, ensuring variety and current availability</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100/80 to-emerald-200/60 rounded-3xl p-8 shadow-2xl border-2 border-green-200/50 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-4xl text-white">🔒</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Privacy Protected</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">Complete discretion and privacy protection for both clients and companions with secure booking processes</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-100/80 to-pink-200/60 rounded-3xl p-8 shadow-2xl border-2 border-red-200/50 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                      <span className="text-4xl text-white">⚡</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Instant Booking</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">Quick and easy booking process with immediate confirmation and 24/7 customer support for your convenience</p>
                  </div>
                </div>
              </div>

              {/* Gallery Statistics */}
              <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-12 border-2 border-pink-200/30 mb-16">
                <div className="text-center mb-10">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                    📊 Gallery Statistics
                  </h3>
                  <p className="text-xl text-gray-700 font-medium">Numbers that speak for our gallery excellence</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center bg-white/60 rounded-2xl p-6 backdrop-blur-md shadow-lg">
                    <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
                    <div className="text-lg font-semibold text-gray-700">Gallery Photos</div>
                  </div>
                  <div className="text-center bg-white/60 rounded-2xl p-6 backdrop-blur-md shadow-lg">
                    <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                    <div className="text-lg font-semibold text-gray-700">Unique Models</div>
                  </div>
                  <div className="text-center bg-white/60 rounded-2xl p-6 backdrop-blur-md shadow-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">20</div>
                    <div className="text-lg font-semibold text-gray-700">Service Categories</div>
                  </div>
                  <div className="text-center bg-white/60 rounded-2xl p-6 backdrop-blur-md shadow-lg">
                    <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-lg font-semibold text-gray-700">Verified Profiles</div>
                  </div>
                </div>
              </div>

              {/* Gallery Call to Action */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-3xl p-8 text-white shadow-2xl">
                  <h3 className="text-3xl font-bold mb-4">🎉 Explore Our Complete Gallery 🎉</h3>
                  <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                    Browse through our extensive collection of premium companions and find your perfect match today!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a 
                      href="tel:+919372662471" 
                      className="inline-flex items-center justify-center bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      <span className="mr-2">📞</span>
                      Call to Browse: +91 9372662471
                    </a>
                    <a 
                      href="https://wa.me/919372662471?text=I want to browse your complete gallery" 
                      className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      <span className="mr-2">💬</span>
                      WhatsApp Gallery Request
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

  {/* FAQ Section */}
  <section id="gallery-faq" className="py-20 bg-gradient-to-br from-pink-100/80 via-orange-50/60 to-purple-100/70">
          <div className="w-full px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-6">
                  🔍 Gallery FAQs
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
                  Everything you need to know about our premium escort gallery and booking process
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className={`backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 ${
                      index % 4 === 0 ? 'bg-gradient-to-r from-pink-50/95 to-rose-100/95 border-2 border-pink-200/60' :
                      index % 4 === 1 ? 'bg-gradient-to-r from-blue-50/95 to-cyan-100/95 border-2 border-blue-200/60' :
                      index % 4 === 2 ? 'bg-gradient-to-r from-purple-50/95 to-violet-100/95 border-2 border-purple-200/60' :
                      'bg-gradient-to-r from-orange-50/95 to-yellow-100/95 border-2 border-orange-200/60'
                    }`}
                  >
                    <button
                      className="w-full text-left p-8 focus:outline-none focus:ring-4 focus:ring-pink-300 transition-all duration-300 hover:bg-white/30"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 text-2xl ${
                            index % 4 === 0 ? 'bg-gradient-to-br from-pink-500 to-rose-600' :
                            index % 4 === 1 ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                            index % 4 === 2 ? 'bg-gradient-to-br from-purple-500 to-violet-600' :
                            'bg-gradient-to-br from-orange-500 to-yellow-600'
                          }`}>
                            <span className="text-white font-bold">
                              {index % 4 === 0 ? '🎨' :
                               index % 4 === 1 ? '💎' :
                               index % 4 === 2 ? '🌟' : '🚀'}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 pr-8 leading-relaxed">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`flex-shrink-0 transform transition-all duration-300 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            index % 4 === 0 ? 'bg-pink-500' :
                            index % 4 === 1 ? 'bg-blue-500' :
                            index % 4 === 2 ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}>
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-8 pb-8">
                        <div className={`border-t-2 pt-6 ${
                          index % 4 === 0 ? 'border-pink-300' :
                          index % 4 === 1 ? 'border-blue-300' :
                          index % 4 === 2 ? 'border-purple-300' :
                          'border-orange-300'
                        }`}>
                          <div className={`rounded-2xl p-6 ${
                            index % 4 === 0 ? 'bg-gradient-to-br from-pink-100/50 to-rose-50/50' :
                            index % 4 === 1 ? 'bg-gradient-to-br from-blue-100/50 to-cyan-50/50' :
                            index % 4 === 2 ? 'bg-gradient-to-br from-purple-100/50 to-violet-50/50' :
                            'bg-gradient-to-br from-orange-100/50 to-yellow-50/50'
                          }`}>
                            <p className="text-gray-700 leading-relaxed text-lg font-medium">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQPage structured data for rich results */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    mainEntity: faqs.map((f) => ({
                      "@type": "Question",
                      name: f.question,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: f.answer,
                      },
                    })),
                  }),
                }}
              />

              {/* Contact CTA within FAQ Section */}
              <div className="mt-16 text-center bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl p-12 border-2 border-pink-200/30">
                <div className="bg-white/50 rounded-2xl p-8 backdrop-blur-md">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                    🤝 Still have questions about our gallery?
                  </h3>
                  <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                    Contact us directly for personalized assistance with your escort selection
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a 
                      href="tel:+919372662471" 
                      className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      <span className="mr-2">📞</span>
                      Call Now: +91 9372662471
                    </a>
                    <a 
                      href="https://wa.me/919372662471" 
                      className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                      <span className="mr-2">💬</span>
                      WhatsApp Now
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

        {/* Building Trust Since Years Section */}
        <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
          <div className="w-full px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
                Building Trust Since Years
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
                Discover how we became Indore's most trusted premium escort service through dedication and excellence
              </p>
              
              {/* Journey Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">Started with a vision to provide premium, professional, and discreet escort services in Indore. Our commitment to quality and customer satisfaction set us apart from day one.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-purple-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Recognition</h3>
                  <p className="text-gray-600 leading-relaxed">Earned the trust of thousands of clients through consistent quality, reliability, and professional excellence. Became the most sought-after service in Indore.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">💎</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Standards</h3>
                  <p className="text-gray-600 leading-relaxed">Established strict quality standards for companion selection, customer service, and privacy protection. Every aspect designed for premium experience.</p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-100 transform hover:-translate-y-3 transition-all duration-300">
                  <div className="text-6xl mb-4">🌟</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Future Vision</h3>
                  <p className="text-gray-600 leading-relaxed">Continuously expanding our services and locations while maintaining the highest standards of quality, discretion, and customer satisfaction.</p>
                </div>
              </div>
              
              {/* Statistics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">😊</div>
                  <div className="text-3xl font-bold mb-1">1000+</div>
                  <div className="text-lg font-semibold">Happy Clients</div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">💯</div>
                  <div className="text-3xl font-bold mb-1">99%</div>
                  <div className="text-lg font-semibold">Satisfaction Rate</div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">📍</div>
                  <div className="text-3xl font-bold mb-1">12+</div>
                  <div className="text-lg font-semibold">Prime Locations</div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">🕐</div>
                  <div className="text-3xl font-bold mb-1">24/7</div>
                  <div className="text-lg font-semibold">Availability</div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-3xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">🎖️ Join Our Premium Family 🎖️</h3>
                <p className="text-xl mb-8">Experience the difference that years of dedication and premium service standards make</p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="tel:+919372662471" 
                    className="inline-flex items-center justify-center bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <span className="mr-2">📞</span>
                    Call Now: +91 9372662471
                    <span className="ml-2">→</span>
                  </a>
                  <a 
                    href="https://wa.me/919372662471" 
                    className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <span className="mr-2">💬</span>
                    WhatsApp Now
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Services & Locations - Content Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600/90 via-pink-600/90 to-orange-600/90 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-16 left-16 w-40 h-40 bg-white/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-16 right-16 w-48 h-48 bg-white/15 rounded-full blur-xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-8xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Left Side - Services Content */}
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl">
                    💎 Why Our Premium Services Are Best
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌟</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">100% Verified & Authentic Escorts</h4>
                      <p className="text-white/90 text-lg">All our companions are thoroughly verified with authentic profiles and genuine photographs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🔒</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Complete Privacy & Discretion Guaranteed</h4>
                      <p className="text-white/90 text-lg">Your privacy is our priority with confidential meetings and secure booking process always</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">24/7 Instant Booking & Quick Response</h4>
                      <p className="text-white/90 text-lg">Round the clock availability with immediate confirmation and same day booking facility</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Location Content */}
              <div className="bg-white/20 backdrop-blur-md rounded-3xl p-10 border border-white/30 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-xl">
                    📍 Why Our Indore Locations Are Perfect
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏙️</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">15+ Premium Central Locations Coverage</h4>
                      <p className="text-white/90 text-lg">Strategic coverage across Vijay Nagar, AB Road, Palasia and all major premium areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚗</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Easy Access & Discreet Meeting Points</h4>
                      <p className="text-white/90 text-lg">Convenient locations with easy access, safe environments and complete discretion for clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🏨</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Luxury Hotels & Premium Venues Available</h4>
                      <p className="text-white/90 text-lg">Partnership with 5-star hotels and luxury venues for unforgettable premium experiences always</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            
            {/* Bottom Statistics */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-white mb-2">5000+</div>
                  <div className="text-white/90 text-lg font-semibold">Happy Clients</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-white mb-2">200+</div>
                  <div className="text-white/90 text-lg font-semibold">Premium Escorts</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-white mb-2">15+</div>
                  <div className="text-white/90 text-lg font-semibold">Prime Locations</div>
                </div>
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                  <div className="text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/90 text-lg font-semibold">Service Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
