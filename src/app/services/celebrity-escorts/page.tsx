import { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'

// SEO Metadata for Celebrity Escorts
export const metadata: Metadata = {
  title: 'Celebrity Escorts in Indore | Star Quality Escort Service | Saumya Kapoor',
  description: 'Premium celebrity escorts in Indore with star quality service. VIP celebrity companions available 24/7 for events, parties, and private meetings. Call +91 9372662471.',
  keywords: [
    'celebrity escorts Indore',
    'star quality escorts',
    'VIP celebrity companions',
    'premium celebrity escorts',
    'celebrity escort service Indore',
    'high-profile escort service',
    'celebrity companions Indore'
  ].join(', '),
  openGraph: {
    title: 'Celebrity Escorts in Indore | Star Quality Service',
    description: 'Premium celebrity escorts with star quality service in Indore. Professional VIP companions for exclusive events and private meetings.',
    type: 'website',
    url: 'https://saumyakapoor.in/services/celebrity-escorts',
  },
  alternates: {
    canonical: 'https://saumyakapoor.in/services/celebrity-escorts',
  },
}

const serviceData = {
  name: 'Celebrity Escorts in Indore',
  slug: 'celebrity-escorts',
  description: 'Experience star-quality companionship with our exclusive celebrity escorts in Indore. Professional, sophisticated, and discreet service for high-profile events and private meetings.',
  features: [
    'Star Quality Companions - Model-like appearance and sophistication',
    'High-Profile Events - Perfect for corporate functions and exclusive gatherings',
    'Professional Training - Expertly trained for premium social interactions',
    'Complete Discretion - Absolute confidentiality for VIP clients',
    'Available 24/7 - Round-the-clock celebrity escort service',
    'All Indore Areas - Serving Vijay Nagar, AB Road, Palasia, and premium locations'
  ],
  priceRange: 'Premium - Contact for exclusive celebrity escort rates'
}

export default function CelebrityEscortsPage() {
  return <ServicePageTemplate serviceData={serviceData} />
}