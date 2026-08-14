import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/50">
      <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-center">
        © {new Date().getFullYear()} Your Name — Minimal black & white portfolio
      </div>
    </footer>
  )
}
