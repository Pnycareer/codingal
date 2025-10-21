'use client'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/30 bg-blue-50 backdrop-blur-md py-3 text-center text-sm text-slate-600">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-6">
        {/* Left: Copyright */}
        <p className="text-slate-700">
          © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">PNY Genius</span>. All rights reserved.
        </p>

        {/* Right: Contact Info */}
        <p>
          Contact us at{' '}
          <a
           
            className="font-medium text-purple-600 hover:text-indigo-600 transition-colors"
          >
            info@pnygenius.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
