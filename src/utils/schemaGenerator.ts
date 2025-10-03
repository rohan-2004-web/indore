// Enhanced Schema.org structured data for SEO

export interface SchemaConfig {
  type: 'homepage' | 'service' | 'location' | 'about' | 'contact'
  location?: {
    name: string
    address: string
    area: string
    landmarks: string[]
  }
  service?: {
    name: string
    category: string
    price?: string
  }
}

export function generateLocalBusinessSchema(config: SchemaConfig) {
  const baseUrl = 'https://indore-gules.vercel.app'
  
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    "name": "Indore Premium Escort Service",
    "alternateName": "Indore Escort Agency",
    "description": "Professional escort service in Indore offering premium companions and VIP escort services across all major locations in Indore.",
    "url": baseUrl,
    "telephone": "+919372662471",
    "email": "info@indoreescorts.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Premium Service Center",
      "addressLocality": config.location?.name || "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7196,
      "longitude": 75.8577
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Indore",
        "containedInPlace": {
          "@type": "State",
          "name": "Madhya Pradesh"
        }
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 22.7196,
        "longitude": 75.8577
      },
      "geoRadius": "30000"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "₹₹₹",
    "paymentAccepted": ["Cash", "Credit Card", "UPI", "Bank Transfer"],
    "currenciesAccepted": "INR",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Escort Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Escort Service",
            "description": "High-class escort companions for various occasions"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Companion Service",
            "description": "Exclusive VIP companions for business and social events"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Celebrity Escort Service",
            "description": "Celebrity-level escorts with star quality service"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "147",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Client Review"
        },
        "reviewBody": "Excellent service, professional and discreet. Highly recommended.",
        "datePublished": "2024-01-15"
      }
    ]
  }

  return localBusiness
}

export function generateOrganizationSchema() {
  const baseUrl = 'https://indore-gules.vercel.app'
  
  return {
    "@context": "https://schema.org",
    "@type": "Organization", 
    "@id": `${baseUrl}/#organization`,
    "name": "Indore Premium Escort Service",
    "legalName": "Indore Premium Escort Service",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "image": `${baseUrl}/images/services/indore escorts.webp`,
    "description": "Leading escort service agency in Indore providing premium companions and professional escort services across all major locations.",
    "founder": {
      "@type": "Person",
      "name": "Premium Service Provider"
    },
    "foundingDate": "2020-01-01",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919372662471",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["Hindi", "English"]
    },
    "sameAs": [
      "https://twitter.com/indoreescorts",
      "https://instagram.com/indoreescorts",
      "https://facebook.com/indoreescorts"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh", 
      "addressCountry": "IN"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Indore"
    }
  }
}

export function generateServiceSchema(config: SchemaConfig) {
  const baseUrl = 'https://indore-gules.vercel.app'
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/#service`,
    "name": config.service?.name || "Premium Escort Service",
    "description": `Professional ${config.service?.name.toLowerCase()} in Indore with verified companions and discreet service.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Indore Premium Escort Service",
      "url": baseUrl
    },
    "areaServed": {
      "@type": "City", 
      "name": "Indore",
      "containedInPlace": {
        "@type": "State",
        "name": "Madhya Pradesh"
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": baseUrl,
      "servicePhone": "+919372662471",
      "availableLanguage": ["Hindi", "English"]
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", 
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "Contact for pricing",
      "priceCurrency": "INR"
    }
  }
}

export function generateLocationPageSchema(config: SchemaConfig) {
  const baseUrl = 'https://indore-gules.vercel.app'
  
  if (!config.location) return null
  
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${baseUrl}/locations/${config.location.name.toLowerCase().replace(/ /g, '-')}/#place`,
    "name": config.location.name,
    "description": `Premium escort service location in ${config.location.name}, Indore. Professional companions available in ${config.location.area}.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": config.location.address || config.location.name,
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "containedInPlace": {
      "@type": "City",
      "name": "Indore"
    },
    "hasMap": `https://maps.google.com/?q=${config.location.name} Indore`,
    "geo": {
      "@type": "GeoCoordinates", 
      "latitude": 22.7196,
      "longitude": 75.8577
    }
  }
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>) {
  const baseUrl = 'https://indore-gules.vercel.app'
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${baseUrl}${crumb.url}`
    }))
  }
}

export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
}