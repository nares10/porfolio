import React from 'react'

export default function Contact({ id = 'contact' }) {
  const email = 'nareshdewasi021@gmail.com'
  const x = 'https://x.com/NareshDewa26000'
  const github = 'https://github.com/nares10'
  return (
    <section id={id} className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:space-x-6">
        <a className="nav-btn cta-btn" href="/resume.pdf" download>
          Download Resume
        </a>
        <p className="mt-4 sm:mt-0 text-gray-700">Or email me at <a className="underline" href={`mailto:${email}`}>{email}</a></p>
      </div>
      <div className="mt-6 flex items-center space-x-4">
        <a className="link-underline text-sm" href={x} target="_blank" rel="noopener noreferrer">X / @yourhandle</a>
        <a className="link-underline text-sm" href={github} target="_blank" rel="noopener noreferrer">GitHub / yourhandle</a>
      </div>
    </section>
  )
}
