import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeroVideo } from '../components/HeroVideo'
import { Reveal } from '../components/Reveal'
import { Typewriter } from '../components/Typewriter'
import { YouTubeEmbed } from '../components/YouTubeEmbed'
import { FAQS } from '../data/faqs'

const STEPS = [
  {
    id: '01',
    title: 'Anfrage senden',
    body: 'Bequem online anfragen und Rahmenbedingungen festlegen – direkt über unser Projektportal.',
  },
  {
    id: '02',
    title: 'Persönliche Kommunikation',
    body: 'Wir besprechen gemeinsam sämtliche Details Ihrer Arbeit. Nach Eingang der vereinbarten Anzahlung (üblicherweise 25 oder 50 Prozent der Gesamtsumme) beginnt die vollumfängliche Bearbeitung.',
  },
  {
    id: '03',
    title: 'Die Ghostwriting-Agentur Gudwis bearbeitet Ihren Auftrag',
    body: 'Wir verfassen die Arbeit gemäß Ihren Vorgaben. Auf Wunsch erfolgen Teillieferungen.',
  },
  {
    id: '04',
    title: 'Fristgerechte Fertigstellung und Übergabe',
    body: 'Sie erhalten fristgerecht Ihre intern lektorierte, plagiatsfreie wissenschaftliche Arbeit. Anschließend begleichen Sie das noch ausstehende Honorar. Mit Eingang der Restzahlung gehen die Nutzungsrechte auf Sie über.',
  },
]

const BENEFITS = [
  {
    text: 'Jede Arbeit ein Unikat – plagiatsfrei',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M9 12.5 11 14.5 15.5 10M7 4h7l4 4v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: 'Striktes Einhalten wissenschaftlicher Gütekriterien',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 18.5 12 14l8 4.5M4 14l8-4.5L20 14M12 4v15.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: 'maßgeschneidert nach Ihren Vorgaben',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 8h16M8 4v4M16 4v4M6 12h5v8H6v-8Zm7 0h5v5h-5v-5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: 'vollumfängliche Diskretion',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6v-9Zm6 3.5v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: 'Festpreisgarantie & flexible Ratenzahlungen',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 3v18M16.5 7.5c0-1.7-2-3-4.5-3s-4.5 1.3-4.5 3 2 3 4.5 3 4.5 1.3 4.5 3-2 3-4.5 3-4.5-1.3-4.5-3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const EXPECTATIONS = [
  {
    id: '01',
    title: 'Akademische Ausnahmetalente',
    body: 'Ausnahmslos sämtliche unserer Autoren haben mindestens einen sehr guten Masterabschluss (besser als 1,5).',
  },
  {
    id: '02',
    title: 'Gewissenhaftigkeit',
    body: 'Viele unserer Autoren arbeiten in Vollzeit für uns. Das ermöglicht es ihnen, sich vollumfänglich auf Ihren Auftrag zu fokussieren, ohne nebenher andere berufliche Verpflichtungen erfüllen zu müssen.',
  },
  {
    id: '03',
    title: 'Qualitätsgarantie',
    body: 'Sie erhalten eine Arbeit, die vollumfänglich wissenschaftliche Gütekriterien erfüllt.',
  },
  {
    id: '04',
    title: 'Maßgeschneidert',
    body: 'Wir maßschneidern Ihre wissenschaftliche Arbeit gemäß den Vorgaben Ihrer Hochschule und Ihrer Betreuungspersonen.',
  },
  {
    id: '05',
    title: 'Datenschutz',
    body: 'Einzig und allein Elias Gudwis kennt Ihre personenbezogenen Informationen. Weder Autoren noch Lektoren oder andere Mitarbeiter nehmen Kenntnis von Ihren Kontaktdaten und Zahlungsschritten.',
  },
]

const PRICES = [
  {
    label: 'Hausarbeit, Essay, Seminararbeit & Projektarbeit',
    amount: '90',
    featured: false,
  },
  { label: 'Bachelorarbeit', amount: '95', featured: true },
  { label: 'Masterarbeit / Diplomarbeit', amount: '99', featured: false },
]

export function Home() {
  const [step, setStep] = useState(0)

  return (
    <>
      <section className="hero" id="start">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="mono eyebrow hero-enter hero-enter-1">
              Deutschlands bekanntester Ghostwriter
            </p>
            <h1 className="display">
              <Typewriter
                text="Professionelles Ghostwriting für Haus-, Bachelor- und Masterarbeiten"
                delay={180}
                speed={34}
              />
            </h1>
            <p className="hero-claim hero-enter hero-enter-2">
              Persönlich begleitet von Elias Gudwis – diskret, wissenschaftlich, anonym.
            </p>

            <div className="hero-actions hero-enter hero-enter-3">
              <Link className="btn" to="/unverbindliche-anfrage">
                Unverbindlich anfragen
              </Link>
            </div>

            <div className="press-row hero-enter hero-enter-4">
              <span className="mono press-label">Bekannt aus</span>
              <div className="press-logos">
                <a
                  href="https://www.hyperbole.de/"
                  target="_blank"
                  rel="noreferrer"
                  className="press-logo press-logo-hyperbole"
                  aria-label="HYPERBOLE"
                >
                  <img src="/press/hyperbole.svg" alt="HYPERBOLE" />
                </a>
                <a
                  href="https://www.ungeskriptet.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="press-logo press-logo-ungeskriptet"
                  aria-label="ungeskriptet by Ben Berndt"
                >
                  <img
                    src="/press/ungeskriptet.png"
                    alt="{ungeskriptet} – Ben ungeskriptet"
                  />
                </a>
              </div>
            </div>
          </div>
          <Reveal>
            <HeroVideo />
          </Reveal>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Leistungen">
        <div className="wrap">
          <ul className="benefit-strip-list">
            {BENEFITS.map((item) => (
              <li key={item.text}>
                <span className="benefit-icon">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <Reveal className="statement">
            <p className="huge">
              <Typewriter text="Wir schreiben." delay={150} speed={78} />
            </p>
            <p className="statement-lead">
              Sie widmen sich anderweitigen Verpflichtungen.
            </p>
          </Reveal>

          <Reveal delay={80} className="prose">
            <p>
              Viele unserer Kunden wollten ihre Abschlussarbeit eigentlich selbst
              verfassen. Stattdessen dominieren häufig Druck, Zeitmangel und
              anderweitige Verpflichtungen.
            </p>
            <p>
              Sie jonglieren möglicherweise gleichzeitig ein Vollzeitstudium, einen
              herausfordernden Beruf und familiäre Verpflichtungen. Es ist leider kaum
              möglich, all diesen Verpflichtungen gleichermaßen gerecht zu werden.
            </p>
            <p>
              Als professionelle Ghostwriting-Agentur helfen wir Ihnen, Ihr
              Zeitmanagement zu optimieren.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" id="vertrauen">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="mono kicker">Vertrauen auf Augenhöhe</p>
              <h2 className="display">
                Ich stehe zu unserer Dienstleistung mit meinem Namen.
              </h2>
              <div className="byline">
                <span className="monogram" aria-hidden="true">
                  EG
                </span>
                <div>
                  <strong>Elias Gudwis</strong>
                  <span>Ghostwriting-Agentur Gudwis</span>
                </div>
              </div>
            </div>
            <p>
              Ihr Name bleibt geheim. Wenn Sie mit uns kommunizieren, kommunizieren Sie
              direkt mit Elias Gudwis. In unserer Ghostwriting-Agentur geht Kommunikation
              immer transparent und auf Augenhöhe vonstatten.
            </p>
          </div>

          <Reveal className="trust-video">
            <YouTubeEmbed
              videoId="_iU7KOLTuNQ"
              title="Elias Gudwis – Vertrauen auf Augenhöhe"
              poster="/vertrauen-video.jpg"
              label="Video"
              note="Elias Gudwis"
              caption="Persönlich vorgestellt: Elias Gudwis"
            />
          </Reveal>

          <p className="expect-intro">Das können Sie erwarten:</p>

          <div className="expect-list">
            {EXPECTATIONS.map((item, i) => (
              <Reveal className="expect" key={item.id} delay={i * 40}>
                <span className="idx">{item.id}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="ablauf">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="mono kicker">Ablauf</p>
              <h2 className="display">
                So funktioniert unsere Ghostwriting-Dienstleistung
              </h2>
            </div>
            <p>Transparent, professionell, diskret.</p>
          </div>

          <div className="process">
            <div className="process-nav">
              {STEPS.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={i === step ? 'active' : ''}
                  onClick={() => setStep(i)}
                >
                  <span className="mono">Schritt {s.id}</span>
                  <span className="step-title">{s.title}</span>
                </button>
              ))}
            </div>
            <div className="process-stage">
              <p className="mono">Schritt {STEPS[step].id}</p>
              <h3>{STEPS[step].title}</h3>
              <p>{STEPS[step].body}</p>
              <svg className="flow" viewBox="0 0 640 40" aria-hidden="true">
                <line x1="8" y1="20" x2="632" y2="20" stroke="#d8dadf" strokeWidth="1" />
                {STEPS.map((_, i) => (
                  <circle
                    key={i}
                    cx={8 + i * 208}
                    cy="20"
                    r={i === step ? 6 : 3.5}
                    fill={i === step ? '#c2653a' : '#ffffff'}
                    stroke={i === step ? '#c2653a' : '#c3c8d1'}
                    strokeWidth="1.2"
                  />
                ))}
              </svg>
            </div>
          </div>

          <div style={{ marginTop: 40 }}>
            <Link className="btn" to="/unverbindliche-anfrage">
              Unverbindlich anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="pdf-band">
            <div>
              <p className="mono">Ressource</p>
              <h2>Kostenloses PDF</h2>
              <p>Wie Sie Ihre wissenschaftliche Arbeit ideal vorbereiten.</p>
            </div>
            <Link className="btn btn-ghost" to="/kostenloses-pdf">
              Jetzt downloaden
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section" id="preise">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="mono kicker">Transparente Preise</p>
              <h2 className="display">
                Sie bezahlen ausschließlich für reine Textseiten.
              </h2>
            </div>
            <p>
              Eine Normseite entspricht ca. 1 800 Zeichen inkl. Leerzeichen oder 250
              Wörtern.
            </p>
          </div>

          <div className="price-grid">
            {PRICES.map((price, i) => (
              <Reveal
                className={`price-card${price.featured ? ' featured' : ''}`}
                key={price.label}
                delay={i * 60}
              >
                <span className="mono">{price.label}</span>
                <div className="amount">
                  {price.amount}
                  <span>€</span>
                </div>
                <p>je Normseite</p>
              </Reveal>
            ))}
          </div>
          <p className="note">
            Ein Lektorat sowie eine Plagiatsprüfung sind im Preis inbegriffen. Im Rahmen
            einer vollständigen Arbeit erhalten Sie das Deckblatt, die Gliederung und das
            Literaturverzeichnis kostenfrei.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link className="btn" to="/unverbindliche-anfrage">
              Unverbindlich anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="stimmen">
        <div className="wrap void-panel">
          <Reveal>
            <p className="mono kicker">Stimmen unserer Kunden</p>
            <h2 className="display">Wer uns beauftragt, bleibt unerkannt.</h2>
            <div className="prose" style={{ marginTop: 24 }}>
              <p>
                Wir haben uns aus Anonymitätsgründen dazu entschieden, keine
                Kundenrezensionen zu veröffentlichen – nicht einmal anonymisiert.
                Erfahrungsgemäß ist es auch nicht im Interesse von authentischen, realen
                Ghostwriting-Kunden, öffentlich Kundenrezensionen abzugeben.
              </p>
              <p>
                Wer uns beauftragt, bleibt unerkannt – vor, während und nach dem Projekt.
              </p>
              <p>
                Was wir Ihnen jedoch garantieren können, ist, dass Kundenzufriedenheit
                für uns an oberster Stelle steht. Das ist auch der Grund, weshalb wir
                guten Gewissens mit offenen Karten spielen und uns um größtmögliche
                Transparenz bemühen – sowohl was unsere internen Strukturen als auch was
                die Preisgestaltung angeht.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="seal">
              <svg viewBox="0 0 200 200" aria-hidden="true">
                <circle cx="100" cy="100" r="96" fill="none" stroke="#e7e4df" />
                <circle
                  cx="100"
                  cy="100"
                  r="79"
                  fill="none"
                  stroke="#c3c8d1"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                />
                <circle cx="100" cy="100" r="62" fill="#faf9f7" stroke="#e7e4df" />
                <circle cx="100" cy="24" r="3" fill="#e48b59" />
              </svg>
              <div className="seal-text">
                <p className="mono">Anonymität</p>
                <p>Vor, während und nach dem Projekt: unerkannt.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="mono kicker">FAQ</p>
              <h2 className="display">Häufig gestellte Fragen</h2>
            </div>
            <p>
              Nachfolgend finden Sie Antworten auf die am häufigsten gestellten Fragen zu
              unserem Angebot.
            </p>
          </div>
          <div className="faq">
            {FAQS.map((item, i) => (
              <details key={item.q} className="faq-item">
                <summary>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  {item.q}
                </summary>
                <div className="body">
                  {item.a.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  {item.list && (
                    <ul>
                      {item.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap contact-strip">
          <article className="contact-tile lead">
            <p className="mono">Kontakt</p>
            <h2>Unverbindlich anfragen</h2>
            <p>
              Prüfung der Anfrage und Kontaktaufnahme erfolgen persönlich durch Elias
              Gudwis.
            </p>
            <Link className="btn" to="/unverbindliche-anfrage">
              Unverbindlich anfragen
            </Link>
          </article>
          <a className="contact-tile" href="tel:+4915901484601">
            <p className="mono">Telefon</p>
            <h3>+49 159 0148 4601</h3>
            <p className="muted">Mo. – So. von 12:00–21:00 Uhr</p>
          </a>
          <a className="contact-tile" href="mailto:info@ghostwriting-gudwis.de">
            <p className="mono">E-Mail</p>
            <h3>info@ghostwriting-gudwis.de</h3>
          </a>
          <div className="contact-tile">
            <p className="mono">WhatsApp Business</p>
            <h3>
              <a href="https://wa.me/4915901484601" target="_blank" rel="noreferrer">
                +49 159 014 84 601
              </a>
            </h3>
            <p className="muted">Telegram · Ghostwriting_Gudwis</p>
          </div>
        </div>
      </section>
    </>
  )
}
