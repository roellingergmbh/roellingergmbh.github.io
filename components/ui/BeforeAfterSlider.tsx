import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/useIsMobile';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Vorher',
  afterLabel = 'Nachher',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    },
    []
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleMove(e.clientX);
  }, [handleMove]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden select-none ${isMobile ? '' : 'cursor-ew-resize'} ${className}`}
      onMouseDown={isMobile ? undefined : handleMouseDown}
      onTouchStart={isMobile ? undefined : handleTouchStart}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* After Label */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-3 right-3 md:bottom-6 md:right-6 px-2 py-1 md:px-3 md:py-1.5 bg-brand-green text-white text-[10px] md:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg"
        >
          {afterLabel}
        </motion.div>
      </div>

      {/* Before Image (GPU-accelerated width approach instead of clip-path) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden will-change-transform"
        style={{
          width: `${sliderPosition}%`,
          transform: 'translateZ(0)', // Force GPU layer
        }}
      >
        {/* Inner container maintains full width for proper object-cover */}
        <div
          className="absolute inset-0"
          style={{
            width: `${100 / (sliderPosition / 100)}%`,
            minWidth: '100%',
          }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-full object-cover"
            style={{
              width: containerRef.current?.offsetWidth || '100%',
              maxWidth: 'none',
            }}
            draggable={false}
          />
        </div>
        {/* Before Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-3 left-3 md:bottom-6 md:left-6 px-2 py-1 md:px-3 md:py-1.5 bg-stone-800 text-white text-[10px] md:text-sm font-bold uppercase tracking-wider rounded-full shadow-lg"
        >
          {beforeLabel}
        </motion.div>
      </div>

      {/* Slider Handle */}
      <div
        className={`absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10 will-change-transform ${isMobile ? 'cursor-ew-resize' : ''}`}
        style={{
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%) translateZ(0)', // GPU accelerated positioning
        }}
        onMouseDown={isMobile ? handleMouseDown : undefined}
        onTouchStart={isMobile ? handleTouchStart : undefined}
      >
        {/* Handle Circle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform ${
            isDragging ? 'scale-110' : 'hover:scale-110'
          }`}
        >
          {/* Arrows */}
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 md:w-4 md:h-4 text-stone-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            <svg
              className="w-4 h-4 md:w-4 md:h-4 text-stone-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Instruction hint (shows briefly) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 md:px-4 md:py-2 bg-black/60 backdrop-blur-sm text-white text-[10px] md:text-sm rounded-full pointer-events-none whitespace-nowrap"
      >
        {isMobile ? 'Schieber ziehen' : '← Ziehen zum Vergleichen →'}
      </motion.div>
    </div>
  );
};