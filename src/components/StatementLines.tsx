import { useLayoutEffect, useRef, type ReactNode } from 'react'

export function StatementLines({
  title,
  lead,
}: {
  title: ReactNode
  lead: string
}) {
  const rootRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLParagraphElement>(null)
  const leadRef = useRef<HTMLParagraphElement>(null)

  useLayoutEffect(() => {
    const root = rootRef.current
    const titleEl = titleRef.current
    const leadEl = leadRef.current
    if (!root || !titleEl || !leadEl) return

    const sync = () => {
      leadEl.style.transform = 'scale(1)'
      const titleWidth = titleEl.getBoundingClientRect().width
      const leadWidth = leadEl.scrollWidth || leadEl.getBoundingClientRect().width
      if (titleWidth < 8 || leadWidth < 8) return
      const scale = titleWidth / leadWidth
      leadEl.style.transform = `scale(${scale})`
    }

    sync()
    const frame = window.requestAnimationFrame(sync)
    const timeouts = [50, 200, 500, 900, 1400].map((ms) =>
      window.setTimeout(sync, ms),
    )

    const resizeObserver = new ResizeObserver(sync)
    resizeObserver.observe(titleEl)
    resizeObserver.observe(leadEl)

    const mutationObserver = new MutationObserver(sync)
    mutationObserver.observe(titleEl, {
      subtree: true,
      childList: true,
      characterData: true,
    })

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) sync()
      },
      { threshold: 0.2 },
    )
    intersectionObserver.observe(root)

    window.addEventListener('resize', sync)
    document.fonts?.ready.then(sync)

    return () => {
      window.cancelAnimationFrame(frame)
      timeouts.forEach((id) => window.clearTimeout(id))
      resizeObserver.disconnect()
      mutationObserver.disconnect()
      intersectionObserver.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [title, lead])

  return (
    <div className="statement-lines" ref={rootRef}>
      <p className="huge" ref={titleRef}>
        {title}
      </p>
      <p className="statement-lead" ref={leadRef}>
        {lead}
      </p>
    </div>
  )
}
