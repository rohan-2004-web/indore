import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

// Import the existing content component
import SaketPageContent from './SaketPageContent'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['saket'],
  canonicalUrl: 'https://saumyakapoor.in/locations/saket',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'Saket',
      address: 'Saket, Indore, Madhya Pradesh, India',
      area: 'Residential Hub',
      landmarks: [
        'Saket Nagar',
        'Residential Area',
        'Local Market',
        'Community Center',
        'Peaceful Locality'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'Saket',
      address: 'Saket, Indore',
      area: 'Residential Hub',
      landmarks: []
    },
    service: {
      name: 'Saket Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Saket', url: '/locations/saket' }
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
      
      <SaketPageContent />
    </>
  )
}