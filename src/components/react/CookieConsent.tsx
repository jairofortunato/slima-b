import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);

    // Update Google Consent Mode v2 to granted
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted',
      'security_storage': 'granted'
    });

    // Push event for GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cookie_consent_given' });
  };

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const showTimer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(showTimer);
    } else {
      // User already consented in a previous session - update consent state
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted',
        'security_storage': 'granted'
      });
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-sm">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
        <p className="text-navy-900/70 font-sans text-xs leading-snug flex-1">
          Utilizamos cookies para melhorar sua experiência.{' '}
          <a
            href="/cookies"
            className="text-[#015AC1] underline hover:text-[#014494] transition-colors"
          >
            Saiba mais
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="shrink-0 px-4 py-2 text-xs font-semibold text-white bg-[#015AC1] hover:bg-[#014494] rounded-full transition-colors font-sans"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
