import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

const serviceData = {
  name: 'Russian Escort Service',
  slug: 'russian-escort',
  description: 'Russian escort services in Indore with international companions. Exotic, elegant, and sophisticated Russian escorts available 24/7.',
  features: [
    'International Russian companions',
    'Exotic and elegant',
    'Sophisticated service',
    'Fluent English speaking',
    'High-class presentation'
  ],
  priceRange: '₹20,000 - ₹40,000'
}

export const metadata: Metadata = {
  title: `${serviceData.name} in Indore | International Russian Escorts`,
  description: serviceData.description,
  keywords: 'Russian escort service Indore, Russian escorts Indore, international escorts, foreign escorts, exotic escorts Indore',
  openGraph: {
    title: `${serviceData.name} in Indore | International Russian Escorts`,
    description: serviceData.description,
    url: `https://saumyakapoor.in/services/${serviceData.slug}`,
  },
  alternates: {
    canonical: `https://saumyakapoor.in/services/${serviceData.slug}`,
  }
}

export default function RussianEscortPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}