// app/cookies/page.tsx
export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto p-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Cookie-Richtlinie</h1>
      <p className="mb-6 text-gray-700">
        Auf dieser Seite erklären wir, welche Arten von Cookies wir auf unserer Website verwenden,
        zu welchem Zweck dies geschieht und wie lange die Cookies gespeichert werden.
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Was sind Cookies?</h2>
        <p className="text-gray-700">
          Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden, wenn Sie unsere
          Website besuchen. Einige Cookies sind notwendig, damit die Seite funktioniert, andere helfen
          uns, die Nutzung der Website zu analysieren und unser Angebot zu verbessern.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          2. Welche Cookies setzen wir ein?
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Technisch notwendige Cookies</strong> – diese sind erforderlich, damit unsere
            Website korrekt funktioniert (z.&nbsp;B. Speichern Ihrer Cookie-Einstellungen).
          </li>
          <li>
            <strong>Statistik- &amp; Analyse-Cookies (optional)</strong> – diese helfen uns zu
            verstehen, wie Besucher unsere Website nutzen (z.&nbsp;B. welche Seiten besonders häufig
            aufgerufen werden). Sie werden nur gesetzt, wenn Sie im Cookie-Banner zugestimmt haben.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          3. Speicherdauer
        </h2>
        <p className="text-gray-700">
          Manche Cookies werden nur für die Dauer Ihrer Sitzung im Browser gespeichert (Session-Cookies),
          andere bleiben für einen längeren Zeitraum erhalten, damit wir Sie bei einem erneuten Besuch
          wiedererkennen können (Persistente Cookies). Die genaue Speicherdauer hängt vom jeweiligen Cookie ab.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          4. Verwaltung Ihrer Cookie-Einstellungen
        </h2>
        <p className="text-gray-700 mb-3">
          Über das Cookie-Banner am unteren Bildschirmrand können Sie nicht notwendige Cookies
          akzeptieren oder ablehnen und Ihre Auswahl jederzeit anpassen.
        </p>
        <p className="text-gray-700">
          Zusätzlich können Sie Cookies über die Einstellungen Ihres Browsers löschen oder blockieren.
          Bitte beachten Sie, dass unsere Website dann möglicherweise nicht mehr vollständig
          funktionsfähig ist.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">
          5. Weitere Informationen
        </h2>
        <p className="text-gray-700">
          Ausführliche Informationen zur Verarbeitung personenbezogener Daten und zu Ihren Rechten
          (insbesondere Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und
          Datenübertragbarkeit) finden Sie in unserer{' '}
          <a href="/datenschutz" className="text-blue-700 underline">
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>
    </main>
  );
}