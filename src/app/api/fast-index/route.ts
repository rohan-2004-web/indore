import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { action } = await request.json()
    
    // All pages that should be indexed
    const pagesToIndex = [
      'https://saumyakapoor.in/',
      'https://saumyakapoor.in/services',
      'https://saumyakapoor.in/locations', 
      'https://saumyakapoor.in/about',
      'https://saumyakapoor.in/contact',
      'https://saumyakapoor.in/gallery',
      'https://saumyakapoor.in/services/indore-escorts',
      'https://saumyakapoor.in/services/call-girl',
      'https://saumyakapoor.in/services/vip-escorts',
      'https://saumyakapoor.in/services/college-girls',
      'https://saumyakapoor.in/services/celebrity-escorts',
      'https://saumyakapoor.in/services/premium-models',
      'https://saumyakapoor.in/locations/vijay-nagar',
      'https://saumyakapoor.in/locations/ab-road',
      'https://saumyakapoor.in/locations/palasia',
      'https://saumyakapoor.in/locations/bhawar-kuan',
      'https://saumyakapoor.in/locations/saket',
      'https://saumyakapoor.in/locations/scheme-78',
      'https://saumyakapoor.in/locations/airport-road',
      'https://saumyakapoor.in/locations/mg-road',
      'https://saumyakapoor.in/locations/rajwada',
      'https://saumyakapoor.in/locations/ring-road',
      'https://saumyakapoor.in/locations/bombay-hospital',
      'https://saumyakapoor.in/locations/treasure-island'
    ]

    if (action === 'submit-all') {
      const results = []
      
      // Submit to Google IndexNow API
      for (const url of pagesToIndex) {
        try {
          // IndexNow API submission
          const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              host: 'saumyakapoor.in',
              key: 'saumyakapoor-indexnow-key',
              keyLocation: 'https://saumyakapoor.in/saumyakapoor-indexnow-key.txt',
              urlList: [url]
            })
          })

          // Google Ping
          const googlePing = `https://www.google.com/ping?sitemap=${encodeURIComponent('https://saumyakapoor.in/sitemap.xml')}`
          fetch(googlePing, { method: 'GET' }).catch(() => {})

          results.push({
            url,
            status: 'submitted',
            indexNowStatus: indexNowResponse.status,
            timestamp: new Date().toISOString()
          })
        } catch (error) {
          results.push({
            url,
            status: 'error',
            error: error instanceof Error ? error.message : 'Unknown error',
            timestamp: new Date().toISOString()
          })
        }
      }

      return NextResponse.json({
        success: true,
        message: `Submitted ${pagesToIndex.length} pages for indexing`,
        results,
        totalPages: pagesToIndex.length,
        timestamp: new Date().toISOString()
      })
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid action'
    }, { status: 400 })

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to submit for indexing',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Fast Indexing API for Saumya Kapoor - Indore Escort Service',
    endpoints: {
      'POST /api/fast-index': 'Submit all pages for indexing',
      'body': '{ "action": "submit-all" }'
    },
    totalPages: 24,
    mainKeywords: [
      'Indore escort service',
      'Call girls in Indore', 
      'Saumya Kapoor Indore',
      'VIP escorts Indore',
      'Escort service Indore'
    ]
  })
}