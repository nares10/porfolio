import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-black/10">
      <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-center text-black/70">
        © {new Date().getFullYear()} Naresh Dewasi —  Portfolio Website
      </div>
    </footer>
  )
}
