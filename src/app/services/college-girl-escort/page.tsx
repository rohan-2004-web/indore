import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const serviceData = {
  name: 'College Girl Escort Service',
  slug: 'college-girl-escort',
  description: 'College girl escort services in Indore with young and vibrant companions. Fresh, energetic, and friendly college girls available.',
  features: [
    'Young college companions',
    'Vibrant and energetic',
    'Friendly personalities',
    'Student-friendly rates',
    'Fresh and enthusiastic'
  ],
  priceRange: '₹6,000 - ₹15,000'
}

export const metadata: Metadata = {
  title: `${serviceData.name} in Indore | Young College Girl Escorts`,
  description: serviceData.description,
  keywords: 'college girl escort service Indore, college girl escorts Indore, young escorts, student escorts, fresh escorts Indore',
  openGraph: {
    title: `${serviceData.name} in Indore | Young College Girl Escorts`,
    description: serviceData.description,
    url: `https://saumyakapoor.in/services/${serviceData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/services/${serviceData.slug}`,
  }
}

export default function CollegeGirlEscortPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}