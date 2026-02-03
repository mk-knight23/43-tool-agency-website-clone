# BlueLupin — Premium Agency Website

A high-fidelity digital agency website built with Vue 3, TypeScript, and Tailwind CSS. Features a modern "Futuristic/Modern Agency" design system with dark theme, neon accents, bold typography, and advanced animations.

## What's New (v3.0.0)

### Major Features
- **CMS System** — JSON-based content management with localStorage persistence
- **Team Section** — Team members showcase with social links and expertise
- **Enhanced Portfolio** — Project filtering, categories, featured work, case studies
- **Enhanced Services** — Detailed service listings with process steps and pricing
- **Testimonials** — Client reviews with carousel and ratings
- **Blog Section** — News/articles with categories, filtering, and read time
- **Advanced Analytics** — Page views, scroll depth, time tracking, section engagement
- **Admin Panel** — Content management interface with export/import

### Improvements
- Comprehensive TypeScript type definitions
- Modular section-based architecture
- Enhanced navigation with all sections
- Improved responsive design
- Real-time analytics tracking
- Content export/import functionality

---

## Features

### Core Sections
| Feature | Description |
|---------|-------------|
| **Hero** — Large typography with availability badge |
| **Services** — 6 service cards with features, process, and pricing |
| **Portfolio** — Project showcase with filtering and categories |
| **Team** — 4 team members with expertise and social links |
| **Testimonials** — Client reviews with carousel navigation |
| **Blog** — 6 articles with categories and filtering |
| **Contact** — Validated form with loading and success states |

### Advanced Features
| Feature | Description |
|---------|-------------|
| **CMS System** | JSON-based content management with localStorage |
| **Admin Panel** | Content management interface (password: admin123) |
| **Analytics** | Page views, scroll depth, time tracking, section engagement |
| **Export/Import** | Backup and restore CMS data |
| **Glass Morphism** | Frosted glass cards with backdrop blur |
| **Neon Glow Effects** | Ambient glow and pulse animations |
| **Gradient Typography** | Text with gradient clipping for headlines |
| **Scroll Animations** | Motion-triggered fade and slide effects |
| **Responsive Design** | Pixel-perfect across all devices |
| **Keyboard Navigation** | Full keyboard shortcut support |

## Tech Stack

- **Framework:** Vue 3 (Composition API, TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion for Vue)
- **Icons:** Lucide Vue

## Project Structure

```
src/
├── components/
│   ├── admin/          # Admin panel component
│   └── ui/             # UI components (SettingsPanel)
├── composables/        # Vue composition functions
│   ├── useAnalytics.ts # Analytics tracking
│   ├── useAudio.ts     # Audio feedback
│   ├── useCMS.ts       # CMS data management
│   └── useKeyboardControls.ts
├── data/
│   └── cms-data.ts    # Default CMS content
├── sections/           # Page sections
│   ├── BlogSection.vue
│   ├── PortfolioSection.vue
│   ├── ServicesSection.vue
│   ├── TeamSection.vue
│   └── TestimonialsSection.vue
├── stores/             # Pinia state management
│   ├── settings.ts     # User settings
│   └── stats.ts        # Visit statistics
├── types/              # TypeScript definitions
│   └── index.ts        # Core interfaces
├── utils/              # Utility functions
│   └── constants.ts    # App constants
├── style.css           # Global design system
└── App.vue             # Main application
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Sections

1. **Hero** — Large typography with availability badge
2. **Services** — 6 detailed service offerings with process steps
3. **Portfolio** — 6 projects with filtering and categories
4. **Team** — 4 team members with expertise and social links
5. **Testimonials** — 6 client reviews with carousel
6. **Blog** — 6 articles with category filtering
7. **Contact** — Contact form and CTA
8. **Footer** — Social links and branding

## Admin Panel

Access the admin panel by clicking the gear icon in the bottom-left corner.

**Default Password:** `admin123`

### Admin Features
- **Overview** — System statistics and content counts
- **CMS Management** — Export/import content data
- **Analytics Dashboard** — View visitor statistics and engagement

## CMS Data

All content is managed through the CMS system located in `src/data/cms-data.ts`:

- **Team Members** — 4 team members with roles and expertise
- **Services** — 6 services with features and pricing
- **Projects** — 6 projects (3 featured) with details
- **Testimonials** — 6 client reviews
- **Blog Posts** — 6 articles (2 featured)

## Deployment

### Vercel
```bash
vercel --prod
```

### GitHub Pages
Builds automatically on push to main via GitHub Actions.

## Live Links

| Platform | URL |
|----------|-----|
| **Vercel** | https://43-tool-agency-website-clone.vercel.app/ |
| **GitHub Pages** | https://mk-knight23.github.io/43-tool-agency-website-clone/ |

---

**Theme:** Futuristic/Modern Agency
**License:** MIT
**Author:** Made by MK — Musharraf Kazi
