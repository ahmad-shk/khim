import Script from 'next/script';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1>Privacy Policy & Cookie Declaration</h1>
      <p>Here is a list of all cookies used on this website:</p>
      
      {/* This script will automatically inject the full cookie table here */}
      <Script 
        id="CookieDeclaration" 
        src="https://consent.cookiebot.com/fa3e0919-3690-4923-9bed-1f6fdc186cf4/cd.js" 
        strategy="afterInteractive"
      />
    </div>
  );
}