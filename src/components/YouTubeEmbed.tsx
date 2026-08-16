import { useState } from 'react'

type YouTubeEmbedProps = {
  videoId: string
  title: string
  poster: string
  label?: string
  note?: string
  caption?: string
}

export function YouTubeEmbed({
  videoId,
  title,
  poster,
  label,
  note,
  caption,
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false)
  const showChrome = Boolean(label || note || caption)

  const frame = (
    <div className="video-frame">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="video-poster"
          onClick={() => setPlaying(true)}
          aria-label={`Video abspielen: ${title}. Wird erst nach dem Klick von YouTube geladen.`}
        >
          <img src={poster} alt="" width={1280} height={720} />
          <span className="video-play" aria-hidden="true">
            <svg width="20" height="24" viewBox="0 0 20 24">
              <path d="M2 2.5 18 12 2 21.5Z" fill="currentColor" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )

  if (!showChrome) return frame

  return (
    <figure className="figure">
      {(label || note) && (
        <figcaption className="figure-head">
          {label ? <span className="mono">{label}</span> : <span />}
          {note ? <span className="mono figure-note">{note}</span> : null}
        </figcaption>
      )}

      {frame}

      {caption ? (
        <div className="video-caption">
          <p>{caption}</p>
        </div>
      ) : null}
    </figure>
  )
}
