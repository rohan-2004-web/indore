'use client'

import Header from '@/components/Header'
import Image from 'next/image'

export default function ServicesPage() {
  const services = [
    {
      id: 'celebrity-escorts',
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions with exceptional elegance and sophistication. Our celebrity escorts offer unmatched beauty, intelligence, and charm for your special occasions.",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      
      features: [
        "High-profile companions",
        "Red carpet ready",
        "Multilingual abilities",
        "Premium grooming",
        "Exclusive availability"
      ]
    },
    {
      id: 'college-girls',
      title: "College Girls", 
      subtitle: "Fresh & Young",
      description: "Beautiful young companions with vibrant energy and charming personalities. Our college girl escorts bring youthful enthusiasm and modern outlook to your experiences.",
      image: "/images/services/College Girls.webp",
      icon: "💎",
      category: "YOUNG",
      
      features: [
        "Fresh and energetic",
        "College-educated",
        "Modern personality",
        "Fun conversations",
        "Adventurous spirit"
      ]
    },
    {
      id: 'punjabi-women',
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions with traditional charm and modern sophistication. Experience the warmth and beauty of Punjab culture with our elegant Punjabi escorts.",
      image: "/images/services/Punjabi women.webp",
      icon: "🌟",
      category: "TRADITIONAL",
      
      features: [
        "Traditional beauty",
        "Cultural knowledge",
        "Warm personality",
        "Punjabi cuisine knowledge",
        "Festival celebrations"
      ]
    },
    {
      id: 'event-companion',
      title: "Event Companion",
      subtitle: "Perfect Plus One",
      description: "Professional companions for business events, parties, and social gatherings. Our event companions ensure you make the perfect impression at any occasion.",
      image: "/images/services/Event Companion.webp",
      icon: "🎭",
      category: "PROFESSIONAL",
      
      features: [
        "Business etiquette",
        "Social skills",
        "Professional attire",
        "Event experience",
        "Networking abilities"
      ]
    },
    {
      id: 'premium-companions',
      title: "Premium Companions",
      subtitle: "Luxury Experience",
      description: "Exclusive high-end companions for discerning clients who demand the finest. Our premium companions offer sophistication, elegance, and unparalleled service.",
      image: "/images/services/Premium Companions.webp",
      icon: "👑",
      category: "LUXURY",
      
      features: [
        "Elite companions",
        "Luxury experiences",
        "International travel",
        "High society knowledge",
        "Exclusive availability"
      ]
    },
    {
      id: 'travel-companions',
      title: "Travel Companions",
      subtitle: "Adventure Partners",
      description: "Perfect travel partners for business trips, vacations, or weekend getaways. Our travel companions make every journey memorable and enjoyable.",
      image: "/images/services/Travel Companions.webp",
      icon: "✈️",
      category: "TRAVEL",
      
      features: [
        "Travel experience",
        "Adventure spirit",
        "Cultural awareness",
        "Language skills",
        "Photography skills"
      ]
    },
    {
      id: 'vip-escorts',
      title: "VIP Escorts",
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts offer the ultimate in luxury and sophistication. Reserved for our most distinguished clients seeking perfection.",
      image: "/images/services/VIP Escorts.webp",
      icon: "💫",
      category: "VIP",
      
      features: [
        "VIP treatment",
        "Exclusive access",
        "Personal attention",
        "Luxury venues",
        "Discretion guaranteed"
      ]
    },
    {
      id: 'dinner-dates',
      title: "Dinner Dates",
      subtitle: "Romantic Evenings",
      description: "Elegant companions for romantic dinner dates and fine dining experiences. Perfect for business dinners or intimate romantic evenings.",
      image: "/images/services/Dinner Dates.webp",
      icon: "🍷",
      category: "ROMANTIC",
      
      features: [
        "Fine dining etiquette",
        "Romantic atmosphere",
        "Engaging conversation",
        "Wine knowledge",
        "Restaurant recommendations"
      ]
    },
    {
      id: 'outcall-service',
      title: "Outcall Service",
      subtitle: "Your Location",
      description: "Professional outcall service to your hotel, home, or preferred location. Discreet and professional service wherever you need it in Indore.",
      image: "/images/services/Outcall Service.webp",
      icon: "🏨",
      category: "OUTCALL",
      
      features: [
        "Hotel visits",
        "Home service",
        "Discreet arrival",
        "Professional conduct",
        "Safe transportation"
      ]
    },
    {
      id: 'incall-escorts',
      title: "Incall Escorts",
      subtitle: "Luxury Locations",
      description: "Premium incall services at luxury locations with complete privacy and comfort. Experience high-end companionship in sophisticated settings.",
      image: "/images/services/Incall Escorts.webp",
      icon: "🏠",
      category: "INCALL",
      features: [
        "Luxury locations",
        "Complete privacy",
        "Professional setup",
        "High-end amenities",
        "Comfort guaranteed"
      ]
    },
    {
      id: 'mature-escorts',
      title: "Mature Escorts",
      subtitle: "Experienced Companions",
      description: "Experienced mature companions with sophistication and worldly knowledge. Perfect for discerning clients who appreciate maturity and elegance.",
      image: "/images/services/Mature Escorts.webp",
      icon: "👸",
      category: "MATURE",
      features: [
        "Life experience",
        "Sophisticated conversation",
        "Professional demeanor",
        "Cultural knowledge",
        "Emotional maturity"
      ]
    },
    {
      id: 'young-girls',
      title: "Young Girls",
      subtitle: "Youthful Energy",
      description: "Young beautiful companions for unforgettable experiences with vibrant energy and fresh perspectives. Perfect for those seeking youthful charm.",
      image: "/images/services/Young Girls.webp",
      icon: "🌸",
      category: "YOUNG",
      features: [
        "Youthful energy",
        "Fresh perspective",
        "Adventurous spirit",
        "Modern outlook",
        "Vibrant personality"
      ]
    },
    {
      id: 'indore-escorts',
      title: "Indore Escorts",
      subtitle: "Local Expertise",
      description: "Premium local escorts with deep knowledge of Indore city and culture. Experience authentic local hospitality with our beautiful Indore companions.",
      image: "/images/services/indore escorts.webp",
      icon: "🏙️",
      category: "LOCAL",
      features: [
        "Local city knowledge",
        "Cultural expertise",
        "Area familiarity",
        "Regional beauty",
        "Authentic hospitality"
      ]
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              💎 Premium Escort Services In Indore
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              #1 Elite Companionship Services - Verified Premium Companions Available 24/7 Across All Indore Locations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                📞 Call Premium Line: +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                💬 WhatsApp Premium Booking
              </a>
            </div>
          </div>
        </section>

        {/* Service Stats */}
        <section className="py-16 bg-gradient-to-r from-pink-100 to-blue-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-pink-600 mb-2">16+</div>
                <div className="text-gray-700 font-medium">Premium Categories</div>
              </div>
              <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Verified Escorts</div>
              </div>
              <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Service Available</div>
              </div>
              <div className="bg-white/90 rounded-2xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">🔒</div>
                <div className="text-gray-700 font-medium">Complete Discretion</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
                ⭐ Premium Service Categories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive escort services across specialized categories and demographics, available in every Indore location with verified companions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-gray-100/50 transform hover:-translate-y-3 text-center"
                >
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                        <span className="text-gray-800 font-bold text-sm">{service.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-pink-600 font-bold text-lg mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 text-base mb-6 leading-relaxed">
                      {service.description.substring(0, 100)}...
                    </p>
                  </div>

                  <div className="space-y-3">
                    <a 
                      href="tel:+919372662471" 
                      className="block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      📞 Call Now
                    </a>
                    <a 
                      href="https://wa.me/919372662471" 
                      className="block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      💬 WhatsApp Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-pink-100 to-blue-100">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
                🏆 Why Choose Our Premium Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the difference with our comprehensive services, verified companions, and commitment to excellence across every Indore location.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Coverage</h3>
                <p className="text-gray-600">Services available in every Indore location with local expertise and area-specific knowledge.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Verified Quality</h3>
                <p className="text-gray-600">All companions thoroughly verified across every location with quality assurance standards.</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl text-center">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Service</h3>
                <p className="text-gray-600">Dedicated service managers for each location ensuring personalized attention and care.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">🌟 Connect Across Indore</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to experience premium escort services in your preferred Indore location? Contact our location specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                📞 Call +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                💬 WhatsApp
              </a>
              <a 
                href="mailto:contact@indoreescortservice.com" 
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                ✉️ Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
