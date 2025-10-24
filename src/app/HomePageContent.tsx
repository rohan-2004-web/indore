'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import Breadcrumb from '@/components/Breadcrumb'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'
import { HeroImage } from '@/components/UltraOptimizedImage'

// Lazy load all heavy components for better performance
const ServiceCards = dynamic(() => import('@/components/ServiceCards'), {
  loading: () => (
    <div className="animate-pulse h-96 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70 rounded-3xl"></div>
  ),
  ssr: false
})

const SEOOptimizedContent = dynamic(() => import('@/components/SEOContent').then(mod => ({ default: mod.SEOOptimizedContent })), {
  loading: () => <div className="h-64 bg-gradient-to-r from-pink-50 to-blue-50 animate-pulse rounded-xl"></div>,
  ssr: false
})

const InternalLinks = dynamic(() => import('@/components/InternalLinks'), {
  loading: () => <div className="h-32 bg-white animate-pulse rounded-xl"></div>,
  ssr: false
})

const IndoreEscortsContent = dynamic(() => import("@/app/components/IndoreEscortsContent"), {
  loading: () => <div className="h-96 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50 animate-pulse rounded-xl"></div>,
  ssr: false
})

export default function HomePageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  // Enhanced structured data for better search visibility
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "Indore Premium Escort Service - Saumya Kapoor Agency",
    "alternateName": ["Indore Escort Service", "Call Girls in Indore", "Indore Call Girls"],
    "description": "⭐ #1 rated Indore escort service with 5000+ verified premium call girls & VIP escorts. Professional, safe & discreet service available 24/7 across all Indore locations. Book premium companions now!",
    "url": "https://saumyakapoor.in",
    "telephone": "+919372662471",
    "email": "booking@saumyakapoor.in",
    "priceRange": "₹₹₹",
    "paymentAccepted": ["Cash", "UPI", "Card"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Indore",
        "containedInPlace": {
          "@type": "State", 
          "name": "Madhya Pradesh"
        }
      }
    ],
    "serviceArea": ["Vijay Nagar", "AB Road", "Palasia", "Scheme 78", "Ring Road", "MG Road", "Saket", "Airport Road"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Premium Escort Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Escort Service",
            "description": "Premium VIP escorts and high-class companions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Celebrity Escort Service",
            "description": "Celebrity-level escorts with premium service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "College Girl Escorts",
            "description": "Young and beautiful college girl companions"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847",
      "bestRating": "5"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": 22.7196,
      "longitude": 75.8577
    },
    "availableLanguage": ["Hindi", "English"],
    "openingHours": "Mo-Su 00:00-23:59"
  }

  const faqs = [
    {
      question: "Are your services available 24/7?",
      answer: "Yes, our premium escort services are available round the clock. You can call us anytime at +91 9372662471 for immediate assistance."
    },
    {
      question: "What areas in Indore do you cover?",
      answer: "We provide services across all major areas including Vijay Nagar, AB Road, Bhawar Kuan, Palasia, Saket, Scheme 78, and Airport Road."
    },
    {
      question: "How do I make a booking?",
      answer: "Simply call +91 9372662471 or WhatsApp us. Our team will help you choose the right companion and arrange the service according to your preferences."
    },
    {
      question: "Is privacy and discretion guaranteed?",
      answer: "Absolutely. We maintain complete confidentiality and discretion in all our services. Your privacy is our top priority."
    },
    {
      question: "What types of services do you offer?",
      answer: "We offer a wide range of companion services including celebrity escorts, VIP companions, college girls, event companions, and professional outcall services."
    },
    {
      question: "Are your companions verified?",
      answer: "Yes, all our companions are thoroughly verified and professionally trained to provide premium quality service with complete safety and satisfaction."
    },
    {
      question: "What are your service charges?",
      answer: "Our charges vary depending on the type of service, duration, and companion selection. Please call +91 9372662471 for detailed pricing information and special packages."
    },
    {
      question: "Do you provide hotel bookings assistance?",
      answer: "Yes, we can assist with hotel bookings at premium locations across Indore. Our team can recommend and arrange suitable accommodations for your requirements."
    }
  ]

  return (
    <>
      <PerformanceOptimizer />
      {/* Comprehensive SEO Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://saumyakapoor.in/#localbusiness",
            "name": "Saumya Kapoor - Indore Premium Escort Service",
            "alternateName": "Indore Call Girls Service",
            "description": "Top-rated escort service in Indore with premium call girls available 24/7. Professional VIP companions serving all major locations in Indore.",
            "url": "https://saumyakapoor.in",
            "telephone": "+919372662471",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Indore",
              "addressRegion": "Madhya Pradesh",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.7196,
              "longitude": 75.8577
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Indore"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 22.7196,
                "longitude": 75.8577
              },
              "geoRadius": "25000"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "priceRange": "₹₹₹",
            "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Escort Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Celebrity Escort Service",
                    "description": "Premium celebrity-level companions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "VIP Companion Service",
                    "description": "Exclusive VIP escorts for business and social events"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://saumyakapoor.in/#organization",
            "name": "Saumya Kapoor Indore Escort Service",
            "url": "https://saumyakapoor.in",
            "logo": "https://saumyakapoor.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919372662471",
              "contactType": "customer service",
              "areaServed": "IN",
              "availableLanguage": ["Hindi", "English"]
            },
            "sameAs": [
              "https://twitter.com/indoreescorts",
              "https://instagram.com/indoreescorts"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://saumyakapoor.in/#website",
            "name": "Indore Escort Service - Call Girls in Indore 24/7",
            "description": "Premium escort service in Indore with verified call girls available 24/7. Professional VIP companions serving Vijay Nagar, AB Road, Palasia and all major locations.",
            "url": "https://saumyakapoor.in",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://saumyakapoor.in/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            },
            "inLanguage": "en-US"
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-50 to-pink-200">
        <Header />
        <main className="pt-20" id="main-content">
          <Breadcrumb 
            items={[
              { name: 'Home', href: '/' }
            ]}
          />
          
          <section 
            className="relative py-16 bg-pink-200 overflow-hidden"
            aria-labelledby="hero-heading"
            role="banner"
          >
            <div className="absolute inset-0 opacity-30" aria-hidden="true">
              <div className="absolute top-10 left-10 w-48 h-48 bg-pink-300 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-orange-200 rounded-full"></div>
            </div>
            
            <div className="max-w-8xl mx-auto px-6 relative z-10">
              <div className="text-center">
                {/* Main Heading */}
                <h1 
                  id="hero-heading"
                  className="text-3xl md:text-5xl font-black bg-gradient-to-r from-pink-700 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-10 leading-tight tracking-tight drop-shadow-2xl"
                >
                  Indore Escort Service | Premium Call Girls 24/7 | #1 Rated Agency
                </h1>
                
                {/* Subheading with badges */}
                <div className="mb-10">
                  <h2 className="text-2xl md:text-4xl text-gray-800 font-bold leading-relaxed mb-4">
                    🌟 5000+ Verified Call Girls in Indore | VIP Escorts Available 24/7 | Safe & Discreet
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-6xl mx-auto mb-10">
                    ⭐ <strong>Premium Indore escort service</strong> with 5000+ verified call girls & VIP escorts available 24/7. 
                    Professional <strong>escorts in Indore</strong> serving Vijay Nagar, AB Road, Palasia, Scheme 78, MG Road. 
                    <strong>Call girls in Indore</strong> with guaranteed satisfaction, complete privacy & instant booking. 
                    Book premium <strong>Indore call girls</strong> now: <strong>+91-9372662471</strong>
                  </p>
                  
                  {/* Feature badges */}
                  <div 
                    className="flex flex-wrap justify-center gap-6 mb-10"
                    role="list"
                    aria-label="Service features"
                  >
                    <div 
                      className="bg-white/95 border-2 border-pink-300 text-pink-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
                      role="listitem"
                    >
                      <span aria-hidden="true">✨</span> 5000+ Verified Escorts
                    </div>
                    <div 
                      className="bg-white/95 border-2 border-orange-300 text-orange-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
                      role="listitem"
                    >
                      <span aria-hidden="true">🔒</span> 100% Safe & Discreet
                    </div>
                    <div 
                      className="bg-white/95 border-2 border-pink-300 text-pink-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
                      role="listitem"
                    >
                      <span aria-hidden="true">⚡</span> Instant Booking 24/7
                    </div>
                    <div 
                      className="bg-white/95 border-2 border-orange-300 text-orange-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition-all"
                      role="listitem"
                    >
                      <span aria-hidden="true">🎯</span> Premium Quality Guaranteed
                    </div>
                  </div>
                </div>

                {/* Contact information */}
                <div className="flex justify-center items-center mb-8">
                  <p className="text-sm text-gray-700">Contact us using the navigation menu or visit our contact page for more information.</p>
                </div>
                
                {/* Stats */}
                <div 
                  className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto text-center"
                  role="region"
                  aria-label="Service statistics"
                >
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-pink-600" aria-label="5000 plus">5000+</div>
                    <div className="text-sm text-gray-600">Verified Escorts in Indore</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-purple-600" aria-label="100 percent">100%</div>
                    <div className="text-sm text-gray-600">Safe & Private Services</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-yellow-600" aria-label="4.9 out of 5 stars">⭐ 4.9/5</div>
                    <div className="text-sm text-gray-600">Client Rating (3500+ Reviews)</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-green-600" aria-label="24 hours 7 days">24/7</div>
                    <div className="text-sm text-gray-600">Available Across Indore</div>
                  </div>
                  <div className="text-gray-800">
                    <div className="text-2xl font-bold text-blue-600" aria-hidden="true">🏙️</div>
                    <div className="text-sm text-gray-600">All Indore Areas Covered</div>
                  </div>
                </div>
                
                {/* Additional info */}
                <div className="mt-8 text-center">
                  <div 
                    className="flex flex-wrap justify-center gap-6 text-gray-600 text-sm"
                    role="list"
                    aria-label="Additional service information"
                  >
                    <div className="flex items-center gap-2" role="listitem">
                      <span aria-hidden="true">⏱️</span>
                      <span>30-Min Quick Arrival</span>
                    </div>
                    <div className="flex items-center gap-2" role="listitem">
                      <span aria-hidden="true">🎯</span>
                      <span>Premium Escorts in Indore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ServiceCards />

          {/* SEO Content Section */}
          <section className="py-16 bg-gradient-to-br from-pink-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4">
              <SEOOptimizedContent 
                h1="Premium Escort Service in Indore"
                h2="Professional Call Girls & VIP Companions Available 24/7"
                services={[
                  'Celebrity Escorts',
                  'VIP Companions', 
                  'College Girl Escorts',
                  'Event Companions',
                  'Premium Call Girls',
                  'Professional Escorts'
                ]}
              />
            </div>
          </section>

          {/* Locations Section */}
          <section id="locations" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/80 via-orange-100/70 to-pink-300/80"></div>
            <div className="w-full px-6 relative z-10">
              <div className="text-center mb-20">
                <h2 className="text-base md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-4">
                  Premium Escort Services Available In All Major Indore Areas
                </h2>
                <p className="text-2xl text-gray-700 max-w-7xl mx-auto leading-relaxed font-semibold">
                  Professional escort services available across 12+ prime locations in Indore with guaranteed satisfaction and instant response
                </p>
              </div>

              <div className="w-full">
                {/* Enhanced Location Cards - Bigger and More Stylish */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
                  
                  <div className="group bg-gradient-to-br from-pink-100 to-pink-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-pink-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏢</div>
                      <h3 className="text-2xl font-bold text-pink-800 mb-3">Vijay Nagar</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Central Business District with premium facilities</p>
                    </div>
                    <a href="/locations/vijay-nagar" className="w-full inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-blue-100 to-blue-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-blue-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏘️</div>
                      <h3 className="text-2xl font-bold text-blue-800 mb-3">Saket</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Upscale Residential Hub with elite services</p>
                    </div>
                    <a href="/locations/saket" className="w-full inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-orange-100 to-orange-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-orange-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💻</div>
                      <h3 className="text-2xl font-bold text-orange-800 mb-3">Scheme 78</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">IT Corporate Sector with modern amenities</p>
                    </div>
                    <a href="/locations/scheme-78" className="w-full inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-purple-100 to-purple-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-purple-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🛍️</div>
                      <h3 className="text-2xl font-bold text-purple-800 mb-3">AB Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Commercial Zone with shopping centers</p>
                    </div>
                    <a href="/locations/ab-road" className="w-full inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-green-100 to-green-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-green-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌆</div>
                      <h3 className="text-2xl font-bold text-green-800 mb-3">Palasia</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">City Center with premium facilities</p>
                    </div>
                    <a href="/locations/palasia" className="w-full inline-block bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-teal-100 to-teal-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-teal-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏛️</div>
                      <h3 className="text-2xl font-bold text-teal-800 mb-3">Bhawar Kuan</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Premium District with luxury amenities</p>
                    </div>
                    <a href="/locations/bhawar-kuan" className="w-full inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-indigo-100 to-indigo-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-indigo-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">✈️</div>
                      <h3 className="text-2xl font-bold text-indigo-800 mb-3">Airport Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Airport vicinity with luxury hotels</p>
                    </div>
                    <a href="/locations/airport-road" className="w-full inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-rose-100 to-rose-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-rose-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎯</div>
                      <h3 className="text-2xl font-bold text-rose-800 mb-3">Treasure Island</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Entertainment hub with modern facilities</p>
                    </div>
                    <a href="/locations/treasure-island" className="w-full inline-block bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-violet-100 to-violet-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-violet-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏬</div>
                      <h3 className="text-2xl font-bold text-violet-800 mb-3">Rajwada</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Historic area with cultural significance</p>
                    </div>
                    <a href="/locations/rajwada" className="w-full inline-block bg-gradient-to-r from-violet-500 to-violet-600 hover:from-violet-600 hover:to-violet-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-cyan-100 to-cyan-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-cyan-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏭</div>
                      <h3 className="text-2xl font-bold text-cyan-800 mb-3">MG Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Business center with premium services</p>
                    </div>
                    <a href="/locations/mg-road" className="w-full inline-block bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-emerald-100 to-emerald-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-emerald-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏥</div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-3">Bombay Hospital</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Medical district with healthcare facilities</p>
                    </div>
                    <a href="/locations/bombay-hospital" className="w-full inline-block bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                  <div className="group bg-gradient-to-br from-amber-100 to-amber-200 backdrop-blur-md rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-6 md:p-8 border-2 border-amber-300/60 transform hover:-translate-y-3 h-auto md:h-72 flex flex-col justify-between">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🌳</div>
                      <h3 className="text-2xl font-bold text-amber-800 mb-3">Ring Road</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">Well-connected area with easy access</p>
                    </div>
                    <a href="/locations/ring-road" className="w-full inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-4 rounded-xl font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                      📞 Book Premium Service
                    </a>
                  </div>
                  
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section - Quick Access */}
          <section className="py-16 bg-gradient-to-r from-pink-100/60 to-orange-100/60">
            <div className="w-full px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                    Contact For Premium Service
                  </h2>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto shadow-lg border border-pink-200/50">
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                      ✨ Ready to book premium escort services? Call or WhatsApp now for immediate assistance ✨
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <div className="bg-gradient-to-br from-white/95 to-pink-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-pink-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">☎️</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Phone</h3>
                    <a href="tel:+919372662471" className="text-xl text-pink-600 font-bold hover:text-pink-800 transition-colors">
                      +91 9372 662 471
                    </a>
                    <p className="text-gray-600 mt-2">Instant Response</p>
                  </div>

                  <div className="bg-gradient-to-br from-white/95 to-green-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-green-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">WhatsApp</h3>
                    <a href="https://wa.me/919372662471" className="text-xl text-green-600 font-bold hover:text-green-800 transition-colors">
                      Chat Now
                    </a>
                    <p className="text-gray-600 mt-2">Quick & Private</p>
                  </div>

                  <div className="bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-blue-200/50 transform hover:scale-105 transition-all duration-300">
                    <div className="text-6xl mb-4">🕐</div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Availability</h3>
                    <p className="text-xl text-blue-600 font-bold">24/7 Service</p>
                    <p className="text-gray-600 mt-2">Always Available</p>
                  </div>

                  <div className="bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl border border-purple-200/50 transform hover:scale-105 transition-all duration-300">
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

          {/* Client Testimonials Content Section */}
          <section className="py-16 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-pink-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-400/40 rounded-full blur-xl animate-pulse delay-300"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pink-200/40 rounded-full blur-xl animate-pulse delay-700"></div>
            </div>
            
            <div className="max-w-8xl mx-auto px-6 relative z-10">
              <div className="text-center">
                <h2 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-pink-800 mb-8 drop-shadow-2xl">
                  🌟 What Our Premium Clients Say About Us 🌟
                </h2>
                <div className="max-w-6xl mx-auto">
                  <p className="text-2xl md:text-3xl text-pink-700 mb-8 leading-relaxed font-semibold drop-shadow-lg">
                    💎 Thousands of satisfied clients across Indore trust us for premium escort services
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-pink-200/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-4">🏆</div>
                      <h3 className="text-2xl font-bold text-pink-800 mb-3">Premium Quality</h3>
                      <p className="text-pink-700 text-lg">Handpicked professional escorts with guaranteed satisfaction</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-pink-200/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-4">🔒</div>
                      <h3 className="text-2xl font-bold text-pink-800 mb-3">100% Discrete</h3>
                      <p className="text-pink-700 text-lg">Complete privacy and confidentiality for all our VIP clients</p>
                    </div>
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-pink-200/50 shadow-2xl transform hover:scale-105 transition-all duration-300">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="text-2xl font-bold text-pink-800 mb-3">24/7 Available</h3>
                      <p className="text-pink-700 text-lg">Round the clock service with instant booking confirmation</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-pink-500/20 backdrop-blur-md text-pink-800 px-8 py-4 rounded-full text-xl font-bold border border-pink-300/60 shadow-lg">
                      ⭐ 5000+ Happy Clients
                    </span>
                    <span className="bg-pink-500/20 backdrop-blur-md text-pink-800 px-8 py-4 rounded-full text-xl font-bold border border-pink-300/60 shadow-lg">
                      💯 100% Satisfaction
                    </span>
                    <span className="bg-pink-500/20 backdrop-blur-md text-pink-800 px-8 py-4 rounded-full text-xl font-bold border border-pink-300/60 shadow-lg">
                      🔥 Premium Service
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-6">
                  Client Testimonials
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  What our satisfied clients say about our premium escort services
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-pink-200/50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Amazing Service</h3>
                    <p className="text-gray-600 italic mb-4">"Professional, discrete, and exactly what I was looking for. The booking process was simple and the service exceeded expectations."</p>
                    <p className="font-bold text-pink-600">- VIP Client, Vijay Nagar</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-blue-200/50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Highly Recommend</h3>
                    <p className="text-gray-600 italic mb-4">"Outstanding companions and excellent customer service. Very professional team that maintains complete privacy and confidentiality."</p>
                    <p className="font-bold text-blue-600">- Regular Client, AB Road</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border-2 border-orange-200/50">
                  <div className="text-center">
                    <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Premium Quality</h3>
                    <p className="text-gray-600 italic mb-4">"Top-notch service with beautiful and intelligent companions. The 24/7 availability and quick response time is impressive."</p>
                    <p className="font-bold text-orange-600">- Business Client, Palasia</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Map & Contact Form Section */}
          <section className="py-20 bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100">
            <div className="max-w-8xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
                  📍 Visit Us & Get In Touch
                </h2>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
                  Find us easily with our location map or contact us directly through our premium booking form
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Google Map - Left Side */}
                <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-purple-200/50 p-8 h-[600px] flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                      🗺️ Our Location
                    </h3>
                    <p className="text-lg text-gray-700 font-semibold">Premium Escort Services - Central Indore</p>
                  </div>
                  
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-xl border-4 border-purple-200/60">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58911.33485049357!2d75.81526489999999!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1696777200000!5m2!1sen!2sin"
                      width="100%" 
                      height="100%" 
                      style={{border: 0}} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Indore Location Map - Premium Escort Services" 
                      className="rounded-xl"
                    ></iframe>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="flex flex-wrap justify-center gap-4">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                        📍 Central Indore
                      </span>
                      <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                        🚗 Easy Access
                      </span>
                      <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                        🔒 Discreet Location
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Form - Right Side */}
                <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-pink-200/50 p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent mb-4">
                      💌 Premium Booking Form
                    </h3>
                    <p className="text-lg text-gray-700 font-semibold">Book your premium escort service instantly</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-lg font-bold text-gray-800 mb-3">👤 Your Name *</label>
                        <input 
                          type="text" 
                          placeholder="Enter your full name"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 backdrop-blur-sm text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-bold text-gray-800 mb-3">📱 Phone Number *</label>
                        <input 
                          type="tel" 
                          placeholder="Enter your mobile number"
                          className="w-full px-6 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 backdrop-blur-sm text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-3">📧 Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="w-full px-6 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 backdrop-blur-sm text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-3">💎 Service Type *</label>
                      <select className="w-full px-6 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 backdrop-blur-sm text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl" required>
                        <option value="">Select your preferred service</option>
                        <option value="vip-companion">VIP Companion</option>
                        <option value="celebrity-escort">Celebrity Escort</option>
                        <option value="college-girl">College Girl Escort</option>
                        <option value="event-companion">Event Companion</option>
                        <option value="premium-call-girl">Premium Call Girl</option>
                        <option value="professional-escort">Professional Escort</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-800 mb-3">💬 Special Requirements</label>
                      <textarea 
                        placeholder="Any special preferences or requirements..."
                        rows={4}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none bg-white/80 backdrop-blur-sm text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl resize-none"
                      ></textarea>
                    </div>

                    <div className="text-center pt-6">
                      <button 
                        type="submit"
                        className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 hover:from-pink-700 hover:via-purple-700 hover:to-orange-700 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-3xl w-full md:w-auto min-w-[300px]"
                      >
                        🚀 Book Premium Service Now
                      </button>
                      <p className="text-sm text-gray-600 mt-4 font-semibold">
                        🔒 100% Confidential & Secure Booking Process
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-gradient-to-br from-white/90 to-purple-50/90 backdrop-blur-md rounded-2xl shadow-xl border-2 border-purple-200/50 p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">📞</div>
                  <h4 className="text-xl font-bold text-purple-800 mb-3">Call Us Now</h4>
                  <p className="text-lg font-semibold text-gray-700">+91 98765-43210</p>
                  <p className="text-sm text-gray-600 mt-2">24/7 Available</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/90 to-pink-50/90 backdrop-blur-md rounded-2xl shadow-xl border-2 border-pink-200/50 p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">💬</div>
                  <h4 className="text-xl font-bold text-pink-800 mb-3">WhatsApp</h4>
                  <p className="text-lg font-semibold text-gray-700">+91 98765-43210</p>
                  <p className="text-sm text-gray-600 mt-2">Instant Response</p>
                </div>
                
                <div className="bg-gradient-to-br from-white/90 to-orange-50/90 backdrop-blur-md rounded-2xl shadow-xl border-2 border-orange-200/50 p-6 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">📧</div>
                  <h4 className="text-xl font-bold text-orange-800 mb-3">Email Us</h4>
                  <p className="text-lg font-semibold text-gray-700">info@indoreescorts.com</p>
                  <p className="text-sm text-gray-600 mt-2">Quick Response</p>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="py-20 bg-gradient-to-br from-pink-200/60 via-orange-100/50 to-pink-200/60">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Common questions about our premium escort services and professional companions
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

          {/* Why Choose Our Services & Locations - Content Section */}
          <section className="py-20 bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-pink-500/10"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-16 left-16 w-40 h-40 bg-pink-300/40 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-16 right-16 w-48 h-48 bg-pink-400/40 rounded-full blur-xl animate-pulse delay-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-pink-200/40 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
            
            <div className="max-w-8xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Left Side - Services Content */}
                <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-pink-200/50 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6 drop-shadow-lg">
                      💎 Why Our Premium Services Are Best
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🌟</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-pink-800 mb-2">100% Verified & Authentic Escorts</h4>
                        <p className="text-pink-700 text-lg">All our companions are thoroughly verified with authentic profiles and genuine photographs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🔒</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-pink-800 mb-2">Complete Privacy & Discretion Guaranteed</h4>
                        <p className="text-pink-700 text-lg">Your privacy is our priority with confidential meetings and secure booking process always</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-pink-800 mb-2">24/7 Instant Booking & Quick Response</h4>
                        <p className="text-pink-700 text-lg">Round the clock availability with immediate confirmation and same day booking facility</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Location Content */}
                <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 border border-pink-200/50 shadow-2xl">
                  <div className="text-center mb-8">
                    <h3 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6 drop-shadow-lg">
                      📍 Why Our Indore Locations Are Perfect
                    </h3>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🏙️</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-pink-800 mb-2">15+ Premium Central Locations Coverage</h4>
                        <p className="text-pink-700 text-lg">Strategic coverage across Vijay Nagar, AB Road, Palasia and all major premium areas</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🚗</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-pink-800 mb-2">Easy Access & Discreet Meeting Points</h4>
                        <p className="text-pink-700 text-lg">Convenient locations with easy access, safe environments and complete discretion for clients</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200/60 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🏨</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-pink-800 mb-2">Luxury Hotels & Premium Venues Available</h4>
                        <p className="text-pink-700 text-lg">Partnership with 5-star hotels and luxury venues for unforgettable premium experiences always</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Bottom Statistics */}
              <div className="mt-16 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-pink-300/60">
                    <div className="text-4xl font-bold text-pink-800 mb-2">5000+</div>
                    <div className="text-pink-700 text-lg font-semibold">Happy Clients</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-pink-300/60">
                    <div className="text-4xl font-bold text-pink-800 mb-2">200+</div>
                    <div className="text-pink-700 text-lg font-semibold">Premium Escorts</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-pink-300/60">
                    <div className="text-4xl font-bold text-pink-800 mb-2">15+</div>
                    <div className="text-pink-700 text-lg font-semibold">Prime Locations</div>
                  </div>
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-pink-300/60">
                    <div className="text-4xl font-bold text-pink-800 mb-2">24/7</div>
                    <div className="text-pink-700 text-lg font-semibold">Service Available</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Our Services Section */}
          <section className="py-20 bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent mb-6">
                  Explore Our Services
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Our Premium Services Card */}
                <div className="bg-gradient-to-br from-pink-200/80 to-pink-300/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-pink-300/50">
                  <div className="text-center">
                    <div className="text-6xl mb-6">💎</div>
                    <h3 className="text-3xl font-bold text-pink-800 mb-4">Our Premium Services</h3>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Explore our complete range of escort services
                    </p>
                    <a href="/services" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Services →
                    </a>
                  </div>
                </div>

                {/* About Our Agency Card */}
                <div className="bg-gradient-to-br from-rose-200/80 to-pink-300/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-rose-300/50">
                  <div className="text-center">
                    <div className="text-6xl mb-6">🏢</div>
                    <h3 className="text-3xl font-bold text-rose-800 mb-4">About Our Agency</h3>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Learn about our professional escort agency
                    </p>
                    <a href="/about" className="inline-block bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Learn More →
                    </a>
                  </div>
                </div>

                {/* Photo Gallery Card */}
                <div className="bg-gradient-to-br from-purple-200/80 to-pink-300/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-300/50">
                  <div className="text-center">
                    <div className="text-6xl mb-6">📸</div>
                    <h3 className="text-3xl font-bold text-purple-800 mb-4">Photo Gallery</h3>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      View our beautiful companions gallery
                    </p>
                    <a href="/gallery" className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      View Gallery →
                    </a>
                  </div>
                </div>

                {/* Contact Us Card */}
                <div className="bg-gradient-to-br from-orange-200/80 to-pink-300/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-orange-300/50">
                  <div className="text-center">
                    <div className="text-6xl mb-6">📞</div>
                    <h3 className="text-3xl font-bold text-orange-800 mb-4">Contact Us</h3>
                    <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                      Get in touch for booking and inquiries
                    </p>
                    <a href="/contact" className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Contact Now →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <InternalLinks currentPage="/" />
            </div>
          </section>
          <IndoreEscortsContent />
        </main>
      </div>
    </>
  )
}
