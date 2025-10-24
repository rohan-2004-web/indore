'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-pink-100' 
          : 'bg-white/90 backdrop-blur-md shadow-md border-b border-pink-100/50'
      }`}
      role="banner"
      aria-label="Site header"
    >
      <nav 
        className="container mx-auto px-4 py-3 md:py-4" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="hidden md:grid md:grid-cols-3 md:items-center md:gap-4">
          {/* Logo - Left */}
          <div className="text-2xl font-bold relative z-10">
            <Link 
              href="/" 
              aria-label="Saumya Kapoor - Go to homepage"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-pink-500 rounded relative"
            >
              <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 bg-clip-text text-transparent font-extrabold" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                Saumya Kapoor
              </span>
            </Link>
          </div>

          {/* Centered Navigation Menu */}
          <nav className="flex items-center justify-center space-x-8" role="navigation" aria-label="Primary navigation">
            <Link 
              href="/" 
              className="font-black text-lg text-black hover:text-pink-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="font-black text-lg text-black hover:text-pink-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="font-black text-lg text-black hover:text-pink-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
            <Link 
              href="/gallery" 
              className="font-black text-lg text-black hover:text-pink-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/gallery' ? 'page' : undefined}
            >
              Gallery
            </Link>
            <Link 
              href="/contact" 
              className="font-black text-lg text-black hover:text-pink-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded px-2 py-1"
              aria-current={typeof window !== 'undefined' && window.location.pathname === '/contact' ? 'page' : undefined}
            >
              Contact
            </Link>
          </nav>

          {/* Right Side - Call and WhatsApp Buttons */}
          <div className="flex items-center justify-end gap-3">
            {/* Call Now Button */}
            <a 
              href="tel:+919372662471" 
              aria-label="Call now at +91 9372662471"
              className="inline-flex items-center gap-2 bg-[#E91E63] hover:bg-[#C2185B] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919372662471" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp (opens in new window)"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.473 3.516"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg p-3 border-2 shadow-lg ${
              isScrolled 
                ? 'text-gray-800 bg-white/90 border-pink-200 hover:bg-pink-50 hover:text-pink-600' 
                : 'text-white bg-pink-600/90 border-pink-400 hover:bg-pink-700 hover:border-pink-300 backdrop-blur-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold relative z-10">
            <Link 
              href="/" 
              aria-label="Saumya Kapoor - Go to homepage"
              className="inline-block focus:outline-none focus:ring-2 focus:ring-pink-500 rounded relative"
            >
              <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 bg-clip-text text-transparent font-extrabold" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                Saumya Kapoor
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-lg p-3 border-2 shadow-lg ${
              isScrolled 
                ? 'text-gray-800 bg-white/90 border-pink-200 hover:bg-pink-50 hover:text-pink-600' 
                : 'text-white bg-pink-600/90 border-pink-400 hover:bg-pink-700 hover:border-pink-300 backdrop-blur-sm'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden mt-3 pb-3 border-t border-pink-200 bg-gradient-to-b from-pink-900/95 to-purple-900/95 backdrop-blur-lg rounded-lg shadow-2xl border-2 border-pink-400/50"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-1 mt-3">
              <Link 
                href="/" 
                className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-current={typeof window !== 'undefined' && window.location.pathname === '/' ? 'page' : undefined}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-current={typeof window !== 'undefined' && window.location.pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-current={typeof window !== 'undefined' && window.location.pathname === '/services' ? 'page' : undefined}
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-current={typeof window !== 'undefined' && window.location.pathname === '/gallery' ? 'page' : undefined}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-current={typeof window !== 'undefined' && window.location.pathname === '/contact' ? 'page' : undefined}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Buttons */}
              <div className="flex gap-2 px-3 mt-4" role="group" aria-label="Contact options">
                <a 
                  href="tel:+919372662471" 
                  className="flex-1 bg-[#E91E63] hover:bg-[#C2185B] text-white px-4 py-3 rounded-full font-bold text-center text-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  aria-label="Call now at +91 9372662471"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Call Now</span>
                </a>
                <a 
                  href="https://wa.me/919372662471" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-full font-bold text-center text-sm flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                  aria-label="Contact us on WhatsApp (opens in new window)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.473 3.516"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
              
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold text-center mx-3 mt-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                aria-label="Get started - contact us"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}