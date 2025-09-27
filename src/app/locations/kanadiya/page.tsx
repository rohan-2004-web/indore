import { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import { generateMetadata as generateSEOMetadata } from '@/utils/seoConfig'
import { 
  generateLocationPageSchema, 
  generateBreadcrumbSchema,
  generateServiceSchema 
} from '@/utils/schemaGenerator'

const locationData = {
  name: 'Kanadiya',
  slug: 'kanadiya',
  description: 'Premium escort services in Kanadiya, Indore. Professional companions available 24/7 with verified profiles and complete discretion.',
  area: 'Industrial Area',
  landmarks: [
    'Kanadiya Industrial Area',
    'Manufacturing Hub',
    'Warehouses',
    'Commercial Complexes',
    'Business Centers'
  ],
  coordinates: {
    lat: 22.7520,
    lng: 75.8945
  }
}

export const metadata: Metadata = {
  title: `${locationData.name} Escort Service | Premium Call Girls in ${locationData.name} Indore`,
  description: locationData.description,
  keywords: `${locationData.name} escort service, ${locationData.name} call girls, escort service ${locationData.name}, call girls ${locationData.name}, ${locationData.name} escorts, VIP escorts ${locationData.name}`,
  openGraph: {
    title: `${locationData.name} Escort Service | Premium Call Girls in ${locationData.name}`,
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

export default function KanadiyaPage() {
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