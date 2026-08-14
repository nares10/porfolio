import React from 'react'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'
import projects from '../../data/projects.json'

export default function Home() {
  const featured = projects.slice(0, 6)
  return (
    <div>
      <Hero />
      <section className="container max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
        <ProjectsGrid projects={featured} />
      </section>
    </div>
  )
}
