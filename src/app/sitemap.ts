import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saumyakapoor.in'
  const currentDate = new Date()
  
  // All Indore locations for escort services (matching actual existing pages)
  const locations = [
    'ab-road', 'airport-road', 'bhawar-kuan', 'bombay-hospital',
    'mg-road', 'palasia', 'rajwada', 'ring-road', 'saket',
    'scheme-78', 'treasure-island', 'vijay-nagar'
  ]
  
  // Service pages for better SEO coverage (matching actual existing pages)
  const services = [
    'bold-girls', 'call-girl', 'celebrity-escorts', 'college-girl-escort',
    'college-girls', 'event-companion', 'expert-services', 'high-class-models',
    'housewife-escorts', 'incall-escorts', 'independent-escort', 'indore-escorts',
    'local-beauties', 'luxury-escort', 'mature-escorts', 'pink-special',
    'premium-escort', 'premium-models', 'punjabi-women', 'russian-escort',
    'sexy-girls', 'slim-escorts', 'unsatisfied-bhabhi', 'unsatisfied-females',
    'vip-escort', 'vip-escorts', 'young-girls'
  ]

  return [
    // Main homepage - highest priority for "Indore escort service"
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // Core service pages - main keyword landing pages
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/locations`, 
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    // Information pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Terms and Privacy (important for legal compliance)
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Individual location pages - high priority for local SEO
    ...locations.map((location) => ({
      url: `${baseUrl}/locations/${location}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    // Service-specific pages for broader keyword coverage
    ...services.map((service) => {
      // Higher priority for main keyword pages
      const isMainKeywordPage = ['indore-escorts', 'call-girl', 'vip-escorts', 'college-girls', 'celebrity-escorts', 'independent-escort'].includes(service)
      return {
        url: `${baseUrl}/services/${service}`,
        lastModified: currentDate,
        changeFrequency: isMainKeywordPage ? 'daily' as const : 'weekly' as const,
        priority: isMainKeywordPage ? 0.9 : 0.75,
      }
    })
  ]
}