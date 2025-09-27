import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const gradientColors = [
    'from-pink-500 to-pink-600',
    'from-blue-500 to-blue-600', 
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-green-500 to-green-600',
    'from-red-500 to-red-600',
    'from-indigo-500 to-indigo-600',
    'from-yellow-500 to-yellow-600',
    'from-cyan-500 to-cyan-600',
    'from-rose-500 to-rose-600'
  ]

  const borderColors = [
    'border-pink-100/50',
    'border-blue-100/50',
    'border-purple-100/50', 
    'border-orange-100/50',
    'border-green-100/50',
    'border-red-100/50',
    'border-indigo-100/50',
    'border-yellow-100/50',
    'border-cyan-100/50',
    'border-rose-100/50'
  ]

  const gradient = gradientColors[index % gradientColors.length]
  const borderColor = borderColors[index % borderColors.length]

  return (
    <div className={`bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border ${borderColor} transform hover:-translate-y-3 transition-all duration-500 min-h-[400px] flex flex-row items-center gap-6`}>
      <div className="w-48 h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-50 via-white to-blue-50 p-2">
        <Image 
          src={service.image}
          alt={service.title}
          width={400}
          height={300}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 rounded-xl"
          style={{ objectPosition: 'center center' }}
          loading="eager"
          priority={index < 4}
        />
      </div>
      
      <div className="flex-1 text-left">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{service.icon}</span>
          <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
        </div>
        
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {service.category}
        </p>
        
        <p className="text-gray-600 mb-6 text-base leading-relaxed">
          {service.description}
        </p>
        
        <Link 
          href={service.link || `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
          className={`inline-block bg-gradient-to-r ${gradient} text-white px-6 py-3 rounded-2xl font-bold text-sm hover:scale-105 transition-transform shadow-xl`}
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
      category: "CELEBRITY",
      link: "/services/celebrity-escorts"
    },
    {
      title: "VIP Escorts", 
      subtitle: "Ultimate Luxury",
      description: "Our most exclusive VIP escorts offer the ultimate in luxury and sophistication for discerning clients.",
      image: "/images/services/VIP Escorts.jpg",
      icon: "💫",
      category: "VIP",
      link: "/services/vip-escorts"
    },
    {
      title: "College Girls",
      subtitle: "Fresh & Young", 
      description: "Beautiful young companions with vibrant energy and charming personalities for memorable experiences.",
      image: "/images/services/College Girls.webp",
      icon: "💎",
      category: "YOUNG",
      link: "/services/college-girls"
    },
    {
      title: "Premium Models",
      subtitle: "Elite Fashion",
      description: "Stunning high-class models with runway experience and sophisticated charm for premium service.",
      image: "/images/services/Premium Models.jpg",
      icon: "👑",
      category: "MODEL",
      link: "/services/premium-models"
    },
    {
      title: "Russian Escorts",
      subtitle: "International",
      description: "Exotic Russian companions with international appeal and sophisticated European elegance.",
      image: "/images/services/Russian Escorts.jpg",
      icon: "🌍",
      category: "INTERNATIONAL",
      link: "/services/russian-escort"
    },
    {
      title: "Housewife Escorts",
      subtitle: "Mature & Caring",
      description: "Experienced mature companions with caring nature and understanding approach to companionship.",
      image: "/images/services/Housewife Escorts.jpg",
      icon: "💖",
      category: "MATURE",
      link: "/services/housewife-escorts"
    },
    {
      title: "High Class Models",
      subtitle: "Elite Fashion",
      description: "Professional models with runway experience and high-fashion sophistication for elite clientele.",
      image: "/images/services/High Class Models.webp",
      icon: "💃",
      category: "ELITE",
      link: "/services/high-class-models"
    },
    {
      title: "Event Companions",
      subtitle: "Perfect Plus One",
      description: "Professional companions for business events, parties, and social gatherings with perfect etiquette.",
      image: "/images/services/Event Companion.webp",
      icon: "🎭",
      category: "PROFESSIONAL",
      link: "/services/event-companion"
    },
    {
      title: "Dinner Dates",
      subtitle: "Romantic Evening",
      description: "Elegant companions for romantic dinner dates and fine dining experiences with sophistication.",
      image: "/images/services/Dinner Dates.webp",
      icon: "🍷",
      category: "ROMANTIC",
      link: "/services/dinner-dates"
    },
    {
      title: "Travel Companions", 
      subtitle: "Adventure Partners",
      description: "Perfect travel partners for business trips, vacations, or weekend getaways with engaging conversation.",
      image: "/images/services/Travel Companions.webp",
      icon: "✈️",
      category: "TRAVEL",
      link: "/services/travel-companions"
    },
    {
      title: "Punjabi Women",
      subtitle: "Traditional Beauty",
      description: "Authentic Punjabi companions with traditional charm and modern sophistication combined perfectly.",
      image: "/images/services/Punjabi women.webp",
      icon: "🌟",
      category: "TRADITIONAL",
      link: "/services/punjabi-women"
    },
    {
      title: "Call Girl Service",
      subtitle: "Professional",
      description: "Professional call girl services with verified companions available 24/7 across all Indore locations.",
      image: "/images/services/Call Girls.jpg",
      icon: "📞",
      category: "PROFESSIONAL",
      link: "/services/call-girl"
    },
    {
      title: "Independent Escorts",
      subtitle: "Self-Employed",
      description: "Independent escorts offering personalized service with direct booking and complete privacy assured.",
      image: "/images/services/Independent Escorts.jpg",
      icon: "🔮",
      category: "INDEPENDENT",
      link: "/services/independent-escort"
    },
    {
      title: "Luxury Escorts",
      subtitle: "Elite Experience",
      description: "Luxury escort services with sophisticated companions for an elite experience beyond expectations.",
      image: "/images/services/Luxury Escorts.jpg",
      icon: "💍",
      category: "LUXURY",
      link: "/services/luxury-escort"
    },
    {
      title: "Outcall Service",
      subtitle: "Your Location",
      description: "Professional outcall service to your hotel, home, or preferred location with complete discretion.",
      image: "/images/services/Outcall Service.webp",
      icon: "🏨",
      category: "OUTCALL",
      link: "/services/outcall-service"
    },
    {
      title: "Bold Girls",
      subtitle: "Confident",
      description: "Bold and confident companions ready for exciting adventures and unforgettable experiences.",
      image: "/images/services/bold girls.webp",
      icon: "🔥",
      category: "BOLD",
      link: "/services/bold-girls"
    },
    {
      title: "Sexy Girls",
      subtitle: "Stunning Beauty",
      description: "Incredibly attractive companions with mesmerizing charm and irresistible appeal for perfect companionship.",
      image: "/images/services/sexy girls.webp",
      icon: "💋",
      category: "GLAMOUR",
      link: "/services/sexy-girls"
    },
    {
      title: "Expert Services",
      subtitle: "Professional",
      description: "Expert companions with specialized skills and professional experience for sophisticated clientele.",
      image: "/images/services/Expert Services.webp",
      icon: "🎯",
      category: "EXPERT",
      link: "/services/expert-services"
    },
    {
      title: "Young Girls",
      subtitle: "Energetic",
      description: "Young and energetic companions with fresh perspectives and vibrant personalities for fun experiences.",
      image: "/images/services/Young Girls.jpg",
      icon: "🌸",
      category: "YOUTHFUL",
      link: "/services/young-girls"
    },
    {
      title: "Premium Companions",
      subtitle: "Elite Service",
      description: "Exclusive premium companions for discerning clients who demand the finest in escort services.",
      image: "/images/services/Premium Companions.webp",
      icon: "👑",
      category: "PREMIUM",
      link: "/services/premium-companions"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-pink-200/70 via-orange-100/60 to-pink-300/70">
      <div className="max-w-full mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
            Premium Escort Services in Indore
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Professional escort agency offering verified companions, celebrity escorts, and premium call girls across all major locations in Indore including AB Road, Palasia, Bhawar Kuan, and Vijay Nagar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Book Your Perfect Companion Today!</h3>
            <p className="text-xl mb-6 opacity-90">Available 24/7 • Complete Discretion • Verified Profiles</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+919372662471"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
              >
                ☎️ Call +91 9372662471
              </a>
              <a 
                href="https://wa.me/919372662471"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg"
              >
                � WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}