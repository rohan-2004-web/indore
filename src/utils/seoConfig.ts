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
    'escorts in Indore',
    'Indore escort service',
    'premium call girls Indore',
    '24/7 escort service',
    'VIP companions Indore',
    'professional escort agency',
    'discreet service Indore'
  ]

  if (config.location) {
    dynamicKeywords.push(
      `escorts in ${config.location.name}`,
      `call girls in ${config.location.name}`,
      `escort service in ${config.location.name}`,
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
    title: 'Escorts in AB Road | Premium Call Girls in AB Road Indore',
    description: 'Best escorts in AB Road, Indore with premium call girls and VIP companions. Professional agency serving AB Road commercial area.',
    keywords: [
      'escorts in AB Road',
      'escorts in AB Road Indore',
      'call girls in AB Road',
      'escort service in AB Road',
      'AB Road escorts',
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
    title: 'Escorts in Palasia | Premium Call Girls in Palasia Indore',
    description: 'Professional escorts in Palasia, Indore with verified call girls and premium companions. Serving Palasia business district.',
    keywords: [
      'escorts in Palasia',
      'escorts in Palasia Indore',
      'call girls in Palasia',
      'escort service in Palasia',
      'Palasia escorts',
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
    title: 'Escorts in Bhawar Kuan | Premium Call Girls in Bhawar Kuan',
    description: 'Top-rated escorts in Bhawar Kuan, Indore with beautiful call girls and VIP companions. Professional service in prime location.',
    keywords: [
      'escorts in Bhawar Kuan',
      'escorts in Bhawar Kuan Indore',
      'call girls in Bhawar Kuan',
      'escort service in Bhawar Kuan',
      'Bhawar Kuan escorts',
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
    title: 'Escorts in Vijay Nagar | Premium Call Girls in Vijay Nagar',
    description: 'Professional escorts in Vijay Nagar, Indore with premium call girls and VIP companions. Serving Vijay Nagar commercial center.',
    keywords: [
      'escorts in Vijay Nagar',
      'escorts in Vijay Nagar Indore',
      'call girls in Vijay Nagar',
      'escort service in Vijay Nagar',
      'Vijay Nagar escorts',
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
    title: 'Escorts in Scheme 78 | Premium Call Girls in Scheme 78 Indore',
    description: 'Exclusive escorts in Scheme 78, Indore with premium call girls and VIP companions. Professional service in upscale residential area.',
    keywords: [
      'escorts in Scheme 78',
      'escorts in Scheme 78 Indore',
      'call girls in Scheme 78',
      'escort service in Scheme 78',
      'Scheme 78 escorts',
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
    title: 'Escorts in Saket | Premium Call Girls in Saket Indore',
    description: 'Top escorts in Saket, Indore with beautiful call girls and VIP companions. Professional agency serving Saket residential area.',
    keywords: [
      'escorts in Saket',
      'escorts in Saket Indore',
      'call girls in Saket',
      'escort service in Saket',
      'Saket escorts',
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
    title: 'Escorts in Ring Road | Premium Call Girls on Ring Road Indore',
    description: 'Professional escorts in Ring Road, Indore with verified call girls and VIP companions. Serving Ring Road commercial corridor.',
    keywords: [
      'escorts in Ring Road',
      'escorts in Ring Road Indore',
      'call girls in Ring Road',
      'escort service in Ring Road',
      'Ring Road escorts',
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
    title: 'Escorts in Rajwada | Premium Call Girls near Rajwada Indore',
    description: 'Heritage area escorts in Rajwada, Indore with premium call girls and cultural companions. Professional service in historic location.',
    keywords: [
      'escorts in Rajwada',
      'escorts in Rajwada Indore',
      'call girls in Rajwada',
      'escort service in Rajwada',
      'Rajwada escorts',
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
    title: 'Escorts in MG Road | Premium Call Girls on MG Road Indore',
    description: 'Elite escorts in MG Road, Indore with premium call girls and VIP companions. Professional agency serving MG Road commercial hub.',
    keywords: [
      'escorts in MG Road',
      'escorts in MG Road Indore',
      'call girls in MG Road',
      'escort service in MG Road',
      'MG Road escorts',
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
    title: 'Escorts in Treasure Island | Premium Call Girls at Treasure Island Indore',
    description: 'Luxury escorts in Treasure Island, Indore with premium call girls and VIP companions. Professional service at entertainment hub.',
    keywords: [
      'escorts in Treasure Island',
      'escorts in Treasure Island Indore',
      'call girls in Treasure Island',
      'escort service in Treasure Island',
      'Treasure Island escorts',
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
    title: 'Escorts in Airport Road | Premium Call Girls on Airport Road Indore',
    description: 'Professional escorts in Airport Road, Indore with premium call girls and VIP companions. Serving Airport Road business corridor.',
    keywords: [
      'escorts in Airport Road',
      'escorts in Airport Road Indore',
      'call girls in Airport Road',
      'escort service in Airport Road',
      'Airport Road escorts',
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
    title: 'Escorts in Bombay Hospital | Premium Call Girls near Bombay Hospital Indore',
    description: 'Discreet escorts in Bombay Hospital area, Indore with premium call girls and professional companions. Medical district service.',
    keywords: [
      'escorts in Bombay Hospital',
      'escorts in Bombay Hospital Indore',
      'call girls in Bombay Hospital',
      'escort service in Bombay Hospital',
      'Bombay Hospital escorts',
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