import { useEffect, useRef } from 'react'

const NODES = [
  { id: 'kunde', x: 84, y: 92, r: 8, label: 'Kunde' },
  { id: 'portal', x: 96, y: 248, r: 7, label: 'Portal' },
  { id: 'elias', x: 272, y: 168, r: 19, label: 'Elias Gudwis' },
  { id: 'autor', x: 452, y: 88, r: 9, label: 'Autor' },
  { id: 'lektor', x: 474, y: 226, r: 8, label: 'Lektorat' },
  { id: 'qa', x: 296, y: 300, r: 7, label: 'Plagiatsprüfung' },
]

const EDGES: [string, string][] = [
  ['kunde', 'elias'],
  ['portal', 'elias'],
  ['elias', 'autor'],
  ['autor', 'lektor'],
  ['lektor', 'qa'],
  ['qa', 'elias'],
  ['kunde', 'portal'],
]

const RAIL = [
  { id: '01', label: 'Anfrage' },
  { id: '02', label: 'Kommunikation' },
  { id: '03', label: 'Bearbeitung' },
  { id: '04', label: 'Übergabe' },
]

function node(id: string) {
  return NODES.find((n) => n.id === id)!
}

export function EcosystemCanvas() {
  const dots = useRef<(SVGCircleElement | null)[]>([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    let frame = 0
    let raf = 0
    const loop = () => {
      frame += 1
      EDGES.forEach(([a, b], i) => {
        const el = dots.current[i]
        if (!el) return
        const A = node(a)
        const B = node(b)
        const p = (frame / 220 + i * 0.18) % 1
        el.setAttribute('cx', String(A.x + (B.x - A.x) * p))
        el.setAttribute('cy', String(A.y + (B.y - A.y) * p))
      })
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <figure className="figure">
      <figcaption className="figure-head">
        <span className="mono">Ihr Projekt bei uns</span>
        <span className="mono figure-note">Vertraulich</span>
      </figcaption>

      <div className="figure-viz" aria-hidden="true">
        <svg viewBox="0 0 560 340" role="presentation">
          {EDGES.map(([a, b]) => {
            const A = node(a)
            const B = node(b)
            const mx = (A.x + B.x) / 2
            const my = (A.y + B.y) / 2 - 22
            return (
              <path
                key={`${a}-${b}`}
                className="path-flow"
                d={`M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`}
                fill="none"
                stroke="#c3c8d1"
                strokeWidth="1"
              />
            )
          })}

          {EDGES.map(([a], i) => (
            <circle
              key={`p-${a}-${i}`}
              ref={(el) => {
                dots.current[i] = el
              }}
              cx={node(a).x}
              cy={node(a).y}
              r="2.2"
              fill="#ed7b46"
              opacity="0.75"
            />
          ))}

          {NODES.map((n) => {
            const lead = n.id === 'elias'
            return (
              <g key={n.id}>
                {lead && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={n.r + 13}
                    fill="none"
                    stroke="#e48b59"
                    strokeOpacity="0.3"
                    strokeWidth="1"
                  />
                )}
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={lead ? '#e48b59' : '#ffffff'}
                  stroke={lead ? '#c2653a' : '#53617a'}
                  strokeWidth="1.2"
                />
                <text
                  className={`node-label${lead ? ' is-lead' : ''}`}
                  x={n.x}
                  y={n.y + n.r + 17}
                  textAnchor="middle"
                >
                  {n.label}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      <div className="figure-rail">
        {RAIL.map((step) => (
          <div className="rail-step" key={step.id}>
            <span className="mono">{step.id}</span>
            <p>{step.label}</p>
          </div>
        ))}
      </div>
    </figure>
  )
}
