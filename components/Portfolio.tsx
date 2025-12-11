import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
import { portfolio } from '../WEBSITE_CONTENT';
import { BeforeAfterSlider } from './ui/BeforeAfterSlider';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

const ProjectImage = ({ project, setInView }: { project: typeof portfolio.projects[0], setInView: (id: number) => void }) => {
  const ref = useRef<HTMLDivElement>(null);
  // Trigger when crossing center line
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) setInView(project.id);
  }, [isInView, project.id, setInView]);

  const hasBeforeImage = !!project.beforeImage;

  return (
    <div ref={ref} className="h-[60vh] md:h-[65vh] lg:h-[78vh] xl:h-[82vh] portfolio-image-height w-full flex items-center justify-center p-4 md:p-6 lg:p-8 xl:p-16">
        <div className="w-full h-full max-w-4xl lg:max-w-none rounded-soft overflow-hidden relative group">
            {hasBeforeImage ? (
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.image}
                beforeLabel={portfolio.beforeLabel}
                afterLabel={portfolio.afterLabel}
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
        </div>
    </div>
  );
};

export const Portfolio: React.FC = () => {
  const [activeId, setActiveId] = useState(portfolio.projects[0].id);
  const activeProject = portfolio.projects.find(p => p.id === activeId) || portfolio.projects[0];

  return (
    <section id="portfolio" className="bg-page bg-dots-dark relative">
      
      {/* Unified Layout - Now switches to row at lg (1024px) for smaller laptops */}
      <div className="flex flex-col lg:flex-row w-full relative">
        
        {/* Left/Top: Sticky Content */}
        {/* On mobile/tablet: sticky below nav, bg-page to cover scrolling images */}
        {/* Added portfolio-blur-fallback for Safari mobile performance */}
        <div className="w-full lg:w-1/2 sticky top-[70px] lg:top-0 z-20 bg-page/95 bg-dots-dark backdrop-blur-sm portfolio-blur-fallback lg:bg-page lg:h-screen flex flex-col px-5 md:px-8 lg:px-12 xl:px-20 2xl:px-28 py-3 md:py-4 lg:py-0 border-b lg:border-b-0 border-stone-100/50">
            
            {/* Section Title - Hidden on mobile, shown on lg+ screens */}
            <div className="hidden lg:block mt-12 lg:mt-16 xl:mt-24 2xl:mt-28 mb-6 lg:mb-8 xl:mb-6 2xl:mb-8">
                <span className="font-sans text-xs lg:text-sm xl:text-base tracking-widest uppercase text-brand-green mb-3 lg:mb-4 block">{portfolio.sectionLabel}</span>
                <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-primary leading-tight">
                  {portfolio.sectionTitle.split(' ').slice(0, 1).join(' ')} <br/>
                  {portfolio.sectionTitle.split(' ').slice(1).join(' ')}
                </h2>
            </div>
            
            {/* Dynamic Project Info */}
            <div className="flex-1 flex flex-col justify-start lg:justify-center lg:pb-0">
                <motion.div
                    key={activeProject.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Mobile only: Compact layout (below lg breakpoint) */}
                    <div className="lg:hidden">
                        <div className="flex items-center justify-between gap-2 md:gap-3 mb-1.5 md:mb-3">
                            <div className="flex items-center gap-2 md:gap-3">
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-stone-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500">
                                    {activeProject.category}
                                </span>
                                <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-stone-200 text-[10px] md:text-xs font-bold uppercase tracking-wider text-stone-500">
                                    {activeProject.location}
                                </span>
                            </div>
                            <span className="font-mono text-xs md:text-sm text-stone-400">
                                0{activeProject.id}/0{portfolio.projects.length}
                            </span>
                        </div>
                        <h3 className="text-2xl md:text-4xl font-serif text-primary leading-tight">
                            {activeProject.title}
                        </h3>
                    </div>
                    
                    {/* Desktop/Laptop: Full layout (lg and above) */}
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4 xl:mb-5">
                            <span className="px-2 lg:px-3 xl:px-4 py-1 xl:py-1.5 rounded-full border border-stone-200 text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider text-stone-500">
                                {activeProject.category}
                            </span>
                            <span className="px-2 lg:px-3 xl:px-4 py-1 xl:py-1.5 rounded-full border border-stone-200 text-[10px] lg:text-xs xl:text-sm font-bold uppercase tracking-wider text-stone-500">
                                {activeProject.location}
                            </span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-serif text-primary mb-4 lg:mb-6 xl:mb-8">
                            {activeProject.title}
                        </h3>
                        <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl text-stone-600 font-light leading-relaxed max-w-md xl:max-w-lg 2xl:max-w-xl mb-6 lg:mb-8 pb-0">
                            {activeProject.description}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Right/Bottom: Scrollable Images */}
        <div className="w-full lg:w-1/2">
             {/* Spacer - reduced for smaller laptops, larger for xl+ */}
            <div className="h-[10vh] lg:h-[12vh] xl:h-[18vh] 2xl:h-[22vh]" />
            
            {portfolio.projects.map(project => (
                <ProjectImage key={project.id} project={project} setInView={setActiveId} />
            ))}
            
            <div className="h-[5vh]" />
        </div>

      </div>
    </section>
  );
};
