import Image from 'next/image'
import { useState } from 'react'

interface SEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  caption?: string
  title?: string
  sizes?: string
  quality?: number
  loading?: 'lazy' | 'eager'
  blurDataURL?: string
  schema?: {
    name: string
    description: string
    contentUrl: string
    thumbnailUrl?: string
    author?: string
    datePublished?: string
    keywords?: string[]
  }
}

export default function SEOImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  caption,
  title,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 85,
  loading = 'lazy',
  blurDataURL,
  schema
}: SEOImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Generate structured data for image if schema is provided
  const imageSchema = schema ? {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": schema.name,
    "description": schema.description,
    "contentUrl": schema.contentUrl,
    "thumbnailUrl": schema.thumbnailUrl || schema.contentUrl,
    "author": schema.author || "Indore Premium Escort Service",
    "datePublished": schema.datePublished || new Date().toISOString(),
    "keywords": schema.keywords?.join(', ') || alt,
    "width": width,
    "height": height,
    "encodingFormat": "image/webp"
  } : null

  if (hasError) {
    return (
      <figure className={`relative overflow-hidden ${className}`}>
        <div 
          className="flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 border-2 border-gray-200 rounded-lg"
          style={{ width, height }}
          role="img"
          aria-label={alt}
        >
          <div className="text-center p-4">
            <div className="text-4xl text-gray-400 mb-2">🖼️</div>
            <span className="text-gray-500 text-sm">Image not available</span>
          </div>
        </div>
        {caption && (
          <figcaption className="text-sm text-gray-600 mt-2 text-center">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      {/* Structured Data Schema */}
      {imageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(imageSchema) 
          }}
        />
      )}
      
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          sizes={sizes}
          quality={quality}
          loading={loading}
          title={title || alt}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } w-full h-full object-cover rounded-lg`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          style={{
            objectFit: 'cover'
          }}
        />
        
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 animate-pulse rounded-lg">
            <div className="w-8 h-8 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="text-sm text-gray-600 mt-2 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

// Service Image with SEO optimization
export function ServiceSEOImage({
  src,
  serviceName,
  location = 'Indore',
  className = ''
}: {
  src: string
  serviceName: string
  location?: string
  className?: string
}) {
  const alt = `${serviceName} in ${location} - Premium escort service with professional companions`
  const title = `Book ${serviceName} in ${location} - Available 24/7`
  
  return (
    <SEOImage
      src={src}
      alt={alt}
      title={title}
      width={400}
      height={300}
      className={className}
      quality={80}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      schema={{
        name: `${serviceName} - ${location}`,
        description: `Professional ${serviceName.toLowerCase()} available in ${location}. Premium escort service with verified companions.`,
        contentUrl: `https://indore-gules.vercel.app${src}`,
        keywords: [
          serviceName,
          `${serviceName} ${location}`,
          `escort service`,
          `premium companions`,
          `professional escorts`,
          location
        ]
      }}
      caption={`${serviceName} - Available in ${location}`}
    />
  )
}

// Location Image with SEO optimization
export function LocationSEOImage({
  src,
  locationName,
  className = ''
}: {
  src: string
  locationName: string
  className?: string
}) {
  const alt = `${locationName} escort service - Premium companions and call girls available 24/7`
  const title = `Best escort service in ${locationName}, Indore - Book now`
  
  return (
    <SEOImage
      src={src}
      alt={alt}
      title={title}
      width={600}
      height={400}
      className={className}
      quality={85}
      priority={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
      schema={{
        name: `${locationName} Escort Service`,
        description: `Premium escort service in ${locationName}, Indore with professional companions and call girls available 24/7.`,
        contentUrl: `https://indore-gules.vercel.app${src}`,
        keywords: [
          `${locationName} escorts`,
          `${locationName} call girls`,
          `escort service ${locationName}`,
          'premium companions',
          'professional escorts',
          'Indore escorts'
        ]
      }}
      caption={`Premium escort service in ${locationName}, Indore`}
    />
  )
}

// Gallery Image with SEO optimization
export function GallerySEOImage({
  src,
  modelName,
  serviceType = 'Premium Escort',
  className = ''
}: {
  src: string
  modelName: string
  serviceType?: string
  className?: string
}) {
  const alt = `${modelName} - ${serviceType} in Indore | Professional companion available for booking`
  const title = `Book ${modelName} - ${serviceType} service in Indore`
  
  return (
    <SEOImage
      src={src}
      alt={alt}
      title={title}
      width={300}
      height={400}
      className={className}
      quality={75}
      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
      schema={{
        name: `${modelName} - ${serviceType}`,
        description: `${modelName} is a professional ${serviceType.toLowerCase()} available in Indore. Book now for premium companionship service.`,
        contentUrl: `https://indore-gules.vercel.app${src}`,
        keywords: [
          modelName,
          serviceType,
          'Indore escort',
          'premium companion',
          'professional model',
          'VIP service'
        ]
      }}
      caption={`${modelName} - ${serviceType}`}
    />
  )
}