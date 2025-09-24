'use client'

import Link from 'next/link'
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
      price: "₹15,000 - ₹25,000",
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
      price: "₹8,000 - ₹12,000",
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
      price: "₹10,000 - ₹18,000",
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
      price: "₹12,000 - ₹20,000",
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
      price: "₹20,000 - ₹35,000",
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
      price: "₹15,000 - ₹25,000",
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
      price: "₹25,000 - ₹50,000",
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
      price: "₹8,000 - ₹15,000",
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
      price: "₹10,000 - ₹20,000",
      features: [
        "Hotel visits",
        "Home service",
        "Discreet arrival",
        "Professional conduct",
        "Safe transportation"
      ]
    }
  ]

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover our complete range of premium escort services in Indore. Each service is designed to provide you with unforgettable experiences and exceptional companionship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="tel:+919372662471" 
                className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                📞 Call Now: +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471" 
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                💬 WhatsApp Now
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-10 border border-gray-100/50 transform hover:-translate-y-3 cursor-pointer"
                >
                  <div className="text-center mb-8">
                    <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <div className="relative h-64 w-full mb-6 rounded-2xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                        <span className="text-gray-800 font-bold text-sm">{service.title}</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-pink-600 font-bold text-xl mb-4">{service.subtitle}</p>
                    <p className="text-gray-600 text-lg mb-5 leading-relaxed">
                      {service.description.substring(0, 120)}...
                    </p>
                    <div className="text-blue-600 font-bold text-2xl mb-6">{service.price}</div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600 text-lg">
                        <span className="text-green-500 mr-3 text-xl">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <span className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 group-hover:from-orange-500 group-hover:to-pink-500 shadow-xl">
                      Book {service.title} Now
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-100 to-blue-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Ready to Book Your Perfect Companion?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us now to discuss your requirements and book the perfect companion for your needs.
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