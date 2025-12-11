import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';

// Detect iOS devices for performance optimization
// On iOS, ALL browsers (Chrome, Firefox, Edge, etc.) use WebKit engine under the hood
// Apple requires this - so performance issues affect all iOS browsers, not just Safari
const getIsIOS = () => {
  if (typeof window === 'undefined') return false;
  // Detect iPhone, iPad, iPod
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    // Detect iPad on iOS 13+ (which reports as MacIntel but has touch)
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  return isIOS;
};

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(100);
  const [isIOS] = useState(getIsIOS);

  useEffect(() => {
    // Skip Lenis on iOS - use native scroll for better performance
    // iOS WebKit has issues with JavaScript-controlled smooth scroll (Lenis)
    if (isIOS) {
      // Still track scroll position for custom scrollbar on desktop Safari
      const updateThumbNative = () => {
        const docHeight = document.documentElement.scrollHeight;
        const winHeight = window.innerHeight;
        const trackHeight = trackRef.current?.clientHeight || winHeight;
        const height = Math.max((winHeight / docHeight) * trackHeight, 60);
        setThumbHeight(height);
      };

      const onScrollNative = () => {
        if (thumbRef.current && trackRef.current) {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = scrollTop / docHeight;
          const trackHeight = trackRef.current.clientHeight;
          const trackSpace = trackHeight - thumbRef.current.offsetHeight;
          const newTop = progress * trackSpace;
          thumbRef.current.style.transform = `translateY(${newTop}px)`;
        }
      };

      updateThumbNative();
      window.addEventListener('scroll', onScrollNative, { passive: true });
      window.addEventListener('resize', updateThumbNative);

      return () => {
        window.removeEventListener('scroll', onScrollNative);
        window.removeEventListener('resize', updateThumbNative);
      };
    }

    // Use Lenis for non-iOS devices (desktop browsers)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Sync Thumb
    const updateThumb = () => {
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const trackHeight = trackRef.current?.clientHeight || winHeight;
      
      // Calculate thumb height proportional to track height
      const height = Math.max((winHeight / docHeight) * trackHeight, 60);
      setThumbHeight(height);
    };

    // Update on resize and mutation
    updateThumb();
    const resizeObserver = new ResizeObserver(updateThumb);
    resizeObserver.observe(document.body);
    window.addEventListener('resize', updateThumb);

    function onScroll({ scroll, limit }: { scroll: number; limit: number }) {
      if (thumbRef.current && trackRef.current) {
        const progress = scroll / limit;
        const trackHeight = trackRef.current.clientHeight;
        const trackSpace = trackHeight - thumbRef.current.offsetHeight;
        const newTop = progress * trackSpace;
        thumbRef.current.style.transform = `translateY(${newTop}px)`;
      }
    }

    lenis.on('scroll', onScroll);

    // Drag Logic
    let isDragging = false;
    let startY = 0;
    let startScroll = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startY = e.clientY;
      startScroll = lenis.scroll;
      document.body.style.userSelect = 'none'; // Prevent text selection
      thumbRef.current?.classList.add('cursor-grabbing');
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const deltaY = e.clientY - startY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const trackHeight = trackRef.current?.clientHeight || winHeight;
      const trackSpace = trackHeight - (thumbRef.current?.offsetHeight || 0);
      const scrollRatio = (docHeight - winHeight) / trackSpace;
      
      lenis.scrollTo(startScroll + deltaY * scrollRatio, { immediate: true });
    };

    const onPointerUp = () => {
      isDragging = false;
      document.body.style.userSelect = '';
      thumbRef.current?.classList.remove('cursor-grabbing');
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };

    thumbRef.current?.addEventListener('pointerdown', onPointerDown);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateThumb);
    };
  }, [isIOS]);

  return (
    <>
      {children}
      {/* Custom Scrollbar */}
      <div 
        ref={trackRef}
        className="hidden md:block fixed top-2 bottom-2 right-2 w-[16px] z-[999] pointer-events-none"
      >
        <div 
          ref={thumbRef}
          className="absolute right-0 w-[4px] bg-[#8FDA77] rounded-full pointer-events-auto cursor-grab transition-all duration-300 ease-out hover:w-[8px] hover:bg-[#7BC566]"
          style={{ height: thumbHeight }}
        />
      </div>
    </>
  );
};
