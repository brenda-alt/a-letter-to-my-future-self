import { useEffect, useRef, useState, type RefObject } from 'react'

export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): { ref: RefObject<T | null>; inView: boolean } {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      { threshold: 0.22, ...options },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}
