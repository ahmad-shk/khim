"use client"; // Ganz wichtig für Hooks!

import React from 'react';
import { useRouter } from 'next/navigation'; // Korrekter Import für Next.js 13+
import Link from 'next/link'; 
import { Link as LinkIcon } from 'lucide-react';
import * as CookieConsent from 'vanilla-cookieconsent';

const Footer = () => {
  const router = useRouter();

  const handleRedirectAndScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Navigiert zur Startseite
    router.push('/');

    // Scrollt nach oben
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenCookieSettings = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      CookieConsent.showPreferences();
    } catch (error) {
      console.error('Cookie preferences could not be opened', error);
    }
  };

  return (
    <footer className="page-footer bg-primary text-white pt-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 3xl:text-[85px]! font-extralight italic text-white mb-16 leading-none uppercase">
            Traditionelle Rezepte für <br /> <span className='font-light not-italic' >Ihren Genuss</span>
          </h2>

          {/* Large Gold Logo Badge */}
          <div className="relative inline-block max-xl:max-w-52">
            <img src="/assets/footer-logo.svg" alt="KHIM Logo" />
          </div>
        </div>

        {/* --- Horizontal & Centered Buttons --- */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-12 font-serif text-lg sm:text-xl tracking-wide uppercase">
          {/* Über uns: Scrollt auf Startseite nach oben */}
          <a
            href="/"
            onClick={handleRedirectAndScroll}
            className="hover:text-secondary transition-colors cursor-pointer"
          >
            Über uns
          </a>

          {/* Speisen & Kontakt: Normale interne Links */}
          <Link href="/menu" className="hover:text-secondary transition-colors">
            Speisen
          </Link>

          <Link href="/contact" className="hover:text-secondary transition-colors">
            Kontakt
          </Link>

          {/* Datenschutz: Öffnet neuen Tab */}
          <Link
            href="/datenschutz"
            className="hover:text-secondary transition-colors"
          >
            Datenschutz
          </Link>

          {/* Impressum: Empfehlung -> eigene Seite */}
          <Link href="/impressum" className="hover:text-secondary transition-colors">
            Impressum
          </Link>

          {/* Cookie-Einstellungen: Öffnet das Consent-Panel erneut */}
          <button
            type="button"
            onClick={handleOpenCookieSettings}
            className="hover:text-secondary transition-colors underline decoration-dotted underline-offset-4 text-base sm:text-xl"
          >
            Cookie&nbsp;Einstellungen
          </button>
        </div>
        {/* -------------------------------------- */}

        {/* Bottom bar */}
        <div className="py-5 border-t border-white font-light text-white text-sm sm:text-xl uppercase">
          <p>© Alle Urheberrechte vorbehalten</p>
        </div>
      </div>

      <div className='ornament'>
        <img src="assets/ornament-lg.svg" alt='' />
      </div>

      <div className='cloud'>
        <img src="assets/cloud-img.svg" alt="" />
      </div>

    </footer>
  )
}

export default Footer