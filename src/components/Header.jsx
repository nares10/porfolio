import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState(null)

  useEffect(() => {
    // If not on home, set active based on pathname
    if (location.pathname !== '/') {
      if (location.pathname.startsWith('/projects')) setActive('projects')
      else if (location.pathname.startsWith('/about')) setActive('about')
      else if (location.pathname.startsWith('/contact')) setActive('contact')
      else setActive(null)
      return
    }

    // On home, observe sections to highlight nav
    const ids = ['projects', 'about', 'contact']
    const observers = []
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }
    const obs = new IntersectionObserver(callback, { threshold: 0.4 })
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    observers.push(obs)
    return () => observers.forEach((o) => o.disconnect())
  }, [location])

  function handleNavTarget(target) {
    if (location.pathname === '/') {
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate(`/${target}`)
    }
  }

  return (
    <header className="border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
        <Link to="/" className="nav-btn text-2xl font-medium tracking-wide uppercase">Naresh Dewsi</Link>

        <nav className="hidden sm:flex items-center space-x-4 text-sm" aria-label="Primary">
          <button onClick={() => handleNavTarget('projects')} className={`nav-btn ${active === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => handleNavTarget('about')} className={`nav-btn ${active === 'about' ? 'active' : ''}`}>About</button>
          <button onClick={() => handleNavTarget('contact')} className={`nav-btn ${active === 'contact' ? 'active' : ''}`}>Contact</button>
        </nav>

        <a className="hidden sm:inline-block nav-btn cta-btn ml-4" href="/resume.pdf" download>
          Download Resume
        </a>

        <div className="sm:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer text-sm">Menu</summary>
            <div className="absolute right-0 mt-2 w-40 bg-white border border-black/10 rounded-md shadow-sm">
              <div className="flex flex-col p-2">
                <button onClick={() => handleNavTarget('projects')} className="nav-btn block text-left">Projects</button>
                <button onClick={() => handleNavTarget('about')} className="nav-btn block text-left">About</button>
                <button onClick={() => handleNavTarget('contact')} className="nav-btn block text-left">Contact</button>
                <a className="nav-btn cta-btn block text-left mt-2" href="/resume.pdf" download>Download Resume</a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
