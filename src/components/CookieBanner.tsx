import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const KEY = 'gudwis-cookie-consent'

export function CookieBanner() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(!localStorage.getItem(KEY))
  }, [])

  useEffect(() => {
    if (open) document.body.dataset.cookie = 'open'
    else delete document.body.dataset.cookie
    return () => {
      delete document.body.dataset.cookie
    }
  }, [open])

  if (!open) return null

  const choose = (value: 'all' | 'essential') => {
    localStorage.setItem(KEY, value)
    setOpen(false)
  }

  return (
    <aside className="cookie" role="dialog" aria-label="Cookie-Einstellungen">
      <div className="wrap cookie-inner">
        <p>
          Wir verwenden technisch notwendige Cookies. Statistik- und Marketing-Cookies
          nur mit Ihrer Einwilligung.{' '}
          <Link to="/cookie-richtlinien">Cookie-Richtlinien</Link>
        </p>
        <div className="cookie-actions">
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => choose('essential')}
          >
            Nur essenziell
          </button>
          <button className="btn" type="button" onClick={() => choose('all')}>
            Alle akzeptieren
          </button>
        </div>
      </div>
    </aside>
  )
}
