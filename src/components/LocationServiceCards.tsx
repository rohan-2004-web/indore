import React from 'react'

interface LocationServiceCardsProps {
  locationName: string
}

export default function LocationServiceCards({ locationName }: LocationServiceCardsProps) {
  const services = [
    {
      title: "Luxury Escorts",
      image: "/images/services/VIP Escorts.jpg",
      description: `Ultimate luxury companions for sophisticated gentlemen in ${locationName}`,
      link: "/services/luxury-escort",
      gradient: "from-purple-500 to-pink-500",
      icon: "👑"
    },
    {
      title: "Russian Escorts", 
      image: "/images/services/Celebrity Escorts.webp",
      description: "Exotic Russian beauties available for premium companionship",
      link: "/services/russian-escort",
      gradient: "from-red-500 to-orange-500",
      icon: "🇷🇺"
    },
    {
      title: "Independent Escorts",
      image: "/images/services/indore escorts.webp", 
      description: "Self-managed premium companions with personal touch",
      link: "/services/independent-escort",
      gradient: "from-blue-500 to-purple-500",
      icon: "💫"
    },
    {
      title: "Call Girl Service",
      image: "/images/services/College Girls.webp",
      description: `Professional call girls available 24/7 in ${locationName} area`,
      link: "/services/call-girl",
      gradient: "from-pink-500 to-rose-500",
      icon: "📞"
    },
    {
      title: "Housewife Escorts",
      image: "/images/services/Housewife Escorts.jpg",
      description: "Experienced mature women offering warm companionship",
      link: "/services/housewife-escorts", 
      gradient: "from-amber-500 to-orange-500",
      icon: "🏡"
    },
    {
      title: "High Class Models",
      image: "/images/services/High Class Models.webp",
      description: "Fashion models and beauty queens for elite events",
      link: "/services/high-class-models",
      gradient: "from-emerald-500 to-teal-500",
      icon: "👗"
    },
    {
      title: "Mature Escorts",
      image: "/images/services/Mature Escorts.webp", 
      description: "Sophisticated mature ladies with experience and charm",
      link: "/services/mature-escorts",
      gradient: "from-violet-500 to-purple-500",
      icon: "🌹"
    },
    {
      title: "Slim Escorts",
      image: "/images/services/Slim Escorts.webp",
      description: "Elegant slim figured companions for perfect dates", 
      link: "/services/slim-escorts",
      gradient: "from-cyan-500 to-blue-500",
      icon: "💃"
    },
    {
      title: "Punjabi Women",
      image: "/images/services/Punjabi women.webp",
      description: "Beautiful Punjabi companions with cultural charm",
      link: "/services/punjabi-women",
      gradient: "from-yellow-500 to-orange-500", 
      icon: "🌻"
    },
    {
      title: "Sexy Girls",
      image: "/images/services/sexy girls.webp",
      description: "Attractive young companions for fun and entertainment",
      link: "/services/sexy-girls",
      gradient: "from-red-500 to-pink-500",
      icon: "🔥"
    },
    {
      title: "Local Beauties",
      image: "/images/services/Local Beauties.webp",
      description: "Local Indore beauties familiar with city's best spots",
      link: "/services/local-beauties",
      gradient: "from-green-500 to-emerald-500",
      icon: "🌸"
    },
    {
      title: "Young Girls",
      image: "/images/services/Young Girls.webp",
      description: "Fresh young companions with vibrant energy and charm", 
      link: "/services/young-girls",
      gradient: "from-pink-400 to-rose-400",
      icon: "🌺"
    },
    {
      title: "Bold Girls",
      image: "/images/services/bold girls.webp",
      description: "Confident and adventurous companions for exciting experiences",
      link: "/services/bold-girls", 
      gradient: "from-indigo-500 to-purple-500",
      icon: "⚡"
    },
    {
      title: "Incall Escorts",
      image: "/images/services/Incall Escorts.webp",
      description: "Private venues available for discrete meetings",
      link: "/services/incall-escorts",
      gradient: "from-teal-500 to-cyan-500", 
      icon: "🏠"
    },
    {
      title: "Event Companions",
      image: "/images/services/Event Companion.webp",
      description: "Perfect companions for business events and social gatherings",
      link: "/services/event-companion",
      gradient: "from-purple-500 to-indigo-500",
      icon: "🎭"
    },
    {
      title: "Expert Services", 
      image: "/images/services/Expert Services.webp",
      description: "Specialized services with professional expertise and care",
      link: "/services/expert-services",
      gradient: "from-orange-500 to-red-500",
      icon: "⭐"
    },
    {
      title: "Unsatisfied Females",
      image: "/images/services/Unsatisfied Females.webp",
      description: "Mature women seeking companionship and understanding",
      link: "/services/unsatisfied-females",
      gradient: "from-rose-500 to-pink-500", 
      icon: "💕"
    },
    {
      title: "Unsatisfied Bhabhi",
      image: "/images/services/Unsatisfied Bhabhi.webp", 
      description: "Experienced married women for discrete relationships",
      link: "/services/unsatisfied-bhabhi",
      gradient: "from-red-400 to-rose-400",
      icon: "🌹"
    },
    {
      title: "Pink Special",
      image: "/images/services/Pink Special.webp",
      description: "Special premium services with exclusive arrangements",
      link: "/services/pink-special",
      gradient: "from-pink-500 to-fuchsia-500",
      icon: "💖"
    },
    {
      title: "Premium Escort",
      image: "/images/services/Premium Models.jpg",
      description: "Top-tier escort services with luxury amenities",
      link: "/services/premium-escort", 
      gradient: "from-gold-500 to-yellow-500",
      icon: "👑"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">
            🌟 Complete {locationName} Services Catalogue 🌟
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our extensive range of premium escort services in {locationName}. Each service is carefully curated to meet the highest standards of elegance and sophistication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
              {/* Service Image */}
              <div className="relative h-72 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-3xl p-2">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/images/services/indore escorts.webp'
                  }}
                />
                <div className={`absolute inset-2 bg-gradient-to-t ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                <div className="absolute top-4 right-4 text-xl bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg border border-white/20">
                  {service.icon}
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/70 backdrop-blur-sm rounded-xl p-3">
                  <h4 className="text-white font-bold text-sm text-center">{service.title}</h4>
                </div>
              </div>
              
              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <a 
                    href={service.link}
                    className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Book Now →
                  </a>
                  <div className="text-pink-500 font-semibold text-sm">Available 24/7</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="text-center mt-16">
          <a href="/services" className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl">
            🌟 View All Indore Services 🌟
          </a>
        </div>
      </div>
    </section>
  )
}