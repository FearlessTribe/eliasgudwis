import { useEffect, useRef, useState } from 'react'

type TypewriterProps = {
  text: string
  delay?: number
  speed?: number
  className?: string
}

export function Typewriter({
  text,
  delay = 0,
  speed = 38,
  className = '',
}: TypewriterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  const [length, setLength] = useState(0)
  const characters = Array.from(text)
  const complete = length >= characters.length

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLength(characters.length)
      setStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [characters.length])

  useEffect(() => {
    if (!started || complete) return

    const timeout = window.setTimeout(
      () => setLength((current) => Math.min(current + 1, characters.length)),
      length === 0 ? delay : speed,
    )

    return () => window.clearTimeout(timeout)
  }, [characters.length, complete, delay, length, speed, started])

  return (
    <span
      ref={ref}
      className={`typewriter ${complete ? 'is-complete' : ''} ${className}`}
      aria-label={text}
    >
      <span className="typewriter-measure" aria-hidden="true">
        {text}
      </span>
      <span className="typewriter-output" aria-hidden="true">
        {characters.slice(0, length).join('')}
        <span className="typewriter-caret" />
      </span>
    </span>
  )
}
