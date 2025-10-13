import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

// Import the existing content component
import RingRoadPageContent from './RingRoadPageContent'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['ring-road'],
  canonicalUrl: 'https://saumyakapoor.in/locations/ring-road',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'Ring Road',
      address: 'Ring Road, Indore, Madhya Pradesh, India',
      area: 'Commercial Corridor',
      landmarks: [
        'Ring Road Junction',
        'Commercial Corridor',
        'Business Centers',
        'Shopping Complexes',
        'Highway Access'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'Ring Road',
      address: 'Ring Road, Indore',
      area: 'Commercial Corridor',
      landmarks: []
    },
    service: {
      name: 'Ring Road Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Ring Road', url: '/locations/ring-road' }
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
      
      <RingRoadPageContent />
    </>
  )
}