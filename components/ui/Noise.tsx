import React from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

export const Noise: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Disable noise on mobile for better Safari/iOS performance
  // SVG feTurbulence is very expensive on mobile WebKit
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
      <svg className="absolute w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
