import Link from 'next/link'

interface InternalLink {
  href: string
  title: string
  description?: string
  keyword: string
}

interface InternalLinksProps {
  currentPage?: string
  location?: string
  className?: string
}

export default function InternalLinks({ currentPage, location, className = '' }: InternalLinksProps) {
  // Main service links
  const serviceLinks: InternalLink[] = [
    {
      href: '/services',
      title: 'Our Premium Services',
      description: 'Explore our complete range of escort services',
      keyword: 'escort services Indore'
    },
    {
      href: '/about',
      title: 'About Our Agency',
      description: 'Learn about our professional escort agency',
      keyword: 'escort agency Indore'
    },
    {
      href: '/gallery',
      title: 'Photo Gallery',
      description: 'View our beautiful companions gallery',
      keyword: 'escort gallery Indore'
    },
    {
      href: '/contact',
      title: 'Contact Us',
      description: 'Get in touch for booking and inquiries',
      keyword: 'book escorts Indore'
    }
  ]

  // Location links - all 12 locations
  const locationLinks: InternalLink[] = [
    {
      href: '/locations/ab-road',
      title: 'AB Road Escorts',
      description: 'Premium escort service in AB Road commercial hub',
      keyword: 'AB Road escorts'
    },
    {
      href: '/locations/palasia',
      title: 'Palasia Escorts',
      description: 'Professional escorts in Palasia business district',
      keyword: 'Palasia escorts'
    },
    {
      href: '/locations/bhawar-kuan',
      title: 'Bhawar Kuan Escorts',
      description: 'VIP escorts in prime Bhawar Kuan location',
      keyword: 'Bhawar Kuan escorts'
    },
    {
      href: '/locations/vijay-nagar',
      title: 'Vijay Nagar Escorts',
      description: 'Quality escort service in Vijay Nagar area',
      keyword: 'Vijay Nagar escorts'
    },
    {
      href: '/locations/airport-road',
      title: 'Airport Road Escorts',
      description: 'Premium companions near Airport Road',
      keyword: 'Airport Road escorts'
    },
    {
      href: '/locations/bombay-hospital',
      title: 'Bombay Hospital Escorts',
      description: 'Professional service near Bombay Hospital',
      keyword: 'Bombay Hospital escorts'
    },
    {
      href: '/locations/rajwada',
      title: 'Rajwada Escorts',
      description: 'Historic Rajwada area escort service',
      keyword: 'Rajwada escorts'
    },
    {
      href: '/locations/mg-road',
      title: 'MG Road Escorts',
      description: 'Business center escort companions',
      keyword: 'MG Road escorts'
    },
    {
      href: '/locations/ring-road',
      title: 'Ring Road Escorts',
      description: 'Well-connected area escort service',
      keyword: 'Ring Road escorts'
    },
    {
      href: '/locations/scheme-78',
      title: 'Scheme 78 Escorts',
      description: 'Residential area premium service',
      keyword: 'Scheme 78 escorts'
    },
    {
      href: '/locations/treasure-island',
      title: 'Treasure Island Escorts',
      description: 'Premium mall area escort service',
      keyword: 'Treasure Island escorts'
    }
  ]

  // Filter out current page
  const filteredServiceLinks = serviceLinks.filter(link => link.href !== currentPage)
  const filteredLocationLinks = locationLinks.filter(link => link.href !== currentPage)

  // If on a location page, prioritize nearby locations
  const prioritizedLocationLinks = location 
    ? filteredLocationLinks.sort((a, b) => {
        const aIsNearby = a.title.toLowerCase().includes(location.toLowerCase())
        const bIsNearby = b.title.toLowerCase().includes(location.toLowerCase())
        if (aIsNearby && !bIsNearby) return -1
        if (!aIsNearby && bIsNearby) return 1
        return 0
      })
    : filteredLocationLinks

  return (
    <div className={`internal-links space-y-8 ${className}`}>
      {/* Related Services */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Explore Our Services
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {filteredServiceLinks.slice(0, 4).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block p-4 border border-gray-200 rounded-lg hover:border-pink-300 hover:shadow-md transition-all group"
              title={link.keyword}
            >
              <h4 className="font-semibold text-pink-600 group-hover:text-pink-700 mb-1">
                {link.title}
              </h4>
              {link.description && (
                <p className="text-gray-600 text-sm">{link.description}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Location Links */}
      <section className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Our Service Locations
        </h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3">
          {prioritizedLocationLinks.slice(0, 8).map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block p-3 bg-white rounded-md hover:bg-pink-50 hover:shadow-sm transition-all text-center group"
              title={link.keyword}
            >
              <span className="text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
        
        {prioritizedLocationLinks.length > 8 && (
          <div className="mt-4 text-center">
            <Link
              href="/locations"
              className="inline-block bg-gradient-to-r from-pink-600 to-blue-600 text-white px-6 py-2 rounded-full hover:from-pink-700 hover:to-blue-700 transition-colors"
            >
              View All Locations
            </Link>
          </div>
        )}
      </section>
    </div>
  )
}

// Component for contextual internal links in content
export function ContextualLinks({ 
  keywords, 
  className = '' 
}: { 
  keywords: string[]
  className?: string 
}) {
  const linkMap: Record<string, InternalLink> = {
    'escort service': {
      href: '/services',
      title: 'escort service',
      keyword: 'escort service Indore'
    },
    'call girls': {
      href: '/services',
      title: 'call girls',
      keyword: 'call girls Indore'
    },
    'VIP escorts': {
      href: '/services',
      title: 'VIP escorts',
      keyword: 'VIP escorts Indore'
    },
    'AB Road': {
      href: '/locations/ab-road',
      title: 'AB Road',
      keyword: 'AB Road escorts'
    },
    'Palasia': {
      href: '/locations/palasia',
      title: 'Palasia',
      keyword: 'Palasia escorts'
    },
    'Bhawar Kuan': {
      href: '/locations/bhawar-kuan',
      title: 'Bhawar Kuan',
      keyword: 'Bhawar Kuan escorts'
    },
    'Vijay Nagar': {
      href: '/locations/vijay-nagar',
      title: 'Vijay Nagar',
      keyword: 'Vijay Nagar escorts'
    }
  }

  return (
    <div className={`contextual-links ${className}`}>
      {keywords.map((keyword, index) => {
        const link = linkMap[keyword]
        if (!link) return null
        
        return (
          <Link
            key={index}
            href={link.href}
            className="text-pink-600 hover:text-pink-700 underline"
            title={link.keyword}
          >
            {link.title}
          </Link>
        )
      })}
    </div>
  )
}