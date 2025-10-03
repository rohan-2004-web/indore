import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./accessibility.css";
import Header from "@/components/Header";
import CriticalCSS from "@/components/CriticalCSS";
import { PerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import { FastIndexingSchemas } from "@/components/FastIndexingSchemas";
import InternalLinkingFooter from "@/components/InternalLinkingFooter";
import { Suspense } from "react";

// Optimize font loading with display swap for better performance
const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saumyakapoor.in'),
  title: {
    default: 'Indore Escort Service | Premium Call Girls Service in Indore 24/7 | Top Rated Agency',
    template: '%s | Saumya Kapoor - Premium Escort Service in Indore'
  },
  description: 'Best Indore escort service with premium call girls available 24/7. Trusted agency offering VIP companions in Vijay Nagar, Palasia, AB Road, Saket & all Indore locations. Call +919372662471',
  keywords: 'Indore escort service, Indore call girls, escort service Indore, call girls Indore, Indore escorts, VIP escorts Indore, premium escort service, Vijay Nagar escorts, Palasia escorts, AB Road call girls, Saket escorts, Indore companion service, best escort agency Indore, 24/7 escort service',
  authors: [{ name: 'Indore Premium Escort Service', url: 'https://saumyakapoor.in' }],
  creator: 'Indore Premium Escort Service',
  publisher: 'Indore Premium Escort Service',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://saumyakapoor.in',
    languages: {
      'en-US': 'https://saumyakapoor.in',
      'en': 'https://saumyakapoor.in',
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
  category: 'Adult Services',
  classification: 'Adult Content',
  openGraph: {
    title: 'Indore Escort Service | Premium Call Girls Service in Indore 24/7',
    description: 'Best Indore escort service with premium call girls available 24/7. Trusted agency offering VIP companions in all Indore locations. Professional & discreet service.',
    type: 'website',
    locale: 'en_US',
    url: 'https://saumyakapoor.in',
    siteName: 'Indore Premium Escort Service',
    images: [
      {
        url: '/images/services/indore escorts.webp',
        width: 1200,
        height: 630,
        alt: 'Indore Premium Escort Service - Professional VIP Companions',
        type: 'image/webp',
      },
      {
        url: '/images/services/Premium Models.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Models and VIP Escorts in Indore',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indore Escort Service | Premium Call Girls Service in Indore 24/7',
    description: 'Best Indore escort service with premium call girls available 24/7. Trusted agency offering VIP companions in all Indore locations.',
    images: ['/images/services/indore escorts.webp'],
    creator: '@indoreescorts',
    site: '@indoreescorts',
  },
  appleWebApp: {
    capable: true,
    title: 'Indore Escort Service',
    statusBarStyle: 'default',
  },
  applicationName: 'Indore Premium Escort Service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Enhanced Schema.org structured data with LocalBusiness, Organization, and Service schemas
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Organization', 'ProfessionalService'],
    '@id': 'https://saumyakapoor.in/#organization',
    name: 'Indore Premium Escort Service',
    alternateName: 'Indore Escort Agency',
    legalName: 'Indore Premium Escort Service',
    description: 'Leading professional escort service agency in Indore providing premium companions and VIP escort services across all major locations with 24/7 availability.',
    url: 'https://saumyakapoor.in',
    image: 'https://saumyakapoor.in/images/services/indore escorts.webp',
    telephone: '+919372662471',
    email: 'contact@indoreescortservice.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Premium Service Center',
      addressLocality: 'Indore',
      addressRegion: 'Madhya Pradesh',
      postalCode: '452001',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 22.7196,
      longitude: 75.8577,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 22.7196,
        longitude: 75.8577,
      },
      geoRadius: '30000'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Indore',
        containedInPlace: {
          '@type': 'State',
          name: 'Madhya Pradesh'
        }
      }
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    priceRange: '₹₹₹',
    paymentAccepted: ['Cash', 'Credit Card', 'UPI', 'Bank Transfer'],
    currenciesAccepted: 'INR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Premium Escort Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'VIP Escort Service',
            description: 'Premium VIP escort companions for discerning clients'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Celebrity Escort Service',
            description: 'Celebrity-level escorts with exceptional elegance'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Event Companion Service',
            description: 'Professional companions for business and social events'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '147',
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Satisfied Client'
        },
        reviewBody: 'Excellent professional service, highly recommended for quality and discretion.',
        datePublished: '2024-01-15'
      }
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919372662471',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['Hindi', 'English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59'
      }
    },
    sameAs: [
      'https://facebook.com/indoreescorts',
      'https://twitter.com/indoreescorts',
      'https://instagram.com/indoreescorts',
    ],
    knowsAbout: [
      'AB Road', 'Palasia', 'Bhawar Kuan', 'Vijay Nagar', 'New Palasia', 
      'Rajwada',
      'Scheme No 78', 'Premium Escorts', 'VIP Companions',
      'Professional Escort Service', 'Celebrity Escorts'
    ]
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        <link rel="preload" href="/images/services" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="Content-Language" content="en-US" />
        <meta name="rating" content="mature" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        <FastIndexingSchemas />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for keyboard navigation */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <CriticalCSS />
        <PerformanceMonitor />
        
        <Header />
        
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        
        <InternalLinkingFooter />
      </body>
    </html>
  );
}