# 🌐 Website Inhalt Bearbeiten - Anleitung

## ✨ Das Wichtigste zuerst

**Du musst nur EINE einzige Datei bearbeiten:**

📁 **[`WEBSITE_CONTENT.ts`](WEBSITE_CONTENT.ts)**

Diese Datei enthält **ALLE** Texte, Bilder und Inhalte der gesamten Website!

> 💡 **Vergiss alles andere** – alle Änderungen passieren in dieser einen Datei.

---

## 📖 Inhaltsverzeichnis von WEBSITE_CONTENT.ts

Die Datei ist übersichtlich in Abschnitte unterteilt:

| Zeile | Abschnitt | Was du dort findest |
|-------|-----------|---------------------|
| ~25 | 🏠 `navigation` | Menüpunkte, Firmenname, Logo |
| ~64 | 🎯 `hero` | Startbild, Hauptüberschrift, Slogan |
| ~111 | 👥 `about` | Über uns, Team, Statistiken, Philosophie |
| ~239 | 🛠️ `services` | Alle Dienstleistungen |
| ~349 | 🏗️ `portfolio` | Referenzprojekte |
| ~432 | 💬 `testimonials` | Kundenstimmen |
| ~491 | 📧 `contact` | Kontaktformular-Texte |
| ~534 | 🦶 `footer` | Fusszeile, Kontaktdaten |
| ~594 | 📜 `impressum` | Impressum-Seite |
| ~727 | 🔒 `datenschutz` | Datenschutz-Seite |

---

## 🎯 Goldene Regeln

### ✅ Das darfst du tun:

1. **Texte ändern** – zwischen den Anführungszeichen `"..."`
2. **Neue Einträge hinzufügen** – durch Kopieren bestehender Blöcke
3. **Einträge löschen** – ganze `{ ... },` Blöcke entfernen

### ❌ Das darfst du NICHT tun:

1. ~~Die Anführungszeichen `"` löschen~~
2. ~~Kommas `,` oder Klammern `{ }` entfernen~~
3. ~~Variablennamen ändern (z.B. `title:` oder `email:`)~~
4. ~~Code ausserhalb von `"..."` bearbeiten~~

---

## 📝 Schritt-für-Schritt Anleitung

### Schritt 1: Datei öffnen
Öffne **[`WEBSITE_CONTENT.ts`](WEBSITE_CONTENT.ts)** in deinem Editor (z.B. VS Code).

### Schritt 2: Text finden
Nutze `Ctrl + F` (Windows) oder `Cmd + F` (Mac) und suche nach dem Text, den du ändern möchtest.

### Schritt 3: Nur den Text ändern

```javascript
// VORHER:
phoneDisplay: "076 511 21 23",

// NACHHER:
phoneDisplay: "079 123 45 67",
```

⚠️ **Wichtig:** Nur den Text zwischen `"..."` ändern!

### Schritt 4: Speichern
Drücke `Ctrl + S` (Windows) oder `Cmd + S` (Mac).

---

## 💡 Häufige Aufgaben mit Beispielen

### 📞 Telefonnummer ändern

**Suche nach:** `phoneDisplay` oder `phoneLink`

```javascript
// Im footer-Bereich (ca. Zeile 562):
phoneDisplay: "076 511 21 23",      // ← Angezeigte Nummer
phoneLink: "+41765112123",          // ← Für Anruf-Button (ohne Leerzeichen)

// Ändern zu:
phoneDisplay: "079 123 45 67",
phoneLink: "+41791234567",
```

> ⚠️ Ändere BEIDE Werte!

---

### 📧 E-Mail-Adresse ändern

**Suche nach:** `email`

```javascript
// Im footer-Bereich (ca. Zeile 559):
email: "info@roellinger.ch",

// Ändern zu:
email: "kontakt@roellinger.ch",
```

---

### 🏠 Adresse ändern

**Suche nach:** `address`

```javascript
// Im footer-Bereich (ca. Zeile 556):
address: "Pilatusstrasse 4, 6340 Baar",

// Ändern zu:
address: "Neuestrasse 10, 6300 Zug",
```

---

### ➕ Neue Dienstleistung hinzufügen

**Gehe zu:** Abschnitt `services` → `items` (ca. Zeile 291)

**1. Kopiere einen bestehenden Block:**
```javascript
{
  id: 6,
  title: "Immobilien",
  label: "Handel",
  description: "Kompetente Beratung bei Kauf und Verkauf.",
  icon: "shovel",
  image: "https://images.unsplash.com/...",
},
```

**2. Füge ihn am Ende ein (vor der `]`) mit neuer ID:**
```javascript
{
  id: 7,                    // ← Neue, einzigartige Nummer
  title: "Winterdienst",    // ← Neuer Titel
  label: "Saisonal",        // ← Neues Label
  description: "Professionelle Schneeräumung für deine Liegenschaft.",
  icon: "sparkles",         // ← Icon aus der Liste unten
  image: "https://images.unsplash.com/photo-1491002052546-bf38f186af56",
},
```

**🎨 Verfügbare Icons:**
| Icon | Bedeutung | Icon | Bedeutung |
|------|-----------|------|-----------|
| `"home"` | 🏠 Haus | `"leaf"` | 🍃 Garten |
| `"hammer"` | 🔨 Bau | `"trash"` | 🗑️ Entsorgung |
| `"building"` | 🏢 Gebäude | `"shovel"` | ⛏️ Schaufel |
| `"wrench"` | 🔧 Reparatur | `"paintbrush"` | 🖌️ Maler |
| `"shield"` | 🛡️ Sicherheit | `"truck"` | 🚚 Transport |
| `"users"` | 👥 Team | `"settings"` | ⚙️ Technik |
| `"sparkles"` | ✨ Reinigung | `"tree"` | 🌳 Baum |

---

### ➕ Neues Projekt hinzufügen

**Gehe zu:** Abschnitt `portfolio` → `projects` (ca. Zeile 382)

```javascript
// Neuen Block am Ende einfügen (vor der ]):
{
  id: 6,                           // ← Neue, einzigartige Nummer
  title: "Einfamilienhaus Muster", // ← Projektname
  category: "Renovation",          // ← Kategorie
  location: "Baar",                // ← Ort
  description: "Komplette Innenrenovation mit energetischer Sanierung.",
  image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
},
```

---

### ➕ Neue Kundenstimme hinzufügen

**Gehe zu:** Abschnitt `testimonials` → `items` (ca. Zeile 457)

```javascript
// Neuen Block am Ende einfügen (vor der ]):
{
  quote: "Schnelle und saubere Arbeit. Sehr zu empfehlen!",
  author: "Peter Keller",
},
```

---

### ➕ Neues Team-Mitglied hinzufügen

**Gehe zu:** Abschnitt `about` → `founders` (ca. Zeile 173)

```javascript
// Neuen Block am Ende einfügen (vor der ]):
{
  name: "Maria Beispiel",
  role: "Projektleitung",
  image: "https://images.unsplash.com/...",
  description: "Die Organisatorin mit Blick für Details.",
},
```

---

### ❌ Eintrag löschen

Um einen Eintrag zu entfernen, lösche den gesamten Block von `{` bis `},`:

```javascript
// VORHER:
items: [
  { quote: "Tolle Arbeit!", author: "Max" },
  { quote: "Sehr zufrieden.", author: "Erika" },  // ← Diese Zeile löschen
  { quote: "Empfehlenswert!", author: "Hans" },
],

// NACHHER:
items: [
  { quote: "Tolle Arbeit!", author: "Max" },
  { quote: "Empfehlenswert!", author: "Hans" },
],
```

---

## ⚠️ Wichtige Warnungen

### 🔤 Nur gerade Anführungszeichen verwenden!

| Symbol | Verwenden? |
|--------|------------|
| `"` | ✅ JA – Gerade Anführungszeichen |
| `„` `"` | ❌ NEIN – Deutsche Anführungszeichen |
| `'` | ❌ NEIN – Einfache Anführungszeichen |

### 🔢 IDs müssen einzigartig sein!

```javascript
// ✅ RICHTIG:
{ id: 1, title: "..." },
{ id: 2, title: "..." },
{ id: 3, title: "..." },

// ❌ FALSCH:
{ id: 1, title: "..." },
{ id: 1, title: "..." },  // ← ID 1 bereits vergeben!
```

### , Kommas nicht vergessen!

Jeder Block endet mit `},` (Komma nach der Klammer):

```javascript
// ✅ RICHTIG:
{
  title: "Eins",
},  // ← Komma hier!
{
  title: "Zwei",
},

// ❌ FALSCH:
{
  title: "Eins",
}   // ← FEHLENDES KOMMA!
{
  title: "Zwei",
},
```

---

## 🆘 Hilfe bei Problemen

### 😱 "Die Website funktioniert nicht mehr!"

**Keine Panik!** So behebst du das Problem:

#### Option A: Rückgängig machen
Drücke mehrmals `Ctrl + Z` (Windows) oder `Cmd + Z` (Mac).

#### Option B: Git verwenden
```bash
git checkout -- WEBSITE_CONTENT.ts
```

### 🔍 Häufige Fehler

| Symptom | Ursache | Lösung |
|---------|---------|--------|
| Seite lädt nicht | Fehlende `"` | Alle Texte in `"..."` einschliessen |
| Fehler im Terminal | Fehlendes `,` | Komma nach jeder `}` prüfen |
| Seltsame Zeichen | Falsche Anführungszeichen | Nur `"` verwenden, nicht `„` |

---

## ✅ Checkliste vor dem Speichern

- [ ] Nur Text zwischen `"..."` geändert?
- [ ] Alle Kommas `,` vorhanden?
- [ ] Bei neuen Einträgen: ID einzigartig?
- [ ] Gerade Anführungszeichen `"` verwendet?
- [ ] Datei gespeichert (`Ctrl + S`)?

---

## 📋 Schnellreferenz

| Aufgabe | Suchen nach | Abschnitt |
|---------|-------------|-----------|
| Telefon ändern | `phoneDisplay` | `footer` |
| E-Mail ändern | `email:` | `footer` |
| Adresse ändern | `address:` | `footer` |
| Haupttext ändern | `taglinePart1` | `hero` |
| Slogan ändern | `subtitle:` | `hero` |
| Service hinzufügen | `items: [` | `services` |
| Projekt hinzufügen | `projects: [` | `portfolio` |
| Kundenstimme hinzufügen | `items: [` | `testimonials` |
| Team-Mitglied hinzufügen | `founders: [` | `about` |

---

**Viel Erfolg! 🎉**