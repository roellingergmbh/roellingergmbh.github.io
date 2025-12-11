import React, { useState, useRef, useEffect } from 'react';
import { Home, Leaf, Hammer, Trash2, Building2, Shovel, ArrowRight, ArrowUpRight, Wrench, Paintbrush, Shield, Truck, Users, Settings, Sparkles, TreeDeciduous, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';
import { services } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

// Icon mapping - converts string names to actual icon components
const iconMap: Record<string, LucideIcon> = {
  home: Home,
  leaf: Leaf,
  hammer: Hammer,
  trash: Trash2,
  building: Building2,
  shovel: Shovel,
  wrench: Wrench,
  paintbrush: Paintbrush,
  shield: Shield,
  truck: Truck,
  users: Users,
  settings: Settings,
  sparkles: Sparkles,
  tree: TreeDeciduous,
};

// Helper function to get icon component from string name
const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName.toLowerCase()] || Home;
};

interface ServiceData {
  id: number;
  title: string;
  label: string;
  description: string;
  icon: string;
  image: string;
}

interface ProcessedService {
  id: number;
  title: string;
  label: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

// Process services to convert icon strings to components
const processedServices: ProcessedService[] = services.items.map(service => ({
  ...service,
  icon: getIcon(service.icon),
}));

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(1);

  return (
    <section id="services" className="py-24 md:py-32 bg-stone-100 bg-dots-dark relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 md:pl-8">
           <span className="text-brand-green font-bold uppercase tracking-[0.2em] text-xs mb-6 block flex items-center gap-2">
              <span className="w-8 h-[1px] bg-brand-green"></span>
              {services.sectionLabel}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-primary leading-[1.1]">
              {services.sectionTitleLine1} <br/>
              <span className="text-stone-400">{services.sectionTitleLine2}</span>
            </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Service List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            {processedServices.map((service) => (
              <ServiceItem 
                key={service.id} 
                service={service} 
                isActive={activeService === service.id}
                onActivate={() => setActiveService(service.id)}
              />
            ))}
          </div>

          {/* Right Column: Sticky Image Preview (Desktop) */}
          <div className="hidden lg:block w-1/2 relative">
             <div className="sticky top-[20vh] w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={processedServices.find(s => s.id === activeService)?.image} 
                      alt="Service Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Overlay Content */}
                    <div className="absolute bottom-0 left-0 p-10 text-white">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                            {React.createElement(processedServices.find(s => s.id === activeService)!.icon, { className: "w-6 h-6" })}
                          </div>
                          <span className="uppercase tracking-widest text-sm font-medium">
                            {processedServices.find(s => s.id === activeService)?.label}
                          </span>
                      </div>
                      <h3 className="text-3xl font-serif">
                          {processedServices.find(s => s.id === activeService)?.title}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface ServiceItemProps {
  service: ProcessedService;
  isActive: boolean;
  onActivate: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, isActive, onActivate }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Scroll the item into view when it becomes active on mobile
  useEffect(() => {
    if (isActive && isMobile && itemRef.current) {
      // Wait for the expand animation to complete (300ms) + buffer
      setTimeout(() => {
        if (!itemRef.current) return;
        
        const navbarHeight = 80; // Fixed navbar offset
        const elementRect = itemRef.current.getBoundingClientRect();
        const elementTop = elementRect.top + window.scrollY;
        const targetScrollPosition = elementTop - navbarHeight;
        
        // Only scroll if the element's top is above the visible area (accounting for navbar)
        if (elementRect.top < navbarHeight) {
          window.scrollTo({
            top: targetScrollPosition,
            behavior: 'smooth'
          });
        }
      }, 350);
    }
  }, [isActive, isMobile]);

  return (
    <div
      ref={itemRef}
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={`group relative p-6 md:p-8 rounded-xl transition-all duration-500 cursor-pointer overflow-hidden border border-transparent ${isActive ? 'bg-white shadow-xl border-stone-100' : 'hover:bg-white hover:shadow-lg'}`}
    >
      <div className="flex justify-between items-start relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-4">
             <span className={`text-sm font-bold tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-brand-green' : 'text-stone-400'}`}>
               0{service.id}
             </span>
             <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-300 ${isActive ? 'text-primary' : 'text-primary/60'}`}>
               {service.title}
             </h3>
          </div>
          
          <motion.div 
            initial={false}
            animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-secondary/80 text-lg leading-relaxed mb-6 font-light max-w-xl">
              {service.description}
            </p>
            
            
            {/* Mobile Image (Visible only on small screens when active) */}
            <div className="lg:hidden mt-6 rounded-lg overflow-hidden h-48 w-full relative">
               <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className={`p-3 rounded-full transition-all duration-300 ${isActive ? 'bg-brand-green text-white rotate-45' : 'bg-stone-200 text-stone-500'}`}>
           <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
