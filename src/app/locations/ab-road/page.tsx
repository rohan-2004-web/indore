'use client'

import { useState } from 'react'
import Header from '@/components/Header'

export default function ABRoadPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in AB Road with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in AB Road offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication",
      description: "Premium models in AB Road with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in AB Road with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature & Caring",
      description: "Experienced housewife escorts in AB Road with nurturing companionship",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "🏠",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Charm",
      description: "Beautiful Punjabi women in AB Road with cultural elegance",
      image: "/images/services/Punjabi women.webp",
      icon: "🎭",
      category: "REGIONAL",
      link: "/services"
    },
    {
      title: "Slim Escorts",
      subtitle: "Perfect Figure",
      description: "Elegant slim escorts in AB Road with perfect physique",
      image: "/images/services/Slim Escorts.webp",
      icon: "✨",
      category: "ELEGANT",
      link: "/services"
    },
    {
      title: "Unsatisfied Bhabhi",
      subtitle: "Seeking Excitement",
      description: "Experienced companions in AB Road seeking new adventures",
      image: "/images/services/Unsatisfied Bhabhi.webp",
      icon: "💋",
      category: "MATURE",
      link: "/services"
    },
    {
      title: "Local Beauties",
      subtitle: "Authentic Experience",
      description: "Local beauties in AB Road who know the area intimately",
      image: "/images/services/Local Beauties.webp",
      icon: "🌸",
      category: "LOCAL",
      link: "/services"
    },
    {
      title: "Event Companion",
      subtitle: "Social Events",
      description: "Perfect companions in AB Road for business and social events",
      image: "/images/services/Event Companion.webp",
      icon: "🎪",
      category: "EVENT",
      link: "/services"
    },
    {
      title: "Pink Special",
      subtitle: "Exclusive Experience",
      description: "Special exclusive companions in AB Road for unique experiences",
      image: "/images/services/Pink Special.webp",
      icon: "💖",
      category: "SPECIAL",
      link: "/services"
    },
    {
      title: "Unsatisfied Females",
      subtitle: "Seeking Connection",
      description: "Mature women in AB Road seeking meaningful connections",
      image: "/images/services/Unsatisfied Females.webp",
      icon: "💕",
      category: "MATURE",
      link: "/services"
    },
    {
      title: "Incall Escorts",
      subtitle: "Private Venues",
      description: "Premium incall services in AB Road at luxury locations",
      image: "/images/services/Incall Escorts.webp",
      icon: "🏨",
      category: "INCALL",
      link: "/services"
    },
    {
      title: "Mature Escorts",
      subtitle: "Experience & Wisdom",
      description: "Sophisticated mature escorts in AB Road with life experience",
      image: "/images/services/Mature Escorts.webp",
      icon: "🍷",
      category: "MATURE",
      link: "/services"
    },
    {
      title: "Young Girls",
      subtitle: "Youthful Energy",
      description: "Young beautiful companions in AB Road with infectious enthusiasm",
      image: "/images/services/Young Girls.webp",
      icon: "🌺",
      category: "YOUNG",
      link: "/services"
    },
    {
      title: "Indore Escorts",
      subtitle: "Local Expertise",
      description: "Premium local escorts in AB Road with deep city knowledge",
      image: "/images/services/indore escorts.webp",
      icon: "🏙️",
      category: "LOCAL",
      link: "/services"
    },
    {
      title: "Expert Services",
      subtitle: "Professional Skills",
      description: "Expert companions in AB Road with specialized professional experience",
      image: "/images/services/Expert Services.webp",
      icon: "🎯",
      category: "EXPERT",
      link: "/services"
    },
    {
      title: "High Class Models",
      subtitle: "Runway Experience",
      description: "Stunning high-class models in AB Road with runway and fashion experience",
      image: "/images/services/High Class Models.webp",
      icon: "👑",
      category: "MODEL",
      link: "/services"
    },
    {
      title: "Bold Girls",
      subtitle: "Confident & Adventurous",
      description: "Bold and confident companions in AB Road ready for exciting adventures",
      image: "/images/services/bold girls.webp",
      icon: "🔥",
      category: "BOLD",
      link: "/services"
    },
    {
      title: "Sexy Girls",
      subtitle: "Mesmerizing Charm",
      description: "Incredibly attractive companions in AB Road with mesmerizing charm and appeal",
      image: "/images/services/sexy girls.webp",
      icon: "💫",
      category: "SEXY",
      link: "/services"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/90 via-pink-200/80 to-orange-300/90"></div>
          <div className="w-full mx-auto text-center relative z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-8 leading-tight">
              Premium Escorts in AB Road Indore
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Experience the finest escort services in AB Road - Indore's premier commercial zone with luxury shopping and premium hotels.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                📞 Call Now: +91 9372662471
              </a>
              <a href="https://wa.me/919372662471" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-gradient-to-br from-purple-200/70 via-pink-100/60 to-orange-200/70">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-6">
                Premium Escort Services in AB Road
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive range of verified professional companions in AB Road's bustling commercial district
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src={service.image} alt={service.title} className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-2xl mr-2">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-sm font-semibold text-purple-600 mb-2">{service.subtitle}</p>
                  <p className="text-gray-600 mb-4 text-base flex-grow leading-relaxed">{service.description}</p>
                  <a href={service.link} className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Features Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-300/80 via-pink-200/70 to-orange-300/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-purple-200/50 to-pink-100/40"></div>
          
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-orange-700 bg-clip-text text-transparent mb-6 leading-tight">
                  Why Choose Escorts in AB Road
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-gradient-to-br from-purple-50/95 to-pink-50/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-purple-200/50 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shadow-lg">
                      🛍️
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800">Prime Commercial Location</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    AB Road is Indore's main commercial hub with luxury shopping centers, fine dining restaurants, and premium hotels. Our <span className="text-purple-600 font-bold">escorts in AB Road</span> are perfectly positioned to accompany you to business meetings, shopping experiences, and upscale venues in this prestigious area.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50/95 to-orange-50/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-pink-200/50 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4 shadow-lg">
                      ⭐
                    </div>
                    <h3 className="text-2xl font-bold text-pink-800">Premium Quality Service</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Our <span className="text-pink-600 font-bold">AB Road escorts</span> understand the sophisticated clientele of this commercial district. They are professionally trained, well-educated, and experienced in providing companionship for business dinners, corporate events, and social gatherings in AB Road's upscale environment.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 inline-block shadow-xl border border-purple-300/50">
                  <p className="text-xl font-bold text-gray-800 mb-4">
                    🌟 Experience Premium Companionship in AB Road 🌟
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/services" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      📞 Book Now
                    </a>
                    <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100/60 via-pink-50/50 to-orange-100/60">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions - AB Road Escorts
              </h2>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to common questions about our escort services in AB Road
              </p>
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-purple-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-purple-200/80 hover:to-pink-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-purple-900 pr-4 group-hover:text-pink-700">How can I book escorts in AB Road?</h3>
                    <span className={`text-3xl transition-all duration-300 text-purple-700 ${openFaq === 1 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 1 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-purple-50/90 to-pink-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Booking escorts in AB Road is simple and discreet. You can call us directly at +91 9372662471, send a WhatsApp message, or email us. Our booking team is available 24/7 to assist you with selecting the perfect companion in AB Road based on your preferences and requirements.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-pink-200/80 hover:to-orange-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-pink-900 pr-4 group-hover:text-orange-700">Are all AB Road escorts verified?</h3>
                    <span className={`text-3xl transition-all duration-300 text-pink-700 ${openFaq === 2 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 2 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-pink-50/90 to-orange-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Yes, absolutely! All our escorts in AB Road are 100% verified, professionally trained, and thoroughly background-checked. We ensure they meet our high standards of elegance, sophistication, and discretion suitable for AB Road's commercial environment.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-orange-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-orange-200/80 hover:to-purple-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-orange-900 pr-4 group-hover:text-purple-700">What makes AB Road escorts special?</h3>
                    <span className={`text-3xl transition-all duration-300 text-orange-700 ${openFaq === 3 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 3 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-orange-50/90 to-purple-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Escorts in AB Road are specially selected for their understanding of the commercial district's sophisticated environment. They are well-versed in business etiquette, comfortable in upscale venues, and experienced in providing companionship for shopping trips, business dinners, and corporate events.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-green-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-green-200/80 hover:to-blue-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-green-900 pr-4 group-hover:text-blue-700">Is privacy guaranteed in AB Road?</h3>
                    <span className={`text-3xl transition-all duration-300 text-green-700 ${openFaq === 4 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 4 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-green-50/90 to-blue-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Privacy and discretion are our top priorities in AB Road. All client information is kept strictly confidential. Our escorts are trained to maintain complete discretion in this commercial area, and we use secure communication channels. Your personal details and meeting arrangements are never shared.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-blue-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(5)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-blue-200/80 hover:to-purple-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-blue-900 pr-4 group-hover:text-purple-700">What are the rates for AB Road escorts?</h3>
                    <span className={`text-3xl transition-all duration-300 text-blue-700 ${openFaq === 5 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 5 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-blue-50/90 to-purple-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Our rates for escorts in AB Road vary based on the companion category, duration, and services required. We offer competitive pricing for all categories from college girls to VIP escorts. Payment can be made via cash or digital transfers. Contact us for detailed pricing information.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-teal-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(6)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-teal-200/80 hover:to-pink-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-teal-900 pr-4 group-hover:text-pink-700">Do you provide 24/7 services in AB Road?</h3>
                    <span className={`text-3xl transition-all duration-300 text-teal-700 ${openFaq === 6 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 6 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-teal-50/90 to-pink-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Yes, our escort services in AB Road are available 24/7. Whether you need companionship for daytime shopping, evening business dinners, or late-night events in AB Road's vibrant commercial district, our professional escorts are ready to provide exceptional service at any time.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-indigo-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(7)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-indigo-200/80 hover:to-pink-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-indigo-900 pr-4 group-hover:text-pink-700">Which hotels in AB Road do you serve?</h3>
                    <span className={`text-3xl transition-all duration-300 text-indigo-700 ${openFaq === 7 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 7 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-indigo-50/90 to-pink-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        We provide escort services to all major hotels and establishments in AB Road including luxury business hotels, premium resorts, and upscale accommodations. Our escorts in AB Road are familiar with the area's hospitality venues and can accompany you to any location in the commercial district.
                      </p>
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-red-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <button
                    onClick={() => toggleFaq(8)}
                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-red-200/80 hover:to-orange-100/80 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-red-900 pr-4 group-hover:text-orange-700">Can I book same-day escorts in AB Road?</h3>
                    <span className={`text-3xl transition-all duration-300 text-red-700 ${openFaq === 8 ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === 8 && (
                    <div className="px-8 pb-8 bg-gradient-to-r from-red-50/90 to-orange-50/90">
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">
                        Yes, we offer same-day bookings for escorts in AB Road subject to availability. Our team works efficiently to accommodate last-minute requests in the AB Road area. For guaranteed availability, we recommend booking at least 2-3 hours in advance. Emergency bookings are also possible with additional charges.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-xl text-gray-600 mb-8">
                Still have questions about our AB Road escort services? Contact us directly for personalized assistance
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="tel:+919372662471" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  📞 Call +91 9372662471
                </a>
                <a href="https://wa.me/919372662471" target="_blank" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  💬 WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">
                Ready to Book Your Perfect Companion in AB Road?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Contact us now for instant booking and let us connect you with the perfect companion for your needs in AB Road
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  📞 Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  💬 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-purple-600/95 via-pink-700/90 to-orange-600/95 text-white py-20 relative">
          <div className="w-full px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  ⭐ AB Road Premium Escort Service
                </h3>
                <p className="text-pink-100 mb-6 leading-relaxed font-semibold text-lg">
                  Premium escort services in AB Road with verified professional companions. Available 24/7 in Indore's premier commercial district.
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
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">⭐ Celebrity Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">💫 VIP Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">💎 Premium Models</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🌟 College Girls</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🏠 Housewife Escorts</a>
                  <a href="/services" className="block text-pink-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🎭 Punjabi Women</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">🔗 Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🌟 All Services</a>
                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>
                  <a href="/" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">🏠 Home</a>
                  <a href="tel:+919372662471" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
                  <a href="#about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ About Us</a>
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
                    <span className="text-2xl">🛍️</span>
                    <span className="text-pink-200 font-bold text-lg">AB Road Area</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">⏰</span>
                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t-2 border-purple-400/40 mt-16 pt-10 text-center">
              <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">
                © 2024 AB Road Premium Escort Service. All rights reserved. 
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-full font-bold">🕒 24/7 Available</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-full font-bold">✅ 100% Verified</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold">🔒 Complete Discretion</span>
                <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-full font-bold">⭐ Premium Quality</span>
              </div>
              <p className="text-pink-200 font-semibold text-lg">
                🔞 Professional escort services for adults only. Must be 18+ to use our services. 
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}