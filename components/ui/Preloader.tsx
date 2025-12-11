import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling after loading
      document.body.style.overflow = 'unset';
    }, 1500); // 2 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] bg-[#1C1917] flex items-center justify-center overflow-hidden"
        >
          <div className="relative px-6">
             <div className="overflow-hidden pb-4">
               <motion.h1
                  initial={{ y: "120%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                  className="font-serif text-6xl md:text-8xl text-[#FDFCF8] tracking-tight"
               >
                  Röllinger GmbH
               </motion.h1>
             </div>
             <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
                className="h-[1px] bg-brand-green mt-4"
             />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
