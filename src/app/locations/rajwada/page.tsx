import { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import { generateMetadata as generateSEOMetadata } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

const locationData = {
  name: 'Rajwada',
  slug: 'rajwada',
  description: 'Premium escort services near Rajwada, Indore. Elite companions available 24/7 near the historic palace with complete discretion.',
  area: 'Historic & Commercial Area',
  landmarks: [
    'Rajwada Palace',
    'Historic Market',
    'Old City',
    'Traditional Bazaars',
    'Heritage Sites'
  ],
  coordinates: {
    lat: 22.7196,
    lng: 75.8577
  }
}

export const metadata: Metadata = {
  title: `${locationData.name} Escort Service | Premium Call Girls near ${locationData.name} Indore`,
  description: locationData.description,
  keywords: `${locationData.name} escort service, ${locationData.name} call girls, escort service ${locationData.name}, call girls ${locationData.name}, ${locationData.name} escorts, VIP escorts ${locationData.name}`,
  openGraph: {
    title: `${locationData.name} Escort Service | Premium Call Girls near ${locationData.name}`,
    description: locationData.description,
    url: `https://saumyakapoor.in/locations/${locationData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/locations/${locationData.slug}`,
  }
}

const structuredData = {
  place: generateLocationPageSchema({
    type: 'location',
    location: {
      name: locationData.name,
      address: `${locationData.name}, Indore, Madhya Pradesh, India`,
      area: locationData.area,
      landmarks: locationData.landmarks
    }
  }),
  breadcrumb: generateBreadcrumbSchema([
    { name: 'Home', url: 'https://saumyakapoor.in' },
    { name: 'Locations', url: 'https://saumyakapoor.in/locations' },
    { name: locationData.name, url: `https://saumyakapoor.in/locations/${locationData.slug}` }
  ])
}

export default function RajwadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.place) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.breadcrumb) }}
      />
      <LocationPageTemplate locationData={locationData} />
    </>
  )
}