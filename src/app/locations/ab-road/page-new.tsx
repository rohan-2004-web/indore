import { Metadata } from 'next'
import ABRoadPageContent from './ABRoadPageContent'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['ab-road'],
  canonicalUrl: 'https://indore-gules.vercel.app/locations/ab-road',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'AB Road',
      address: 'AB Road, Indore, Madhya Pradesh, India',
      area: 'Commercial Hub',
      landmarks: [
        'Brilliant Convention Centre',
        'AB Road Commercial Complex', 
        'Marriott Hotel',
        'Central Mall',
        'Business District'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'AB Road',
      address: 'AB Road, Indore',
      area: 'Commercial Hub',
      landmarks: []
    },
    service: {
      name: 'AB Road Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'AB Road', url: '/locations/ab-road' }
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
      
      <ABRoadPageContent />
    </>
  )
}