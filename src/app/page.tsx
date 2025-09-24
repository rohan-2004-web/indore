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
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        
        {/* Hero Section - Original Style */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/80 via-purple-100/70 to-blue-200/80"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-pink-400/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-8 leading-tight">
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
                className="inline-block bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                💬 WhatsApp Now
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200/50">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">24/7 Available</h3>
                <p className="text-gray-600">Round the clock service</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-200/50">
                <div className="text-4xl mb-3">🔒</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">100% Verified</h3>
                <p className="text-gray-600">All companions verified</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-200/50">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Complete Discretion</h3>
                <p className="text-gray-600">Privacy guaranteed</p>
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
                  <a href="tel:+919372662471" className="text-xl text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    +91 9372 662 471
                  </a>
                  <p className="text-gray-600 mt-2">Instant Response</p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-green-200/50 text-center">
                  <div className="text-6xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                  <a href="https://wa.me/919372662471" className="text-xl text-green-600 font-bold hover:text-green-800 transition-colors">
                    Chat Instantly
                  </a>
                  <p className="text-gray-600 mt-2">Quick Response</p>
                </div>

                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-200/50 text-center">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Email</h3>
                  <a href="mailto:contact@indoreescortservice.com" className="text-xl text-blue-600 font-bold hover:text-blue-800 transition-colors">
                    Send Message
                  </a>
                  <p className="text-gray-600 mt-2">Professional Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Escorts In Indore Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-orange-50/30 to-pink-200/40"></div>
          <div className="container mx-auto relative z-10">
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
        <section id="services" className="py-20 bg-gradient-to-br from-pink-100/50 via-orange-50/40 to-pink-200/50">
          <div className="w-full px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Premium Escorts In Indore - Our Services
              </h2>
              <div className="bg-gradient-to-r from-pink-100/80 to-orange-100/80 backdrop-blur-lg rounded-3xl p-8 border-2 border-pink-200/50 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/90 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-pink-700 mb-3">🌟 Premium Categories</h3>
                    <p className="text-gray-800 font-semibold">
                      Celebrity escorts, VIP companions, premium models, and exclusive event partners for distinguished clientele.
                    </p>
                  </div>
                  
                  <div className="bg-white/90 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">🎭 Diverse Selection</h3>
                    <p className="text-gray-800 font-semibold">
                      College girls, housewife escorts, Punjabi women, and local beauties to suit every preference and occasion.
                    </p>
                  </div>
                  
                  <div className="bg-white/90 rounded-2xl p-6 text-center">
                    <h3 className="text-xl font-bold text-pink-700 mb-3">🔥 Special Services</h3>
                    <p className="text-gray-800 font-semibold">
                      Travel companions, dinner dates, outcall services, and customized experiences across all Indore locations.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Experience the finest professional escort companions with our premium services in Indore
              </p>
              <div className="max-w-4xl mx-auto text-center">
                <a 
                  href="/services" 
                  className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 hover:from-orange-500 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-xl border-2 border-white/30"
                >
                  🔗 View All Services & Book Online
                </a>
              </div>
            </div>

            <div className="max-w-7xl mx-auto">
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

        {/* Locations Section */}
        <section id="locations" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-orange-100/40"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                Escort Services Available In All Indore Areas
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Premium escort services available across all major locations in Indore with fast response time
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-10">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-pink-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏢</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Vijay Nagar</h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">Central Indore</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Business district with premium hotels and shopping centers</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Vijay Nagar
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-blue-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">🏘️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Saket</h3>
                    <p className="text-blue-600 font-bold text-lg mb-4">Residential Hub</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Upscale residential area with modern amenities</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Saket
                  </a>
                </div>
                <div className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-orange-100/50 transform hover:-translate-y-3 min-h-[300px] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="text-5xl mb-6">💻</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">Scheme 78</h3>
                    <p className="text-orange-600 font-bold text-lg mb-4">IT Sector</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">Tech hub with corporate offices and business hotels</p>
                  </div>
                  <a href="tel:+919372662471" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl text-center">
                    📞 Book in Scheme 78
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
        <section className="py-20 px-4 bg-gradient-to-br from-purple-100/50 via-pink-50/40 to-blue-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Common questions about our premium escort services in Indore
              </p>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left hover:bg-gradient-to-r hover:from-purple-50/50 hover:to-pink-50/50 transition-all duration-200 flex justify-between items-center group"
                  >
                    <h3 className="text-xl font-bold text-gray-800 pr-4 group-hover:text-purple-700">{faq.question}</h3>
                    <span className={`text-3xl transition-all duration-300 text-purple-600 ${openFaq === index ? 'rotate-180 scale-110' : ''}`}>
                      ▼
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 bg-gradient-to-r from-purple-50/30 to-pink-50/30">
                      <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-100/40 via-pink-50/30 to-orange-100/40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-pink-500 to-orange-600 bg-clip-text text-transparent mb-6">
                Contact Us For Booking
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get in touch for premium escort services across Indore
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-100/50">
                  <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-pink-50 transition-colors">
                      <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">Phone</h4>
                        <a href="tel:+919372662471" className="text-pink-600 hover:text-pink-700 font-bold text-lg">+91 9372 662 471</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-green-50 transition-colors">
                      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">WhatsApp</h4>
                        <a href="https://wa.me/919372662471" className="text-green-600 hover:text-green-700 font-bold text-lg">Chat Now</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-blue-50 transition-colors">
                      <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">Email</h4>
                        <a href="mailto:contact@indoreescortservice.com" className="text-blue-600 hover:text-blue-700 font-bold text-lg">contact@indoreescortservice.com</a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-orange-50 transition-colors">
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">Service Area</h4>
                        <p className="text-gray-600 text-lg">All Indore Areas - 24/7 Available</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-6 text-2xl">Quick Booking Form</h4>
                    <div className="bg-gray-50 rounded-3xl p-6">
                      <form className="space-y-5">
                        <div>
                          <input 
                            type="text" 
                            placeholder="Your Name *" 
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-0 transition-all duration-300 bg-white shadow-sm text-lg"
                          />
                        </div>
                        <div>
                          <input 
                            type="tel" 
                            placeholder="Your Phone Number *" 
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-0 transition-all duration-300 bg-white shadow-sm text-lg"
                          />
                        </div>
                        <div>
                          <input 
                            type="email" 
                            placeholder="Your Email Address" 
                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-0 transition-all duration-300 bg-white shadow-sm text-lg"
                          />
                        </div>
                        <div>
                          <select className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-pink-500 focus:ring-0 transition-all duration-300 text-gray-700 bg-white shadow-sm text-lg">
                            <option value="">Select Service *</option>
                            <option value="celebrity">Celebrity Escorts</option>
                            <option value="vip">VIP Escorts</option>
                            <option value="premium">Premium Models</option>
                            <option value="college">College Girls</option>
                            <option value="housewife">Housewife Escorts</option>
                            <option value="punjabi">Punjabi Women</option>
                            <option value="slim">Slim Escorts</option>
                            <option value="bhabhi">Unsatisfied Bhabhi</option>
                            <option value="local">Local Beauties</option>
                          </select>
                        </div>
                        <button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                          📝 Submit Booking Request
                        </button>
                      </form>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row gap-4">
                      <a href="tel:+919372662471" className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg flex-1">
                        📞 Call to Book Now
                      </a>
                      <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg flex-1">
                        💬 WhatsApp to Book
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-blue-100/50">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Service Coverage Area</h3>
                <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
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
                <div className="mt-6 p-4 bg-blue-50 rounded-2xl">
                  <p className="text-blue-800 font-semibold text-center">
                    🗺️ We cover all major areas of Indore with fast response time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-pink-300/80 via-purple-400/70 to-blue-400/80 text-gray-800 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              
              <div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-800 to-blue-800 bg-clip-text text-transparent">
                  Indore Premium Escort Service
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Premium escort services in Indore with verified professional companions. Available 24/7 across all major locations.
                </p>
                <div className="flex space-x-4">
                  <a href="tel:+919372662471" className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold">
                    📞 Call
                  </a>
                  <a href="https://wa.me/919372662471" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 font-bold">
                    💬 WhatsApp
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Our Services</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-gray-700 hover:text-pink-700 transition-colors font-medium">Celebrity Escorts</a>
                  <a href="/services" className="block text-gray-700 hover:text-pink-700 transition-colors font-medium">VIP Escorts</a>
                  <a href="/services" className="block text-gray-700 hover:text-pink-700 transition-colors font-medium">Premium Models</a>
                  <a href="/services" className="block text-gray-700 hover:text-pink-700 transition-colors font-medium">College Girls</a>
                  <a href="/services" className="block text-gray-700 hover:text-pink-700 transition-colors font-medium">Housewife Escorts</a>
                  <a href="/services" className="block text-gray-700 hover:text-pink-700 transition-colors font-medium">Punjabi Women</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-gray-700 hover:text-blue-700 transition-colors font-medium">All Services</a>
                  <a href="/locations" className="block text-gray-700 hover:text-blue-700 transition-colors font-medium">Service Areas</a>
                  <a href="#faq" className="block text-gray-700 hover:text-blue-700 transition-colors font-medium">FAQ</a>
                  <a href="tel:+919372662471" className="block text-gray-700 hover:text-blue-700 transition-colors font-medium">Contact Us</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-600">📞</span>
                    <a href="tel:+919372662471" className="text-gray-700 hover:text-pink-700 font-bold">+91 9372 662 471</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600">💬</span>
                    <a href="https://wa.me/919372662471" className="text-gray-700 hover:text-blue-700 font-bold">WhatsApp Available</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-purple-600">✉️</span>
                    <a href="mailto:contact@indoreescortservice.com" className="text-gray-700 hover:text-purple-700 font-bold">Email Us</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-pink-600">📍</span>
                    <span className="text-gray-700 font-bold">All Indore Areas</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-pink-400/30 mt-12 pt-8 text-center">
              <p className="text-gray-700 mb-4 font-medium">
                © 2024 Indore Premium Escort Service. All rights reserved. | 
                <span className="text-pink-700"> 24/7 Available</span> | 
                <span className="text-blue-700"> 100% Verified</span> | 
                <span className="text-purple-700"> Complete Discretion</span>
              </p>
              <p className="text-gray-600 text-sm">
                Professional escort services for adults only. Must be 18+ to use our services.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}