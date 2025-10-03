import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/private/', '/api/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/private/', '/api/', '/_next/'],
      },
      {
        userAgent: '*',
        allow: ['/', '/locations/', '/services/'],
        disallow: ['/admin/', '/api/', '/_next/', '/private/'],
      }
    ],
    sitemap: 'https://saumyakapoor.in/sitemap.xml',
    host: 'https://saumyakapoor.in'
  }
}