import { useState, useEffect } from 'react';

/**
 * Hook to detect iOS devices for performance optimizations
 *
 * IMPORTANT: On iOS, ALL browsers (Chrome, Firefox, Edge, Safari, etc.)
 * use Apple's WebKit engine under the hood. Apple requires this.
 * So performance issues on "Safari mobile" actually affect ALL iOS browsers.
 *
 * This means:
 * - Chrome on iPhone = WebKit (same as Safari)
 * - Firefox on iPhone = WebKit (same as Safari)
 * - Edge on iPhone = WebKit (same as Safari)
 */
export const useIsIOS = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect iOS devices (iPhone, iPad, iPod)
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
      // Detect iPad on iOS 13+ (reports as MacIntel but has touch capability)
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    
    setIsIOS(isIOSDevice);
  }, []);

  return isIOS;
};

// Keep old export for backwards compatibility
export const useIsSafari = () => {
  const isIOS = useIsIOS();
  return {
    isSafari: isIOS, // On mobile, Safari = iOS WebKit
    isIOS,
    isSafariMobile: isIOS // All iOS browsers use WebKit
  };
};