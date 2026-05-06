
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

function testUtm() {
  const mockStorage = new Map();
  const sessionStorage = {
    setItem: (k, v) => mockStorage.set(k, v),
    getItem: (k) => mockStorage.get(k)
  };

  const mockLocation = {
    search: '?utm_source=FB&utm_content=Criativo01&other=val'
  };

  // Capture
  const urlParams = new URLSearchParams(mockLocation.search);
  UTM_KEYS.forEach(key => {
    const value = urlParams.get(key);
    if (value) {
      sessionStorage.setItem(key, value);
    }
  });

  console.log('Stored:', Array.from(mockStorage.entries()));

  // Append
  const checkoutUrl = "https://ggcheckout.app/checkout/v5/abc";
  const utms = {};
  UTM_KEYS.forEach(key => {
    const value = sessionStorage.getItem(key);
    if (value) {
      utms[key] = value;
    }
  });

  const urlObj = new URL(checkoutUrl);
  Object.entries(utms).forEach(([key, value]) => {
    if (!urlObj.searchParams.has(key)) {
      urlObj.searchParams.set(key, value);
    }
  });

  console.log('Result URL:', urlObj.toString());
}

testUtm();
