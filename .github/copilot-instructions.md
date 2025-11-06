# Indore Escort Service Website - AI Agent Instructions

This is a Next.js 14+ SEO-optimized escort service website with App Router, focused on maximum search visibility and performance.

## Architecture Overview

### Core Pattern: Template-Based Page Generation
- **ServicePageTemplate** (`src/components/ServicePageTemplate.tsx`): Reusable template for all service pages
- **LocationPageTemplate** (`src/components/LocationPageTemplate.tsx`): Reusable template for all location pages  
- **SEO-first approach**: Every page follows the pattern: `page.tsx` → imports template → injects structured data

### Key Components & Their Roles
- `SEOContent.tsx`: Generates location-aware, keyword-rich content sections
- `SEOImage.tsx`: Provides ServiceSEOImage, LocationSEOImage with auto-generated alt text and schema
- `schemaGenerator.ts`: Creates JSON-LD structured data (LocalBusiness, Place, Service schemas)
- `seoConfig.ts`: Centralizes metadata generation with location/service context

## Development Workflows

### Adding New Services
1. Create service data object in service page with: name, slug, description, features, priceRange
2. Use `ServicePageTemplate` component, don't recreate layouts
3. Generate metadata via `generateSEOMetadata()` from seoConfig
4. Add to `src/app/sitemap.ts` services array

### Adding New Locations  
1. Follow pattern: `src/app/locations/[location-name]/page.tsx`
2. Import and configure: `generateLocationPageSchema`, `generateServiceSchema`, `generateBreadcrumbSchema`
3. Create location-specific content component (e.g., `ABRoadPageContent.tsx`)
4. Add to locationSEOConfigs in `seoConfig.ts`

### Critical Development Commands
```bash
npm run dev          # Development server (port 3000)
npm run build        # Production build with SEO validation
npm run start        # Production server
```

## SEO Architecture (Critical)

### Structured Data Pattern
Every page includes 3 JSON-LD scripts:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData.place)}} />
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData.service)}} />  
<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData.breadcrumb)}} />
```

### Fast Indexing System
- `/api/fast-index/route.ts`: Bulk submits URLs to search engines
- `/api/index-now/route.ts`: IndexNow API for instant indexing
- Pages array maintained in API routes - update when adding new pages

### Performance Monitoring
- `usePerformanceMonitor.ts`: Tracks Core Web Vitals (LCP, FID, CLS)
- `CriticalCSS.tsx`: Inlines critical CSS for above-fold content
- Image optimization: WebP/AVIF formats, responsive sizes

## Styling System

### Color Scheme (Consistent Usage)
```typescript
// Primary: Pink palette (50-950)
// Secondary: Blue palette (50-950)  
// Use: bg-gradient-to-r from-pink-600 to-blue-600 for hero sections
// Use: bg-gradient-to-br from-pink-50 to-blue-50 for content sections
```

### Layout Patterns
- Hero sections: Full gradient backgrounds with white text
- Content sections: Light gradient backgrounds (50-level colors)
- Cards: `bg-white/90 backdrop-blur-md` for glassmorphism effect

## Configuration Files

### Security Headers (`next.config.js`)
- CSP, HSTS, X-Frame-Options configured
- Image optimization with 1-year cache TTL
- Performance optimizations enabled

### Middleware (`middleware.ts`)
- URL sanitization (removes malformed characters)
- Trailing slash normalization  
- Security redirects for invalid URLs

## Domain-Specific Conventions

- **Location naming**: Use kebab-case (`ab-road`, `vijay-nagar`)
- **Service naming**: Use descriptive kebab-case (`luxury-escort`, `call-girl`)
- **Image paths**: `/images/services/` and `/images/gallery/` structure
- **Phone number**: +919372662471 (consistent across all pages)
- **Canonical URLs**: Always use https://saumyakapoor.in

When adding content, prioritize SEO optimization and maintain the template-based architecture for consistency.