import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Phone, Mail, FileText, Scale, Shield, Copyright } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from '../components/ui/TextReveal';
import { impressum } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

// Detect iOS for performance optimizations
// On iOS, ALL browsers use WebKit engine (Apple requires this)
const getIsIOS = () => {
  if (typeof window === 'undefined') return false;
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

interface ContentCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  index: number;
}

const ContentCard: React.FC<ContentCardProps> = ({ icon: Icon, title, children, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    className="group relative h-full"
  >
    {/* backdrop-blur disabled on mobile for iOS performance - use solid bg fallback */}
    <div className="relative h-full bg-stone-800/95 md:bg-white/5 backdrop-blur-none md:backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 hover:bg-stone-800 md:hover:bg-white/10 transition-all duration-500 hover:border-brand-green/30">
      {/* Icon Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-brand-green/20 rounded-xl group-hover:bg-brand-green/30 transition-colors duration-300">
          <Icon className="w-6 h-6 text-brand-green" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-white">{title}</h2>
      </div>
      
      {/* Content */}
      <div className="text-white/70 leading-relaxed space-y-4">
        {children}
      </div>
    </div>
    
    {/* Decorative offset border */}
    <div className="absolute inset-0 border border-white/5 rounded-2xl -z-10 translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500" />
  </motion.div>
);

export const ImpressumPage: React.FC = () => {
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
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        {/* Background with parallax */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
          <div className="absolute inset-0 bg-dots-light opacity-30" />
          
          {/* Abstract gradient blobs - hidden on mobile for iOS performance */}
          <div className="hidden md:block absolute top-1/4 -right-32 w-96 h-96 bg-brand-green/10 rounded-full blur-[120px]" />
          <div className="hidden md:block absolute bottom-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
        </motion.div>
        
        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-6 md:px-12 pb-16 pt-32"
        >
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-3 text-white/60 hover:text-brand-green transition-colors mb-12 group"
            >
              <span className="p-2 rounded-full border border-white/20 group-hover:border-brand-green/50 transition-colors">
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              </span>
              <span className="text-sm uppercase tracking-[0.2em] font-medium">{impressum.backLinkText}</span>
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
              {impressum.sectionLabel}
            </motion.span>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-6">
              <TextReveal delay={0.4} animateOnMount>{impressum.pageTitle}</TextReveal>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-white/60 font-light max-w-2xl"
            >
              {impressum.pageSubtitle}
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="relative py-20 md:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-stone-900 bg-dots-light" />
        {/* Large blur decoration - hidden on mobile for iOS performance */}
        <div className="hidden md:block absolute top-0 left-0 w-1/3 h-1/2 bg-brand-green/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {/* Company Information */}
            <ContentCard icon={Building2} title={impressum.companyCardTitle} index={0}>
              <p className="text-lg">
                <span className="text-white font-semibold text-xl block mb-3">{impressum.companyName}</span>
                {impressum.companyStreet}<br />
                {impressum.companyCity}<br />
                {impressum.companyCountry}
              </p>
            </ContentCard>

            {/* Contact */}
            <ContentCard icon={Phone} title={impressum.contactCardTitle} index={1}>
              <p>
                <span className="text-white/50 text-sm uppercase tracking-wider block mb-1">{impressum.phoneLabel}</span>
                <a href={`tel:${impressum.phoneLink}`} className="text-brand-green hover:text-brand-green/80 transition-colors text-lg">
                  {impressum.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-white/50 text-sm uppercase tracking-wider block mb-1">{impressum.emailLabel}</span>
                <a href={`mailto:${impressum.emailAddress}`} className="text-brand-green hover:text-brand-green/80 transition-colors text-lg">
                  {impressum.emailAddress}
                </a>
              </p>
            </ContentCard>

            {/* Commercial Register - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              {/* backdrop-blur disabled on mobile for iOS performance */}
              <div className="relative bg-stone-800/95 md:bg-gradient-to-br md:from-white/10 md:to-white/5 backdrop-blur-none md:backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-brand-green/20 rounded-xl">
                    <FileText className="w-6 h-6 text-brand-green" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-white">{impressum.registerCardTitle}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {impressum.registerEntries.map((item, index) => (
                    <div key={index} className="border-l-2 border-brand-green/30 pl-4">
                      <span className="text-white/50 text-xs uppercase tracking-wider block mb-1">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="text-white/50 text-xs uppercase tracking-wider block mb-1">{impressum.registrationDateLabel}</span>
                  <span className="text-white font-medium">{impressum.registrationDateValue}</span>
                </div>
              </div>
            </motion.div>

            {/* Purpose */}
            <ContentCard icon={Scale} title={impressum.purposeCardTitle} index={3}>
              <p>
                {impressum.purposeParagraph1}
              </p>
              <p>
                {impressum.purposeParagraph2}
              </p>
            </ContentCard>

            {/* Disclaimer */}
            <ContentCard icon={Shield} title={impressum.disclaimerCardTitle} index={4}>
              <div>
                <h3 className="text-white font-medium mb-2">{impressum.disclaimerContentTitle}</h3>
                <p className="text-sm">
                  {impressum.disclaimerContentText}
                </p>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">{impressum.disclaimerLinksTitle}</h3>
                <p className="text-sm">
                  {impressum.disclaimerLinksText}
                </p>
              </div>
            </ContentCard>

            {/* Copyright - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2"
            >
              {/* backdrop-blur disabled on mobile for iOS performance */}
              <div className="relative bg-stone-800/95 md:bg-white/5 backdrop-blur-none md:backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-green/20 rounded-xl">
                    <Copyright className="w-6 h-6 text-brand-green" />
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-white">{impressum.copyrightCardTitle}</h2>
                </div>
                
                <p className="text-white/70 leading-relaxed">
                  {impressum.copyrightText}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-16"
          >
            <span className="inline-block px-6 py-3 rounded-full border border-white/10 text-white/40 text-sm">
              {impressum.lastUpdated}
            </span>
          </motion.div>
        </div>
      </section>
    </main>
  );
};