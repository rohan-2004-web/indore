'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

export function usePerformanceMonitor() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        const metrics: PerformanceMetrics = {}
        
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime
            }
            break
            
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime
            break
            
          case 'first-input':
            const firstInputEntry = entry as PerformanceEventTiming
            metrics.fid = firstInputEntry.processingStart - firstInputEntry.startTime
            break
            
          case 'layout-shift':
            const layoutShiftEntry = entry as any
            if (!layoutShiftEntry.hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + layoutShiftEntry.value
            }
            break
            
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming
            metrics.ttfb = navEntry.responseStart - navEntry.requestStart
            break
        }
        
        // Log performance metrics (in production, send to analytics)
        if (Object.keys(metrics).length > 0) {
          console.log('Performance Metrics:', metrics)
          
          // You can send these to your analytics service
          // Example: analytics.track('performance', metrics)
        }
      })
    })

    // Observe different performance entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] })
    } catch (error) {
      console.log('Performance Observer not supported for some entry types')
      
      // Fallback for basic metrics
      window.addEventListener('load', () => {
        const perfData = performance.timing
        const loadTime = perfData.loadEventEnd - perfData.navigationStart
        const domReadyTime = perfData.domContentLoadedEventEnd - perfData.navigationStart
        
        console.log('Basic Performance Metrics:', {
          loadTime,
          domReadyTime,
          ttfb: perfData.responseStart - perfData.requestStart
        })
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])
}

// Enhanced performance monitoring with Core Web Vitals
export function measureCoreWebVitals() {
  if (typeof window === 'undefined') return

  // Measure Largest Contentful Paint (LCP)
  function measureLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      
      console.log('LCP:', lastEntry.startTime)
      
      // Good: < 2.5s, Needs Improvement: 2.5s - 4s, Poor: > 4s
      const rating = lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
      console.log('LCP Rating:', rating)
    })
    
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint'] })
    } catch (e) {
      console.log('LCP measurement not supported')
    }
  }

  // Measure First Input Delay (FID)
  function measureFID() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry) => {
        const firstInputEntry = entry as PerformanceEventTiming
        const fid = firstInputEntry.processingStart - firstInputEntry.startTime
        console.log('FID:', fid)
        
        // Good: < 100ms, Needs Improvement: 100ms - 300ms, Poor: > 300ms
        const rating = fid < 100 ? 'good' : fid < 300 ? 'needs-improvement' : 'poor'
        console.log('FID Rating:', rating)
      })
    })
    
    try {
      observer.observe({ entryTypes: ['first-input'] })
    } catch (e) {
      console.log('FID measurement not supported')
    }
  }

  // Measure Cumulative Layout Shift (CLS)
  function measureCLS() {
    let clsValue = 0
    let clsEntries: any[] = []

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          clsEntries.push(entry)
        }
      })
      
      console.log('CLS:', clsValue)
      
      // Good: < 0.1, Needs Improvement: 0.1 - 0.25, Poor: > 0.25
      const rating = clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
      console.log('CLS Rating:', rating)
    })
    
    try {
      observer.observe({ entryTypes: ['layout-shift'] })
    } catch (e) {
      console.log('CLS measurement not supported')
    }
  }

  // Initialize all measurements
  measureLCP()
  measureFID()
  measureCLS()
}

// Component to automatically start performance monitoring
export function PerformanceMonitor() {
  usePerformanceMonitor()
  
  useEffect(() => {
    measureCoreWebVitals()
  }, [])
  
  return null
}