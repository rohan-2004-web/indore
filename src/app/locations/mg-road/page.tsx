import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

// Import the existing content component
import MGRoadPageContent from './MGRoadPageContent'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['mg-road'],
  canonicalUrl: 'https://saumyakapoor.in/locations/mg-road',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'MG Road',
      address: 'MG Road, Indore, Madhya Pradesh, India',
      area: 'Commercial Hub',
      landmarks: [
        'MG Road Junction',
        'Commercial Hub',
        'Business District',
        'Shopping Area',
        'Central Location'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'MG Road',
      address: 'MG Road, Indore',
      area: 'Commercial Hub',
      landmarks: []
    },
    service: {
      name: 'MG Road Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'MG Road', url: '/locations/mg-road' }
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
      
      <MGRoadPageContent />
    </>
  )
}