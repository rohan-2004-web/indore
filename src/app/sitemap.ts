import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saumyakapoor.in'
  
  // All Indore locations for escort services
  const locations = [
    'ab-road', 'palasia', 'bhawar-kuan', 'vijay-nagar', 
    'new-palasia', 'indore-gpo', 'rajwada', 'sarafa-bazaar', 
    'khajrana', 'kanadiya', 'scheme-no-78', 'sudama-nagar'
  ]
  
  // Service pages for better SEO coverage
  const services = [
    'vip-escort', 'premium-escort', 'luxury-escort', 'call-girl',
    'independent-escort', 'russian-escort', 'college-girl-escort'
  ]

  return [
    // Main homepage - highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    // Core service pages
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
    // Information pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Terms and Privacy (important for legal compliance)
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Individual location pages - high priority for local SEO
    ...locations.map((location) => ({
      url: `${baseUrl}/locations/${location}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Service-specific pages for broader keyword coverage
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  ]
}