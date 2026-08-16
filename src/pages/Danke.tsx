import { Link } from 'react-router-dom'

export function Danke() {
  return (
    <section className="legal">
      <div className="wrap legal-body">
        <p className="mono kicker">Bestätigung</p>
        <h1>Vielen Dank für Ihr Vertrauen in die Ghostwriting-Agentur Gudwis!</h1>
        <p>
          Eine Kopie Ihrer Anfrage wurde soeben an die von Ihnen angegebene E-Mail-Adresse
          gesendet. Bitte überprüfen Sie auch Ihren Spam-Ordner, falls Sie die E-Mail nicht
          sofort finden.
        </p>
        <p>
          Wir planen, Ihre Anfrage manuell zu prüfen und Sie zeitnah über Ihren präferierten
          Kommunikationskanal zu kontaktieren. Prüfung der Anfrage und Kontaktaufnahme
          erfolgen persönlich durch Elias Gudwis.
        </p>
        <p>Bitte haben Sie im Zweifelsfall ein wenig Geduld.</p>
        <p style={{ marginTop: 24 }}>
          Mit bestem Gruß
          <br />
          <strong>Elias Gudwis</strong>
        </p>
        <p style={{ marginTop: 28 }}>
          <Link className="btn" to="/">
            Zur Startseite
          </Link>
        </p>
      </div>
    </section>
  )
}
