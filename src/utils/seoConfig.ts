import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonicalUrl?: string
  ogImage?: string
  location?: {
    name: string
    area: string
    landmarks: string[]
  }
  service?: {
    name: string
    category: string
    price?: string
  }
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = 'https://saumyakapoor.in'
  const siteName = 'Indore Premium Escort Service'
  
  // Enhanced title with location and service context
  const enhancedTitle = config.location 
    ? `${config.title} in ${config.location.name} | ${siteName}`
    : `${config.title} | ${siteName}`
  
  // Enhanced description with LSI keywords
  const enhancedDescription = config.location
    ? `${config.description} Professional escort service in ${config.location.name}, Indore near ${config.location.landmarks.slice(0, 3).join(', ')}. 24/7 available, verified profiles, discreet service.`
    : config.description

  // Dynamic keywords based on location and service
  const dynamicKeywords = [
    ...config.keywords,
    'Indore escort service',
    'premium call girls Indore',
    '24/7 escort service',
    'VIP companions Indore',
    'professional escort agency',
    'discreet service Indore'
  ]

  if (config.location) {
    dynamicKeywords.push(
      `${config.location.name} escorts`,
      `call girls ${config.location.name}`,
      `escort service ${config.location.name}`,
      ...config.location.landmarks.map(landmark => `escorts near ${landmark}`)
    )
  }

  return {
    title: enhancedTitle,
    description: enhancedDescription,
    keywords: dynamicKeywords.join(', '),
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: enhancedTitle,
      description: enhancedDescription,
      type: 'website',
      locale: 'en_US',
      url: config.canonicalUrl || baseUrl,
      siteName: siteName,
      images: [
        {
          url: config.ogImage || '/images/services/indore escorts.webp',
          width: 1200,
          height: 630,
          alt: enhancedTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: enhancedTitle,
      description: enhancedDescription,
      creator: '@indoreescorts',
      site: '@indoreescorts',
      images: [config.ogImage || '/images/services/indore escorts.webp'],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: config.canonicalUrl || baseUrl,
    },
  }
}

// Location-specific SEO configs
export const locationSEOConfigs = {
  'ab-road': {
    title: 'AB Road Escort Service | Premium Call Girls in AB Road Indore',
    description: 'Best escort service in AB Road, Indore with premium call girls and VIP companions. Professional agency serving AB Road commercial area.',
    keywords: [
      'AB Road escorts',
      'call girls AB Road',
      'escort service AB Road',
      'AB Road Indore escorts',
      'commercial hub escorts',
      'business district companions'
    ],
    location: {
      name: 'AB Road',
      area: 'Commercial Hub',
      landmarks: [
        'Brilliant Convention Centre',
        'AB Road Commercial Complex',
        'Marriott Hotel',
        'Central Mall',
        'Business District'
      ]
    }
  },
  'palasia': {
    title: 'Palasia Escort Service | Premium Call Girls in Palasia Indore',
    description: 'Professional escort service in Palasia, Indore with verified call girls and premium companions. Serving Palasia business district.',
    keywords: [
      'Palasia escorts',
      'call girls Palasia',
      'escort service Palasia',
      'Palasia Indore escorts',
      'business district escorts',
      'Palasia companions'
    ],
    location: {
      name: 'Palasia',
      area: 'Business District',
      landmarks: [
        'Palasia Square',
        'Business District',
        'Commercial Complex',
        'Hotel Radisson',
        'Trade Center'
      ]
    }
  },
  'bhawar-kuan': {
    title: 'Bhawar Kuan Escort Service | Premium Call Girls in Bhawar Kuan',
    description: 'Top-rated escort service in Bhawar Kuan, Indore with beautiful call girls and VIP companions. Professional service in prime location.',
    keywords: [
      'Bhawar Kuan escorts',
      'call girls Bhawar Kuan',
      'escort service Bhawar Kuan',
      'Bhawar Kuan Indore',
      'prime location escorts'
    ],
    location: {
      name: 'Bhawar Kuan',
      area: 'Prime Location',
      landmarks: [
        'Bhawar Kuan Square',
        'Prime Commercial Area',
        'Shopping Complex',
        'Business Hub',
        'Central Location'
      ]
    }
  },
  'vijay-nagar': {
    title: 'Vijay Nagar Escort Service | Premium Call Girls in Vijay Nagar',
    description: 'Professional escort service in Vijay Nagar, Indore with premium call girls and VIP companions. Serving Vijay Nagar commercial center.',
    keywords: [
      'Vijay Nagar escorts',
      'call girls Vijay Nagar',
      'escort service Vijay Nagar',
      'Vijay Nagar Indore',
      'commercial center escorts'
    ],
    location: {
      name: 'Vijay Nagar',
      area: 'Commercial Center',
      landmarks: [
        'Vijay Nagar Square',
        'Commercial Center',
        'Shopping Mall',
        'Business Complex',
        'Central Plaza'
      ]
    }
  },
  'scheme-78': {
    title: 'Scheme 78 Escort Service | Premium Call Girls in Scheme 78 Indore',
    description: 'Exclusive escort service in Scheme 78, Indore with premium call girls and VIP companions. Professional service in upscale residential area.',
    keywords: [
      'Scheme 78 escorts',
      'call girls Scheme 78',
      'escort service Scheme 78',
      'Scheme 78 Indore escorts',
      'residential area escorts',
      'upscale companions Scheme 78'
    ],
    location: {
      name: 'Scheme 78',
      area: 'Upscale Residential',
      landmarks: [
        'Scheme 78 Square',
        'Residential Complex',
        'Shopping Center',
        'Community Hub',
        'Premium Locality'
      ]
    }
  },
  'saket': {
    title: 'Saket Escort Service | Premium Call Girls in Saket Indore',
    description: 'Top escort service in Saket, Indore with beautiful call girls and VIP companions. Professional agency serving Saket residential area.',
    keywords: [
      'Saket escorts',
      'call girls Saket',
      'escort service Saket',
      'Saket Indore escorts',
      'residential escorts Saket'
    ],
    location: {
      name: 'Saket',
      area: 'Residential Hub',
      landmarks: [
        'Saket Nagar',
        'Residential Area',
        'Local Market',
        'Community Center',
        'Peaceful Locality'
      ]
    }
  },
  'ring-road': {
    title: 'Ring Road Escort Service | Premium Call Girls on Ring Road Indore',
    description: 'Professional escort service on Ring Road, Indore with verified call girls and VIP companions. Serving Ring Road commercial corridor.',
    keywords: [
      'Ring Road escorts',
      'call girls Ring Road',
      'escort service Ring Road',
      'Ring Road Indore escorts',
      'commercial corridor escorts'
    ],
    location: {
      name: 'Ring Road',
      area: 'Commercial Corridor',
      landmarks: [
        'Ring Road Junction',
        'Commercial Corridor',
        'Business Centers',
        'Shopping Complexes',
        'Highway Access'
      ]
    }
  },
  'rajwada': {
    title: 'Rajwada Escort Service | Premium Call Girls near Rajwada Indore',
    description: 'Heritage area escort service near Rajwada, Indore with premium call girls and cultural companions. Professional service in historic location.',
    keywords: [
      'Rajwada escorts',
      'call girls Rajwada',
      'escort service Rajwada',
      'Rajwada Indore escorts',
      'heritage area escorts',
      'cultural companions'
    ],
    location: {
      name: 'Rajwada',
      area: 'Heritage District',
      landmarks: [
        'Rajwada Palace',
        'Heritage District',
        'Cultural Center',
        'Historic Market',
        'Traditional Area'
      ]
    }
  },
  'mg-road': {
    title: 'MG Road Escort Service | Premium Call Girls on MG Road Indore',
    description: 'Elite escort service on MG Road, Indore with premium call girls and VIP companions. Professional agency serving MG Road commercial hub.',
    keywords: [
      'MG Road escorts',
      'call girls MG Road',
      'escort service MG Road',
      'MG Road Indore escorts',
      'commercial hub escorts'
    ],
    location: {
      name: 'MG Road',
      area: 'Commercial Hub',
      landmarks: [
        'MG Road Junction',
        'Commercial Hub',
        'Business District',
        'Shopping Area',
        'Central Location'
      ]
    }
  },
  'treasure-island': {
    title: 'Treasure Island Escort Service | Premium Call Girls at Treasure Island Indore',
    description: 'Luxury escort service at Treasure Island, Indore with premium call girls and VIP companions. Professional service at entertainment hub.',
    keywords: [
      'Treasure Island escorts',
      'call girls Treasure Island',
      'escort service Treasure Island',
      'Treasure Island Indore escorts',
      'entertainment hub escorts'
    ],
    location: {
      name: 'Treasure Island',
      area: 'Entertainment Hub',
      landmarks: [
        'Treasure Island Mall',
        'Entertainment Complex',
        'Shopping Center',
        'Food Court',
        'Recreation Area'
      ]
    }
  },
  'airport-road': {
    title: 'Airport Road Escort Service | Premium Call Girls on Airport Road Indore',
    description: 'Professional escort service on Airport Road, Indore with premium call girls and VIP companions. Serving Airport Road business corridor.',
    keywords: [
      'Airport Road escorts',
      'call girls Airport Road',
      'escort service Airport Road',
      'Airport Road Indore escorts',
      'business corridor escorts'
    ],
    location: {
      name: 'Airport Road',
      area: 'Business Corridor',
      landmarks: [
        'Airport Road',
        'Business Corridor',
        'Corporate Offices',
        'Hotel District',
        'Airport Access'
      ]
    }
  },
  'bombay-hospital': {
    title: 'Bombay Hospital Area Escort Service | Premium Call Girls near Bombay Hospital Indore',
    description: 'Discreet escort service near Bombay Hospital, Indore with premium call girls and professional companions. Medical district service.',
    keywords: [
      'Bombay Hospital escorts',
      'call girls Bombay Hospital',
      'escort service Bombay Hospital',
      'Bombay Hospital Indore escorts',
      'medical district escorts'
    ],
    location: {
      name: 'Bombay Hospital',
      area: 'Medical District',
      landmarks: [
        'Bombay Hospital',
        'Medical District',
        'Healthcare Hub',
        'Professional Area',
        'Medical Complex'
      ]
    }
  }
}

// Service-specific SEO configs
export const serviceSEOConfigs = {
  celebrity: {
    title: 'Celebrity Escorts in Indore | Premium Star Quality Service',
    description: 'Exclusive celebrity-level escorts in Indore with star quality service. Premium companions with exceptional elegance and sophistication.',
    keywords: [
      'celebrity escorts Indore',
      'star quality escorts',
      'premium celebrity companions',
      'high-class escorts',
      'luxury escort service'
    ]
  },
  college: {
    title: 'College Girl Escorts in Indore | Fresh & Young Companions',
    description: 'Beautiful college girl escorts in Indore with fresh energy and charming personalities. Young professional companions.',
    keywords: [
      'college girl escorts Indore',
      'young escorts Indore',
      'student companions',
      'fresh escorts',
      'young call girls'
    ]
  },
  punjabi: {
    title: 'Punjabi Women Escorts in Indore | Traditional Beauty',
    description: 'Authentic Punjabi women escorts in Indore with traditional charm and modern sophistication. Cultural companions.',
    keywords: [
      'Punjabi women escorts',
      'traditional escorts Indore',
      'cultural companions',
      'Punjabi call girls',
      'traditional beauty'
    ]
  }
}