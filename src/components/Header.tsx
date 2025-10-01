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
            <a href="tel:+919372662471" aria-label="Call us" className="inline-flex items-center gap-4 bg-[#EC4899] hover:bg-pink-600 text-white px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-7 h-7"><circle cx="16" cy="16" r="16" fill="#EC4899"/><path d="M22.7 19.2c-1.2-.5-2.4-1.1-3.5-1.8-.3-.2-.7-.2-1 .1l-1.2 1c-2.2-1.2-4-3-5.2-5.2l1-1.2c.3-.3.3-.7.1-1-0.7-1.1-1.3-2.3-1.8-3.5-.2-.4-.6-.6-1-.6H7.1c-.6 0-1.1.5-1.1 1.1 0 7.2 5.8 13 13 13 .6 0 1.1-.5 1.1-1.1v-2.1c0-.4-.2-.8-.6-1z" fill="#fff"/></svg>
              <span className="text-lg font-bold">Call Now</span>
            </a>

            <a href="https://wa.me/919372662471" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="inline-flex items-center gap-4 bg-[#25D366] hover:bg-green-600 text-white px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-7 h-7"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M22.1 19.6c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.2-.2.2-.3.3-.5.1-.2.1-.4-.1-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.3 0 1.4 1 2.7 1.1 2.9.1.2 1.9 2.9 4.7 4 3.2 1.2 3.2.8 3.8.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z" fill="#fff"/></svg>
              <span className="text-lg font-bold">WhatsApp</span>
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
              
              {/* Mobile Contact Buttons */}
              <div className="flex gap-2 px-3 mt-4">
                <a href="tel:+919372662471" className="flex-1 bg-[#EC4899] hover:bg-pink-600 text-white px-4 py-3 rounded-full font-bold text-center text-sm flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.57-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.57-2.3-.57-3.53 0-.61-.49-1.1-1.1-1.1H4.9c-.61 0-1.1.49-1.1 1.1 0 9.39 7.61 17 17 17 .61 0 1.1-.49 1.1-1.1v-2.62c0-.61-.49-1.1-1.1-1.1z"/>
                  </svg>
                  Call
                </a>
                <a href="https://wa.me/919372662471" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366] hover:bg-green-600 text-white px-4 py-3 rounded-full font-bold text-center text-sm flex items-center justify-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.473 3.516"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
              
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