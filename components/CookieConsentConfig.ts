import type { CookieConsentConfig } from 'vanilla-cookieconsent';

let gtmLoaded = false;

// Loads Google Tag Manager only after marketing consent
function loadGoogleTagManager() {
  if (gtmLoaded || typeof window === 'undefined') return;

  const GTM_ID = 'GTM-KJG6QK5C'; // TODO: replace with your real GTM ID
  if (!GTM_ID) return;

  // Create GTM script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  // Basic dataLayer setup
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    'gtm.start': new Date().getTime(),
    event: 'gtm.js',
  });

  gtmLoaded = true;
}

function handleConsentForMarketing(cookie: any) {
  if (!cookie) return;

  // vanilla-cookieconsent v3: categories object with booleans
  const marketingEnabled =
    cookie.categories?.marketing === true ||
    // fallback if structure differs
    Array.isArray(cookie.categories) &&
      cookie.categories.includes('marketing');

  if (marketingEnabled) {
    loadGoogleTagManager();
  }
}

const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: 'box',
      position: 'left',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function ({ cookie }) {
    console.log('onFirstAction fired');
    handleConsentForMarketing(cookie);
  },

  onConsent: function ({ cookie }) {
    console.log('onConsent fired ...');
    handleConsentForMarketing(cookie);
  },

  onChange: function ({ changedCategories, cookie }) {
    console.log('onChange fired ...');
    handleConsentForMarketing(cookie);
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/,
          },
        ],
      },
    },
    marketing: {
      autoClear: {
        cookies: [
          {
            // Google Ads / GTM Conversion Linker
            name: /^_gcl_au/,
          },
        ],
      },
    },
  },

  language: {
    default: 'de',

    translations: {
      de: {
        consentModal: {
          title: 'Wir verwenden Cookies',
          description:
            'Wir verwenden Cookies, um unsere Website zu betreiben, die Nutzung zu analysieren und unser Angebot zu verbessern. Nicht notwendige Cookies werden nur gesetzt, wenn Sie zustimmen. Weitere Informationen finden Sie in unserer <a href="/datenschutz" class="cc__link">Datenschutzerklärung</a> und in unserer <a href="/cookie-policy" class="cc__link">Cookie-Richtlinie</a>.',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige Cookies',
          showPreferencesBtn: 'Einstellungen',
          // closeIconLabel: 'Schließen',
          footer: `
            <a href="/datenschutz">Datenschutzerklärung</a>
            <a href="/impressum">Impressum</a>
          `,
        },
        preferencesModal: {
          title: 'Cookie-Einstellungen',
          acceptAllBtn: 'Alle akzeptieren',
          acceptNecessaryBtn: 'Nur notwendige Cookies',
          savePreferencesBtn: 'Auswahl speichern',
          closeIconLabel: 'Schließen',
          sections: [
            {
              title: 'Verwendung von Cookies',
              description:
                'Wir nutzen Cookies, um die Grundfunktionen der Website bereitzustellen (z. B. Seitennavigation) und – nur mit Ihrer Einwilligung – zur anonymen Statistik und Verbesserung unseres Angebots. Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen auf dieser Website ändern oder widerrufen.',
            },
            {
              title: 'Technisch notwendige Cookies',
              description:
                'Diese Cookies sind erforderlich, damit die Website ordnungsgemäß funktioniert. Ohne sie können grundlegende Funktionen wie Seitennavigation oder die Speicherung Ihrer Datenschutzeinstellungen nicht bereitgestellt werden.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Statistik- & Analyse-Cookies',
              description:
                'Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen (z. B. welche Seiten besonders häufig aufgerufen werden). Die erhobenen Daten werden anonym ausgewertet.',
              linkedCategory: 'analytics',
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Dienst',
                  description: 'Beschreibung',
                  expiration: 'Speicherdauer',
                },
                body: [
                  {
                    name: '_ga',
                    domain: 'Google Analytics',
                    description:
                      'Wird verwendet, um Besucher zu unterscheiden (anonyme Statistik).',
                    expiration: '2 Jahre',
                  },
                  {
                    name: '_gid',
                    domain: 'Google Analytics',
                    description:
                      'Wird verwendet, um Besucher zu unterscheiden (anonyme Statistik).',
                    expiration: '24 Stunden',
                  },
                ],
              },
            },
            {
              title: 'Marketing- & Werbe-Cookies',
              description:
                'Diese Cookies werden verwendet, um die Wirksamkeit von Online-Werbung zu messen und personalisierte Werbung anzuzeigen. Sie werden nur gesetzt, wenn Sie dem Einsatz von Marketing-Cookies zustimmen.',
              linkedCategory: 'marketing',
              cookieTable: {
                headers: {
                  name: 'Name',
                  domain: 'Dienst',
                  description: 'Beschreibung',
                  expiration: 'Speicherdauer',
                },
                body: [
                  {
                    name: '_gcl_au',
                    domain: 'Google Ads / Google Tag Manager',
                    description:
                      'Wird von Google Ads verwendet, um Conversions (z. B. Bestellungen oder Anfragen) Werbeanzeigen zuzuordnen.',
                    expiration: '90 Tage',
                  },
                ],
              },
            },
            {
              title: 'Weitere Informationen',
              description:
                'Ausführliche Informationen zur Verarbeitung personenbezogener Daten, zu Ihren Rechten (Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit) sowie zu Ihrem Beschwerderecht bei der Datenschutzbehörde finden Sie in unserer <a class="cc__link" href="/datenschutz">Datenschutzerklärung</a>.',
            },
          ],
        },
      },
    },
  },
};

export default pluginConfig;