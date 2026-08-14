import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectsGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} style={{ ['--enter-delay']: `${i * 50}ms` }} />
      ))}
    </div>
  )
}
