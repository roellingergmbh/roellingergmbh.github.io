import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { about } from '../WEBSITE_CONTENT';

// Detect iOS for performance optimization
const getIsIOS = () => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

const TeamSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-stone-900 bg-dots-light relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Headline & Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs mb-6 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-green"></span>
              {about.sectionLabel}
            </span>
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 leading-[1.1]">
              {about.mainHeadingLine1} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-emerald-200">
                {about.mainHeadingLine2}
              </span>
            </h2>
            <p className="text-white/60 text-lg font-light max-w-md leading-relaxed">
              {about.mainDescription}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
              {about.statistics.map((stat, index) => (
                <div key={index}>
                  <span className="block text-3xl font-serif text-white mb-1">{stat.value}</span>
                  <span className="text-xs uppercase tracking-widest text-white/40">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Founders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
             {/* Unified Glass Card - reduced blur on mobile for performance */}
            <div className="bg-white/5 md:backdrop-blur-xl backdrop-blur-none bg-stone-900/90 md:bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10">
              
              {/* Header Text */}
              <div className="mb-10">
                <h3 className="text-2xl font-serif text-white mb-4">
                  {about.teamCardTitle}
                </h3>
                <p className="text-white/70 leading-relaxed font-light">
                  {about.teamCardDescription}
                </p>
              </div>

              {/* Founder Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {about.founders.map((founder, index) => (
                  <div
                    key={index}
                    className="group relative h-[320px] rounded-xl overflow-hidden cursor-pointer"
                  >
                    {/* Image Background */}
                    <div className="absolute inset-0">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {founder.role}
                        </span>
                        <h4 className="text-xl font-serif text-white mb-1">
                          {founder.name}
                        </h4>
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                           <p className="text-white/70 text-xs font-light pt-2 border-t border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 leading-relaxed">
                             {founder.description}
                           </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative Border (Subtle) */}
                    <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-brand-green/30 transition-colors duration-500" />
                  </div>
                ))}
              </div>
              
            </div>
            
            {/* Background Decor */}
            <div className="absolute inset-0 border border-white/5 rounded-2xl -z-10 translate-x-4 translate-y-4" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
    <TeamSection />
    {/* Height is 300vh to allow for enough scroll distance (1 screen per card) */}
    <section ref={containerRef} className="relative h-[300vh] bg-stone-100 bg-dots-dark">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full max-w-7xl mx-auto px-4 md:px-8 py-12 flex items-center justify-center">
          
          {about.features.map((feature, index) => {
            // Determine the target scale and position for each card based on index
            // We want the last card to end up on top
            // Range logic:
            // Index 0: Active 0-0.5, scales down 0.5-1
            // Index 1: Enters 0-0.5, Active 0.5-1
            // But we need a more generic approach for N cards.
            
            // Let's define the range for this specific card to be "active" (entering view)
            // Total scroll distance is 1. We have N cards.
            // Card 0 is present at start.
            // Card 1 enters from 0 to 0.5
            // Card 2 enters from 0.5 to 1.0
            
            // Range for entering:
            const rangeStart = index === 0 ? 0 : (index - 1) * 0.5;
            const rangeEnd = index * 0.5;
            
            return (
              <Card
                key={feature.id}
                feature={feature}
                index={index}
                total={about.features.length}
                progress={scrollYProgress}
                range={[rangeStart, rangeEnd]}
              />
            );
          })}
          
        </div>
      </div>
    </section>
    </>
  );
};

interface CardProps {
  feature: typeof about.features[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
  range: [number, number];
}

const Card: React.FC<CardProps> = ({ feature, index, total, progress, range }) => {
  const [isIOS] = useState(getIsIOS);
  
  // Logic:
  // If index is 0, it doesn't slide in, it's just there. But it scales down as next one comes.
  // If index > 0, it slides in from bottom.
  
  // Dynamic ranges
  const entryStart = (index - 1) / (total - 1); // e.g. 0/2 = 0
  const entryEnd = index / (total - 1);         // e.g. 1/2 = 0.5
  
  // For the first card, it is always at Y=0
  // For others, we interpolate
  const y = useTransform(
    progress,
    [entryStart, entryEnd],
    ['100vh', '0vh']
  );
  
  // Scale down logic: current card scales down when the NEXT card is entering
  const exitStart = entryEnd;
  const exitEnd = (index + 1) / (total - 1);
  
  const scale = useTransform(
    progress,
    [exitStart, exitEnd],
    [1, index === total - 1 ? 1 : 0.9] // Last card doesn't scale down
  );
  
  // Opacity for depth effect - use opacity instead of brightness filter for iOS performance
  const dimOpacity = useTransform(
    progress,
    [exitStart, exitEnd],
    [1, index === total - 1 ? 1 : 0.7]
  );
  
  // Inner Parallax Logic - simplified for iOS
  // Image should move slightly opposite to scroll to create "window" effect
  // Active range: entryStart to exitEnd
  // Reduce parallax effect on iOS for better performance
  const imageScale = useTransform(progress, [entryStart, exitEnd], isIOS ? [1.05, 1] : [1.2, 1]);
  const imageY = useTransform(progress, [entryStart, exitEnd], isIOS ? ['-2%', '0%'] : ['-10%', '0%']);
  
  // Text content staggering - simplified for iOS
  const textY = useTransform(progress, [entryStart, entryEnd], isIOS ? ['10px', '0px'] : ['20px', '0px']);
  const textOpacity = useTransform(progress, [entryStart, entryEnd], [0, 1]);

  // For the very first card, we don't need to animate Y entry, it just sits there.
  // Removed expensive filter:brightness() - using opacity overlay instead for iOS
  const style = index === 0
    ? { scale, opacity: dimOpacity, zIndex: index }
    : { y, scale, opacity: dimOpacity, zIndex: index };

  return (
    <motion.div
      style={{
        ...style,
        willChange: 'transform, opacity', // Hint for GPU compositing
        transform: 'translateZ(0)', // Force GPU layer
      }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-8"
    >
      <div
        className="relative w-full max-w-7xl min-h-[50vh] md:h-[55vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        style={{ transform: 'translateZ(0)' }} // GPU layer for card
      >
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-48 sm:h-56 md:h-full relative overflow-hidden group flex-shrink-0">
          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
            className="w-full h-full"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover"
              style={{ transform: 'translateZ(0)' }} // GPU layer for image
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/10 md:group-hover:bg-transparent transition-colors duration-500" />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex-1 md:h-full p-6 sm:p-8 md:p-12 flex flex-col justify-center bg-white relative">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-stone-50 rounded-bl-full -z-0" />
          
          <motion.div
            style={{
              y: textY,
              opacity: textOpacity,
              willChange: 'transform, opacity',
            }}
            className="relative z-10"
          >
            <span className="text-secondary/60 text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-sans block">
              0{index + 1} — {about.cardCategoryLabel}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-4 sm:mb-6 leading-tight">
              {feature.title}
            </h2>
            <p className="text-base sm:text-lg text-secondary leading-relaxed font-sans mb-6 sm:mb-8">
              {feature.description}
            </p>
            
          </motion.div>
        </div>

      </div>
    </motion.div>
  );
};
