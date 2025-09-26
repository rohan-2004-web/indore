import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'

interface BreadcrumbItem {
  name: string
  href: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center space-x-1 text-sm text-gray-500 mb-6 ${className}`} aria-label="Breadcrumb">
      <Link 
        href="/" 
        className="hover:text-pink-600 transition-colors flex items-center"
        title="Home - Indore Escort Service"
      >
        <HomeIcon className="w-4 h-4 mr-1" />
        Home
      </Link>
      
      {items.map((item, index) => (
        <div key={item.name} className="flex items-center">
          <ChevronRightIcon className="w-4 h-4 mx-2 text-gray-400" />
          
          {item.current ? (
            <span 
              className="font-medium text-gray-900"
              aria-current="page"
            >
              {item.name}
            </span>
          ) : (
            <Link 
              href={item.href} 
              className="hover:text-pink-600 transition-colors"
              title={`${item.name} - Indore Escort Service`}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}

// Utility function to generate breadcrumbs for different page types
export function generateBreadcrumbs(type: 'location' | 'service' | 'about' | 'contact' | 'gallery', name?: string): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = []
  
  switch (type) {
    case 'location':
      breadcrumbs.push(
        { name: 'Locations', href: '/locations' },
        { name: name || 'Location', href: '#', current: true }
      )
      break
      
    case 'service':
      breadcrumbs.push(
        { name: 'Services', href: '/services' },
        { name: name || 'Service', href: '#', current: true }
      )
      break
      
    case 'about':
      breadcrumbs.push(
        { name: 'About Us', href: '/about', current: true }
      )
      break
      
    case 'contact':
      breadcrumbs.push(
        { name: 'Contact Us', href: '/contact', current: true }
      )
      break
      
    case 'gallery':
      breadcrumbs.push(
        { name: 'Gallery', href: '/gallery', current: true }
      )
      break
  }
  
  return breadcrumbs
}