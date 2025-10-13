import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'
import BhawarKuanPageContent from './BhawarKuanPageContent'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['bhawar-kuan'],
  canonicalUrl: 'https://saumyakapoor.in/locations/bhawar-kuan',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'Bhawar Kuan',
      address: 'Bhawar Kuan, Indore, Madhya Pradesh, India',
      area: 'Prime Location',
      landmarks: [
        'Bhawar Kuan Square',
        'Prime Commercial Area',
        'Shopping Complex',
        'Business Hub',
        'Central Location'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'Bhawar Kuan',
      address: 'Bhawar Kuan, Indore',
      area: 'Prime Location',
      landmarks: []
    },
    service: {
      name: 'Bhawar Kuan Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Bhawar Kuan', url: '/locations/bhawar-kuan' }
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
      
      <BhawarKuanPageContent />
    </>
  )
}