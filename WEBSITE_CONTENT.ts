// ╔════════════════════════════════════════════════════════════════════════════╗
// ║                                                                            ║
// ║  🌐 WEBSITE INHALT - Alle Texte und Inhalte an einem Ort                   ║
// ║                                                                            ║
// ║  Diese Datei enthält ALLE bearbeitbaren Inhalte der Website.               ║
// ║  Ändern Sie nur die Texte zwischen den Anführungszeichen "..."             ║
// ║                                                                            ║
// ║  📝 ANLEITUNG:                                                             ║
// ║  - Texte ändern: Ersetzen Sie Text zwischen "..." mit Ihrem neuen Text     ║
// ║  - Bilder ändern: Ersetzen Sie die URL zwischen "..." mit der neuen URL    ║
// ║  - Listen erweitern: Kopieren Sie einen Block { ... }, und fügen Sie ihn   ║
// ║    am Ende der Liste ein (vor der letzten ] Klammer)                       ║
// ║  - Einträge löschen: Entfernen Sie den ganzen Block von { bis },           ║
// ║                                                                            ║
// ║  ⚠️  WICHTIG: Ändern Sie NICHT die Struktur der Datei!                     ║
// ║                                                                            ║
// ╚════════════════════════════════════════════════════════════════════════════╝


// ============================================================================
// 🏠 NAVIGATION & HEADER
// ============================================================================
// Die Navigation erscheint oben auf jeder Seite

export const navigation = {
  // Der alternative Text für das Logo-Bild (für Barrierefreiheit)
  logoAltText: "Röllinger",

  // Der Firmenname neben dem Logo
  companyName: "Röllinger GmbH",

  // -----------------------------------------------------------------------------
  // 📍 NAVIGATIONS-MENÜ
  // -----------------------------------------------------------------------------
  // Die Menüpunkte in der Navigation
  // - "name": Der angezeigte Text im Menü
  // - "href": Der Bereich der Seite (nicht ändern, ausser Sie wissen was Sie tun)
  //
  // ➕ NEUEN MENÜPUNKT HINZUFÜGEN:
  //    Kopieren Sie eine Zeile { name: "...", href: "..." }, und fügen Sie sie ein
  // ❌ MENÜPUNKT ENTFERNEN:
  //    Löschen Sie die ganze Zeile { name: "...", href: "..." },
  links: [
    { name: "Start", href: "home" },
    { name: "Über Uns", href: "about" },
    { name: "Services", href: "services" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Kontakt", href: "contact" },
  ],

  // Der Text auf dem "Kontakt"-Button (Desktop, rechts oben)
  ctaButtonText: "Anfrage",

  // Der Text auf dem "Kontakt"-Button im mobilen Menü
  mobileCtaButtonText: "Anfrage starten",
};


// ============================================================================
// 🎯 HERO BEREICH (Startseite oben)
// ============================================================================
// Der grosse Bereich ganz oben auf der Startseite mit Bild und Haupttext

export const hero = {
  // -----------------------------------------------------------------------------
  // 🖼️ HINTERGRUNDBILD
  // -----------------------------------------------------------------------------

  // Das grosse Bild im Hintergrund der Startseite
  // Ersetzen Sie die URL mit einem Link zu Ihrem Bild
  backgroundImage: "/hero.avif",

  // Beschreibung des Bildes (für Barrierefreiheit / Screenreader)
  imageDescription: "Moderne Schweizer Architektur",

  // -----------------------------------------------------------------------------
  // 📍 STANDORT-BADGE
  // -----------------------------------------------------------------------------

  // Der kleine Text oben (zeigt Ihren Standort)
  locationBadge: "Baar, Zug — Zentralschweiz",

  // -----------------------------------------------------------------------------
  // 📝 HAUPTTEXTE
  // -----------------------------------------------------------------------------

  // Die grosse Überschrift (wird in 2 Zeilen angezeigt)
  taglinePart1: "Wir packen",
  taglinePart2: "einfach an.",

  // Der Slogan unter der Überschrift (kursiv)
  subtitle: "Für alles, was Ihr Zuhause braucht.",

  // Die Beschreibung darunter
  description: "",

  // -----------------------------------------------------------------------------
  // 🔽 SCROLL-HINWEIS
  // -----------------------------------------------------------------------------

  // Der Text beim Pfeil zum Runterscrollen
  scrollHint: "Entdecken",
};


// ============================================================================
// 🖼️ PARALLAX SECTION (Bild mit Zitat)
// ============================================================================
// Der grosse Parallax-Bereich mit Bild und inspirierendem Zitat

export const parallaxSection = {
  // Das Hintergrundbild für den Parallax-Effekt
  backgroundImage: "/haus_2.jpg",

  // Beschreibung des Bildes (für Barrierefreiheit / Screenreader)
  imageDescription: "Modernes Schweizer Haus",

  // Das Zitat, das über dem Bild angezeigt wird
  quote: "Weil Ihr Zuhause mehr ist als nur ein Ort.<br />Es ist Ihr Mittelpunkt.",
};


// ============================================================================
// 👥 ÜBER UNS (About Section)
// ============================================================================
// Der "Über Uns" Bereich mit Team-Info und Philosophie

export const about = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITTS-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Das kleine Label oben links
  sectionLabel: "Über Uns",

  // Die grosse Hauptüberschrift (Zeile 1)
  mainHeadingLine1: "Nicht nur verwalten.",

  // Die grosse Hauptüberschrift (Zeile 2, wird grün/farbig dargestellt)
  mainHeadingLine2: "Gestalten.",

  // Der Beschreibungstext unter der Hauptüberschrift
  mainDescription: "Wir sind die neue Generation von Facility Services. Schneller, direkter und mit dem Blick für das Wesentliche.",

  // -----------------------------------------------------------------------------
  // 📊 STATISTIKEN / KENNZAHLEN
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE STATISTIK HINZUFÜGEN:
  //    Kopieren Sie einen Block { value: "...", label: "..." }, und fügen Sie ihn ein
  // ❌ STATISTIK ENTFERNEN:
  //    Löschen Sie den ganzen Block { value: "...", label: "..." },
  statistics: [
    {
      value: "20+",
      label: "Jahre Erfahrung",
    },
    {
      value: "100%",
      label: "Inhabergeführt",
    },
  ],

  // -----------------------------------------------------------------------------
  // 👥 TEAM-KARTE
  // -----------------------------------------------------------------------------

  // Titel der Team-Karte
  teamCardTitle: "Die Köpfe dahinter",

  // Beschreibungstext in der Team-Karte
  teamCardDescription: "Wir sind keine klassische Verwaltung, die vom Schreibtisch aus delegiert. Wir sind Macher. Wir glauben an direkte Kommunikation, Handschlagqualität und daran, dass man Qualität sehen muss.",

  // -----------------------------------------------------------------------------
  // 👤 GRÜNDER / TEAM-MITGLIEDER
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUES TEAM-MITGLIED HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  // ❌ TEAM-MITGLIED ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   name: "Max Mustermann",       ← Name der Person
  //   role: "Geschäftsleitung",     ← Rolle/Position
  //   image: "https://...",         ← Link zum Profilbild
  //   description: "Kurze Bio...",  ← Kurze Beschreibung
  // },
  founders: [
    {
      name: "Besim Mani",
      role: "Geschäftsleitung",
      image: "/besim.jpeg",
      description: "Der Stratege mit dem Blick für das grosse Ganze.",
    },
    {
      name: "Altin Mani",
      role: "Geschäftsleitung",
      image: "/altin.jpeg",
      description: "Der Macher mit Fokus auf Perfektion und Details.",
    },
  ],

  // -----------------------------------------------------------------------------
  // 🎯 PHILOSOPHIE-KARTEN (Scroll-Bereich)
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE PHILOSOPHIE-KARTE HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  //    Vergessen Sie nicht, die "id" zu erhöhen!
  // ❌ PHILOSOPHIE-KARTE ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   id: 1,                        ← Einzigartige Nummer (1, 2, 3, ...)
  //   title: "Titel",               ← Überschrift der Karte
  //   description: "Beschreibung",  ← Ausführliche Beschreibung
  //   image: "https://...",         ← Link zum Bild
  // },
  features: [
    {
      id: 1,
      title: "Service & Vertrauen",
      description: "Als Familienunternehmen stehen wir für direkte Kommunikation. Facility Management bedeutet für uns: Wir kümmern uns, als wäre es unser eigenes Zuhause.",
      image: "/vertrauen.jpeg",
    },
    {
      id: 2,
      title: "Handwerk & Präzision",
      description: "Unsere Wurzeln liegen im soliden Schweizer Handwerk. Bei Renovationen und Umbauten setzen wir auf langlebige Materialien und Detailgenauigkeit, die man spüren kann.",
      image: "/handwerk.jpeg",
    },
    {
      id: 3,
      title: "Natur & Umgebung",
      description: "Ein Garten ist mehr als Grünfläche. Er ist Rückzugsort. Wir pflegen und gestalten Aussenbereiche so, dass sie sich harmonisch in die Umgebung einfügen.",
      image: "/natur.jpeg",
    },
  ],

  // Das kleine Label auf jeder Karte (z.B. "01 — Philosophie")
  cardCategoryLabel: "Philosophie",

  // Der Text auf dem "Mehr erfahren" Button
  cardButtonText: "Mehr erfahren",
};


// ============================================================================
// 🛠️ DIENSTLEISTUNGEN (Services)
// ============================================================================
// Die Übersicht aller angebotenen Dienstleistungen

export const services = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITTS-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Das kleine Wort oben (Kategorie-Label)
  sectionLabel: "Unsere Expertise",

  // Die grosse Überschrift (Zeile 1)
  sectionTitleLine1: "Kompetenz in",

  // Die grosse Überschrift (Zeile 2, wird grau dargestellt)
  sectionTitleLine2: "jedem Bereich.",

  // Der Text auf dem "Details ansehen" Link bei jedem Service
  detailsButtonText: "Details ansehen",

  // -----------------------------------------------------------------------------
  // 🛠️ DIENSTLEISTUNGEN-LISTE
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE DIENSTLEISTUNG HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  //    Vergessen Sie nicht, die "id" zu erhöhen!
  // ❌ DIENSTLEISTUNG ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // 🎨 VERFÜGBARE ICONS:
  //    "home"       → Haus-Symbol
  //    "leaf"       → Blatt-Symbol (Natur/Garten)
  //    "hammer"     → Hammer-Symbol (Bau/Renovation)
  //    "trash"      → Papierkorb-Symbol (Entsorgung)
  //    "building"   → Gebäude-Symbol (Facility)
  //    "shovel"     → Schaufel-Symbol (Gartenarbeit)
  //    "wrench"     → Schraubenschlüssel (Reparatur)
  //    "paintbrush" → Pinsel-Symbol (Malerarbeiten)
  //    "shield"     → Schild-Symbol (Sicherheit)
  //    "truck"      → Lastwagen-Symbol (Transport)
  //    "users"      → Personen-Symbol (Team/Beratung)
  //    "settings"   → Zahnrad-Symbol (Technik)
  //    "sparkles"   → Sterne-Symbol (Reinigung)
  //    "tree"       → Baum-Symbol (Garten)
  //
  // STRUKTUR:
  // {
  //   id: 1,                         ← Einzigartige Nummer (1, 2, 3, ...)
  //   title: "Titel",                ← Name der Dienstleistung
  //   label: "Kurzbeschreibung",     ← Kleines Label (z.B. "24/7 Service")
  //   description: "Beschreibung...",← Ausführliche Beschreibung
  //   icon: "home",                  ← Symbol (siehe Liste oben)
  //   image: "https://...",          ← Link zum Bild
  // },
  items: [
    
    {
      id: 1,
      title: "Gartenpflege",
      label: "Grünflächen",
      description: "Kreative Gestaltung und nachhaltiger Unterhalt Ihrer Gartenanlagen. Wir verwandeln Aussenbereiche in lebendige Oasen, die zu jeder Jahreszeit Freude bereiten.",
      icon: "leaf",
      image: "/gartenpflege_2.jpeg",
    },
    {
      id: 2,
      title: "Umbauten",
      label: "Renovation",
      description: "Fachgerechte Planung und Ausführung von Umbau- und Renovationsprojekten. Wir begleiten Sie von der ersten Idee bis zur schlüsselfertigen Übergabe.",
      icon: "hammer",
      image: "/umbau.jpeg",
    },
    {
      id: 3,
      title: "Rückbau",
      label: "Entsorgung",
      description: "Sicherer Rückbau und umweltgerechte Entsorgung. Wir schaffen Platz für Neues und garantieren eine saubere, vorschriftsgemässe Trennung aller Materialien.",
      icon: "trash",
      image: "/rueckbau.jpeg",
    },
    {
      id: 4,
      title: "Hauswartung",
      label: "24/7 Service",
      description: "Umfassende Betreuung Ihrer Liegenschaften mit höchster Sorgfalt. Von der technischen Überwachung bis zur Reinigung sorgen wir für Werterhalt und gepflegte Atmosphäre – rund um die Uhr.",
      icon: "home",
      image: "/hauswartung.jpeg",
    },
  ],
};


// ============================================================================
// 🏗️ PORTFOLIO (Projekte)
// ============================================================================
// Die Übersicht der abgeschlossenen Projekte

export const portfolio = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITTS-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Das kleine Wort oben (Kategorie-Label)
  sectionLabel: "Portfolio",

  // Die grosse Überschrift des Abschnitts
  sectionTitle: "Einblicke",

  // Der Text auf dem "Case Study" Button
  caseStudyButtonText: "Case Study ansehen",

  // -----------------------------------------------------------------------------
  // 🔄 VORHER/NACHHER-VERGLEICH
  // -----------------------------------------------------------------------------

  // Der Text für das "Vorher"-Label im Slider
  beforeLabel: "Vorher",

  // Der Text für das "Nachher"-Label im Slider
  afterLabel: "Nachher",

  // -----------------------------------------------------------------------------
  // 🏗️ PROJEKTE-LISTE
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUES PROJEKT HINZUFÜGEN:
  //    Kopieren Sie einen Block und fügen Sie ihn am Ende vor ] ein
  //    Vergessen Sie nicht, die "id" zu erhöhen!
  // ❌ PROJEKT ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   id: 1,                    ← Einzigartige Nummer (1, 2, 3, ...)
  //   title: "Projekttitel",    ← Name des Projekts
  //   category: "Kategorie",    ← Art des Projekts (z.B. "Renovation", "Gartenbau")
  //   location: "Ort",          ← Standort des Projekts
  //   description: "Text...",   ← Kurze Beschreibung
  //   beforeImage: "https://...",← Link zum Vorher-Bild (optional, für Vergleich)
  //   image: "https://...",     ← Link zum Nachher-Bild
  // },
  projects: [
    {
      id: 1,
      title: "Balkonsanierung & Neubelag",
      category: "Aussenbereich / Renovation",
      location: "Zug",
      description: "Erneuerung des Balkonbodens: Rückbau des Altbestands und Verlegung neuer, witterungsbeständiger WPC-Dielen auf neuer Unterkonstruktion.",
      beforeImage: "/balkon_vorher.jpeg",
      image: "/balkon_nachher.jpeg",
    },
    {
      id: 2,
      title: "Heckenschnitt & Gartenunterhalt",
      category: "Gartenpflege",
      location: "Zug",
      description: "Fachgerechter Rückschnitt einer stark gewachsenen Hecke entlang des Gehwegs. Wiederherstellung einer sauberen Form und Pflege der angrenzenden Rasenfläche für ein gepflegtes Erscheinungsbild.",
      beforeImage: "/hecke_vorher.jpeg",
      image: "/hecke_nachher.jpeg",
    },
    {
      id: 3,
      title: "Rodung & Hangpflege",
      category: "Landschaftspflege",
      location: "Oberwil",
      description: "Komplette Freilegung eines steilen Hanges. Entfernung von dichtem Brombeergestrüpp und Wildwuchs zur Rückgewinnung der Nutzfläche und Aussicht auf den See.",
      beforeImage: "/garten_vorher.jpeg",
      image: "/garten_nachher.jpeg",
    },
    {
      id: 4,
      title: "Malerarbeiten Dachgeschoss",
      category: "Innenrenovation",
      location: "Thun",
      description: "Helle Neugestaltung eines Dachzimmers. Professioneller Weissanstrich der hölzernen Täferdecke und der Wände, um den Raum optisch zu vergrössern und eine moderne Wohnatmosphäre zu schaffen.",
      beforeImage: "/malen_boden_vorher.jpeg",
      image: "/malen_boden_nachher.jpeg"
    }
  ],
};


// ============================================================================
// 💬 KUNDENSTIMMEN (Testimonials)
// ============================================================================
// Bewertungen und Zitate von zufriedenen Kunden

export const testimonials = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITT-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Die kleine Überschrift über dem Haupttitel
  sectionLabel: "Referenzen",

  // Die Hauptüberschrift des Testimonials-Bereichs
  sectionTitle: "Was unsere Kunden sagen",

  // -----------------------------------------------------------------------------
  // 💬 KUNDENSTIMMEN-LISTE
  // -----------------------------------------------------------------------------
  //
  // ➕ NEUE KUNDENSTIMME HINZUFÜGEN:
  //    Kopieren Sie einen Block { quote: "...", author: "..." }, und fügen Sie ihn ein
  // ❌ KUNDENSTIMME ENTFERNEN:
  //    Löschen Sie den ganzen Block von { bis },
  //
  // STRUKTUR:
  // {
  //   quote: "Das Zitat des Kunden...",  ← Die Bewertung/das Zitat
  //   author: "Kundenname",              ← Name des Kunden oder der Firma
  // },
  items: [
    {
      quote: "Eine unglaubliche Transformation unseres Gartens. Das Team war professionell und pünktlich.",
      author: "Familie Hermann",
    },
    {
      quote: "Die Renovation wurde genau nach unseren Vorstellungen umgesetzt. Sehr empfehlenswert.",
      author: "Johannes Pfister",
    },
    {
      quote: "Zuverlässiges Facility Management. Wir müssen uns um nichts mehr kümmern.",
      author: "Confido Immobilien",
    },
    {
      quote: "Die Zusammenarbeit war hervorragend. Sehr professionell und effizient.",
      author: "Lydia Gloor",
    },
    {
      quote: "Wir arbeiten seit Jahren mit der Röllinger GmbH zusammen und sind sehr zufrieden.",
      author: "Meschenmoser Immo GmbH",
    },
  ],
};


// ============================================================================
// 📧 KONTAKT (Contact Form)
// ============================================================================
// Das Kontaktformular und dessen Beschriftungen

export const contact = {
  // -----------------------------------------------------------------------------
  // 📋 ABSCHNITT-ÜBERSCHRIFTEN
  // -----------------------------------------------------------------------------

  // Die Hauptüberschrift des Kontakt-Bereichs
  sectionTitle: "Starten wir ein Projekt.",

  // Der Beschreibungstext unter der Überschrift
  sectionSubtitle: "Wir freuen uns auf Ihre Anfrage. Egal ob Renovation oder Unterhalt.",

  // -----------------------------------------------------------------------------
  // 📝 FORMULAR-BESCHRIFTUNGEN
  // -----------------------------------------------------------------------------

  // Die Beschriftung für das Namensfeld
  nameLabel: "Name",

  // Der Platzhaltertext im Namensfeld
  namePlaceholder: "Ihr Name",

  // Die Beschriftung für das E-Mail-Feld
  emailLabel: "Email",

  // Der Platzhaltertext im E-Mail-Feld
  emailPlaceholder: "ihre@email.ch",

  // Die Beschriftung für das Nachrichtenfeld
  messageLabel: "Nachricht",

  // Der Platzhaltertext im Nachrichtenfeld
  messagePlaceholder: "Wie können wir helfen?",

  // Der Text auf dem Absenden-Button
  submitButtonText: "Absenden",
};


// ============================================================================
// 🦶 FOOTER (Fusszeile)
// ============================================================================
// Der Fussbereich der Website mit Kontaktdaten und Links

export const footer = {
  // -----------------------------------------------------------------------------
  // 🏢 FIRMEN-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Der Firmenname (erscheint gross im Footer)
  companyName: "Röllinger GmbH",

  // Der Slogan unter dem Firmennamen (kursiv)
  tagline: "Für alles, was Ihr Zuhause braucht.",

  // Die Beschreibung der Firma
  description: "Ihr Partner für Immobilien, Garten und Unterhalt in der Zentralschweiz.",

  // -----------------------------------------------------------------------------
  // 📞 KONTAKT-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Die Überschrift für den Kontakt-Bereich
  contactLabel: "Kontakt",

  // Die Adresse der Firma
  address: "Pilatusstrasse 4, 6340 Baar",

  // Die E-Mail-Adresse
  email: "info@roellinger.ch",

  // Die Telefonnummer (wie sie angezeigt wird)
  phoneDisplay: "076 511 21 23",

  // Die Telefonnummer für den Anruf-Link (ohne Leerzeichen, mit Ländercode)
  phoneLink: "+41765112123",

  // -----------------------------------------------------------------------------
  // ⚖️ RECHTLICHE LINKS
  // -----------------------------------------------------------------------------

  // Die Überschrift für den Rechtliches-Bereich
  legalLabel: "Rechtliches",

  // Der Text für den Impressum-Link
  impressumText: "Impressum",

  // Der Text für den Datenschutz-Link
  datenschutzText: "Datenschutz",

  // -----------------------------------------------------------------------------
  // 📝 FUSSZEILE
  // -----------------------------------------------------------------------------

  // Der Design-Hinweis am Seitenende
  designCredit: "Designed with Organic Modernity",
};


// ============================================================================
// 📜 IMPRESSUM (Rechtliche Angaben)
// ============================================================================
// Alle Inhalte der Impressum-Seite

export const impressum = {
  // -----------------------------------------------------------------------------
  // 📄 SEITEN-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Der Text für den "Zurück"-Link
  backLinkText: "Zurück zur Startseite",

  // Die kleine Beschriftung über dem Titel
  sectionLabel: "Rechtliches",

  // Der Haupttitel der Seite
  pageTitle: "Impressum",

  // Der Untertitel unter dem Haupttitel
  pageSubtitle: "Angaben gemäss Art. 3 des Bundesgesetzes gegen den unlauteren Wettbewerb (UWG)",

  // Das Datum der letzten Aktualisierung (unten auf der Seite)
  lastUpdated: "Stand: Dezember 2025",

  // -----------------------------------------------------------------------------
  // 🏢 FIRMENANGABEN
  // -----------------------------------------------------------------------------

  // Der Titel der Firmenangaben-Karte
  companyCardTitle: "Firmenangaben",

  // Der Firmenname
  companyName: "Röllinger GmbH",

  // Die Strasse und Hausnummer
  companyStreet: "Pilatusstrasse 4",

  // Die PLZ und Stadt
  companyCity: "6340 Baar",

  // Das Land
  companyCountry: "Schweiz",

  // -----------------------------------------------------------------------------
  // 📞 KONTAKT
  // -----------------------------------------------------------------------------

  // Der Titel der Kontakt-Karte
  contactCardTitle: "Kontakt",

  // Die Beschriftung über der Telefonnummer
  phoneLabel: "Telefon",

  // Die Telefonnummer (wie sie angezeigt wird)
  phoneDisplay: "076 511 21 23",

  // Die Telefonnummer für den Anruf-Link (ohne Leerzeichen, mit Ländercode)
  phoneLink: "+41765112123",

  // Die Beschriftung über der E-Mail
  emailLabel: "E-Mail",

  // Die E-Mail-Adresse
  emailAddress: "info@roellinger.ch",

  // -----------------------------------------------------------------------------
  // 📋 HANDELSREGISTEREINTRAG
  // -----------------------------------------------------------------------------

  // Der Titel der Handelsregister-Karte
  registerCardTitle: "Registereintrag",

  // Die Handelsregister-Einträge (Beschriftung und Wert)
  //
  // ➕ NEUEN EINTRAG HINZUFÜGEN:
  //    Kopieren Sie eine Zeile { label: "...", value: "..." }, und fügen Sie sie ein
  // ❌ EINTRAG ENTFERNEN:
  //    Löschen Sie die ganze Zeile { label: "...", value: "..." },
  registerEntries: [
    { label: "Eingetragener Firmenname", value: "Röllinger GmbH" },
    { label: "Rechtsform", value: "Gesellschaft mit beschränkter Haftung (GmbH)" },
    { label: "Rechtssitz", value: "Baar, Kanton Zug" },
    { label: "Handelsregisteramt", value: "Kanton Zug" },
    { label: "Handelsregister-Nummer", value: "CH-170.4.023.391-4" },
    { label: "UID/MWST", value: "CHE-339.307.273" },
  ],

  // Die Beschriftung für das Eintragungsdatum
  registrationDateLabel: "Eintragungsdatum",

  // Das Eintragungsdatum
  registrationDateValue: "24.06.2025",

  // -----------------------------------------------------------------------------
  // 📜 FIRMENZWECK
  // -----------------------------------------------------------------------------

  // Der Titel der Firmenzweck-Karte
  purposeCardTitle: "Firmenzweck",

  // Die Absätze des Firmenzwecks
  purposeParagraph1: "Die Gesellschaft bezweckt die Erbringung von Dienstleistungen in den Bereichen Hauswartung, Gartenpflege, Umbauten, Renovationen und Abbrucharbeiten. Sie bezweckt zudem den Handel mit Immobilien, insbesondere den Erwerb, die Verwaltung, Vermittlung, Vermietung und Veräusserung von Liegenschaften in der Schweiz.",

  purposeParagraph2: "Die Gesellschaft kann zudem Tätigkeiten im Bereich Facility Management, Bauplanung sowie den Handel mit Waren und Materialien aller Art ausüben, insbesondere im Zusammenhang mit Bau-, Unterhalts- und Renovationsprojekten.",

  // -----------------------------------------------------------------------------
  // ⚠️ HAFTUNGSAUSSCHLUSS
  // -----------------------------------------------------------------------------

  // Der Titel der Haftungsausschluss-Karte
  disclaimerCardTitle: "Haftungsausschluss",

  // Haftung für Inhalte
  disclaimerContentTitle: "Haftung für Inhalte",
  disclaimerContentText: "Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.",

  // Haftung für Links
  disclaimerLinksTitle: "Haftung für Links",
  disclaimerLinksText: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.",

  // -----------------------------------------------------------------------------
  // ©️ URHEBERRECHT
  // -----------------------------------------------------------------------------

  // Der Titel der Urheberrecht-Karte
  copyrightCardTitle: "Urheberrecht",

  // Der Urheberrecht-Text
  copyrightText: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.",
};


// ============================================================================
// 🔒 DATENSCHUTZ (Privacy Policy)
// ============================================================================
// Vereinfachte Datenschutzerklärung für kleine Firmen mit Kontaktformular

export const datenschutz = {
  // -----------------------------------------------------------------------------
  // 📄 SEITEN-INFORMATIONEN
  // -----------------------------------------------------------------------------

  // Der Text für den "Zurück"-Link
  backLinkText: "Zurück zur Startseite",

  // Die kleine Beschriftung über dem Titel
  sectionLabel: "Rechtliches",

  // Der Haupttitel der Seite
  pageTitle: "Datenschutz",

  // Der Untertitel unter dem Haupttitel
  pageSubtitle: "Informationen zum Umgang mit Ihren Daten",

  // Das Datum der letzten Aktualisierung (unten auf der Seite)
  lastUpdated: "Stand: Dezember 2025",

  // -----------------------------------------------------------------------------
  // 🏢 VERANTWORTLICHER
  // -----------------------------------------------------------------------------

  // Der Firmenname
  companyName: "Röllinger GmbH",

  // Die Strasse und Hausnummer
  companyStreet: "Pilatusstrasse 4",

  // Die PLZ und Stadt
  companyCity: "6340 Baar",

  // Das Land
  companyCountry: "Schweiz",

  // Die E-Mail-Adresse
  emailAddress: "info@roellinger.ch",

  // Die Telefonnummer (wie sie angezeigt wird)
  phoneDisplay: "076 511 21 23",

  // Die Telefonnummer für den Anruf-Link (ohne Leerzeichen, mit Ländercode)
  phoneLink: "+41765112123",

  // Die Beschriftung für E-Mail
  emailLabel: "E-Mail:",

  // Die Beschriftung für Telefon
  phoneLabel: "Telefon:",

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 01 - VERANTWORTLICHER
  // -----------------------------------------------------------------------------

  section01: {
    id: "verantwortlicher",
    number: "01",
    title: "Verantwortlicher",
    intro: "Verantwortlich für die Datenbearbeitung auf dieser Website ist:",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 02 - KONTAKTFORMULAR
  // -----------------------------------------------------------------------------

  section02: {
    id: "kontaktformular",
    number: "02",
    title: "Kontaktformular",
    text: "Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:",
    dataCollected: [
      "Ihren Namen",
      "Ihre E-Mail-Adresse",
      "Ihre Nachricht",
    ],
    purposeText: "Diese Daten verwenden wir ausschliesslich, um Ihre Anfrage zu beantworten und mit Ihnen in Kontakt zu treten. Die Daten werden nicht für andere Zwecke verwendet oder an Dritte weitergegeben.",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 03 - SPEICHERUNG & LÖSCHUNG
  // -----------------------------------------------------------------------------

  section03: {
    id: "speicherung",
    number: "03",
    title: "Speicherung & Löschung",
    text: "Ihre Daten aus dem Kontaktformular werden nur so lange gespeichert, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist. Nach Abschluss der Kommunikation werden die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
  },

  // -----------------------------------------------------------------------------
  // 📝 ABSCHNITT 04 - KONTAKT FÜR DATENSCHUTZFRAGEN
  // -----------------------------------------------------------------------------

  section04: {
    id: "kontakt",
    number: "04",
    title: "Fragen zum Datenschutz",
    text: "Bei Fragen zu Ihren Daten oder zum Datenschutz können Sie uns jederzeit kontaktieren:",
  },

};

