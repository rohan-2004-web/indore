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
  const baseUrl = 'https://indore-gules.vercel.app'
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
          url: config.ogImage || '/og-image.jpg',
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
      images: [config.ogImage || '/og-image.jpg'],
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
  }
  // Add more location configs as needed
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