import { useState, type FormEvent } from 'react'

export function Pdf() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('https://formsubmit.co/ajax/info@ghostwriting-gudwis.de', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: 'PDF-Download Anfrage',
          email,
          message: 'Bitte PDF „Wie Sie Ihre wissenschaftliche Arbeit ideal vorbereiten“ senden.',
        }),
      })
    } catch {
      window.location.href = `mailto:info@ghostwriting-gudwis.de?subject=${encodeURIComponent(
        'PDF-Download',
      )}&body=${encodeURIComponent(email)}`
    } finally {
      setSending(false)
      setDone(true)
    }
  }

  return (
    <section className="legal">
      <div className="wrap legal-body">
        <p className="mono kicker">Ressource</p>
        <h1>Kostenloses PDF</h1>
        <p>Wie Sie Ihre wissenschaftliche Arbeit ideal vorbereiten.</p>
        <p>Ihre Strategie für eine reibungslose Zusammenarbeit mit Dozenten.</p>

        {done ? (
          <div className="card" style={{ marginTop: 28 }}>
            <p className="mono">Gesendet</p>
            <h2 style={{ marginTop: 8 }}>Vielen Dank.</h2>
            <p className="muted" style={{ marginTop: 8 }}>
              Elias Gudwis sendet Ihnen das PDF an {email}. Bitte prüfen Sie auch den
              Spam-Ordner.
            </p>
          </div>
        ) : (
          <form className="card" style={{ marginTop: 28 }} onSubmit={submit}>
            <div className="field">
              <label htmlFor="pdf-email">Ihre E-Mail-Adresse</label>
              <input
                id="pdf-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button className="btn" type="submit" disabled={sending} style={{ marginTop: 20 }}>
              {sending ? 'Senden…' : 'Jetzt erhalten'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
