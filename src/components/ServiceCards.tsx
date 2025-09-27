import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
      <div className="relative">
        <Image 
          src={service.image}
          alt={service.title}
          width={400}
          height={300}
          className="w-full h-64 object-cover"
          style={{ objectPosition: 'center top' }}
          loading="eager"
          priority={index < 6}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-gray-800">
            {service.icon}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-pink-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
            {service.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
        <div className="text-pink-600 font-semibold text-sm mb-3 uppercase tracking-wide">
          {service.category}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <Link 
          href={`tel:+919372662471`}
          className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105"
        >
          Book Now • {service.subtitle}
        </Link>
      </div>
    </div>
  )
}

export default function ServiceCards() {
  const services = [
    {
      title: "Celebrity Escorts",
      subtitle: "Star Quality",
      description: "Experience celebrity-level companions with exceptional elegance and sophistication. Premium service guaranteed.",
      image: "/images/services/Celebrity Escorts.webp",
      icon: "⭐",
      category: "CELEBRITY"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts offer the ultimate in luxury and sophistication for discerning clients.",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young", 
      description: "Beautiful young companions with vibrant energy and charming personalities for memorable experiences.",
      image: "/images/services/College Girls.webp",
      icon: "💎",
      category: "YOUNG"
    },
    {
      title: "Premium Models",
      subtitle: "Elite Fashion",
      description: "Stunning high-class models with runway experience and sophisticated charm for premium service.",
      image: "/images/services/Premium Models.jpg",
      icon: "👑",
      category: "MODEL"
    },
    {
      title: "Russian Escorts",
      subtitle: "International",
      description: "Exotic Russian companions with international appeal and sophisticated European elegance.",
      image: "/images/services/Russian Escorts.jpg",
      icon: "🌍",
      category: "INTERNATIONAL"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature & Caring",
      description: "Experienced mature companions with caring nature and understanding approach to companionship.",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "💖",
      category: "MATURE"
    },
    {
      title: "High Class Models",
      subtitle: "Elite Fashion",
      description: "Professional models with runway experience and high-fashion sophistication for elite clientele.",
      image: "/images/services/High Class Models.webp",
      icon: "💃",
      category: "ELITE"
    },
    {
      title: "Event Companions",
      subtitle: "Perfect Plus One",
      description: "Professional companions for business events, parties, and social gatherings with perfect etiquette.",
      image: "/images/services/Event Companion.webp",
      icon: "🎭",
      category: "PROFESSIONAL"
    },
    {
      title: "Sexy Girls",
      subtitle: "Stunning Beauty",
      description: "Incredibly attractive companions with mesmerizing charm and irresistible appeal for perfect companionship.",
      image: "/images/services/sexy girls.webp",
      icon: "💋",
      category: "GLAMOUR"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions with traditional charm and modern sophistication combined perfectly.",
      image: "/images/services/Punjabi women.webp",
      icon: "🌟",
      category: "TRADITIONAL"
    },
    {
      title: "Bold Girls",
      subtitle: "Confident",
      description: "Bold and confident companions ready for exciting adventures and unforgettable experiences.",
      image: "/images/services/bold girls.webp",
      icon: "🔥",
      category: "BOLD"
    },
    {
      title: "Young Girls",
      subtitle: "Energetic",
      description: "Young and energetic companions with fresh perspectives and vibrant personalities for fun experiences.",
      image: "/images/services/Young Girls.webp",
      icon: "🌸",
      category: "YOUTHFUL"
    },
    {
      title: "Expert Services",
      subtitle: "Professional",
      description: "Expert companions with specialized skills and professional experience for sophisticated clientele.",
      image: "/images/services/Expert Services.webp",
      icon: "🎯",
      category: "EXPERT"
    },
    {
      title: "Mature Escorts",
      subtitle: "Experienced",
      description: "Mature and experienced companions who understand the art of sophisticated companionship and conversation.",
      image: "/images/services/Mature Escorts.webp",
      icon: "🍷",
      category: "MATURE"
    },
    {
      title: "Local Beauties",
      subtitle: "Regional Charm",
      description: "Beautiful local companions with regional charm and cultural understanding of Indore traditions.",
      image: "/images/services/Local Beauties.webp",
      icon: "🌺",
      category: "LOCAL"
    },
    {
      title: "Slim Escorts",
      subtitle: "Elegant Figure",
      description: "Elegantly slim companions with perfect figures and graceful personalities for refined experiences.",
      image: "/images/services/Slim Escorts.webp",
      icon: "👗",
      category: "ELEGANT"
    },
    {
      title: "Incall Escorts",
      subtitle: "Private Location",
      description: "Professional incall services at premium locations with complete privacy and luxury amenities.",
      image: "/images/services/Incall Escorts.webp",
      icon: "🏨",
      category: "INCALL"
    },
    {
      title: "Pink Special",
      subtitle: "Premium Experience",
      description: "Our signature pink special service offering the ultimate premium experience with luxury amenities.",
      image: "/images/services/Pink Special.webp",
      icon: "💕",
      category: "PREMIUM"
    },
    {
      title: "Unsatisfied Females",
      subtitle: "Discreet Service",
      description: "Discreet and understanding companions for mature clients seeking meaningful connections and satisfaction.",
      image: "/images/services/Unsatisfied Females.webp",
      icon: "💝",
      category: "DISCREET"
    },
    {
      title: "Indore Escorts",
      subtitle: "Local Premium",
      description: "Premium escort services by local Indore companions who know the city and provide authentic experiences.",
      image: "/images/services/indore escorts.webp",
      icon: "🏙️",
      category: "LOCAL PREMIUM"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Premium Escort Services in Indore - All Categories Available
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional escort services in Indore with verified profiles, 24/7 availability, and complete privacy protection across all major Indore locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="tel:+919372662471"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}