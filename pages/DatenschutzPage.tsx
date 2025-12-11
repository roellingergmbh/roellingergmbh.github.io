import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, User, FileText, Clock, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';
import { datenschutz } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

// Detect iOS for performance optimizations
// On iOS, ALL browsers use WebKit engine (Apple requires this)
const getIsIOS = () => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

interface SectionData {
  id: string;
  number: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const sections: SectionData[] = [
  {
    id: datenschutz.section01.id,
    number: datenschutz.section01.number,
    icon: User,
    title: datenschutz.section01.title,
    content: (
      <>
        <p className="mb-4">{datenschutz.section01.intro}</p>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p className="text-white font-semibold text-lg mb-3">{datenschutz.companyName}</p>
          <p className="text-white/70">
            {datenschutz.companyStreet}<br />
            {datenschutz.companyCity}<br />
            {datenschutz.companyCountry}
          </p>
          <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
            <p>
              <span className="text-white/50 text-sm">{datenschutz.emailLabel} </span>
              <a href={`mailto:${datenschutz.emailAddress}`} className="text-brand-green hover:text-brand-green/80 transition-colors">
                {datenschutz.emailAddress}
              </a>
            </p>
            <p>
              <span className="text-white/50 text-sm">{datenschutz.phoneLabel} </span>
              <a href={`tel:${datenschutz.phoneLink}`} className="text-brand-green hover:text-brand-green/80 transition-colors">
                {datenschutz.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </>
    )
  },
  {
    id: datenschutz.section02.id,
    number: datenschutz.section02.number,
    icon: FileText,
    title: datenschutz.section02.title,
    content: (
      <>
        <p className="mb-4">{datenschutz.section02.text}</p>
        <ul className="space-y-2 mb-4">
          {datenschutz.section02.dataCollected.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-2 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>{datenschutz.section02.purposeText}</p>
      </>
    )
  },
  {
    id: datenschutz.section03.id,
    number: datenschutz.section03.number,
    icon: Clock,
    title: datenschutz.section03.title,
    content: (
      <p>{datenschutz.section03.text}</p>
    )
  },
  {
    id: datenschutz.section04.id,
    number: datenschutz.section04.number,
    icon: Mail,
    title: datenschutz.section04.title,
    content: (
      <>
        <p className="mb-4">{datenschutz.section04.text}</p>
        <div className="bg-white/5 rounded-xl p-6 border border-white/10">
          <p>
            <span className="text-white/50 text-sm">{datenschutz.emailLabel} </span>
            <a href={`mailto:${datenschutz.emailAddress}`} className="text-brand-green hover:text-brand-green/80 transition-colors">
              {datenschutz.emailAddress}
            </a>
          </p>
          <p className="mt-2">
            <span className="text-white/50 text-sm">{datenschutz.phoneLabel} </span>
            <a href={`tel:${datenschutz.phoneLink}`} className="text-brand-green hover:text-brand-green/80 transition-colors">
              {datenschutz.phoneDisplay}
            </a>
          </p>
        </div>
      </>
    )
  }
];

export const DatenschutzPage: React.FC = () => {
  const [isIOS] = useState(getIsIOS);
  const { scrollY } = useScroll();
  
  // Disable parallax on iOS for better performance
  const heroY = useTransform(scrollY, [0, 500], isIOS ? [0, 0] : [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], isIOS ? [1, 1] : [1, 0.3]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-stone-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        {/* Background with parallax */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
          <div className="absolute inset-0 bg-dots-light opacity-30" />
          
          {/* Abstract gradient blobs - hidden on mobile for iOS performance */}
          <div className="hidden md:block absolute top-1/3 -left-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]" />
          <div className="hidden md:block absolute bottom-0 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 md:px-12 pb-12 pt-32"
        >
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-white/60 hover:text-brand-green transition-colors mb-8 group"
            >
              <span className="p-2 rounded-full border border-white/20 group-hover:border-brand-green/50 transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              </span>
              <span className="text-sm uppercase tracking-[0.2em] font-medium">{datenschutz.backLinkText}</span>
            </Link>
          </motion.div>

          {/* Title */}
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block text-brand-green text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-brand-green"></span>
              {datenschutz.sectionLabel}
            </motion.span>
            
            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-4">
              <TextReveal delay={0.4} animateOnMount>{datenschutz.pageTitle}</TextReveal>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl text-white/60 font-light max-w-2xl"
            >
              {datenschutz.pageSubtitle}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 md:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-stone-900 bg-dots-light" />
        {/* Large blur decoration - hidden on mobile for iOS performance */}
        <div className="hidden md:block absolute top-1/4 right-0 w-1/3 h-1/2 bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <motion.article
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative scroll-mt-32"
              >
                {/* backdrop-blur disabled on mobile for iOS performance */}
                <div className="relative bg-stone-800/95 md:bg-white/5 backdrop-blur-none md:backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-stone-800 md:hover:bg-white/[0.07] transition-all duration-500 hover:border-brand-green/20">
                  {/* Section Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-green/60 font-mono text-sm">{section.number}</span>
                      <div className="p-2.5 bg-brand-green/20 rounded-xl group-hover:bg-brand-green/30 transition-colors duration-300">
                        <section.icon className="w-5 h-5 text-brand-green" />
                      </div>
                    </div>
                    <h2 className="font-serif text-xl md:text-2xl text-white pt-0.5">{section.title}</h2>
                  </div>
                  
                  {/* Content */}
                  <div className="text-white/70 leading-relaxed space-y-4 pl-0 md:pl-16">
                    {section.content}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 max-w-3xl mx-auto"
          >
            <span className="inline-block px-6 py-3 rounded-full border border-white/10 text-white/40 text-sm">
              {datenschutz.lastUpdated}
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};