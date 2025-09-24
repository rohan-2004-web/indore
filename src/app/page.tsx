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
        
        {/* Hero Section - Original Style */}
        <section className="pt-32 pb-20 px-2 sm:px-4 lg:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-300/90 via-orange-200/80 to-pink-300/90"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/40 to-orange-600/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/40 to-pink-600/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-pink-400/40 to-orange-600/40 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="max-w-full mx-auto text-center relative z-10 px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-8 leading-tight">
              Premium Escort Service In Indore
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
              Experience luxury companionship with verified professional escorts available 24/7 across all prime locations in Indore. Discreet, elegant, and unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                📞 Call Now: +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                💬 WhatsApp Now
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="font-bold text-2xl text-gray-800 mb-4">24/7 Available Service</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Round the clock premium escort service across all Indore locations with instant response and professional care.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-orange-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="font-bold text-2xl text-gray-800 mb-4">100% Verified Profiles</h3>
                <p className="text-gray-600 text-lg leading-relaxed">All companions are thoroughly verified, professionally trained, and maintain highest standards of elegance.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">💎</div>
                <h3 className="font-bold text-2xl text-gray-800 mb-4">Complete Privacy Guaranteed</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Absolute discretion and confidentiality maintained for all our clients with secure booking process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Escorts In Indore Section */}
        <section className="py-20 px-2 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-300/60"></div>
          <div className="max-w-full mx-auto relative z-10 px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Why Choose Our Escorts In Indore
              </h2>
            </div>

            <div className="max-w-6xl mx-auto mb-16">
              <div className="bg-gradient-to-r from-pink-50/80 to-orange-50/80 backdrop-blur-lg rounded-3xl p-12 border-2 border-pink-200/50 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white/90 rounded-2xl p-6 border border-pink-200/50">
                    <h3 className="text-2xl font-bold text-pink-700 mb-4">🌟 Professional Excellence</h3>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                      All our escorts in Indore are excellent professionals who bring unmatched elegance and sophistication to every encounter. They are highly professional and will always meet you with genuine enthusiasm and warmth.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      Our independent escorts have a deep understanding of what distinguished gentlemen expect from premium companion services, which is why they are always successful in providing exceptional services with grace and professionalism.
                    </p>
                  </div>
                  
                  <div className="bg-white/90 rounded-2xl p-6 border border-orange-200/50">
                    <h3 className="text-2xl font-bold text-orange-700 mb-4">💎 Elite Companions</h3>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                      Each of our elite escorts possesses exceptional conversational skills, refined social etiquette, and the ability to adapt to any social setting with confidence.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      We maintain the highest standards of hygiene, safety, and professionalism across our entire network. When you choose our escort services in Indore, you're choosing a premium experience that combines luxury, discretion, and unparalleled satisfaction with 24/7 customer support.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/80 rounded-2xl p-6 border border-pink-300/50 text-center">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-700 to-orange-700 bg-clip-text text-transparent mb-4">
                    🚀 Premium Experience Guaranteed
                  </h3>
                  <p className="text-xl text-gray-800 font-semibold">
                    Experience the finest companionship services with complete discretion and satisfaction guarantee across all major locations in Indore.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Quality</h3>
                <p className="text-gray-600">Verified professional companions with exceptional standards</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Discretion</h3>
                <p className="text-gray-600">100% confidential service with guaranteed privacy</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">24/7 Available</h3>
                <p className="text-gray-600">Round-the-clock service across all Indore locations</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-6xl mb-4">💯</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">Premium experience with complete customer satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Link to Services Page */}
        <section id="services" className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
          <div className="w-full px-2">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escorts In Indore - Our Services
              </h2>
            </div>

            <div className="max-w-full mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                
                {/* Row 1 - Celebrity, VIP, Premium */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Celebrity Escorts.webp" alt="Celebrity Escorts" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Celebrity Escorts</h3>
                  <p className="text-gray-600 mb-4 text-sm">Premium companions with star quality service</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-blue-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/VIP Escorts.jpg" alt="VIP Escorts" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">VIP Escorts</h3>
                  <p className="text-gray-600 mb-4 text-sm">Ultimate luxury companions for discerning clients</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-orange-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Premium Models.jpg" alt="Premium Models" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Models</h3>
                  <p className="text-gray-600 mb-4 text-sm">High-end models with sophistication</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                {/* Row 2 - College, Housewife, Punjabi */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-purple-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/College Girls.webp" alt="College Girls" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">College Girls</h3>
                  <p className="text-gray-600 mb-4 text-sm">Young energetic companions for memorable experiences</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-green-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Housewife Escorts.jpg" alt="Housewife Escorts" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Housewife Escorts</h3>
                  <p className="text-gray-600 mb-4 text-sm">Mature experienced companions with caring nature</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-red-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Punjabi women.webp" alt="Punjabi Women" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Punjabi Women</h3>
                  <p className="text-gray-600 mb-4 text-sm">Beautiful Punjabi companions with traditional charm</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                {/* Row 3 - Slim, Unsatisfied Bhabhi, Local */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-teal-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Slim Escorts.webp" alt="Slim Escorts" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Slim Escorts</h3>
                  <p className="text-gray-600 mb-4 text-sm">Elegant slim companions with perfect figure</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-indigo-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Unsatisfied Bhabhi.webp" alt="Unsatisfied Bhabhi" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Bhabhi</h3>
                  <p className="text-gray-600 mb-4 text-sm">Experienced companions seeking excitement</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-pink-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Local Beauties.webp" alt="Local Beauties" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Local Beauties</h3>
                  <p className="text-gray-600 mb-4 text-sm">Beautiful local companions who know Indore</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                {/* Row 4 - Event, Pink Special, Unsatisfied Females */}
                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-yellow-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Event Companion.webp" alt="Event Companion" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Event Companion</h3>
                  <p className="text-gray-600 mb-4 text-sm">Perfect companions for social events and parties</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-rose-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Pink Special.webp" alt="Pink Special" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Pink Special</h3>
                  <p className="text-gray-600 mb-4 text-sm">Special premium companions for exclusive experiences</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
                </div>

                <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-violet-100/50 text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="w-full h-80 mb-6 rounded-2xl overflow-hidden shadow-lg">
                    <img src="/images/services/Unsatisfied Females.webp" alt="Unsatisfied Females" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Unsatisfied Females</h3>
                  <p className="text-gray-600 mb-4 text-sm">Mature women seeking meaningful connections</p>
                  <a href="/services" className="inline-block bg-gradient-to-r from-violet-500 to-violet-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform">View Details</a>
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
                  <a href="tel:+919372662471" className="text-xl text-pink-600 font-bold hover:text-pink-800 transition-colors">
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
        <section id="locations" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escort Services Available In All Major Indore Areas
              </h2>
              <p className="text-2xl text-gray-700 max-w-6xl mx-auto leading-relaxed font-semibold">
                Professional escort services available across 15+ prime locations in Indore with guaranteed satisfaction and instant response
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border-2 border-pink-300/60 transform hover:-translate-y-5 min-h-[380px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏢</div>
                    <h3 className="text-3xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                    <p className="text-pink-600 font-bold text-xl mb-4">Central Business District</p>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed font-semibold">Premium business district with luxury hotels, shopping centers and corporate offices. Elite escort services available 24/7.</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
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
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
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
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-5 rounded-3xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-center">
                    📞 Book Elite Escorts in Scheme 78
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🛍️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">AB Road</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Commercial Zone</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Main commercial area with luxury shopping and dining</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in AB Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🌆</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Palasia</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">City Center</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Heart of Indore with premium facilities and accessibility</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Palasia
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏛️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Bhawar Kuan</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">Business District</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Corporate area with five-star hotels and restaurants</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Bhawar Kuan
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🌳</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Rau</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Suburban Area</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Peaceful suburban location with modern infrastructure</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Rau
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🛣️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Ring Road</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">Connectivity Hub</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Well-connected area with easy access to all parts</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Ring Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏥</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Bombay Hospital</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">Medical District</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Healthcare hub with premium medical facilities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Bombay Hospital
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">✈️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Airport Road</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Aviation Zone</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Airport vicinity with luxury hotels and services</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Airport Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏛️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">MG Road</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">Heritage Area</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Historic area with cultural significance and amenities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in MG Road
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🎯</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Treasure Island</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">Entertainment Hub</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Entertainment and recreation center with modern facilities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Treasure Island
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-pink-100/80 to-orange-100/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-pink-200/50 mt-16">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-pink-700 mb-6">📍 Complete Coverage Across Indore</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white/90 rounded-2xl p-6">
                      <h4 className="font-bold text-pink-700 mb-3">🏙️ Business Districts</h4>
                      <p className="text-gray-800">
                        Premium escort services in Vijay Nagar, AB Road, Bhawar Kuan, and all major commercial areas with 5-star hotels.
                      </p>
                    </div>
                    <div className="bg-white/90 rounded-2xl p-6">
                      <h4 className="font-bold text-orange-700 mb-3">🏘️ Residential Areas</h4>
                      <p className="text-gray-800">
                        Discreet home visits in Saket, Scheme 78, Rau, and upscale residential colonies with guaranteed privacy.
                      </p>
                    </div>
                    <div className="bg-white/90 rounded-2xl p-6">
                      <h4 className="font-bold text-pink-700 mb-3">✈️ Travel & Tourism</h4>
                      <p className="text-gray-800">
                        Airport transfers, outstation travel companions, and hotel escort services across all premium locations.
                      </p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-800 font-semibold mb-6">
                    Professional escort services available 24/7 with instant response across 15+ prime locations in Indore. 
                    Complete discretion, verified companions, and satisfaction guaranteed.
                  </p>
                  <a 
                    href="/locations" 
                    className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white/30"
                  >
                    📍 View All Coverage Areas & Book Online
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Book Section */}
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
                  <a href="tel:+919372662471" className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">📞 Call</a>
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
        <section className="py-24 px-4 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70 relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-200/10 to-orange-200/10 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-700 via-orange-600 to-pink-800 bg-clip-text text-transparent mb-8">
                Contact Us For Booking
              </h2>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto shadow-lg border border-pink-200/50">
                <p className="text-2xl font-semibold text-gray-800 leading-relaxed">
                  ✨ Get in touch for premium escort services across Indore - Available 24/7 ✨
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-2 border-blue-200/60 relative">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full shadow-lg"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-full shadow-lg"></div>
                
                <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">🗺️ Service Coverage Area</h3>
                <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-blue-200/60">
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
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-6 shadow-lg border border-blue-200/50 mb-6">
                  <p className="text-blue-900 font-bold text-center text-xl">
                    🏃‍♂️ We cover all major areas of Indore with fast response time ⚡
                  </p>
                </div>
                
                {/* Coverage Statistics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-blue-200/80 to-blue-300/60 rounded-xl p-4 text-center shadow-md">
                    <div className="text-2xl mb-2">🕒</div>
                    <p className="text-blue-900 font-bold text-lg">24/7 Available</p>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-200/80 to-cyan-300/60 rounded-xl p-4 text-center shadow-md">
                    <div className="text-2xl mb-2">⚡</div>
                    <p className="text-cyan-900 font-bold text-lg">Quick Response</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-100 backdrop-blur-md rounded-3xl p-10 shadow-2xl border-2 border-purple-200/60 relative">
                {/* Decorative Corner Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full shadow-lg"></div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full shadow-lg"></div>
                
                <h3 className="text-4xl font-bold text-gray-800 mb-8 text-center">📝 Quick Booking Form</h3>
                <div className="bg-gradient-to-br from-pink-50/80 to-orange-50/80 rounded-3xl p-8 shadow-inner border border-pink-200/30">
                  <form className="space-y-8">
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Your Name *</label>
                      <input 
                        type="text" 
                        placeholder="Enter your full name" 
                        className="w-full px-6 py-5 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-md text-lg hover:shadow-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email address" 
                        className="w-full px-6 py-5 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-md text-lg hover:shadow-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Phone Number *</label>
                      <input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="w-full px-6 py-5 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-md text-lg hover:shadow-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Select Service *</label>
                      <select className="w-full px-6 py-5 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 text-gray-700 bg-white shadow-md text-lg hover:shadow-lg" required>
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
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Message (Optional)</label>
                      <textarea 
                        placeholder="Tell us about your requirements..." 
                        rows={5}
                        className="w-full px-6 py-5 border-2 border-pink-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-200/50 transition-all duration-300 bg-white shadow-md text-lg resize-none hover:shadow-lg"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-purple-600 text-white px-8 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl border-2 border-pink-300/50 hover:border-orange-300/50"
                    >
                      📝 Submit Booking Request ✨
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                      <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-5 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-green-300/50">
                        📞 Call Now
                      </a>
                      <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-lime-600 hover:to-green-700 text-white px-6 py-5 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-lime-300/50">
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
        <footer className="bg-gradient-to-br from-pink-600/95 via-purple-700/90 to-orange-600/95 text-white py-20 px-4 relative">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-gradient-to-br from-orange-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                  ✨ Indore Premium Escort Service
                </h3>
                <p className="text-pink-100 mb-6 leading-relaxed font-semibold">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-green-500/80 to-emerald-600/80 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold border-2 border-green-300/50 text-center">
                    📞 Call Now
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-600/80 to-lime-600/80 hover:from-green-700 hover:to-lime-700 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold border-2 border-lime-300/50 text-center">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
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
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text text-transparent">🔗 Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📋 All Services</a>
                  <a href="/locations" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📍 Service Areas</a>
                  <a href="#faq" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">❓ FAQ</a>
                  <a href="tel:+919372662471" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">📞 Contact Us</a>
                  <a href="#about" className="block text-orange-200 hover:text-yellow-300 transition-colors font-bold text-lg hover:translate-x-2 transform duration-200">ℹ️ About Us</a>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">📞 Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-2xl">📞</span>
                    <a href="tel:+919372662471" className="text-yellow-200 hover:text-yellow-100 font-bold text-lg">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-2xl">💬</span>
                    <a href="https://wa.me/919372662471" className="text-green-200 hover:text-green-100 font-bold text-lg">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-purple-200 hover:text-purple-100 font-bold text-lg">Email Us</a>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-2xl">📍</span>
                    <span className="text-pink-200 font-bold text-lg">All Indore Areas</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 rounded-lg p-3 border border-white/10">
                    <span className="text-2xl">🕒</span>
                    <span className="text-orange-200 font-bold text-lg">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer Bottom */}
            <div className="border-t-2 border-gradient-to-r from-pink-400/40 via-purple-400/40 to-orange-400/40 mt-16 pt-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center">
                <p className="text-yellow-200 mb-6 font-bold text-xl leading-relaxed">
                  © 2024 Indore Premium Escort Service. All rights reserved. 🏆
                </p>
                <div className="flex flex-wrap justify-center gap-6 mb-6">
                  <span className="bg-gradient-to-r from-pink-500/80 to-purple-600/80 text-white px-4 py-2 rounded-full font-bold border-2 border-pink-300/50">✅ 24/7 Available</span>
                  <span className="bg-gradient-to-r from-blue-500/80 to-cyan-600/80 text-white px-4 py-2 rounded-full font-bold border-2 border-blue-300/50">✅ 100% Verified</span>
                  <span className="bg-gradient-to-r from-purple-500/80 to-pink-600/80 text-white px-4 py-2 rounded-full font-bold border-2 border-purple-300/50">✅ Complete Discretion</span>
                  <span className="bg-gradient-to-r from-orange-500/80 to-red-600/80 text-white px-4 py-2 rounded-full font-bold border-2 border-orange-300/50">✅ Premium Quality</span>
                </div>
                <p className="text-pink-200 font-semibold text-lg">
                  🔞 Professional escort services for adults only. Must be 18+ to use our services. 🔞
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}