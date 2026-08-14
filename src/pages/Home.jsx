import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import ProjectsGrid from '../components/ProjectsGrid'
import projects from '../../data/projects.json'
import About from './About'
import Contact from './Contact'

export default function Home() {
  const featured = projects.slice(0, 6)
  const location = useLocation()

  useEffect(() => {
    // If navigated with a state indicating a scroll target, perform scroll
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo
      const el = document.getElementById(id)
      if (el) {
        // small timeout to ensure element is rendered
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40)
      }
      // replace state to avoid re-scrolling
      window.history.replaceState({}, document.title)
    }
  }, [location])
  return (
    <div>
      <Hero />
      <section id="projects" className="container max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
        <ProjectsGrid projects={featured} />
      </section>

      <About />
      <Contact />
    </div>
  )
}
