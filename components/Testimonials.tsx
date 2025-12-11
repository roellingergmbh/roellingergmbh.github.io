import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-page bg-dots-dark py-32 border-t border-stone-100 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <span className="font-sans text-sm tracking-widest uppercase text-secondary block">{testimonials.sectionLabel}</span>
        <h2 className="font-serif text-3xl md:text-4xl text-primary mt-4">{testimonials.sectionTitle}</h2>
      </div>

      <div className="relative w-full">
        {/* Gradients for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        {/* animate-infinite-scroll moves the track. hover:[animation-play-state:paused] stops it on hover. */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] py-4">
          {/* Double the list for seamless loop */}
          {[...testimonials.items, ...testimonials.items].map((t, i) => (
            <motion.div
              key={i}
              className="w-[300px] md:w-[450px] mx-4 md:mx-6 bg-white rounded-soft p-8 md:p-10 shadow-sm border border-stone-100 flex flex-col justify-between cursor-default"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "rgba(143, 218, 119, 0.5)" // brand.green with opacity
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-brand-green text-brand-green" />
                  ))}
                </div>
                <p className="font-serif text-xl md:text-2xl text-primary italic mb-8 leading-relaxed">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shrink-0">
                  <span className="font-serif font-bold text-secondary">{t.author[0]}</span>
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-secondary">{t.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
