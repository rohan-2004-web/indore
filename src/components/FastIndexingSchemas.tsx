import { Metadata } from 'next'

// Enhanced structured data for faster Google indexing
export const fastIndexingSchemas = {
  // Website schema for immediate recognition
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Saumya Kapoor - Premium Escort Services in Indore',
    'url': 'https://saumyakapoor.in',
    'description': 'Premium escort and companion services in Indore with verified profiles and 24/7 availability',
    'publisher': {
      '@type': 'Organization',
      'name': 'Saumya Kapoor Services',
      'url': 'https://saumyakapoor.in'
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://saumyakapoor.in/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    },
    'mainEntity': {
      '@type': 'LocalBusiness',
      'name': 'Saumya Kapoor Escort Services',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Indore',
        'addressRegion': 'Madhya Pradesh',
        'addressCountry': 'IN'
      }
    }
  },
  
  // Service listing for immediate categorization
  serviceList: {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Escort Services in Indore',
    'numberOfItems': 12,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'Service',
          'name': 'AB Road Escort Service',
          'url': 'https://saumyakapoor.in/locations/ab-road',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Saumya Kapoor Services'
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'Service',
          'name': 'Palasia Escort Service',
          'url': 'https://saumyakapoor.in/locations/palasia',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Saumya Kapoor Services'
          }
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'Service',
          'name': 'Vijay Nagar Escort Service', 
          'url': 'https://saumyakapoor.in/locations/vijay-nagar',
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Saumya Kapoor Services'
          }
        }
      }
    ]
  },

  // Organization schema for authority
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Saumya Kapoor Premium Services',
    'url': 'https://saumyakapoor.in',
    'logo': 'https://saumyakapoor.in/logo.jpg',
    'sameAs': [
      'https://saumyakapoor.in/about',
      'https://saumyakapoor.in/services',
      'https://saumyakapoor.in/contact'
    ],
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Indore',
      'addressRegion': 'Madhya Pradesh', 
      'postalCode': '452001',
      'addressCountry': 'IN'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Indore',
      'containedInPlace': {
        '@type': 'State',
        'name': 'Madhya Pradesh',
        'containedInPlace': {
          '@type': 'Country',
          'name': 'India'
        }
      }
    }
  },

  // Breadcrumb for better navigation understanding
  breadcrumb: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://saumyakapoor.in'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Services',
        'item': 'https://saumyakapoor.in/services'
      },
      {
        '@type': 'ListItem', 
        'position': 3,
        'name': 'Locations',
        'item': 'https://saumyakapoor.in/locations'
      }
    ]
  }
}

// Generate JSON-LD script tags for faster indexing
export function FastIndexingSchemas() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fastIndexingSchemas.website)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fastIndexingSchemas.organization)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fastIndexingSchemas.breadcrumb)
        }}
      />
    </>
  )
}