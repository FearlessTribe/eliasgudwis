import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { CookieBanner } from './CookieBanner'
import { Footer } from './Footer'
import { MobileCta } from './MobileCta'
import { Nav } from './Nav'

function ScrollTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export function Layout() {
  return (
    <div className="site">
      <ScrollTop />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileCta />
      <CookieBanner />
    </div>
  )
}
