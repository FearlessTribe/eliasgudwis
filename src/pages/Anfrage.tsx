import { useMemo, useState, type FormEvent, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const STEPS = [
  'Disziplin',
  'Fachrichtung',
  'Arbeitstyp',
  'Umfang',
  'Sprache',
  'Methode',
  'Thema',
  'Frist',
  'Kontakt',
]

const DISCIPLINES = [
  'Wirtschaftswissenschaften',
  'Sozialwissenschaften (unter anderem Politikwissenschaften und Psychologie)',
  'Geisteswissenschaften',
  'Humanwissenschaften (unter anderem Ökotrophologie, Sportwissenschaft und Medizin)',
  'Sonstige',
]

const FIELDS: Record<string, string[]> = {
  Wirtschaftswissenschaften: ['Betriebswirtschaftslehre', 'Volkswirtschaftslehre', 'Finance', 'Sonstige'],
  'Sozialwissenschaften (unter anderem Politikwissenschaften und Psychologie)': [
    'Soziale Arbeit',
    'Sozialwissenschaften',
    'Soziologie',
    'Politikwissenschaften',
    'Psychologie',
    'Sonstige',
  ],
  Geisteswissenschaften: ['Philosophie', 'Germanistik', 'Literaturwissenschaften', 'Anglistik', 'Sonstige'],
  'Humanwissenschaften (unter anderem Ökotrophologie, Sportwissenschaft und Medizin)': [
    'Ökotrophologie',
    'Medizin',
    'Sportwissenschaft',
    'Sonstige',
  ],
}

const TYPES = ['Hausarbeit', 'Seminararbeit', 'Bachelorarbeit', 'Master/Diplomarbeit', 'Sonstige']

const PAGE_PRESETS: Record<string, { options: number[]; rate: number }> = {
  Hausarbeit: { options: [10, 15, 20], rate: 90 },
  Seminararbeit: { options: [10, 15, 20], rate: 90 },
  Bachelorarbeit: { options: [30, 40, 60], rate: 95 },
  'Master/Diplomarbeit': { options: [60, 80, 100], rate: 99 },
  Sonstige: { options: [10], rate: 90 },
}

type State = {
  discipline: string
  disciplineOther: string
  field: string
  fieldOther: string
  type: string
  typeOther: string
  pages: string
  pagesOther: string
  language: string
  method: string
  topic: string
  files: string
  deadline: string
  name: string
  email: string
  phone: string
  channel: string
  telegram: string
  dsgvo1: boolean
  dsgvo2: boolean
}

const empty: State = {
  discipline: '',
  disciplineOther: '',
  field: '',
  fieldOther: '',
  type: '',
  typeOther: '',
  pages: '',
  pagesOther: '',
  language: '',
  method: '',
  topic: '',
  files: '',
  deadline: '',
  name: '',
  email: '',
  phone: '',
  channel: '',
  telegram: '',
  dsgvo1: false,
  dsgvo2: false,
}

function Choice({
  selected,
  onClick,
  children,
}: {
  selected: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button type="button" className={`choice ${selected ? 'selected' : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export function Anfrage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [data, setData] = useState<State>(empty)
  const [sending, setSending] = useState(false)

  const set = <K extends keyof State>(key: K, value: State[K]) =>
    setData((d) => ({ ...d, [key]: value }))

  const pageCount = Number(data.pages === 'Sonstige' ? data.pagesOther : data.pages) || 0
  const rate = PAGE_PRESETS[data.type]?.rate ?? 90
  const estimate = pageCount * rate

  const canNext = useMemo(() => {
    switch (step) {
      case 0:
        return data.discipline && (data.discipline !== 'Sonstige' || data.disciplineOther)
      case 1:
        return data.discipline === 'Sonstige' || (data.field && (data.field !== 'Sonstige' || data.fieldOther))
      case 2:
        return data.type && (data.type !== 'Sonstige' || data.typeOther)
      case 3:
        return pageCount > 0
      case 4:
        return Boolean(data.language)
      case 5:
        return Boolean(data.method)
      case 6:
        return Boolean(data.topic.trim())
      case 7:
        return Boolean(data.deadline)
      case 8:
        return (
          data.name.trim() &&
          data.email.trim() &&
          data.phone.trim() &&
          data.channel &&
          (data.channel !== 'Telegram' || data.telegram.trim()) &&
          data.dsgvo1 &&
          data.dsgvo2
        )
      default:
        return false
    }
  }, [step, data, pageCount])

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!canNext) return
    setSending(true)

    const body = [
      `Disziplin: ${data.discipline}${data.disciplineOther ? ` (${data.disciplineOther})` : ''}`,
      `Fachrichtung: ${data.field || '—'}${data.fieldOther ? ` (${data.fieldOther})` : ''}`,
      `Arbeitstyp: ${data.type}${data.typeOther ? ` (${data.typeOther})` : ''}`,
      `Seiten: ${pageCount}`,
      `Sprache: ${data.language}`,
      `Methode: ${data.method}`,
      `Thema: ${data.topic}`,
      `Unterlagen: ${data.files || 'keine'}`,
      `Frist: ${data.deadline}`,
      `Name/Pseudonym: ${data.name}`,
      `E-Mail: ${data.email}`,
      `Telefon: ${data.phone}`,
      `Kanal: ${data.channel}${data.telegram ? ` (${data.telegram})` : ''}`,
      `Richtwert: ${estimate} €`,
    ].join('\n')

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@ghostwriting-gudwis.de', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Unverbindliche Anfrage – ${data.type} – ${data.name}`,
          message: body,
          email: data.email,
          name: data.name,
        }),
      })
      if (!res.ok) throw new Error('send')
      navigate('/danke-anfrage')
    } catch {
      window.location.href = `mailto:info@ghostwriting-gudwis.de?subject=${encodeURIComponent(
        `Unverbindliche Anfrage – ${data.type}`,
      )}&body=${encodeURIComponent(body)}`
      navigate('/danke-anfrage')
    } finally {
      setSending(false)
    }
  }

  const fieldOptions = FIELDS[data.discipline] ?? []
  const presets = PAGE_PRESETS[data.type] ?? PAGE_PRESETS.Sonstige

  return (
    <section className="wizard">
      <div className="wrap wizard-shell">
        <aside className="wizard-side">
          <p className="mono">Projektportal</p>
          <h1>Unverbindliche Anfrage</h1>
          <p>
            Schritt {step + 1} von {STEPS.length}. Prüfung und Rückmeldung durch Elias
            Gudwis.
          </p>
          <div
            className="progress"
            role="progressbar"
            aria-valuenow={step + 1}
            aria-valuemin={1}
            aria-valuemax={STEPS.length}
          >
            <i style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
          </div>
          <ol className="step-list">
            {STEPS.map((label, i) => (
              <li key={label} className={i === step ? 'on' : i < step ? 'done' : ''}>
                <i aria-hidden="true" />
                {label}
              </li>
            ))}
          </ol>
        </aside>

        <form className="wizard-card" onSubmit={submit}>
          {step === 0 && (
            <>
              <h2>In welcher wissenschaftlichen Disziplin liegt Ihre Arbeit?</h2>
              <div className="choices">
                {DISCIPLINES.map((d) => (
                  <Choice key={d} selected={data.discipline === d} onClick={() => set('discipline', d)}>
                    {d}
                  </Choice>
                ))}
              </div>
              {data.discipline === 'Sonstige' && (
                <div className="field">
                  <label htmlFor="disciplineOther">Wie heißt Ihre wissenschaftliche Disziplin genau?</label>
                  <input
                    id="disciplineOther"
                    value={data.disciplineOther}
                    onChange={(e) => set('disciplineOther', e.target.value)}
                  />
                </div>
              )}
            </>
          )}

          {step === 1 && (
            <>
              <h2>In welcher Fachrichtung Ihrer Disziplin liegt Ihre Arbeit?</h2>
              {data.discipline === 'Sonstige' ? (
                <p className="muted" style={{ marginTop: 12 }}>
                  Sie haben eine sonstige Disziplin angegeben. Weiter zum Arbeitstyp.
                </p>
              ) : (
                <div className="choices">
                  {fieldOptions.map((f) => (
                    <Choice key={f} selected={data.field === f} onClick={() => set('field', f)}>
                      {f}
                    </Choice>
                  ))}
                </div>
              )}
              {data.field === 'Sonstige' && (
                <div className="field">
                  <label htmlFor="fieldOther">Wie heißt Ihre Fachrichtung genau?</label>
                  <input
                    id="fieldOther"
                    value={data.fieldOther}
                    onChange={(e) => set('fieldOther', e.target.value)}
                  />
                </div>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <h2>Welche Art von Arbeit möchten Sie von uns schreiben lassen?</h2>
              <div className="choices">
                {TYPES.map((t) => (
                  <Choice key={t} selected={data.type === t} onClick={() => set('type', t)}>
                    {t}
                  </Choice>
                ))}
              </div>
              {data.type === 'Sonstige' && (
                <div className="field">
                  <label htmlFor="typeOther">Wie heißt Ihre Art der wissenschaftlichen Arbeit genau?</label>
                  <input
                    id="typeOther"
                    value={data.typeOther}
                    onChange={(e) => set('typeOther', e.target.value)}
                  />
                </div>
              )}
            </>
          )}

          {step === 3 && (
            <>
              <h2>Wie umfangreich soll Ihre wissenschaftliche Arbeit sein?</h2>
              <p className="muted" style={{ marginTop: 8 }}>
                {rate} Euro je Seite
              </p>
              <div className="choices">
                {presets.options.map((n) => (
                  <Choice
                    key={n}
                    selected={data.pages === String(n)}
                    onClick={() => set('pages', String(n))}
                  >
                    {n} Seiten
                  </Choice>
                ))}
                <Choice selected={data.pages === 'Sonstige'} onClick={() => set('pages', 'Sonstige')}>
                  Sonstige
                </Choice>
              </div>
              {data.pages === 'Sonstige' && (
                <div className="field">
                  <label htmlFor="pagesOther">Wie viele Seiten benötigen Sie genau?</label>
                  <input
                    id="pagesOther"
                    type="number"
                    min={1}
                    value={data.pagesOther}
                    onChange={(e) => set('pagesOther', e.target.value)}
                  />
                </div>
              )}
              {pageCount > 0 && (
                <div className="estimate">
                  <p className="mono">Richtwert</p>
                  <b>{estimate.toLocaleString('de-DE')} €</b>
                  <p style={{ opacity: 0.75 }}>
                    {pageCount} Normseiten × {rate} €
                  </p>
                </div>
              )}
            </>
          )}

          {step === 4 && (
            <>
              <h2>In welcher Sprache soll Ihre wissenschaftliche Arbeit verfasst werden?</h2>
              <div className="choices">
                {['Deutsch', 'Englisch'].map((l) => (
                  <Choice key={l} selected={data.language === l} onClick={() => set('language', l)}>
                    {l}
                  </Choice>
                ))}
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <h2>Welcher methodische Ansatz soll in der Arbeit umgesetzt werden?</h2>
              <div className="choices">
                {[
                  'Literaturarbeit',
                  'Qualitative empirische Arbeit',
                  'Quantitative empirische Arbeit',
                ].map((m) => (
                  <Choice key={m} selected={data.method === m} onClick={() => set('method', m)}>
                    {m}
                  </Choice>
                ))}
              </div>
            </>
          )}

          {step === 6 && (
            <>
              <h2>Wie lautet das Thema Ihrer Arbeit?</h2>
              <div className="field">
                <label htmlFor="topic">Thema</label>
                <textarea
                  id="topic"
                  rows={5}
                  value={data.topic}
                  onChange={(e) => set('topic', e.target.value)}
                  placeholder="Bitte geben Sie es hier ein."
                />
              </div>
              <div className="field">
                <label htmlFor="files">
                  Relevante Unterlagen (Formatvorgaben, Literatur) – Dateinamen oder Hinweis
                </label>
                <textarea
                  id="files"
                  rows={3}
                  value={data.files}
                  onChange={(e) => set('files', e.target.value)}
                  placeholder="Optional. Dateien können Sie anschließend per E-Mail nachreichen."
                />
              </div>
            </>
          )}

          {step === 7 && (
            <>
              <h2>Bis wann benötigen Sie Ihre wissenschaftliche Arbeit?</h2>
              <div className="field">
                <label htmlFor="deadline">Frist</label>
                <input
                  id="deadline"
                  type="date"
                  value={data.deadline}
                  onChange={(e) => set('deadline', e.target.value)}
                />
              </div>
            </>
          )}

          {step === 8 && (
            <>
              <h2>Ihre Kontaktdaten</h2>
              <div className="field">
                <label htmlFor="name">Ihr Name / Pseudonym</label>
                <input id="name" value={data.name} onChange={(e) => set('name', e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="email">Ihre E-Mail-Adresse</label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => set('email', e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Ihre Telefonnummer</label>
                <input id="phone" value={data.phone} onChange={(e) => set('phone', e.target.value)} />
              </div>
              <p className="muted" style={{ marginTop: 18 }}>
                Wie möchten Sie kontaktiert werden?
              </p>
              <div className="choices">
                {['E-Mail', 'Telefonisch', 'WhatsApp', 'Telegram'].map((c) => (
                  <Choice key={c} selected={data.channel === c} onClick={() => set('channel', c)}>
                    {c}
                  </Choice>
                ))}
              </div>
              {data.channel === 'Telegram' && (
                <div className="field">
                  <label htmlFor="telegram">Wie lautet Ihr Benutzername?</label>
                  <input
                    id="telegram"
                    value={data.telegram}
                    onChange={(e) => set('telegram', e.target.value)}
                  />
                </div>
              )}
              <label className="check">
                <input
                  type="checkbox"
                  checked={data.dsgvo1}
                  onChange={(e) => set('dsgvo1', e.target.checked)}
                />
                <span>
                  Ich bin mit der Speicherung und Verarbeitung meiner personenbezogenen Daten
                  durch Ghostwriting Gudwis einverstanden.
                </span>
              </label>
              <label className="check">
                <input
                  type="checkbox"
                  checked={data.dsgvo2}
                  onChange={(e) => set('dsgvo2', e.target.checked)}
                />
                <span>
                  Ich akzeptiere die{' '}
                  <Link to="/datenschutz">Datenschutzrichtlinien</Link> von Ghostwriting
                  Gudwis.
                </span>
              </label>
            </>
          )}

          <div className="wizard-nav">
            <button
              type="button"
              className="btn btn-ghost"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              Zurück
            </button>
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                className="btn"
                disabled={!canNext}
                onClick={() => setStep((s) => s + 1)}
              >
                Weiter
              </button>
            ) : (
              <button type="submit" className="btn" disabled={!canNext || sending}>
                {sending ? 'Senden…' : 'Unverbindlich anfragen'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
