import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { parallaxSection } from '../WEBSITE_CONTENT';

export const ParallaxSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-24 px-4 md:px-8 bg-page overflow-hidden">
      <div
        ref={ref}
        className="relative h-[80vh] w-full rounded-soft overflow-hidden"
      >
        <motion.div
          style={{ y, scale: 1.1 }}
          className="absolute inset-0 w-full h-full"
        >
           <img
            src={parallaxSection.backgroundImage}
            alt={parallaxSection.imageDescription}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Quote Overlay */}
        <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
          <h2
            className="font-serif text-4xl md:text-6xl lg:text-6xl text-white text-center max-w-6xl px-8 md:px-12 leading-tight italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.9), 0 2px 4px rgba(0,0,0,0.8)'
            }}
            dangerouslySetInnerHTML={{ __html: `"${parallaxSection.quote}"` }}
          />
        </div>
      </div>
    </section>
  );
};
