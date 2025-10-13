import { Metadata } from 'next'
import VijayNagarPageContent from './VijayNagarPageContent'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['vijay-nagar'],
  canonicalUrl: 'https://saumyakapoor.in/locations/vijay-nagar',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'Vijay Nagar',
      address: 'Vijay Nagar, Indore, Madhya Pradesh, India',
      area: 'Premium Residential & Commercial Hub',
      landmarks: [
        'C21 Mall',
        'Treasure Island',
        'Vijay Nagar Square',
        'Maheshwar Temple',
        'Brilliant Convention Centre'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'Vijay Nagar',
      address: 'Vijay Nagar, Indore',
      area: 'Premium Residential & Commercial Hub',
      landmarks: []
    },
    service: {
      name: 'Vijay Nagar Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Vijay Nagar', url: '/locations/vijay-nagar' }
  ])
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(structuredData.place) 
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(structuredData.service) 
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(structuredData.breadcrumb) 
        }}
      />
      
      <VijayNagarPageContent />
    </>
  )
}