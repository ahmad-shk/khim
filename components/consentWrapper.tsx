"use client";

import React from 'react';
import Cookiebot from 'react-cookiebot';

export default function CookiebotWrapper() {
  return (
    <Cookiebot 
      domainGroupId="fa3e0919-3690-4923-9bed-1f6fdc186cf4" 
      language="DE" // Set for Austrian/German users
    />
  );
}
