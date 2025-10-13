import { Metadata } from 'next'
import { generateMetadata as generateSEOMetadata, locationSEOConfigs } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

// Import the existing content component
import Scheme78PageContent from './Scheme78PageContent'

export const metadata: Metadata = generateSEOMetadata({
  ...locationSEOConfigs['scheme-78'],
  canonicalUrl: 'https://saumyakapoor.in/locations/scheme-78',
})

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: 'Scheme 78',
      address: 'Scheme 78, Indore, Madhya Pradesh, India',
      area: 'Upscale Residential',
      landmarks: [
        'Scheme 78 Square',
        'Residential Complex',
        'Shopping Center',
        'Community Hub',
        'Premium Locality'
      ]
    }
  }),
  service: generateServiceSchema({
    type: 'location',
    location: {
      name: 'Scheme 78',
      address: 'Scheme 78, Indore',
      area: 'Upscale Residential',
      landmarks: []
    },
    service: {
      name: 'Scheme 78 Escort Service',
      category: 'Premium Companions'
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations' },
    { name: 'Scheme 78', url: '/locations/scheme-78' }
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
      
      <Scheme78PageContent />
    </>
  )
}