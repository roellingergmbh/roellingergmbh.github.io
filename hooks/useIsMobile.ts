import { useState, useEffect } from 'react';

// Breakpoint matches Tailwind xl: 1280px
// Mobile/Tablet: < 1280px (includes phones and iPads)
// Desktop: >= 1280px
export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1025);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return isMobile;
};
