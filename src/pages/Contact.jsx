import React from 'react'

export default function Contact() {
  const email = 'your-email@example.com'
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-4 text-gray-700">Feel free to reach out — <a className="underline" href={`mailto:${email}`}>{email}</a>.</p>
    </section>
  )
}
