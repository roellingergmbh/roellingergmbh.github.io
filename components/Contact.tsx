import React, { useState, FormEvent } from 'react';
import { contact } from '../WEBSITE_CONTENT';

// 📝 Inhalte bearbeiten: WEBSITE_CONTENT.ts

// ============================================================================
// 📧 WEB3FORMS SETUP - Anleitung für Kontaktformular
// ============================================================================
//
// Das Formular verwendet Web3Forms (kostenloser Service für Kontaktformulare).
//
// 🔧 EINRICHTUNG:
// 1. Gehen Sie zu https://web3forms.com
// 2. Geben Sie Ihre E-Mail-Adresse ein und klicken Sie auf "Create Access Key"
// 3. Überprüfen Sie Ihr E-Mail-Postfach - Sie erhalten Ihren Access Key per E-Mail
// 4. Ersetzen Sie "YOUR_ACCESS_KEY_HERE" unten mit Ihrem Access Key
//
// ✅ FERTIG! Das Formular sendet nun E-Mails an Ihre hinterlegte Adresse.
//
// 💡 TIPP: Web3Forms Free erlaubt 250 Nachrichten/Monat (5x mehr als Formspree's 50).
// ============================================================================

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "154582e8-cfab-4f08-ad61-c5ba0ade4729";

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-card bg-dots-dark py-32 rounded-t-[60px] md:rounded-t-[100px] mt-[-60px]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="font-serif text-5xl md:text-7xl text-primary mb-8">{contact.sectionTitle}</h2>
          <p className="font-sans text-xl text-secondary font-light">
            {contact.sectionSubtitle}
          </p>
        </div>

        {status === 'success' ? (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-green/20 rounded-full mb-6">
              <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-serif text-3xl text-primary mb-4">Vielen Dank!</h3>
            <p className="text-secondary text-lg mb-8">
              Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns in Kürze bei Ihnen.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-brand-green hover:text-primary transition-colors font-medium"
            >
              Weitere Nachricht senden →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
            {/* Hidden field for Web3Forms access key */}
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-secondary">{contact.nameLabel}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-stone-300 py-4 text-primary text-lg focus:outline-none focus:border-brand-green transition-colors"
                  placeholder={contact.namePlaceholder}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-secondary">{contact.emailLabel}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-stone-300 py-4 text-primary text-lg focus:outline-none focus:border-brand-green transition-colors"
                  placeholder={contact.emailPlaceholder}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-secondary">{contact.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-stone-300 py-4 text-primary text-lg focus:outline-none focus:border-brand-green transition-colors resize-none"
                placeholder={contact.messagePlaceholder}
              ></textarea>
            </div>
            
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-center">
                Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
              </div>
            )}
            
            <div className="pt-8 flex justify-center">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-12 py-4 bg-primary text-white rounded-full text-lg hover:bg-stone-800 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Wird gesendet...
                  </span>
                ) : (
                  contact.submitButtonText
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};