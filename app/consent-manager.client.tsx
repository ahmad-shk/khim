'use client';

import type { ReactNode } from 'react';
import { ClientSideOptionsProvider } from '@c15t/nextjs/client';
// Add this right here!
// declare global {
// 	interface Window {
// 	  gtag: (...args: any[]) => void;
// 	  dataLayer: any[];
// 	}
//   }
/**
 * Client-side consent manager wrapper for handling scripts and callbacks
 *
 * This component is rendered on the client and provides the ability to:
 * - Load integration scripts (Google Tag Manager, Meta Pixel, TikTok Pixel, etc.)
 * - Handle client-side callbacks (onConsentSet, onError, onBannerFetched)
 * - Manage script lifecycle (onLoad, onDelete)
 *
 * @param props - Component properties
 * @param props.children - Child components to render within the client-side context
 *
 * @returns The client-side options provider with children
 *
 * @see https://c15t.com/docs/frameworks/next/callbacks
 * @see https://c15t.com/docs/frameworks/next/script-loader
 */
export function ConsentManagerClient({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<ClientSideOptionsProvider
			// 📝 Add your integration scripts here
			// Scripts are loaded when consent is given and removed when consent is revoked
			scripts={[
				// Example:
				// googleTagManager({
				//   id: 'GTM-XXXXXX',
				//   script: {
				//     onLoad: () => console.log('GTM loaded'),
				//   },
				// }),
			]}
			// 📝 Add your callbacks here
			// Callbacks allow you to react to consent events
			// callbacks={{
			// 	// Example:
			// 	onConsentSet(response) {
			// 	  console.log('Consent updated:', response);
			// 	  const isMarketingAccepted = response.preferences.marketing;
			// 	  console.log('Consent updated:', isMarketingAccepted);
          
			// 	  if (typeof window !== 'undefined' && window.gtag) {
			// 		window.gtag('consent', 'update', {
			// 		  'ad_storage': isMarketingAccepted ? 'granted' : 'denied',
			// 		  'analytics_storage': isMarketingAccepted ? 'granted' : 'denied',
			// 		});
					
			// 		console.log('Consent updated if:', isMarketingAccepted);

			// 		// Optional: Push an event for GTM triggers
			// 		window.dataLayer.push({ event: 'consent_updated' });
			// 	  }else{
			// 		console.log('Consent updated else:', isMarketingAccepted);

			// 	  }


			// 	},
			// 	onError(error) {
			// 	  console.error('Consent error:', error);
			// 	},
			// }}
			callbacks={{
				onConsentSet(response) {
				  // 1. Access the preferences directly from your response structure
				  const prefs = (response as any).preferences || {};
				  const isMarketingAccepted = prefs.marketing === true;
				  const isMeasurementAccepted = prefs.measurement === true;
			  
				  console.log('Consent updated. Marketing:', isMarketingAccepted, 'Measurement:', isMeasurementAccepted);
			  
				  // 2. Define the safe gtag wrapper
				  const safeGtag = (...args: any[]) => {
					window.dataLayer = window.dataLayer || [];
					
					// Use (window as any) to bypass strict TypeScript interface checking
					const g = (window as any).gtag;
					
					if (typeof g === 'function') {
					  g(...args);
					} else {
					  window.dataLayer.push(arguments);
					}
				  };
			  
				  // 3. Update Consent (The specific language Google expects)
				  safeGtag('consent', 'update', {
					'ad_storage': isMarketingAccepted ? 'granted' : 'denied',
					'analytics_storage': isMeasurementAccepted ? 'granted' : 'denied',
				  });
			  
				  // 4. Trigger the GTM custom event
				  window.dataLayer.push({ event: 'consent_updated' });
				  
				  console.log('Gtag update command sent successfully.');
				},
				
				onError(error) {
				  console.error('Consent error:', error);
				},
			  }}
		>
			{children}
		</ClientSideOptionsProvider>
	);
}
