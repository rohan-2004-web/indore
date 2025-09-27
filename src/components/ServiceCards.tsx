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
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image 
            src={service.image}
            alt={service.title}
            width={400}
            height={300}
            className="w-full h-64 md:h-full object-cover"
            style={{ objectPosition: 'center top' }}
            loading="eager"
            priority={index < 6}
          />
        </div>
        
        <div className="md:w-2/3 p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            {service.description}
          </p>
          <Link 
            href={`/services/${serviceSlug}`}
            className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 w-fit"
          >
            {service.buttonText}
          </Link>
        </div>
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Premium Escorts In Indore - Our Services
          </h2>
        </div>
        
        <div className="space-y-0">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}