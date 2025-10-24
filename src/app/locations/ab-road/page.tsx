'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ABRoadEscortsContent from './ABRoadPageContent'

export default function ABRoadPage() {
  // Set page metadata
  useEffect(() => {
    document.title = 'Escorts in AB Road Indore | Premium Call Girls 24/7 | Commercial Hub Service'
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', '⭐ Best escorts in AB Road, Indore with 500+ verified call girls & VIP escorts 🔥 Available 24/7 in commercial hub 💯 Safe service ☎️ +91-9372662471')
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription)
    
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta')
    metaKeywords.setAttribute('name', 'keywords')
    metaKeywords.setAttribute('content', 'escorts in AB Road, escorts in AB Road Indore, call girls in AB Road, AB Road escorts, escort service in AB Road, commercial hub escorts, business district companions Indore')
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
