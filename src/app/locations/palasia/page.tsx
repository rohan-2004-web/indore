'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import PalasiaEscortsContent from './components/PalasiaEscortsContent'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

export default function PalasiaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality Service",
      description: "Experience celebrity-level companions in Palasia with exceptional elegance",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts in Palasia offering ultimate luxury",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "Premium Models",
      subtitle: "High-End Sophistication", 
      description: "Premium models in Palasia with unmatched sophistication",
      image: "/images/services/Premium Models.jpg",
      icon: "💎",
      category: "PREMIUM",
      link: "/services/premium-models"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young",
      description: "Beautiful young companions in Palasia with vibrant energy",
      image: "/images/services/College Girls.webp",
      icon: "🌟",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Russian Escorts",
      subtitle: "International Beauty",
      description: "Exotic Russian companions in Palasia for premium experiences",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "🇷🇺",
      category: "INTERNATIONAL",
      link: "/services/russian-escort"
    },
    {
      title: "High Class Models",
      subtitle: "Elite Beauty",
      description: "Elite high-class models in Palasia for sophisticated gentlemen",
      image: "/images/services/High Class Models.webp", 
      icon: "👑",
      category: "ELITE",
      link: "/services/high-class-models"
    }
  ]

  const structuredData = {
    place: generateLocationPageSchema({
      type: 'location',
      location: {
        name: 'Palasia',
        address: 'Palasia, Indore, Madhya Pradesh, India',
        area: 'Business District',
        landmarks: [
          'Palasia Square',
          'Business District',
          'Commercial Complex',
          'Hotel Radisson',
          'Trade Center'
        ]
      }
    }),
    service: generateServiceSchema({
      type: 'location',
      location: {
        name: 'Palasia',
        address: 'Palasia, Indore',
        area: 'Business District',
        landmarks: []
      },
      service: {
        name: 'Palasia Escort Service',
        category: 'Premium Companions'
      }
    }),
    breadcrumb: generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Locations', url: '/locations' },
      { name: 'Palasia', url: '/locations/palasia' }
    ])
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(structuredData.place) 
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(structuredData.service) 
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(structuredData.breadcrumb) 
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
        <Header />
        
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-orange-600/10"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8 leading-tight">
                🏢 Premium Escorts in Palasia 🌟
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience exceptional companionship in Indore's premier business district, where corporate excellence meets premium escort services
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gradient-to-b from-white to-pink-50">
          <div className="w-full px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  🌟 Premium Palasia Services
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Discover our exclusive range of premium companions in Palasia's business district
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-pink-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-2">
                          {service.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                        <p className="text-pink-200 font-medium">{service.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                      <div className="flex items-center justify-between">
                        <a 
                          href={service.link}
                          className="bg-gradient-to-r from-pink-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Book Now →
                        </a>
                        <span className="text-pink-600 font-semibold">Available 24/7</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Palasia Escorts Content */}
        <PalasiaEscortsContent />

        {/* Call to Action Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-orange-600/20"></div>
          <div className="w-full px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-8">
                Ready to Book Premium Escorts in Palasia?
              </h2>
              <p className="text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
                Experience the finest escort services in Indore's premier business district with complete discretion and satisfaction guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="tel:+919372662471" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   Call Now: +91 9372662471
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  className="inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                   WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}