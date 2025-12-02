'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const productsDropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen)
  }

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsProductsOpen(false)
  }

  // Handle mobile link clicks
  const handleMobileLinkClick = (href: string) => {
    closeMenu()
    // Force navigation on mobile
    window.location.href = href
  }

  // Close dropdowns when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      // Only apply outside click logic on desktop
      if (window.innerWidth >= 768) {
        if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
          setIsServicesOpen(false)
        }
        if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target as Node)) {
          setIsProductsOpen(false)
        }
      }
    }

    if (isServicesOpen || isProductsOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isServicesOpen, isProductsOpen])

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="GInfra Travancore"
                width={320}
                height={107}
                className="h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              
              {/* Products Dropdown */}
              <div className="relative" ref={productsDropdownRef}>
                <button
                  onClick={toggleProducts}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Products
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isProductsOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <Link
                        href="/products/fuzes"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Fuzes
                      </Link>
                      <Link
                        href="/products/cartridge-cases"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Cartridge Cases
                      </Link>
                      <Link
                        href="/products/pcbs"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        PCBs
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Services Dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Services
                  <svg
                    className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1">
                      <Link
                        href="/services/defence"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Defence Components
                      </Link>
                      <Link
                        href="/services/aerospace"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Aerospace Components
                      </Link>
                      <Link
                        href="/services/robotics"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Advanced Robotics
                      </Link>
                      <Link
                        href="/services/precision"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Precision Machining
                      </Link>
                      <Link
                        href="/services/quality"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={closeMenu}
                      >
                        Quality Assurance
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-24 z-[9999] bg-white border-t shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              
              {/* Mobile Products */}
              <div>
                <button
                  onClick={toggleProducts}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors w-full text-left flex items-center justify-between"
                >
                  Products
                  <svg
                    className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isProductsOpen && (
                  <div className="pl-6 space-y-1 bg-gray-50 rounded-md mx-3 py-2 relative z-[10000]">
                    <a
                      href="/products/fuzes"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/products/fuzes')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/products/fuzes')
                      }}
                    >
                      Fuzes
                    </a>
                    <a
                      href="/products/cartridge-cases"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/products/cartridge-cases')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/products/cartridge-cases')
                      }}
                    >
                      Cartridge Cases
                    </a>
                    <a
                      href="/products/pcbs"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/products/pcbs')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/products/pcbs')
                      }}
                    >
                      PCBs
                    </a>
                  </div>
                )}
              </div>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors w-full text-left flex items-center justify-between"
                >
                  Services
                  <svg
                    className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="pl-6 space-y-1 bg-gray-50 rounded-md mx-3 py-2 relative z-[10000]">
                    <a
                      href="/services/defence"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/defence')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/defence')
                      }}
                    >
                      Defence Components
                    </a>
                    <a
                      href="/services/aerospace"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/aerospace')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/aerospace')
                      }}
                    >
                      Aerospace Components
                    </a>
                    <a
                      href="/services/robotics"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/robotics')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/robotics')
                      }}
                    >
                      Advanced Robotics
                    </a>
                    <a
                      href="/services/precision"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/precision')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/precision')
                      }}
                    >
                      Precision Machining
                    </a>
                    <a
                      href="/services/quality"
                      className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 block px-3 py-2 text-sm transition-colors rounded-md cursor-pointer touch-manipulation"
                      onClick={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/quality')
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault()
                        handleMobileLinkClick('/services/quality')
                      }}
                    >
                      Quality Assurance
                    </a>
                  </div>
                )}
              </div>
              
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}