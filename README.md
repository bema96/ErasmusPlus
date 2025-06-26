# ErasmusPlus - Praktik i Udlandet 🌍

En moderne React TypeScript webapplikation til visning af internationale praktik- og udvekslingsmuligheder gennem Erasmus+ programmet.

## 🚀 Features

- **📰 Nyhedsartikler**: Dynamisk indhold fra Contentful CMS
- **🗺️ Interaktivt kort**: Leaflet.js kort med aktivitetsmarkører
- **🎯 Modal popups**: Detaljeret information om aktiviteter
- **🖥️ Fullscreen mode**: Immersiv fuldskærmsoplevelse
- **⚡ Hurtig performance**: Bygget med Vite og TypeScript

## 🛠️ Teknologier

- **React 18** med TypeScript
- **Vite** for hurtig udvikling og build
- **Tailwind CSS** til styling
- **React Leaflet** til interaktive kort
- **Contentful CMS** til content management
- **React Router** til navigation

## 📋 Forudsætninger

- Node.js (version 18 eller nyere)
- npm eller yarn
- Contentful konto med Space ID og Access Token

## 🔧 Installation

1. **Clone repositoriet**

   ```bash
   git clone https://github.com/bema96/ErasmusPlus.git
   cd ErasmusPlus
   ```

2. **Installer dependencies**

   ```bash
   npm install
   ```

3. **Opsæt environment variables**

   ```bash
   cp .env.example .env
   ```

   Rediger `.env` og tilføj dine Contentful credentials:

   ```env
   VITE_CONTENTFUL_SPACE=dit_contentful_space_id
   VITE_CONTENTFUL_ACCESS_TOKEN=dit_contentful_access_token
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🌐 Deployment til Netlify

### Automatisk deployment:

1. Fork eller push til GitHub
2. Opret nyt site på [Netlify](https://netlify.com)
3. Forbind til dit GitHub repository
4. Sæt environment variables i Netlify dashboard:
   - `VITE_CONTENTFUL_SPACE`
   - `VITE_CONTENTFUL_ACCESS_TOKEN`

### Manuel deployment:

```bash
npm run build
# Upload dist/ folder til Netlify
```

## 📁 Projektstruktur

```
src/
├── components/           # Genanvendelige komponenter
│   ├── ActivityArticle/  # Aktivitetsartikler
│   ├── MapView/         # Kort komponenter
│   ├── NewsArticle/     # Nyhedsartikler
│   ├── PopUpModal/      # Modal dialogs
│   └── shared/          # Delte komponenter
├── hooks/               # Custom React hooks
├── pages/               # Side komponenter
├── types/               # TypeScript type definitioner
├── client/              # API klienter (Contentful)
└── _Layout/             # Layout komponenter
```

## 🔑 Contentful Opsætning

### Content Types der skal oprettes:

1. **News Article** (`news`):

   - `title` (Short text)
   - `description` (Long text)
   - `image` (Media)
   - `date` (Date & time)
   - `location` (Short text)

2. **Activity** (`activity`):
   - `title` (Short text)
   - `description` (Long text)
   - `image` (Media)
   - `who` (Short text)
   - `city` (Short text)
   - `startDate` (Date & time)
   - `endDate` (Date & time)
   - `location` (JSON object med lat/lon)

## 🎮 Sådan bruges appen

1. **Nyheder**: Vises i venstre side med billeder og beskrivelser
2. **Kort**: Interaktivt verdenskort med aktivitetsmarkører
3. **Aktiviteter**: Klik på markører for at se detaljer
4. **Fullscreen**: Brug knappen i øverste højre hjørne
5. **Navigation**: Appen opdaterer automatisk content fra Contentful

## 🔧 Udvikling

### Tilgængelige scripts:

```bash
npm run dev          # Start development server
npm run build        # Build til produktion
npm run preview      # Preview production build
npm run lint         # Lint koden
```

### Development workflow:

1. Foretag ændringer i `src/`
2. Test lokalt med `npm run dev`
3. Build med `npm run build`
4. Commit og push til GitHub
5. Netlify deployer automatisk

## 🐛 Fejlfinding

### Contentful forbindelsesproblemer:

- Tjek at environment variables er sat korrekt
- Verificer Space ID og Access Token i Contentful dashboard
- Tjek netværksforbindelse og Contentful status

### Build fejl:

- Tjek TypeScript fejl med `npm run lint`
- Sikr at alle dependencies er installeret
- Verificer at Vite konfiguration er korrekt

## 📝 Bidrag

1. Fork projektet
2. Opret en feature branch (`git checkout -b feature/amazing-feature`)
3. Commit dine ændringer (`git commit -m 'Add amazing feature'`)
4. Push til branch (`git push origin feature/amazing-feature`)
5. Åbn en Pull Request

## 📄 Licens

Dette projekt er licens under MIT License - se [LICENSE](LICENSE) filen for detaljer.

## 👨‍💻 Udvikler

Udviklet af [Benjamin Magno](https://github.com/bema96)

---

**Live Demo**: [erasmusplus.netlify.app](https://erasmusplus.netlify.app) 🚀
