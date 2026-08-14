import React, { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function update() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const max = scrollHeight - clientHeight
      const pct = max > 0 ? (scrollTop / max) * 100 : 0
      el.style.width = `${pct}%`
      rafRef.current = null
    }

    function onScroll() {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // initial
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div className="progress-wrap" >
      <div ref={ref} className="progress-bar" />
    </div>
  )
}
