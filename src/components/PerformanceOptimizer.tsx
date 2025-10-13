'use client'

import { useEffect } from 'react'

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: '/images/services/indore escorts.webp', as: 'image', type: 'image/webp' },
      { href: 'https://fonts.gstatic.com', as: 'font', crossOrigin: 'anonymous' },
    ]

    preloadLinks.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = as
      if (type) link.type = type
      if (crossOrigin) link.crossOrigin = crossOrigin
      document.head.appendChild(link)
    })

    // Optimize images with Intersection Observer
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
              img.removeAttribute('data-src')
              observer.unobserve(img)
            }
          }
        })
      })

      // Observe all images with data-src
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }

    // Remove unused CSS classes after render
    const removeUnusedStyles = () => {
      const stylesheets = Array.from(document.styleSheets)
      stylesheets.forEach(stylesheet => {
        try {
          const rules = Array.from(stylesheet.cssRules || [])
          rules.forEach(rule => {
            if (rule instanceof CSSStyleRule) {
              const selector = rule.selectorText
              if (selector && !document.querySelector(selector)) {
                // Mark for potential removal (be careful with this in production)
                rule.style.setProperty('--unused', 'true')
              }
            }
          })
        } catch (e) {
          // Cross-origin stylesheets can't be accessed
        }
      })
    }

    // Run after initial render
    setTimeout(removeUnusedStyles, 2000)

    // Prefetch important pages on mouse hover
    const prefetchPages = ['/services', '/locations', '/contact', '/gallery']
    
    const handleMouseEnter = (href: string) => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = href
      document.head.appendChild(link)
    }

    prefetchPages.forEach(page => {
      const links = document.querySelectorAll(`a[href="${page}"]`)
      links.forEach(link => {
        link.addEventListener('mouseenter', () => handleMouseEnter(page), { once: true })
      })
    })

    // Optimize animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (prefersReducedMotion.matches) {
      document.body.classList.add('reduce-motion')
    }

  }, [])

  return null
}