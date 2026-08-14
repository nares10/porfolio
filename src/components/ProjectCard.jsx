import React from 'react'
import useInView from '../hooks/useInView'

export default function ProjectCard({ project, style }) {
  const [ref, inView] = useInView({ once: true })
  return (
    <article ref={ref} style={style} className={`border border-black/10 p-4 rounded-md bg-white card-anim ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
      <img src={project.image} alt={project.title} loading="lazy" className="w-full h-40 sm:h-48 object-cover rounded-sm" />
      <h3 className="mt-3 font-semibold text-lg">{project.title}</h3>
      <p className="mt-1 text-sm text-black/60">{project.summary}</p>
      <div className="mt-3 text-xs text-black/50">{project.tags.join(' • ')}</div>
      <div className="mt-3">
        <a className="text-sm text-black link-underline" href={project.link} target="_blank" rel="noreferrer">View</a>
      </div>
    </article>
  )
}
