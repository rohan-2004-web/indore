import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const serviceData = {
  name: 'Luxury Escort Service',
  slug: 'luxury-escort',
  description: 'Luxury escort services in Indore with sophisticated companions. Elite luxury experience with complete discretion and professionalism.',
  features: [
    'Sophisticated luxury companions',
    'Elite service standards',
    'Exclusive luxury experience',
    'Complete confidentiality',
    'Premium presentation'
  ],
  priceRange: '₹18,000 - ₹35,000'
}

export const metadata: Metadata = {
  title: `${serviceData.name} in Indore | Sophisticated Luxury Escorts`,
  description: serviceData.description,
  keywords: 'luxury escort service Indore, luxury escorts Indore, sophisticated escorts, elite luxury companions, high-end escort service',
  openGraph: {
    title: `${serviceData.name} in Indore | Sophisticated Luxury Escorts`,
    description: serviceData.description,
    url: `https://saumyakapoor.in/services/${serviceData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/services/${serviceData.slug}`,
  }
}

export default function LuxuryEscortPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}