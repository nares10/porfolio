import React from 'react'

export default function Contact({ id = 'contact' }) {
  const email = 'your-email@example.com'
  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <a className="nav-btn cta-btn" href="/resume.pdf" download>
          Download Resume
        </a>
        <p className="mt-4 sm:mt-0 text-gray-700">Or email me at <a className="underline" href={`mailto:${email}`}>{email}</a></p>
      </div>
    </section>
  )
}
