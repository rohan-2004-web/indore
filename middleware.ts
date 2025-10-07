import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Fix malformed URLs containing "The" or "$" or other invalid characters
  if (pathname.includes('The') || pathname.includes('$') || pathname.includes('{') || pathname.includes('}')) {
    // Redirect malformed URLs to homepage
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  // Fix URLs with double slashes or trailing slashes (except root)
  if (pathname.includes('//') || (pathname.endsWith('/') && pathname !== '/')) {
    const cleanPath = pathname.replace(/\/+/g, '/').replace(/\/$/, '') || '/'
    return NextResponse.redirect(new URL(cleanPath, request.url))
  }
  
  // Fix URLs with special characters that shouldn't be there
  if (pathname.match(/[^a-zA-Z0-9\-\/_.]/)) {
    // Only allow alphanumeric, hyphens, slashes, underscores, and dots
    return NextResponse.redirect(new URL('/', request.url))
  }
  
  // Continue with normal request
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|favicon.png|apple-touch-icon.png|site.webmanifest|robots.txt|sitemap.xml|google8ca85fc03eb3c8d6.html).*)',
  ],
}