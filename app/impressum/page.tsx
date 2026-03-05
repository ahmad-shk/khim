import Footer from '@/components/footer';
import React from 'react';

export default function ImpressumPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F4F7]">
      {/* Genug Abstand oben für das große Logo im Header */}
      <main className="flex-grow px-4 pt-64 pb-20 md:pt-72">
        
        {/* Dokument-Container */}
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-sm border border-gray-100 overflow-hidden">
          
          {/* Goldener Akzentbalken oben passend zum Branding */}
          <div className="h-2 bg-[#C5A267]" />

          <div className="p-8 md:p-16">
            <h1 className="text-3xl md:text-5xl font-serif text-center mb-12 text-[#001530] tracking-wide uppercase italic">
              Impressum
            </h1>

            <div className="space-y-10 text-[15px] md:text-[16px] leading-relaxed text-gray-700 font-sans">
              
              {/* Rechtlicher Hinweis */}
              <p className="text-center italic text-sm text-gray-500 border-b pb-6">
                Alle Inhalte sind urheberrechtlich geschützt und werden gemäß §25 Mediengesetz bereitgestellt.
              </p>

              {/* Firmeninfo & Adresse */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                  <h2 className="text-[#001530] font-bold uppercase text-xs tracking-widest mb-4 border-l-4 border-[#C5A267] pl-3">
                    Betreiber der Website
                  </h2>
                  <div className="space-y-1 text-[#001530] font-medium">
                    <p className="text-lg">Xiu Wen Cai</p>
                    <p className="font-serif italic text-xl">KHIM RESTAURANT</p>
                    <p>Schneckgasse 12,</p>
                    <p>3100 St. Pölten</p>
                    <p>Österreich</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-[#001530] font-bold uppercase text-xs tracking-widest mb-4 border-l-4 border-[#C5A267] pl-3">
                    Kontakt
                  </h2>
                  <div className="space-y-2">
                    <p><span className="font-semibold">Tel.:</span> +43 (0) 677 631 78 906</p>
                    <p><span className="font-semibold">E-Mail:</span> <a href="mailto:xiuwen272@yahoo.com" className="text-blue-800 hover:underline">xiuwen272@yahoo.com</a></p>
                    <p className="mt-4 text-xs uppercase text-gray-500 font-bold">Webmaster:</p>
                    <p className="text-sm">XUMING – <a href="mailto:ming12311111@gmail.com" className="text-blue-800 hover:underline">ming12311111@gmail.com</a></p>
                  </div>
                </section>
              </div>

              {/* Details & Rechtliches */}
              <div className="space-y-8 pt-6">
                <div className="flex flex-col md:flex-row md:gap-20 border-t border-gray-100 pt-6">
                  <div>
                    <h3 className="font-bold text-[#001530] text-sm uppercase mb-1">Geschäftsleiter</h3>
                    <p>Xiu Wen Cai</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001530] text-sm uppercase mb-1">Unternehmensgegenstand</h3>
                    <p>Gastronomie</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#001530] text-sm uppercase mb-1">USt-IdNr.</h3>
                    <p>ATU 78172219</p>
                  </div>
                </div>

                {/* Haftungsausschluss */}
                <section className="bg-gray-50 p-6 rounded-sm space-y-4 text-sm italic">
                  <p>
                    Wir haben Verwaltungsbefugnis über die Webseite und organisieren den Inhalt sorgfältig. Wir sind jedoch nicht dafür verantwortlich, den Inhalt externer Links zu verwalten und zu garantieren.
                  </p>
                  <p>
                    Wenn Sie Unzufriedenheit oder Kommentare zu unserem Service haben, wenden Sie sich bitte per E-Mail oder Telefon an den Kundendienst. Sollten Sie mit der Abwicklung nicht zufrieden sein, können Sie die ODR-Plattform nutzen:
                  </p>
                  <a href="https://ec.europa.eu/consumers/odr/main/" target="_blank" rel="noopener noreferrer" className="text-[#C5A267] font-bold hover:underline block truncate">
                    https://ec.europa.eu/consumers/odr/main/
                  </a>
                </section>
              </div>

              {/* Zurück Button */}
              {/* <div className="mt-12 flex justify-center">
                <a 
                  href="/" 
                  className="bg-[#001530] text-white px-10 py-4 rounded-sm hover:bg-[#C5A267] transition-all duration-300 uppercase text-xs font-bold tracking-[0.2em] shadow-lg w-full md:w-auto text-center"
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