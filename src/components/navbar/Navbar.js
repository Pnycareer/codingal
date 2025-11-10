'use client
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm border-b border-white/50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-10">
        {/* Left: Logo */}
        <Link
          href="https://pnygenius.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Image
            src="https://www.pnygenius.com/assets/uploads//logo/1618946219-school-logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-semibold text-slate-800">
            PNY Genius
          </span>
        </Link>

        {/* Center: Website Name */}
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent tracking-tight">
          AI Coding Courses for Kids
        </h1>

        {/* Right: Navigation Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleScroll('courses')}
            className="text-slate-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Courses
          </button>
          <button
            onClick={() => handleScroll('plans')}
            className="text-slate-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Plans
          </button>
          <button
            onClick={() => handleScroll('projects')}
            className="text-slate-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Projects
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
