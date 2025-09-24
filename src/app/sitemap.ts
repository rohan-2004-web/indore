import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://indoreescortservice.com'
  
  const locations = [
    'vijay-nagar', 'saket', 'scheme-78', 'ab-road', 'palasia', 
    'bhawar-kuan', 'rau', 'ring-road', 'bombay-hospital', 
    'airport-road', 'mg-road', 'treasure-island'
  ]

  const services = [
    'celebrity-escorts', 'college-girls', 'punjabi-women', 
    'event-companion', 'premium-companions', 'travel-companions',
    'vip-escorts', 'dinner-dates', 'outcall-service'
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...locations.map((location) => ({
      url: `${baseUrl}/locations/${location}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ]
}