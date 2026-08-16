import { Link } from 'react-router-dom'

export function Cookies() {
  return (
    <section className="legal">
      <div className="wrap legal-body">
        <p className="mono kicker">TDDDG</p>
        <h1>Cookie-Richtlinien</h1>
        <p>Stand: 26. Juni 2025</p>
        <p>
          Gültig für alle Besucherinnen und Nutzerinnen unserer digitalen Dienste
          innerhalb des Europäischen Wirtschaftsraums (EWR) und der Schweiz.
        </p>

        <h2>1. Einführung und Geltungsbereich</h2>
        <p>
          Wir, die Betreiber der Website www.ghostwriting-gudwis.de (nachfolgend
          „Website“ oder „wir/uns“), legen größten Wert auf Transparenz und den Schutz
          Ihrer Privatsphäre. Diese Cookie-Richtlinie erläutert detailliert, wie und
          warum wir Cookies und ähnliche Technologien auf unserer Website einsetzen. Sie
          ergänzt unsere allgemeine Datenschutzerklärung und fokussiert sich auf
          Technologien, die mit Ihrem Endgerät (z. B. Computer, Smartphone, Tablet)
          interagieren.
        </p>
        <p>In dieser Richtlinie erfahren Sie:</p>
        <ul>
          <li>Was Cookies und ähnliche Technologien sind.</li>
          <li>
            Welche rechtlichen Grundlagen für deren Einsatz gelten (insbesondere DSGVO
            und TDDDG).
          </li>
          <li>Welche Arten von Cookies wir für welche Zwecke einsetzen.</li>
          <li>Wie Sie Ihre Einwilligung verwalten oder widerrufen können.</li>
          <li>Welche konkreten Dienste und Cookies auf unserer Website verwendet werden.</li>
        </ul>

        <h2>2. Was sind Cookies und ähnliche Technologien?</h2>
        <p>
          Um Ihnen ein nutzerfreundliches Erlebnis auf unserer Website zu bieten,
          verwenden wir verschiedene Technologien. Der Begriff „Cookies“ umfasst in
          dieser Richtlinie alle diese Technologien.
        </p>
        <p>
          <strong>HTTP-Cookies:</strong> Kleine Textdateien, die von unserem Webserver
          an Ihren Browser gesendet und auf Ihrem Endgerät gespeichert werden. Sie
          ermöglichen es, Ihren Browser bei erneuten Besuchen wiederzuerkennen.
          Unterschieden wird zwischen Session-Cookies, persistenten Cookies,
          First-Party-Cookies und Third-Party-Cookies.
        </p>
        <p>
          <strong>Ähnliche Technologien:</strong> Web-Beacons (Zählpixel), Skripte
          (z. B. JavaScript) sowie Local Storage / Session Storage.
        </p>

        <h2>3. Rechtliche Grundlagen für den Einsatz von Cookies</h2>
        <p>
          Der Einsatz von Cookies unterliegt einem strengen rechtlichen Rahmen:
        </p>
        <p>
          <strong>Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG):</strong>{' '}
          § 25 TDDDG regelt den Schutz Ihrer Privatsphäre auf Ihrem Endgerät. Jede
          Speicherung oder der Zugriff auf Informationen auf Ihrem Endgerät erfordert
          Ihre Einwilligung (§ 25 Abs. 1 TDDDG), mit Ausnahme technisch notwendiger
          Cookies (§ 25 Abs. 2 TDDDG).
        </p>
        <p>
          <strong>Datenschutz-Grundverordnung (DSGVO):</strong> Bei Verarbeitung
          personenbezogener Daten ist eine Rechtsgrundlage erforderlich. Technisch
          notwendige Cookies: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
          Andere Cookies: Ihre freiwillige Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <h2>4. Von uns genutzte Cookie-Kategorien und ihre Zwecke</h2>
        <h2>4.1 Technisch notwendige (essenzielle) Cookies</h2>
        <p>
          Diese Cookies sind für die Funktionalität und Sicherheit unserer Website
          unverzichtbar und können nicht deaktiviert werden. Sie speichern keine
          persönlich identifizierbaren Daten.
        </p>
        <p>
          Zwecke: Navigation, Speicherung Ihrer Einwilligungseinstellungen,
          Lastenverteilung, IT-Sicherheit. Rechtsgrundlage: § 25 Abs. 2 TDDDG,
          berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <h2>4.2 Statistik-Cookies</h2>
        <p>
          Diese Cookies sammeln anonymisierte oder pseudonymisierte Daten, um die
          Nutzung unserer Website zu analysieren und unser Angebot zu verbessern.
          Rechtsgrundlage: Ihre Einwilligung (§ 25 Abs. 1 TDDDG, Art. 6 Abs. 1 lit. a
          DSGVO).
        </p>
        <h2>4.3 Marketing-Cookies</h2>
        <p>
          Diese Cookies verfolgen das Nutzerverhalten, um personalisierte Werbung
          anzuzeigen und die Effektivität von Werbekampagnen zu messen.
          Rechtsgrundlage: Ihre Einwilligung.
        </p>

        <h2>5. Verwaltung Ihrer Einwilligung (Consent Management)</h2>
        <p>
          Beim ersten Besuch unserer Website informieren wir Sie über Cookies und bitten
          um Ihre Einwilligung via Consent-Banner.
        </p>
        <ul>
          <li>Gleichwertige Wahl: Akzeptieren oder Ablehnen aller nicht notwendigen Cookies.</li>
          <li>Granulare Kontrolle über Kategorien.</li>
          <li>Informierte Entscheidung über Zwecke, Anbieter und Speicherdauer.</li>
          <li>
            Widerruf: Einwilligung kann jederzeit gelöscht werden, indem Sie den
            lokalen Speichereintrag <code>gudwis-cookie-consent</code> entfernen und die
            Seite neu laden.
          </li>
        </ul>
        <p>
          Hinweis: Das Blockieren von Cookies, insbesondere essentiellen, kann die
          Funktionalität der Website einschränken.
        </p>

        <h2>6. Übersicht der verwendeten Cookies und Dienste</h2>
        <table>
          <thead>
            <tr>
              <th>Kategorie</th>
              <th>Dienst / Cookie-Name</th>
              <th>Anbieter</th>
              <th>Zweck</th>
              <th>Speicherdauer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Essenziell</td>
              <td>gudwis-cookie-consent</td>
              <td>Ghostwriting Gudwis</td>
              <td>Speichert Einwilligungsstatus.</td>
              <td>lokal, bis Widerruf</td>
            </tr>
            <tr>
              <td>Statistik</td>
              <td>_ga, _gid, _gat</td>
              <td>Google Ireland Limited</td>
              <td>Webanalyse mit Google Analytics.</td>
              <td>_ga: 2 Jahre, _gid: 24 Stunden, _gat: 1 Minute</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>fbp</td>
              <td>Meta Platforms Ireland Limited</td>
              <td>Facebook Pixel für Conversion-Tracking.</td>
              <td>3 Monate</td>
            </tr>
            <tr>
              <td>Marketing</td>
              <td>NID, SID</td>
              <td>Google Ireland Limited</td>
              <td>Google AdWords Conversion-Tracking.</td>
              <td>6 Monate</td>
            </tr>
          </tbody>
        </table>

        <h2>7. Weitergabe von Daten und Drittlandtransfer</h2>
        <p>
          Bei Einwilligung in Statistik- oder Marketing-Cookies können Daten an
          Drittanbieter (z. B. Google, Meta) übermittelt werden, die diese auch
          außerhalb des EWR (z. B. USA) verarbeiten. Wir gewährleisten ein angemessenes
          Datenschutzniveau durch das EU-U.S. Data Privacy Framework (DPF), sofern der
          Anbieter zertifiziert ist, sowie EU-Standardvertragsklauseln (SCCs). Details
          finden Sie in unserer <Link to="/datenschutz">Datenschutzerklärung</Link>.
        </p>

        <h2>8. Ihre Rechte als betroffene Person</h2>
        <ul>
          <li>Auskunft (Art. 15 DSGVO)</li>
          <li>Berichtigung (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>

        <h2>9. Kontakt</h2>
        <p>
          Ghostwriting Gudwis
          <br />
          c/o Block Services
          <br />
          Stuttgarter Str. 106
          <br />
          70736 Fellbach
          <br />
          Telefon: +49 15901484601
          <br />
          E-Mail: info@ghostwriting-gudwis.de
        </p>

        <h2>10. Änderungen dieser Cookie-Richtlinie</h2>
        <p>
          Wir behalten uns vor, diese Richtlinie anzupassen, um Änderungen unserer
          Dienste oder rechtlichen Anforderungen zu berücksichtigen. Die aktuelle
          Version finden Sie auf unserer Website, mit dem Datum der letzten
          Aktualisierung oben.
        </p>
      </div>
    </section>
  )
}
