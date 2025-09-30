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
            <a href="tel:+919372662471" aria-label="Call us" className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M21 16.5a16.92 16.92 0 0 1-7.5-2.5 1 1 0 0 0-1.02.12l-2 1.5a17.06 17.06 0 0 1-6.2-6.2l1.5-2a1 1 0 0 0 .12-1.02A16.92 16.92 0 0 1 7.5 3 1 1 0 0 0 6.5 2H4a1 1 0 0 0-1 1C3 14.2 9.8 21 21 21a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1z" />
              </svg>
              <span className="text-sm font-medium">Call Now</span>
            </a>

            <a href="https://wa.me/919372662471" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full shadow-lg transition-transform transform hover:scale-105">
              <img src="/path-to-provided-logo.png" alt="WhatsApp Logo" className="w-5 h-5" />
              <span className="text-sm font-medium">WhatsApp</span>
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