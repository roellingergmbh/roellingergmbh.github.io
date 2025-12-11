import React from 'react';
import { Outlet } from 'react-router-dom';
import { SmoothScroll } from './SmoothScroll';
import { CustomCursor } from './ui/CustomCursor';
import { Noise } from './ui/Noise';
import { Preloader } from './ui/Preloader';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <SmoothScroll>
      <Preloader />
      <div className="min-h-screen bg-page text-primary selection:bg-brand-green selection:text-primary font-sans">
        <CustomCursor />
        <Noise />
        <Navigation />
        
        <Outlet />

        <Footer />
      </div>
    </SmoothScroll>
  );
};