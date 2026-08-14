import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="border border-gray-200/40 p-4 rounded-md bg-white">
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-sm" />
      <h3 className="mt-3 font-semibold text-lg">{project.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{project.summary}</p>
      <div className="mt-3 text-xs text-gray-500">{project.tags.join(' • ')}</div>
      <div className="mt-3">
        <a className="text-sm text-black underline" href={project.link} target="_blank" rel="noreferrer">View</a>
      </div>
    </article>
  )
}
