import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-medium tracking-wide uppercase">Your Name</Link>

        <nav className="hidden sm:flex items-center space-x-6 text-sm" aria-label="Primary">
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="sm:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer text-sm">Menu</summary>
            <div className="absolute right-0 mt-2 w-40 bg-white border border-black/10 rounded-md shadow-sm">
              <div className="flex flex-col p-2">
                <Link to="/projects" className="py-2 px-3 text-sm hover:bg-black/5">Projects</Link>
                <Link to="/about" className="py-2 px-3 text-sm hover:bg-black/5">About</Link>
                <Link to="/contact" className="py-2 px-3 text-sm hover:bg-black/5">Contact</Link>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
