import { Link, useLocation } from 'react-router-dom'

export function MobileCta() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/unverbindliche-anfrage')) return null

  return (
    <div className="mobile-cta">
      <Link className="btn" to="/unverbindliche-anfrage">
        Unverbindlich anfragen
      </Link>
      <a className="btn btn-ghost" href="tel:+4915901484601" aria-label="Anrufen">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  )
}
