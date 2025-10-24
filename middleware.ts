import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Allow all valid paths - only block truly malformed URLs
  // Fix URLs with double slashes (except protocol)
  if (pathname.includes('//')) {
    const cleanPath = pathname.replace(/\/+/g, '/') || '/'
    return NextResponse.redirect(new URL(cleanPath, request.url), 301)
  }
  
  // Remove trailing slashes (except root)
  if (pathname.endsWith('/') && pathname.length > 1) {
    const cleanPath = pathname.replace(/\/$/, '')
    return NextResponse.redirect(new URL(cleanPath, request.url), 301)
  }
  
  // Block obviously malformed URLs with dangerous characters
  if (pathname.match(/[<>{}|\\^`\[\]]/)) {
    return NextResponse.redirect(new URL('/', request.url), 301)
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