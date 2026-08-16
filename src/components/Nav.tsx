import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-inner">
          <span>Erreichbar Mo.–So. 12:00–21:00</span>
          <a href="tel:+4915901484601">+49 1590 1484601</a>
        </div>
      </div>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="wordmark">Gudwis</span>
            <span className="wordmark-sub">Ghostwriting</span>
          </Link>

          <nav className={`nav-links ${open ? 'open' : ''}`}>
            <a href="/#start" onClick={() => setOpen(false)}>
              Start
            </a>
            <a href="/#ablauf" onClick={() => setOpen(false)}>
              Ablauf
            </a>
            <a href="/#preise" onClick={() => setOpen(false)}>
              Preise
            </a>
            <a href="/#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <NavLink to="/unverbindliche-anfrage" onClick={() => setOpen(false)}>
              Anfrage
            </NavLink>
            <Link
              to="/unverbindliche-anfrage"
              className="btn"
              onClick={() => setOpen(false)}
            >
              Unverbindlich anfragen
            </Link>
          </nav>

          <Link to="/unverbindliche-anfrage" className="btn">
            Unverbindlich anfragen
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Menü"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="18" height="12" viewBox="0 0 18 12" aria-hidden="true">
              <path
                d={open ? 'M2 2l14 8M2 10L16 2' : 'M0 1h18M0 11h18'}
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
