import { useState } from 'react'

const VIDEO_ID = 'XiVAIdxUsZE'
const TITLE =
  'Frag einen Ghostwriter – Elias über zwei Bachelorarbeiten in einer Woche und sein Gewissen'

export function HeroVideo() {
  const [playing, setPlaying] = useState(false)

  return (
    <figure className="figure">
      <figcaption className="figure-head">
        <span className="mono">Interview</span>
        <span className="mono figure-note">HYPERBOLE</span>
      </figcaption>

      <div className="video-frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title={TITLE}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Video abspielen: ${TITLE}. Wird erst nach dem Klick von YouTube geladen.`}
          >
            <img src="/hero-video.jpg" alt="" width={1280} height={720} />
            <span className="video-play" aria-hidden="true">
              <svg width="20" height="24" viewBox="0 0 20 24">
                <path d="M2 2.5 18 12 2 21.5Z" fill="currentColor" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="video-caption">
        <p>„Frag einen Ghostwriter“ – Elias Gudwis bei HYPERBOLE</p>
      </div>
    </figure>
  )
}
