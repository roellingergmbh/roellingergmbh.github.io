import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { ParallaxSection } from '../components/ParallaxSection';
import { Portfolio } from '../components/Portfolio';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  ✏️ BEARBEITUNGSBEREICH - Hier können Sie Inhalte einfach ändern!          ║
// ║  Ändern Sie nur die Texte zwischen den Anführungszeichen "..."             ║
// ╚════════════════════════════════════════════════════════════════════════════╝

// -----------------------------------------------------------------------------
// 📄 STARTSEITEN-INFORMATION
// -----------------------------------------------------------------------------
//
// Diese Seite setzt verschiedene Komponenten zusammen, um die Startseite zu bilden.
// Die Inhalte der einzelnen Abschnitte werden in separaten Dateien bearbeitet.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 📁 WO FINDEN SIE DIE INHALTE ZUM BEARBEITEN?
// -----------------------------------------------------------------------------
//
// Jeder Abschnitt der Startseite hat seine eigene Datei im "components" Ordner:
//
// 🏠 Hero-Bereich (grosses Bild oben):     components/Hero.tsx
// 👥 Über Uns Bereich:                     components/About.tsx
// 🔧 Dienstleistungen:                     components/Services.tsx
// 🖼️  Parallax-Bild:                        components/ParallaxSection.tsx
// 📂 Portfolio/Projekte:                   components/Portfolio.tsx
// 💬 Kundenstimmen:                        components/Testimonials.tsx
// 📞 Kontaktformular:                      components/Contact.tsx
//
// Öffnen Sie die jeweilige Datei, um die Inhalte dieses Abschnitts zu ändern.
// Jede Datei hat ihren eigenen Bearbeitungsbereich am Anfang.
//
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// 🔢 REIHENFOLGE DER ABSCHNITTE
// -----------------------------------------------------------------------------
//
// Die Abschnitte erscheinen in folgender Reihenfolge auf der Startseite:
// 1. Hero (Willkommensbereich mit grossem Bild)
// 2. About (Über uns)
// 3. Services (Unsere Dienstleistungen)
// 4. ParallaxSection (Dekoratives Bild mit Parallax-Effekt)
// 5. Portfolio (Ausgewählte Projekte)
// 6. Testimonials (Kundenstimmen)
// 7. Contact (Kontaktformular)
//
// Um die Reihenfolge zu ändern, wenden Sie sich an einen Entwickler.
//
// -----------------------------------------------------------------------------

// ╔════════════════════════════════════════════════════════════════════════════╗
// ║  ⛔ AB HIER NICHTS MEHR ÄNDERN - Dies ist der technische Code             ║
// ╚════════════════════════════════════════════════════════════════════════════╝

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <ParallaxSection />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
};