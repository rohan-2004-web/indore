import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

// Import the existing content component
import PalasiaPageContent from './PalasiaPageContent'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['palasia'],
  canonicalUrl: 'https://saumyakapoor.in/locations/palasia',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'Palasia',
      address: 'Palasia, Indore, Madhya Pradesh, India',
      area: 'Business District',
      landmarks: [
        'Palasia Square',
        'Business District',
        'Commercial Complex',
        'Hotel Radisson',
        'Trade Center'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'Palasia',
      address: 'Palasia, Indore',
      area: 'Business District',
      landmarks: []
    },
    service: {
      name: 'Palasia Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Palasia', url: '/locations/palasia' }
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
      
      <PalasiaPageContent />
    </>
  )
}