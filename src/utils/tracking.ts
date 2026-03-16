/**
 * Tracking utilities for CTA clicks and analytics
 */

// Declare posthog on window for TypeScript
declare global {
  interface Window {
    posthog?: {
      get_distinct_id: () => string | undefined;
      capture: (event: string, properties?: Record<string, unknown>) => void;
    };
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Extracts the Google Analytics Client ID from cookies.
 * Falls back to generating a random one if not found.
 */
function getClientId(): string {
  try {
    // Try to get from GTM/GA cookie _ga
    const gaCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('_ga='));

    if (gaCookie) {
      // Format usually is _ga=GA1.1.123456789.123456789
      // We want the "123456789.123456789" part
      const parts = gaCookie.split('.');
      if (parts.length >= 4) {
        return `${parts[2]}.${parts[3]}`;
      }
      return gaCookie.split('=')[1];
    }
  } catch (e) {
    console.error("Error extracting Client ID", e);
  }

  // Fallback: Generate a pseudo-random ID if GA is blocked/missing
  return 'fallback-' + Math.random().toString(36).substring(2, 15);
}

/**
 * Returns the destination URL with the tracking_id appended.
 */
export const getRedirectUrl = (): string => {
  const baseUrl = "https://plataforma.slimasaude.com/programa";
  const trackingId = getClientId();

  // Get PostHog distinct ID from global window object
  const posthogId = window.posthog?.get_distinct_id?.();

  // Read ref from current page URL
  const currentParams = new URLSearchParams(window.location.search);
  const ref = currentParams.get("ref");

  // Use URL object to safely append params
  const url = new URL(baseUrl);
  url.searchParams.set("tracking_id", trackingId);
  if (posthogId) {
    url.searchParams.set("ph_distinct_id", posthogId);
  }
  if (ref) {
    url.searchParams.set("ref", ref);
  }

  return url.toString();
};

/**
 * Handles the click event for CTA buttons.
 * Pushes event to dataLayer for GTM tracking before redirect.
 */
export const handleCtaClick = () => {
  // Track the CTA click in dataLayer for GTM
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'event': 'cta_click',
    'cta_destination': 'quiz_form'
  });

  // Track in PostHog if available
  window.posthog?.capture?.('cta_click', {
    destination: 'quiz_form'
  });

  // Small delay to ensure tracking fires before redirect
  setTimeout(() => {
    const url = getRedirectUrl();
    window.location.href = url;
  }, 100);
};
