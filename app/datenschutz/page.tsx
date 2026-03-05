import Footer from '@/components/footer';
import React from 'react';

export default function DatenschutzPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F4F7]">
      <main className="flex-grow px-4 pt-64 pb-20 md:pt-72">
        
        {/* Dokument-Container */}
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm border border-gray-100 overflow-hidden">
          
          {/* Header-Balken */}
          <div className="h-2 bg-[#C5A267]" />

          <div className="p-6 md:p-16">
            <h1 className="text-3xl md:text-5xl font-serif text-center mb-10 md:mb-16 text-[#001530] tracking-wide uppercase italic">
              Datenschutz
            </h1>

            <div className="space-y-8 text-[15px] md:text-[17px] leading-relaxed text-gray-700 font-sans text-justify">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left">
                Zunächst einmal vielen Dank für Ihren Besuch auf dieser Website. Auf dieser Seite geht es um Ihre Datenschutzrichtlinie und darum, wie wir mit Daten über Sie umgehen. Unser Ziel ist es, Ihnen von ganzem Herzen zu dienen und stets unser Bestes zu geben, um die Sicherheit Ihrer Daten zu gewährleisten. Seien Sie versichert, dass wir Ihre Daten auf die gesetzlich vorgeschriebene Weise verwenden werden.
              </p>

              <p>
                Diese Datenschutzrichtlinie gilt für alle Informationen, die Sie uns freiwillig zur Verfügung stellen oder die wir bereits über Sie haben. Diese Richtlinie beschreibt, wie wir Ihre persönlichen Daten sammeln, verwenden, offenlegen, verarbeiten und verwalten. Ihre Anmeldung, das Durchsuchen, die Bestellung von Produkten und andere Aktivitäten auf dieser Website entsprechen Ihrer Zustimmung zu dieser Datenschutzrichtlinie.
              </p>

              {/* Kontakt-Box */}
              <div className="bg-[#F8F9FA] p-6 rounded-sm border-l-4 border-[#C5A267] my-8 shadow-inner">
                <p className="font-bold text-[#001530] mb-4 uppercase text-xs tracking-[0.2em]">Kontakt für Fragen</p>
                <div className="space-y-3">
                  <p>Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, wenden Sie sich bitte per E-Mail an:</p>
                  <div className="flex flex-col gap-1">
                    <a href="mailto:Xiuwen272@yahoo.com" className="text-[#C5A267] font-semibold hover:underline break-all">Xiuwen272@yahoo.com</a>
                    <a href="mailto:ming12311111@gmail.com" className="text-[#C5A267] font-semibold hover:underline break-all">ming12311111@gmail.com</a>
                  </div>
                  <p className="pt-2">oder telefonisch unter: <span className="font-semibold text-[#001530]">+43 (0) 677 631 78 906</span></p>
                  <p className="text-sm italic mt-4">
                    Unsere Kundendienstmitarbeiter beantworten gerne Ihre Fragen und hören Ihre Meinung. Wenn Sie mit dieser Datenschutzrichtlinie nicht einverstanden sind, lehnen Sie bitte die Angabe persönlicher Informationen über Sie ab.
                  </p>
                </div>
              </div>

              {/* Sektionen */}
              <div className="space-y-12">
                
                {/* Kundeninformation */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-[#001530] flex items-center gap-3 mb-4 uppercase tracking-wider italic">
                    <span className="w-8 h-[2px] bg-[#C5A267]" /> Kundeninformation
                  </h2>
                  <div className="pl-4 md:pl-11 space-y-4">
                    <p>
                      Sehr geehrte Kunden, bitte haben Sie Verständnis dafür, dass wir einige Ihrer Informationen benötigen, um unsere Dienstleistungen zu verbessern. Dies bedeutet jedoch nicht, dass Sie uns viele private Informationen zur Verfügung stellen müssen. Sie haben ausreichende Auswahlrechte, um selbst zu entscheiden, welche Informationen Sie bereitstellen möchten.
                    </p>
                    <p>Abhängig von den Funktionen der Website können die von uns gesammelten personenbezogenen Daten folgende Informationen beinhalten:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 italic text-sm text-gray-600">
                      <li>• Name</li>
                      <li>• Adresse</li>
                      <li>• E-Mail-Adresse</li>
                      <li>• Telefonnummer</li>
                      <li className="md:col-span-2">• Weitere Informationen, die Sie uns über die Website oder den Kundendienst bereitstellen</li>
                    </ul>
                  </div>
                </section>

                {/* Sammlung und Verarbeitung */}
                <section>
                  <h2 className="text-xl md:text-2xl font-bold text-[#001530] flex items-center gap-3 mb-4 uppercase tracking-wider italic">
                    <span className="w-8 h-[2px] bg-[#C5A267]" /> Sammlung und Verarbeitung von Informationen
                  </h2>
                  <div className="pl-4 md:pl-11 space-y-8 text-sm">
                    
                    <div>
                      <h3 className="font-bold text-[#001530] uppercase mb-2">I. Geschäftszwecke</h3>
                      <p>Wir können Ihre personenbezogenen Daten verwenden, um gesetzliche Verpflichtungen zu erfüllen, neue Produkte zu entwickeln, Buchhaltung zu führen sowie Forschung und Mitarbeiterschulungen durchzuführen.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#001530] uppercase mb-2">II. Marketingzwecke</h3>
                      <p>Mit Ihrer Zustimmung informieren wir Sie über Produkte, Dienstleistungen, Veranstaltungen und Sonderaktionen.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#001530] uppercase mb-2">III. Feedback & Kontakt</h3>
                      <p>Wir verwenden Ihre Daten, um auf Beschwerden oder Feedback zu antworten.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#001530] uppercase mb-2">V. Keine Weitergabe an Dritte</h3>
                      <p className="font-semibold text-[#001530]">Wir verkaufen Ihre Daten niemals an Dritte.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#001530] uppercase mb-2">VII. Weitergabe an Dienstleister</h3>
                      <p>Daten werden an Partner für Hosting, Analyse, Versand, Zahlungsabwicklung und Marketing weitergegeben, die in unserem Auftrag arbeiten.</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-[#001530] uppercase mb-2">XIII. Datensicherheit</h3>
                      <p>Alle Informationen werden auf sicheren Servern gespeichert. Dennoch können wir unbefugten Zugriff außerhalb unserer Kontrolle nicht vollständig verhindern.</p>
                    </div>
                  </div>
                </section>

                {/* Externe Links & Cookies */}
                <section className="border-t pt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4 md:pl-11">
                    <div>
                      <h3 className="font-bold text-[#001530] uppercase text-sm mb-2">Website von Drittanbietern</h3>
                      <p className="text-xs">Unsere Website kann Links zu externen Seiten enthalten. Für deren Datenschutz übernehmen wir keine Verantwortung.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#001530] uppercase text-sm mb-2">Cookies</h3>
                      <p className="text-xs">Cookie-Einstellungen können Sie direkt in Ihrem Browser (z.B. Google Chrome) verwalten oder löschen.</p>
                    </div>
                  </div>
                </section>

                {/* Änderung & URL */}
                <section className="text-center bg-gray-50 p-6 rounded-sm">
                  <p className="text-xs uppercase tracking-widest mb-2">Aktuelle Version unter:</p>
                  <a href="https://www.khim.at" className="text-[#C5A267] font-bold hover:underline">www.khim.at</a>
                </section>

              </div>

              {/* Zurück Button */}
              {/* <div className="mt-16 pt-10 border-t border-gray-100 flex justify-center">
                <a 
                  href="/" 
                  className="inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-[#001530] hover:bg-[#C5A267] rounded-sm w-full md:w-auto uppercase tracking-widest text-xs shadow-lg"
                >
                  Zurück zur Startseite
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}