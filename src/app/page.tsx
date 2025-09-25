'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions with exceptional elegance and sophistication",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY"
    },
    {
      title: "College Girls", 
      subtitle: "Fresh & Young",
      description: "Beautiful young companions with vibrant energy and charming personalities",
      image: "/images/services/College Girls.webp",
      icon: "💎",
      category: "YOUNG"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions with traditional charm and modern sophistication",
      image: "/images/services/Punjabi women.webp",
      icon: "🌟",
      category: "TRADITIONAL"
    },
    {
      title: "Event Companion",
      subtitle: "Perfect Plus One",
      description: "Professional companions for business events, parties, and social gatherings",
      image: "/images/services/Event Companion.webp",
      icon: "🎭",
      category: "PROFESSIONAL"
    },
    {
      title: "Premium Companions",
      subtitle: "Luxury Experience",
      description: "Exclusive high-end companions for discerning clients who demand the finest",
      image: "/images/services/Premium Companions.webp",
      icon: "👑",
      category: "LUXURY"
    },
    {
      title: "Travel Companions",
      subtitle: "Adventure Partners", 
      description: "Perfect travel partners for business trips, vacations, or weekend getaways",
      image: "/images/services/Travel Companions.webp",
      icon: "✈️",
      category: "TRAVEL"
    },
    {
      title: "VIP Escorts",
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts offer the ultimate in luxury and sophistication",
      image: "/images/services/VIP Escorts.webp",
      icon: "💫",
      category: "VIP"
    },
    {
      title: "Dinner Dates",
      subtitle: "Romantic Evenings",
      description: "Elegant companions for romantic dinner dates and fine dining experiences",
      image: "/images/services/Dinner Dates.webp",
      icon: "🍷",
      category: "ROMANTIC"
    },
    {
      title: "Outcall Service",
      subtitle: "Your Location",
      description: "Professional outcall service to your hotel, home, or preferred location",
      image: "/images/services/Outcall Service.webp",
      icon: "🏨",
      category: "OUTCALL"
    }
  ]

  const faqs = [
    {
      question: "How can I book an escort service in Indore?",
      answer: "You can book our services by calling us at +91 9372 662 471, WhatsApp, or through our contact form. We're available 24/7 for instant bookings."
    },
    {
      question: "Are your escort services available across all areas of Indore?",
      answer: "Yes, we provide our premium escort services across all major areas of Indore including Vijay Nagar, Palasia, AB Road, Saket, and 12+ prime locations."
    },
    {
      question: "What makes your escort service different from others in Indore?",
      answer: "Our escorts are highly professional, verified, and trained in providing exceptional companion services. We ensure complete discretion and customer satisfaction."
    },
    {
      question: "Do you provide outcall escort services?",
      answer: "Yes, we provide both incall and outcall services. Our escorts can visit your hotel, home, or preferred location across Indore with complete discretion."
    },
    {
      question: "Are your escort services safe and discreet?",
      answer: "Absolutely. We prioritize client safety and privacy. All our services are completely confidential with verified professional companions."
    },
    {
      question: "What are your service rates?",
      answer: "Our rates vary based on the type of service and duration. Please contact us directly for detailed pricing information and special packages."
    },
    {
      question: "Do you have different categories of escorts available?",
      answer: "Yes, we offer various categories including Celebrity Escorts, College Girls, VIP Companions, Event Companions, and more to suit different preferences."
    },
    {
      question: "How can I ensure the authenticity of your services?",
      answer: "All our escorts are verified professionals. You can call us directly to discuss your requirements and we'll provide complete transparency about our services."
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60">
        
        {/* Hero Section - Enhanced Style */}
        <section className="pt-20 pb-12 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/90 via-orange-200/80 to-pink-300/90"></div>
          <div className="w-full mx-auto text-center relative z-10 px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-8 leading-tight">
              Premium Escort Service In Indore
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 max-w-6xl mx-auto mb-10 font-medium leading-relaxed">
              Experience luxury companionship with verified professional escorts available 24/7 across all prime locations in Indore.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
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
            
            {/* Enhanced Service Cards */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-pink-200/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[400px] flex flex-col justify-center">
                  <div className="text-8xl mb-6 text-pink-600">🕐</div>
                  <h3 className="text-3xl font-bold text-pink-600 mb-4">24/7 Available</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-semibold">Premium escort service across all Indore locations with instant response.</p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-orange-200/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[400px] flex flex-col justify-center">
                  <div className="text-8xl mb-6 text-orange-600">✅</div>
                  <h3 className="text-3xl font-bold text-orange-600 mb-4">100% Verified</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-semibold">All companions are thoroughly verified professionals with excellent service records.</p>
                </div>
                
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-12 border border-pink-200/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[400px] flex flex-col justify-center">
                  <div className="text-8xl mb-6 text-pink-600">🔒</div>
                  <h3 className="text-3xl font-bold text-pink-600 mb-4">Complete Privacy</h3>
                  <p className="text-gray-600 text-lg leading-relaxed font-semibold">Absolute discretion and confidentiality guaranteed for all our premium services.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Link to Services Page */}
        <section id="services" className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escorts In Indore - Our Services
              </h2>
            </div>

            <div className="w-full px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                
                {/* Row 1 - Celebrity, VIP, Premium */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Celebrity Escorts.webp" alt="Celebrity Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Celebrity Escorts</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Premium companions with star quality service</p>
                  <a href="/services/celebrity-escorts" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Celebrity Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/VIP Escorts.jpg" alt="VIP Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">VIP Escorts</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Ultimate luxury companions for discerning clients</p>
                  <a href="/services/vip-escorts" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book VIP Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Premium Models.jpg" alt="Premium Models" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Models</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">High-end models with sophistication</p>
                  <a href="/services/premium-models" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Premium Girls</a>
                </div>

                {/* Row 2 - College, Housewife, Punjabi */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/College Girls.webp" alt="College Girls" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">College Girls</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Young energetic companions for memorable experiences</p>
                  <a href="/services/college-girls" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book College Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-green-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Housewife Escorts.jpg" alt="Housewife Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Housewife Escorts</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Mature experienced companions with caring nature</p>
                  <a href="/services/housewife-escorts" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Housewife Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Punjabi women.webp" alt="Punjabi Women" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Punjabi Women</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful Punjabi companions with traditional charm</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Punjabi Girls</a>
                </div>

                {/* Row 3 - Slim, Unsatisfied Bhabhi, Local */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-teal-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Slim Escorts.webp" alt="Slim Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Slim Escorts</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Elegant slim companions with perfect figure</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Slim Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Unsatisfied Bhabhi.webp" alt="Unsatisfied Bhabhi" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Bhabhi</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Experienced companions seeking excitement</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Bhabhi</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Local Beauties.webp" alt="Local Beauties" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Local Beauties</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Beautiful local companions who know Indore</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Local Girls</a>
                </div>

                {/* Row 4 - Event, Pink Special, Unsatisfied Females */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-yellow-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Event Companion.webp" alt="Event Companion" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Event Companion</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Perfect companions for social events and parties</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Event Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-rose-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Pink Special.webp" alt="Pink Special" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Pink Special</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Special premium companions for exclusive experiences</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Pink Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-violet-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Unsatisfied Females.webp" alt="Unsatisfied Females" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Females</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Mature women seeking meaningful connections</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Female Escorts</a>
                </div>

                {/* Row 5 - New Additional Services */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Incall Escorts.webp" alt="Incall Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Incall Escorts</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Premium incall services at luxury locations</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Incall Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-amber-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Mature Escorts.webp" alt="Mature Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Mature Escorts</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Experienced mature companions with sophistication</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Mature Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-emerald-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Young Girls.webp" alt="Young Girls" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Young Girls</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Young beautiful companions for unforgettable experiences</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Young Girls</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500 min-h-[500px] flex flex-col">
                  <div className="w-full h-80 mb-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/indore escorts.webp" alt="Indore Escorts" className="w-full h-80 object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Indore Escorts</h3>
                  <p className="text-gray-600 mb-4 text-base flex-grow">Premium local escorts with deep knowledge of Indore city</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">Book Indore Girls</a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Contact & Location Quick Access */}
        <section className="py-16 bg-gradient-to-r from-pink-100/60 to-orange-100/60">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  Ready to Book? Contact Us Now
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  24/7 available for instant bookings. Professional service across all Indore locations.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-200/50 text-center">
                  <div className="text-6xl mb-4">📞</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Now</h3>
                  <a href="/services" className="text-xl text-pink-600 font-bold hover:text-pink-800 transition-colors">
                    +91 9372 662 471
                  </a>
                  <p className="text-gray-600 mt-2">Instant Response</p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-200/50 text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                  <a href="https://wa.me/919372662471" className="text-xl text-orange-600 font-bold hover:text-orange-800 transition-colors">
                    Chat Instantly
                  </a>
                  <p className="text-gray-600 mt-2">Quick Response</p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-200/50 text-center">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
                  <a href="mailto:contact@indoreescortservice.com" className="text-xl text-pink-600 font-bold hover:text-pink-800 transition-colors">
                    Send Message
                  </a>
                  <p className="text-gray-600 mt-2">Professional Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70"></div>
          <div className="w-full px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escort Services Available In All Major Indore Areas
              </h2>
              <p className="text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-semibold">
                Professional escort services available across 15+ prime locations in Indore with guaranteed satisfaction and instant response
              </p>
            </div>

            <div className="w-full space-y-12">
              
              {/* First Row - Main 3 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-pink-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏢</div>
                    <h3 className="text-3xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                    <p className="text-pink-600 font-bold text-xl mb-4">Central Business District</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Premium business district with luxury hotels, shopping centers and corporate offices. Elite escort services available 24/7.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Premium Escorts in Vijay Nagar
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-blue-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏘️</div>
                    <h3 className="text-3xl font-bold text-blue-800 mb-3">Saket</h3>
                    <p className="text-blue-600 font-bold text-xl mb-4">Upscale Residential Hub</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious residential area with modern amenities and gated communities. Discrete home visit services available.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Saket
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-orange-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">💻</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-3">Scheme 78</h3>
                    <p className="text-orange-600 font-bold text-xl mb-4">IT Corporate Sector</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Technology hub with corporate offices, business hotels and modern infrastructure. Professional companions available.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Scheme 78
                  </a>
                </div>
              </div>

              {/* Second Row - Additional 3 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-purple-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🛍️</div>
                    <h3 className="text-3xl font-bold text-purple-800 mb-3">AB Road</h3>
                    <p className="text-purple-600 font-bold text-xl mb-4">Commercial Zone</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Main commercial area with luxury shopping, dining and premium hotels. Elite companions for business meetings.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Premium Escorts in AB Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-green-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🌆</div>
                    <h3 className="text-3xl font-bold text-green-800 mb-3">Palasia</h3>
                    <p className="text-green-600 font-bold text-xl mb-4">City Center</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Heart of Indore with premium facilities, accessibility and upscale venues. Professional escort services 24/7.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Palasia
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-teal-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏛️</div>
                    <h3 className="text-3xl font-bold text-teal-800 mb-3">Bhawar Kuan</h3>
                    <p className="text-teal-600 font-bold text-xl mb-4">Premium District</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Prestigious business and residential area with luxury amenities and high-end establishments.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Bhawar Kuan
                  </a>
                </div>
              </div>

              {/* Third Row - Additional 3 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-yellow-100 to-yellow-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-yellow-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🌳</div>
                    <h3 className="text-3xl font-bold text-yellow-800 mb-3">Rau</h3>
                    <p className="text-yellow-600 font-bold text-xl mb-4">Suburban Area</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Peaceful suburban location with modern infrastructure and premium residential complexes.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Premium Escorts in Rau
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-indigo-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🛣️</div>
                    <h3 className="text-3xl font-bold text-indigo-800 mb-3">Ring Road</h3>
                    <p className="text-indigo-600 font-bold text-xl mb-4">Connectivity Hub</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Well-connected area with easy access to all parts of the city and premium establishments.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Ring Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-red-100 to-red-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-red-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏥</div>
                    <h3 className="text-3xl font-bold text-red-800 mb-3">Bombay Hospital</h3>
                    <p className="text-red-600 font-bold text-xl mb-4">Medical District</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Healthcare hub with premium medical facilities and upscale accommodations nearby.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Bombay Hospital
                  </a>
                </div>
              </div>

              {/* Fourth Row - Final 3 Large Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-emerald-100 to-emerald-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-emerald-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏛️</div>
                    <h3 className="text-3xl font-bold text-emerald-800 mb-3">MG Road</h3>
                    <p className="text-emerald-600 font-bold text-xl mb-4">Heritage Area</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Historic area with cultural significance, premium hotels and upscale amenities.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Premium Escorts in MG Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-rose-100 to-rose-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-rose-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">✈️</div>
                    <h3 className="text-3xl font-bold text-rose-800 mb-3">Airport Road</h3>
                    <p className="text-rose-600 font-bold text-xl mb-4">Aviation Zone</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Airport vicinity with luxury hotels, business centers and premium travel services.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Airport Road
                  </a>
                </div>
                <div className="group bg-gradient-to-br from-violet-100 to-violet-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-violet-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🎯</div>
                    <h3 className="text-3xl font-bold text-violet-800 mb-3">Treasure Island</h3>
                    <p className="text-violet-600 font-bold text-xl mb-4">Entertainment Hub</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Entertainment and recreation center with modern facilities and premium venues.</p>
                  </div>
                  <a href="/services" className="w-full inline-block bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book VIP Escorts in Treasure Island
                  </a>
                </div>
              </div>
              
              {/* Coverage Summary */}
              <div className="bg-gradient-to-r from-pink-100/80 to-orange-100/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-pink-200/50 mt-16">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-pink-700 mb-6">📍 Complete Coverage Across Indore</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white/90 rounded-2xl p-6">
                      <div className="text-3xl mb-3">🏨</div>
                      <p className="font-bold text-gray-800">Premium Hotels</p>
                    </div>
                    <div className="bg-white/90 rounded-2xl p-6">
                      <div className="text-3xl mb-3">🏠</div>
                      <p className="font-bold text-gray-800">Home Visits</p>
                    </div>
                    <div className="bg-white/90 rounded-2xl p-6">
                      <div className="text-3xl mb-3">💼</div>
                      <p className="font-bold text-gray-800">Business Events</p>
                    </div>
                    <div className="bg-white/90 rounded-2xl p-6">
                      <div className="text-3xl mb-3">✈️</div>
                      <p className="font-bold text-gray-800">Outcall Services</p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-700 font-semibold">
                    Premium escort services in Vijay Nagar, AB Road, Bhawar Kuan, and all major commercial areas with 5-star hotels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-orange-100/40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                How To Book Our Escort Service In Indore
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Simple and quick booking process for premium escort services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-6">Call us at +91 9372662471 or WhatsApp to discuss your requirements</p>
                <div className="flex justify-center gap-4">
                  <a href="/services" className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">📞 Call</a>
                  <a href="https://wa.me/919372662471" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">💬 WhatsApp</a>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Choose Service</h3>
                <p className="text-gray-600 mb-6">Select your preferred companion type and service duration</p>
                <a href="/services" className="bg-blue-500 text-white px-6 py-2 rounded-full font-bold">View Services</a>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-100/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Enjoy Service</h3>
                <p className="text-gray-600 mb-6">Meet your professional companion and enjoy premium service</p>
                <span className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full font-bold">100% Satisfaction</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-200/60">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Common questions about our premium escort services in Indore
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-300/60 overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
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
                      <p className="text-gray-700 leading-relaxed text-lg font-medium">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70 relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-700 via-orange-600 to-pink-800 bg-clip-text text-transparent mb-6">
                Contact Us For Booking
              </h2>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto shadow-lg border border-pink-200/50">
                <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                  ✨ Get in touch for premium escort services across Indore - Available 24/7 ✨
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-blue-200/60 relative">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full shadow-lg"></div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">🗺️ Service Coverage Area</h3>
                <div className="w-full h-60 rounded-2xl overflow-hidden shadow-xl mb-6 border-3 border-blue-200/60">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117060.47677400194!2d75.7674914!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indore Map - Escort Service Coverage Area"
                  ></iframe>
                </div>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-4 shadow-lg border border-blue-200/50 mb-4">
                  <p className="text-blue-900 font-bold text-center text-lg">
                    🏃‍♂️ We cover all major areas of Indore with fast response time ⚡
                  </p>
                </div>
                
                {/* Coverage Statistics */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-blue-200/80 to-blue-300/60 rounded-xl p-3 text-center shadow-md">
                    <div className="text-xl mb-1">🕒</div>
                    <p className="text-blue-900 font-bold">24/7 Available</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-200/80 to-cyan-300/60 rounded-xl p-3 text-center shadow-md">
                    <div className="text-xl mb-1">⚡</div>
                    <p className="text-cyan-900 font-bold">Quick Response</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-2 border-purple-200/60 relative">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full shadow-lg"></div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">📝 Quick Booking Form</h3>
                <div className="bg-gradient-to-br from-pink-50/80 to-orange-50/80 rounded-3xl p-6 shadow-inner border border-pink-200/30">
                  <form className="space-y-4">
                    {/* First Row - Name and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">Your Name *</label>
                        <input 
                          type="text" 
                          placeholder="Enter your full name" 
                          className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-sm text-sm hover:shadow-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          placeholder="Enter your email address" 
                          className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-sm text-sm hover:shadow-md"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Second Row - Phone and Service */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">Phone Number *</label>
                        <input 
                          type="tel" 
                          placeholder="Enter your phone number" 
                          className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-sm text-sm hover:shadow-md"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-bold mb-2">Select Service *</label>
                        <select className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 text-gray-700 bg-white shadow-sm text-sm hover:shadow-md" required>
                          <option value="">Choose a service</option>
                          <option value="celebrity">🌟 Celebrity Escorts</option>
                          <option value="vip">💎 VIP Escorts</option>
                          <option value="college">🎓 College Girls</option>
                          <option value="housewife">🏠 Housewife Escorts</option>
                          <option value="punjabi">👑 Punjabi Women</option>
                          <option value="premium">✨ Premium Models</option>
                          <option value="travel">✈️ Travel Companions</option>
                          <option value="dinner">🍽️ Dinner Dates</option>
                          <option value="outcall">🚗 Outcall Service</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">Message (Optional)</label>
                      <textarea 
                        placeholder="Tell us about your requirements..." 
                        rows={3}
                        className="w-full px-4 py-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-sm text-sm resize-none hover:shadow-md"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-600 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-pink-300/50 hover:border-orange-300/50"
                    >
                      📝 Submit Booking Request ✨
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <a href="/services" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-green-300/50">
                        📞 Call Now
                      </a>
                      <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-lime-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-bold text-sm text-center transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-lime-300/50">
                        💬 WhatsApp
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
          </div>
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
                  <a href="/services" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 font-bold text-center text-lg">
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
                  <a href="#faq" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">❓ FAQ</a>
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
                  <a href="#about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">📞 Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3">
                    <span className="text-2xl">📞</span>
                    <a href="/services" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9372 662 471</a>
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

