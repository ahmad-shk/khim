'use client';

import React, { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import pluginConfig from './CookieConsentConfig';

const CookieConsentComponent = () => {
  useEffect(() => {
    CookieConsent.run(pluginConfig);
  }, []);

  // Initialize cookie consent plugin only; no visible UI here.
  // The user can open the preferences via the "Cookie Einstellungen" button in the footer.
  return null;
};

export default CookieConsentComponent;