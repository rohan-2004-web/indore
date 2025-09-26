'use client'

// Simple performance monitoring without external dependencies
export function reportWebVitals() {
  if (typeof window !== 'undefined') {
    // Monitor Core Web Vitals using native APIs
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log(`Performance metric: ${entry.name} - ${entry.startTime}ms`)
      })
    })

    // Observe paint metrics
    if ('PerformanceObserver' in window) {
      observer.observe({ entryTypes: ['paint', 'navigation', 'largest-contentful-paint'] })
    }

    // Simple page load performance tracking
    window.addEventListener('load', () => {
      const loadTime = performance.now()
      console.log(`Page loaded in ${loadTime}ms`)
    })
  }
}