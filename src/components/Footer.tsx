import { Link } from 'react-router-dom'

const PAYMENTS = ['Banküberweisung', 'PayPal', 'Bitcoin', 'Ethereum', 'Solana', 'USDC']

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="wordmark">Gudwis</span>
            <p>
              Diskretes Ghostwriting für Haus-, Bachelor- und Masterarbeiten.
              Persönlich begleitet von Elias Gudwis.
            </p>
          </div>
          <div>
            <p className="mono">Kontakt</p>
            <div className="footer-list">
              <a href="tel:+4915901484601">+49 159 0148 4601</a>
              <a href="mailto:info@ghostwriting-gudwis.de">
                info@ghostwriting-gudwis.de
              </a>
              <a href="https://wa.me/4915901484601" target="_blank" rel="noreferrer">
                WhatsApp Business
              </a>
              <p>Telegram · Ghostwriting_Gudwis</p>
            </div>
          </div>
          <div>
            <p className="mono">Zahlung</p>
            <div className="pay-row">
              {PAYMENTS.map((p) => (
                <span className="pay-chip" key={p}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>
          <Link to="/agb">AGB</Link>
          <Link to="/cookie-richtlinien">Cookie-Richtlinien</Link>
          <span className="spacer">© {new Date().getFullYear()} Ghostwriting Gudwis</span>
        </div>
      </div>
    </footer>
  )
}
