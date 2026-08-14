import React from 'react'
import ProjectsGrid from '../components/ProjectsGrid'
import projects from '../../data/projects.json'

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ProjectsGrid projects={projects} />
    </section>
  )
}
