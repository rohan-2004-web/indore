'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ABRoadEscortsContent from './ABRoadPageContent'

export default function ABRoadPage() {
  // Set page metadata
  useEffect(() => {
    document.title = 'Escorts Service AB Road Indore | Call Girls 24/7 | Commercial Hub'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ Best escorts service AB Road with 500+ verified call girls & VIP escorts 🔥 escorts service AB Road available 24/7 in commercial hub 💯 Safe escorts service AB Road ☎️ +91-9867564994')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'escorts service ab road, escorts in AB Road, call girls in AB Road, AB Road escorts, commercial hub escorts')
    if (!document.querySelector('meta[name="keywords"]')) document.head.appendChild(metaKeywords)
    
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    canonical.setAttribute('href', 'https://saumyakapoor.in/locations/ab-road')
    if (!document.querySelector('link[rel="canonical"]')) document.head.appendChild(canonical)
  }, [])
  
  return (
    <>
      <Header />
      
      {/* Comprehensive AB Road Escorts Content */}
      <ABRoadEscortsContent />
    </>
  )
}
