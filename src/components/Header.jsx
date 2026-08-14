import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="border-b border-gray-200/50">
      <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Your Name</Link>
        <nav className="space-x-6 text-sm">
          <Link to="/projects" className="hover:underline">Projects</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
