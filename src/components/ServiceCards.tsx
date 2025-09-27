import Image from 'next/image'
import Link from 'next/link'

// Function to convert service title to URL slug
const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
  const serviceSlug = titleToSlug(service.title)
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative">
        <Image 
          src={service.image}
          alt={service.title}
          width={300}
          height={200}
          className="w-full h-40 object-cover"
          loading="eager"
          priority={index < 10}
        />
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm font-bold text-gray-800 mb-2 line-clamp-2">{service.title}</h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-3 flex-grow line-clamp-2">
          {service.description}
        </p>
        <Link 
          href={`/services/${serviceSlug}`}
          className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-3 py-2 rounded-lg font-bold text-xs transition-all duration-300 transform hover:scale-105 text-center"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}

export default function ServiceCards() {
  const services = [
    {
      title: "Celebrity Escorts",
      description: "Premium companions with star quality service",
      image: "/images/services/Celebrity Escorts.webp",
      buttonText: "Book Celebrity Girls"
    },
    {
      title: "VIP Escorts", 
      description: "Ultimate luxury companions for discerning clients",
      image: "/images/services/VIP Escorts.jpg",
      buttonText: "Book VIP Girls"
    },
    {
      title: "Premium Models",
      description: "High-end models with sophistication",
      image: "/images/services/Premium Models.jpg",
      buttonText: "Book Premium Girls"
    },
    {
      title: "College Girls",
      description: "Young energetic companions for memorable experiences", 
      image: "/images/services/College Girls.webp",
      buttonText: "Book College Girls"
    },
    {
      title: "Housewife Escorts",
      description: "Mature experienced companions with caring nature",
      image: "/images/services/Housewife Escorts.jpg",
      buttonText: "Book Housewife Girls"
    },
    {
      title: "Punjabi Women",
      description: "Beautiful Punjabi companions with traditional charm",
      image: "/images/services/Punjabi women.webp",
      buttonText: "Book Punjabi Girls"
    },
    {
      title: "Slim Escorts",
      description: "Elegant slim companions with perfect figure",
      image: "/images/services/Slim Escorts.webp",
      buttonText: "Book Slim Girls"
    },
    {
      title: "Unsatisfied Bhabhi",
      description: "Experienced companions seeking excitement",
      image: "/images/services/Unsatisfied Bhabhi.webp",
      buttonText: "Book Bhabhi"
    },
    {
      title: "Local Beauties",
      description: "Beautiful local companions who know Indore",
      image: "/images/services/Local Beauties.webp",
      buttonText: "Book Local Girls"
    },
    {
      title: "Event Companion",
      description: "Perfect companions for social events and parties",
      image: "/images/services/Event Companion.webp",
      buttonText: "Book Event Girls"
    },
    {
      title: "Pink Special",
      description: "Special premium companions for exclusive experiences",
      image: "/images/services/Pink Special.webp",
      buttonText: "Book Pink Girls"
    },
    {
      title: "Unsatisfied Females",
      description: "Mature women seeking meaningful connections",
      image: "/images/services/Unsatisfied Females.webp",
      buttonText: "Book Female Escorts"
    },
    {
      title: "Incall Escorts",
      description: "Premium incall services at luxury locations",
      image: "/images/services/Incall Escorts.webp",
      buttonText: "Book Incall Girls"
    },
    {
      title: "Mature Escorts",
      description: "Experienced mature companions with sophistication",
      image: "/images/services/Mature Escorts.webp",
      buttonText: "Book Mature Girls"
    },
    {
      title: "Young Girls",
      description: "Young beautiful companions for unforgettable experiences",
      image: "/images/services/Young Girls.webp",
      buttonText: "Book Young Girls"
    },
    {
      title: "Indore Escorts",
      description: "Premium local escorts with deep knowledge of Indore city",
      image: "/images/services/indore escorts.webp",
      buttonText: "Book Indore Girls"
    },
    {
      title: "Expert Services",
      description: "Expert companions with specialized skills and professional experience",
      image: "/images/services/Expert Services.webp",
      buttonText: "Book Expert Girls"
    },
    {
      title: "High Class Models",
      description: "Stunning high-class models with runway experience",
      image: "/images/services/High Class Models.webp",
      buttonText: "Book Model Girls"
    },
    {
      title: "Bold Girls",
      description: "Bold and confident companions ready for exciting adventures",
      image: "/images/services/bold girls.webp",
      buttonText: "Book Bold Girls"
    },
    {
      title: "Sexy Girls",
      description: "Incredibly attractive companions with mesmerizing charm",
      image: "/images/services/sexy girls.webp",
      buttonText: "Book Sexy Girls"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Premium Escorts In Indore - Our Services
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}