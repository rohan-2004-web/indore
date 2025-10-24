'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

interface UltraOptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  fetchPriority?: 'high' | 'low' | 'auto'
  className?: string
  quality?: number
  sizes?: string
}

export function UltraOptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  fetchPriority = 'auto',
  className = '',
  quality = 85,
  sizes = '(max-width: 640px) 100vw, (max-width: 1080px) 50vw, 33vw'
}: UltraOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Preload critical images for LCP optimization
  useEffect(() => {
    if (priority) {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = src
      link.fetchPriority = 'high'
      document.head.appendChild(link)
      
      return () => {
        document.head.removeChild(link)
      }
    }
  }, [src, priority])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  // Ultra-optimized loading placeholder
  const LoadingPlaceholder = () => (
    <div 
      className={`bg-gradient-to-r from-pink-100 to-blue-100 animate-pulse ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label="Loading image..."
    />
  )

  // Error fallback
  const ErrorFallback = () => (
    <div 
      className={`bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 ${className}`}
      style={{ aspectRatio: `${width}/${height}` }}
      role="img"
      aria-label="Image failed to load"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
      </svg>
    </div>
  )

  if (hasError) {
    return <ErrorFallback />
  }

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio: `${width}/${height}` }}>
      {!isLoaded && <LoadingPlaceholder />}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={`
          layout-critical
          transition-opacity duration-300
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${priority ? 'critical-above-fold' : ''}
        `}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
        }}
        onLoad={handleLoad}
        onError={handleError}
        // Performance optimizations
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={fetchPriority}
      />
    </div>
  )
}

// Specialized component for hero images (LCP critical)
export function HeroImage(props: Omit<UltraOptimizedImageProps, 'priority' | 'fetchPriority'>) {
  return (
    <UltraOptimizedImage
      {...props}
      priority={true}
      fetchPriority="high"
      quality={95}
      className={`hero-critical ${props.className || ''}`}
    />
  )
}

// Specialized component for gallery images (lazy optimized)
export function GalleryImage(props: Omit<UltraOptimizedImageProps, 'priority' | 'fetchPriority'>) {
  return (
    <UltraOptimizedImage
      {...props}
      priority={false}
      fetchPriority="low"
      quality={85}
      className={`gallery-optimized ${props.className || ''}`}
    />
  )
}