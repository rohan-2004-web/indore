import { NextResponse } from 'next/server';

// Request Google to re-crawl specific URLs
export async function POST(request: Request) {
  try {
    const { urls } = await request.json();
    
    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: 'URLs array required' }, { status: 400 });
    }

    const results = [];
    
    // For each URL, ping Google
    for (const url of urls) {
      try {
        // Method 1: Use IndexNow API
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
        });

        results.push({
          url,
          indexNowStatus: indexNowResponse.status,
          success: indexNowResponse.ok
        });
      } catch (error) {
        results.push({
          url,
          error: error instanceof Error ? error.message : 'Unknown error',
          success: false
        });
      }
    }

    return NextResponse.json({
      message: 'URLs submitted for indexing',
      results,
      totalProcessed: urls.length
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// GET endpoint to check indexing status
export async function GET() {
  const baseUrl = 'https://saumyakapoor.in';
  
  const importantPages = [
    '/',
    '/services',
    '/locations',
    '/about',
    '/contact',
    '/gallery',
    '/services/call-girl',
    '/services/vip-escorts',
    '/services/celebrity-escorts',
    '/services/college-girls',
    '/services/independent-escort',
    '/locations/vijay-nagar',
    '/locations/ab-road',
    '/locations/palasia',
    '/locations/scheme-78',
    '/locations/mg-road',
  ];

  const urls = importantPages.map(path => `${baseUrl}${path}`);

  return NextResponse.json({
    message: 'Important pages for indexing',
    urls,
    totalUrls: urls.length,
    instructions: 'POST to this endpoint with { "urls": [...] } to submit for indexing'
  });
}
