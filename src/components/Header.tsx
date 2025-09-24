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
            <a href="#home" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Home
            </a>
            <a href="#about" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              About
            </a>
            <a href="#services" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Services
            </a>
            <a href="#gallery" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Gallery
            </a>
            <a href="#contact" className="font-black text-xl text-black hover:text-pink-500 transition-all duration-300 hover:scale-105">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact" className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-5 py-2 rounded-full font-semibold text-sm hover:from-pink-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started
            </a>
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
          <div className="md:hidden mt-3 pb-3 border-t border-pink-100 bg-white/95 backdrop-blur-lg rounded-lg">
            <div className="flex flex-col space-y-1 mt-3">
              <a href="#home" className="text-gray-700 hover:text-pink-500 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-50 rounded-lg">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-50 rounded-lg">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-50 rounded-lg">
                Services
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-500 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-50 rounded-lg">
                Gallery
              </a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 transition-colors font-bold text-base py-2 px-3 hover:bg-pink-50 rounded-lg">
                Contact
              </a>
              <a href="#contact" className="bg-gradient-to-r from-pink-500 to-blue-600 text-white px-4 py-2 rounded-full font-bold text-center mx-3 mt-2 text-sm">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}