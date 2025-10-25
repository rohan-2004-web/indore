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
  const siteName = 'Escorts Service Indore'
  
  // Enhanced title with location and service context
  const enhancedTitle = config.location 
    ? `${config.title} in ${config.location.name} | ${siteName}`
    : `${config.title} | ${siteName}`
  
  // Enhanced description with LSI keywords
  const enhancedDescription = config.location
    ? `${config.description} Professional escorts service Indore in ${config.location.name} near ${config.location.landmarks.slice(0, 3).join(', ')}. 24/7 available, verified profiles, discreet service.`
    : config.description

  // Dynamic keywords based on location and service
  const dynamicKeywords = [
    ...config.keywords,
    'escorts service indore',
    'escorts in Indore',
    'Indore escort service',
    'call girls Indore',
    '24/7 escort service',
    'VIP companions Indore',
    'professional escort agency',
    'discreet escorts service Indore'
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
    title: 'Escorts Service Indore AB Road | Call Girls AB Road 24/7',
    description: 'Best escorts service Indore AB Road area with verified call girls and VIP companions. Professional escorts service in AB Road commercial hub 24/7 available.',
    keywords: [
      'escorts service indore ab road',
      'escorts in AB Road',
      'call girls in AB Road',
      'escort service AB Road',
      'escorts service indore',
      'AB Road escorts Indore',
      'commercial hub escorts'
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
    title: 'Escorts Service Indore Palasia | Call Girls Palasia 24/7',
    description: 'Professional escorts service Indore Palasia with verified call girls and VIP companions. Best escorts service in Palasia business district.',
    keywords: [
      'escorts service indore palasia',
      'escorts in Palasia',
      'call girls in Palasia',
      'escort service Palasia',
      'escorts service indore',
      'Palasia escorts Indore',
      'business district escorts'
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
    title: 'Escorts Service Indore Bhawar Kuan | Call Girls Bhawar Kuan 24/7',
    description: 'Professional escorts service Indore Bhawar Kuan with verified call girls. Best escorts service at Bhawar Kuan prime location.',
    keywords: [
      'escorts service indore bhawar kuan',
      'escorts in Bhawar Kuan',
      'call girls in Bhawar Kuan',
      'escorts service indore',
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
    title: 'Escorts Service Indore Vijay Nagar | Call Girls Vijay Nagar 24/7',
    description: 'Professional escorts service Indore Vijay Nagar with verified call girls and VIP companions. Best escorts service in Vijay Nagar commercial center.',
    keywords: [
      'escorts service indore vijay nagar',
      'escorts in Vijay Nagar',
      'call girls in Vijay Nagar',
      'escort service Vijay Nagar',
      'escorts service indore',
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
    title: 'Escorts Service Indore Scheme 78 | Call Girls Scheme 78 24/7',
    description: 'Exclusive escorts service Indore Scheme 78 with verified call girls and VIP companions. Professional escorts service in upscale residential area.',
    keywords: [
      'escorts service indore scheme 78',
      'escorts in Scheme 78',
      'call girls in Scheme 78',
      'escorts service indore',
      'Scheme 78 escorts',
      'residential area escorts'
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
    title: 'Escorts Service Indore Saket | Call Girls Saket 24/7',
    description: 'Top escorts service Indore Saket with verified call girls and VIP companions. Professional escorts service in Saket residential area.',
    keywords: [
      'escorts service indore saket',
      'escorts in Saket',
      'call girls in Saket',
      'escorts service indore',
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
    title: 'Escorts Service Indore Ring Road | Call Girls Ring Road 24/7',
    description: 'Professional escorts service Indore Ring Road with verified call girls. Best escorts service on Ring Road commercial corridor.',
    keywords: [
      'escorts service indore ring road',
      'escorts in Ring Road',
      'call girls in Ring Road',
      'escorts service indore',
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
    title: 'Escorts Service Indore Rajwada | Call Girls Rajwada 24/7',
    description: 'Heritage area escorts service Indore Rajwada with verified call girls. Professional escorts service in historic Rajwada location.',
    keywords: [
      'escorts service indore rajwada',
      'escorts in Rajwada',
      'call girls in Rajwada',
      'escorts service indore',
      'Rajwada escorts',
      'heritage area escorts'
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
    title: 'Escorts Service Indore MG Road | Call Girls MG Road 24/7',
    description: 'Elite escorts service Indore MG Road with verified call girls and VIP companions. Professional escorts service on MG Road commercial hub.',
    keywords: [
      'escorts service indore mg road',
      'escorts in MG Road',
      'call girls in MG Road',
      'escorts service indore',
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
    title: 'Escorts Service Indore Treasure Island | Call Girls Treasure Island 24/7',
    description: 'Luxury escorts service Indore Treasure Island with verified call girls. Professional escorts service at entertainment hub.',
    keywords: [
      'escorts service indore treasure island',
      'escorts in Treasure Island',
      'call girls in Treasure Island',
      'escorts service indore',
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
    title: 'Escorts Service Indore Airport Road | Call Girls Airport Road 24/7',
    description: 'Professional escorts service Indore Airport Road with verified call girls. Best escorts service on Airport Road business corridor.',
    keywords: [
      'escorts service indore airport road',
      'escorts in Airport Road',
      'call girls in Airport Road',
      'escorts service indore',
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
    title: 'Escorts Service Indore Bombay Hospital | Call Girls Bombay Hospital 24/7',
    description: 'Discreet escorts service Indore Bombay Hospital area with verified call girls. Professional escorts service in medical district.',
    keywords: [
      'escorts service indore bombay hospital',
      'escorts in Bombay Hospital',
      'call girls in Bombay Hospital',
      'escorts service indore',
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