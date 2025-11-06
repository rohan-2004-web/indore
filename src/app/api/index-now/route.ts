import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { urls } = await request.json()
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'URLs array is required' }, { status: 400 })
    }

    // Google IndexNow API endpoint
    const indexNowApiUrl = 'https://api.indexnow.org/indexnow'
    
    const results = []
    
    for (const url of urls) {
      try {
        // Ping IndexNow API (supported by Bing, Yandex, and others)
        const indexNowResponse = await fetch(indexNowApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            host: 'saumyakapoor.in',
            key: 'saumyakapoor-indexnow-key', // You can customize this
            keyLocation: 'https://saumyakapoor.in/saumyakapoor-indexnow-key.txt',
            urlList: [url]
          })
        })

        // Also ping Google manually via fetch (informal notification)
        const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent('https://saumyakapoor.in/sitemap.xml')}`
        
        fetch(googlePingUrl, { method: 'GET' }).catch(() => {}) // Silent fail for ping
        
        results.push({
          url,
          status: 'queued',
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
      message: 'Indexing requests sent',
      results,
      total: urls.length,
      queued: results.filter(r => r.status === 'queued').length
    })
    
  } catch (error) {
    console.error('Indexing API error:', error)
    return NextResponse.json({ 
      error: 'Failed to process indexing request',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// GET endpoint to trigger immediate sitemap ping
export async function GET() {
  try {
    // Ping Google with sitemap
    const googleSitemapPing = `https://www.google.com/ping?sitemap=${encodeURIComponent('https://saumyakapoor.in/sitemap.xml')}`
    
    const response = await fetch(googleSitemapPing, { 
      method: 'GET',
      headers: {
        'User-Agent': 'SaumyaKapoor-Website/1.0'
      }
    })
    
    return NextResponse.json({
      message: 'Sitemap ping sent to Google',
      status: response.status,
      timestamp: new Date().toISOString(),
      sitemapUrl: 'https://saumyakapoor.in/sitemap.xml'
    })
    
  } catch (error) {
    return NextResponse.json({
      error: 'Failed to ping Google',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}