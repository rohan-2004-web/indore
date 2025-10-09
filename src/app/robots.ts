import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
        disallow: ['/admin/', '/private/', '/api/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
        disallow: ['/admin/', '/private/', '/api/', '/_next/'],
      },
      {
        userAgent: '*',
        allow: ['/', '/services/', '/locations/', '/about', '/contact', '/gallery'],
        crawlDelay: 2,
        disallow: ['/admin/', '/api/', '/_next/', '/private/'],
      }
    ],
    sitemap: 'https://saumyakapoor.in/sitemap.xml',
    host: 'https://saumyakapoor.in'
  }
}