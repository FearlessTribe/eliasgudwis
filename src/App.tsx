import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Anfrage } from './pages/Anfrage'
import { Danke } from './pages/Danke'
import { Pdf } from './pages/Pdf'
import { Impressum } from './pages/Impressum'
import { Datenschutz } from './pages/Datenschutz'
import { AGB } from './pages/AGB'
import { Cookies } from './pages/Cookies'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/unverbindliche-anfrage" element={<Anfrage />} />
        <Route path="/danke-anfrage" element={<Danke />} />
        <Route path="/kostenloses-pdf" element={<Pdf />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/agb" element={<AGB />} />
        <Route path="/cookie-richtlinien" element={<Cookies />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
