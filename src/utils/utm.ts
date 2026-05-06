/**
 * Utility to manage UTM parameters for tracking.
 * Captures UTMs from the URL and stores them in sessionStorage to persist across pages.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'src',
  'fbclid',
  'gclid'
];

/**
 * Captures UTM parameters from the current URL and saves them to sessionStorage.
 * This should be called at the start of the application.
 */
export const captureUTMs = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};

  UTM_KEYS.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utms[key] = value;
      sessionStorage.setItem(key, value);
    }
  });

  return utms;
};

/**
 * Retrieves stored UTM parameters from sessionStorage.
 */
export const getStoredUTMs = () => {
  if (typeof window === 'undefined') return {};
  
  const utms: Record<string, string> = {};
  UTM_KEYS.forEach(key => {
    const value = sessionStorage.getItem(key);
    if (value) {
      utms[key] = value;
    }
  });
  return utms;
};

/**
 * Appends stored UTM parameters to a given URL.
 * @param url The target URL (e.g., a checkout link)
 * @returns The URL with UTM parameters appended
 */
export const appendUTMsToUrl = (url: string) => {
  if (!url) return url;
  
  try {
    const utms = getStoredUTMs();
    if (Object.keys(utms).length === 0) return url;

    // Handle URLs that might already have query params
    const urlObj = new URL(url);
    Object.entries(utms).forEach(([key, value]) => {
      // Don't overwrite if already present in the target URL
      if (!urlObj.searchParams.has(key)) {
        urlObj.searchParams.set(key, value);
      }
    });
    return urlObj.toString();
  } catch (e) {
    // If URL is invalid or relative, handle it gracefully
    if (url.startsWith('/') || url.startsWith('#')) {
      const utms = getStoredUTMs();
      const searchParams = new URLSearchParams();
      Object.entries(utms).forEach(([key, value]) => searchParams.set(key, value));
      const prefix = url.includes('?') ? '&' : '?';
      return `${url}${prefix}${searchParams.toString()}`;
    }
    return url;
  }
};
