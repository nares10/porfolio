import React from 'react'
import useInView from '../hooks/useInView'

export default function Hero() {
  const [ref, inView] = useInView({ once: true })
  return (
    <section className="py-20">
      <div ref={ref} className={`max-w-3xl mx-auto px-6 text-center ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">Hi, I'm Your Name.</h1>
        <p className="mt-6 text-lg text-black/70">I build minimal, accessible interfaces and web apps.</p>
      </div>
    </section>
  )
}
