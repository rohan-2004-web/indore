import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

// Function to convert service title to URL slug
const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

// Memoized ServiceCard for better performance
const ServiceCard = memo(({ service, index }: { service: any, index: number }) => {
  const serviceSlug = titleToSlug(service.title)
  
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:scale-105">
      <div className="relative">
        <Image 
          src={service.image}
          alt={service.title}
          width={400}
          height={300}
          className="w-full h-60 object-cover object-[center_20%]"
          loading={index < 8 ? "eager" : "lazy"}
          priority={index < 4}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknydWzlLInTvYqr/2Q=="
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">{service.title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
          {service.description}
        </p>
        <Link 
          href={`/services/${serviceSlug}`}
          className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 text-center"
        >
          Book {service.title.split(' ').slice(0, 2).join(' ')} Escorts
        </Link>
      </div>
    </div>
  )
}

// Add display name for better debugging
ServiceCard.displayName = 'ServiceCard'

// Memoized main component
const ServiceCards = memo(() => {
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
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-orange-50">
      <div className="max-w-8xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-orange-500 to-pink-700 bg-clip-text text-transparent mb-6">
            Premium Escorts In Indore - Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover our exclusive collection of premium escort services with professional companions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

// Add display name for better debugging
ServiceCards.displayName = 'ServiceCards'

export default ServiceCards