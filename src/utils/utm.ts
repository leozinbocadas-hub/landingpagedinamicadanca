/**
 * Utility to manage UTM parameters for tracking.
 * Captures UTMs from the URL and stores them in localStorage to persist across sessions.
 * Compatible with Utmify and other tracking tools.
 */

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'utm_id',
  'src',
  'off',
  'fbclid',
  'gclid',
  'ttclid',
  'msclkid',
  'irclickid',
  'xcid'
];

/**
 * Captures UTM parameters from the current URL and saves them to localStorage.
 * Note: An early capture script is also present in index.html to prevent data loss.
 */
export const captureUTMs = () => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  const utms: Record<string, string> = {};

  // Try to capture from URL
  UTM_KEYS.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      utms[key] = value;
      localStorage.setItem(`tracking_${key}`, value);
    }
  });

  // Check what we have in localStorage (including early capture)
  const stored = getStoredUTMs();
  
  console.log('[UTM Tracker] Active UTMs:', stored);
  return stored;
};

/**
 * Retrieves stored UTM parameters from localStorage.
 */
export const getStoredUTMs = () => {
  if (typeof window === 'undefined') return {};
  
  const utms: Record<string, string> = {};
  UTM_KEYS.forEach(key => {
    const value = localStorage.getItem(`tracking_${key}`);
    if (value) {
      utms[key] = value;
    }
  });
  return utms;
};

/**
 * Appends stored UTM parameters to a given URL.
 */
export const appendUTMsToUrl = (url: string) => {
  if (!url) return url;
  
  try {
    const utms = getStoredUTMs();
    if (Object.keys(utms).length === 0) {
      return url;
    }

    let resultUrl = url;

    // Handle full URLs
    if (url.startsWith('http')) {
      const urlObj = new URL(url);
      Object.entries(utms).forEach(([key, value]) => {
        // We append all stored tracking keys
        if (!urlObj.searchParams.has(key)) {
          urlObj.searchParams.set(key, value);
        }
      });
      resultUrl = urlObj.toString();
    } else {
      // Handle relative URLs
      const [path, query] = url.split('?');
      const searchParams = new URLSearchParams(query || '');
      Object.entries(utms).forEach(([key, value]) => {
        if (!searchParams.has(key)) {
          searchParams.set(key, value);
        }
      });
      resultUrl = `${path}?${searchParams.toString()}`;
    }

    return resultUrl;
    
  } catch (e) {
    console.error('[UTM Tracker] Error appending UTMs:', e);
    return url;
  }
};
