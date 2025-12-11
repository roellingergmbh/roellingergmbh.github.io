import React from 'react';
import { Link } from 'react-router-dom';
import { footer } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary bg-dots-light text-white/60 py-20 font-sans">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <Link to="/" className="block">
              <h3 className="font-serif text-3xl text-white mb-6 hover:text-brand-green transition-colors">{footer.companyName}</h3>
            </Link>
            <div className="max-w-xs font-light">
              <p className="text-white/90 text-lg italic mb-2 font-serif">{footer.tagline}</p>
              <p className="text-white/60 text-sm">
                {footer.description}
              </p>
            </div>
          </div>
          
          <div className="flex gap-16 text-sm">
            <div className="flex flex-col gap-4">
              <span className="text-brand-green font-bold uppercase tracking-widest text-xs">{footer.contactLabel}</span>
              <span className="hover:text-brand-green transition-colors">{footer.address}</span>
              <a href={`mailto:${footer.email}`} className="hover:text-brand-green transition-colors">{footer.email}</a>
              <a href={`tel:${footer.phoneLink}`} className="hover:text-brand-green transition-colors">{footer.phoneDisplay}</a>
            </div>
            <div className="flex flex-col gap-4">
               <span className="text-brand-green font-bold uppercase tracking-widest text-xs">{footer.legalLabel}</span>
              <Link to="/impressum" className="hover:text-white transition-colors">{footer.impressumText}</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">{footer.datenschutzText}</Link>
            </div>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-xs flex justify-between">
          <span>&copy; {new Date().getFullYear()} {footer.companyName}</span>
          <span>{footer.designCredit}</span>
        </div>
      </div>
    </footer>
  );
};
