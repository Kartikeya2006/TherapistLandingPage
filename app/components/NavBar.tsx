'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Star from '../icons/star'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#footer' },
    { name: 'Rates & FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Contact Bar */}
      <motion.div 
        className={`bg-red-100 transition-transform ${
          scrolled ? 'opacity-0 -translate-y-full' : 'opacity-0 translate-y-0'
        } ${scrolled ? 'h-0' : 'h-auto'} overflow-hidden`}
        animate={{
          opacity: scrolled ? 0 : 1,
          y: scrolled ? -100 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-xs text-gray-700">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>(323) 555-0192</span>
            </div>
            <div className="flex items-center space-x-2">

              <MapPin className="w-4 h-4" />
              <span>1287 Maplewood Drive, Los Angeles, CA 90026</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav 
        className={`transition-all duration-300 h-[110px] p-5 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(246, 249, 249, 0.75)' : '#f6f9f9',
          backdropFilter: scrolled ? 'blur(10px)' : 'none'
        }}
        animate={{
          backgroundColor: scrolled ? 'rgba(246, 249, 249, 0.75)' : 'rgba(246, 249, 249, 1)'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex justify-between items-center h-20 ">
            {/* Logo */}
            <Image alt='logo.img' src="/image.webp" width={170} height={68}/>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:bg-white p-2 rounded-md hover:text-teal-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-teal-900 hidden lg:block font-semibold bg-white px-4 py-2 
                  rounded-lg border-2 border-teal-900 cursor-pointer transition-all duration-300
                  items-center gap-2 whitespace-nowrap hover:bg-teal-900 hover:text-white"
                >
                  <p className='flex'>
                    <Star />
                    Start Healing
                  </p>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden ">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-white
                transition-colors duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu - Sliding from Right - MOVED OUTSIDE NAV */}
      <motion.div 
        className={`md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50`}
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? '0%' : '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex flex-col h-full">
          {/* Header with logo and close button */}
          <div className="flex items-center justify-between p-4 ">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-teal-600 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 px-6 py-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-[#1B3E42] mb-2">Ellie Shumaker</h2>
            </div>
            
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-[#1B3E42] hover:text-teal-600 hover:bg-gray-50 transition-colors duration-200 font-medium text-lg rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </motion.div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </div>
  )
}

export default NavBar