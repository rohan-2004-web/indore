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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-pink-100' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-blue-700 bg-clip-text text-transparent drop-shadow-2xl filter brightness-110">
              Saumya Kapoor
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Home
            </Link>
            <Link href="/about" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              About
            </Link>
            <Link href="/services" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Services
            </Link>
            <Link href="/gallery" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Gallery
            </Link>
            <Link href="/contact" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Contact
            </Link>
          </div>

          {/* CTA Button + quick icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Circular icon buttons (consistent size) */}
            <a href="tel:+919372662471" aria-label="Call us" className="w-12 h-12 flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21 16.5a16.92 16.92 0 0 1-7.5-2.5 1 1 0 0 0-1.02.12l-2 1.5a17.06 17.06 0 0 1-6.2-6.2l1.5-2a1 1 0 0 0 .12-1.02A16.92 16.92 0 0 1 7.5 3 1 1 0 0 0 6.5 2H4a1 1 0 0 0-1 1C3 14.2 9.8 21 21 21a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1z" />
              </svg>
            </a>

            <a href="https://wa.me/919372662471" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transition-transform transform hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M20.52 3.48a11.91 11.91 0 10-16.84 16.84l-1.12 4.1 4.23-1.11A11.91 11.91 0 0020.52 3.48zm-9.02 17.35c4.8 0 8.71-3.9 8.71-8.71 0-4.81-3.91-8.71-8.71-8.71-4.81 0-8.71 3.9-8.71 8.71 0 1.54.39 3.01 1.13 4.31L3 21l3.76-1.03a8.66 8.66 0 004.74 1.87z" />
                <path d="M17.6 14.2c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.56-.01-.18 0-.47.07-.72.37-.25.3-.96.94-.96 2.3 0 1.36.98 2.68 1.12 2.87.14.2 1.92 2.94 4.65 4.01 3.22 1.25 3.22.83 3.8.78.58-.05 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.15-.28-.23-.58-.38z" />
              </svg>
            </a>

            <Link href="/contact" className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:from-pink-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden mt-3 pb-3 border-t border-pink-100 bg-black/95 backdrop-blur-lg rounded-lg">
            <div className="flex flex-col space-y-1 mt-3">
              <Link href="/" className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg">
                About
              </Link>
              <Link href="/services" className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg">
                Services
              </Link>
              <Link href="/gallery" className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg">
                Gallery
              </Link>
              <Link href="/contact" className="text-white hover:text-pink-400 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-900 rounded-lg">
                Contact
              </Link>
              <Link href="/contact" className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold text-center mx-3 mt-2 text-sm">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}