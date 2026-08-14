import { useEffect, useRef, useState } from 'react'

export default function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (options.once !== false) observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12, ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options])

  return [ref, inView]
}
