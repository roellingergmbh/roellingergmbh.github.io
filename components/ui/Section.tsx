import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "", noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full ${noPadding ? '' : 'py-24 md:py-32'} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // Snappy spring-like easing
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};