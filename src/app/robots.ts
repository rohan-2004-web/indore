import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/private/'],
        crawlDelay: 1, // Allow frequent crawling
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 0, // No delay for Google - fastest indexing
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/'],
        crawlDelay: 1,
      },
      // Prioritize important directories for faster discovery
      {
        userAgent: '*',
        allow: '/locations/',
      },
      {
        userAgent: '*', 
        allow: '/services/',
      }
    ],
    sitemap: 'https://saumyakapoor.in/sitemap.xml',
    host: 'https://saumyakapoor.in'
  }
}