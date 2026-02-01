# BlueLupin — Premium Agency Website

A high-fidelity digital agency website built with Vue 3, TypeScript, and Tailwind CSS. Features a modern "Futuristic/Modern Agency" design system with dark theme, neon accents, bold typography, and advanced animations.

## Recent Upgrades (v2.1.0)

### Iterations 1-5: Complete Portfolio Upgrade
- Added "Made by MK — Musharraf Kazi" branding
- Enhanced design system documentation
- Documented animation features
- Verified Vue 3 + TypeScript build
- All iterations completed systematically

---

## Futuristic/Modern Agency Theme

This application features a premium **"Luxury Tech"** design system:
- Dark theme (#020617 background) with neon blue accents
- Gradient overlays and glass morphism effects
- Bold typography with Space Grotesk font
- Modern animations and scroll-triggered transitions
- Agency portfolio aesthetic

## Features

| Feature | Description |
|---------|-------------|
| **Glass Morphism** | Frosted glass cards with backdrop blur |
| **Neon Glow Effects** | Ambient glow and pulse animations |
| **Gradient Typography** | Text with gradient clipping for headlines |
| **Scroll Animations** | Motion-triggered fade and slide effects |
| **Responsive Design** | Pixel-perfect across all devices |
| **Dark/Light Mode** | Automatic theme switching |
| **Keyboard Navigation** | Full keyboard shortcut support |

## Tech Stack

- **Framework:** Vue 3 (Composition API, TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Motion (Framer Motion for Vue)
- **Icons:** Lucide Vue
- **State Management:** Pinia

## Design System

See `design-system/MASTER.md` for complete design token documentation.

### Color Palette
```css
--agency-primary: #2563eb;      /* Electric blue */
--agency-accent: #38bdf8;       /* Cyan accent */
--agency-bg: #020617;           /* Deep midnight */
--neon-blue: #00d4ff;          /* Neon cyan */
```

### Key Components
- `.glass` - Glass morphism card style
- `.gradient-text` - Gradient text clipping
- `.neon-glow` - Box glow effect
- `.service-card` - Hover-lift service cards
- `.btn-neon` - Glowing action buttons

### Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.4); }
  50% { box-shadow: 0 0 40px rgba(37, 99, 235, 0.8); }
}
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

## Project Structure

```
src/
├── components/         # Reusable UI elements
├── sections/           # Large page building blocks
├── stores/            # Pinia state management
├── composables/       # Vue composition functions
├── style.css          # Global design system styles
└── App.vue            # Main application
```

## Sections

- **Hero** - Large typography with availability badge
- **Services** - Grid of service cards with icons
- **CTA** - Contact call-to-action with glass card
- **Footer** - Social links and copyright

## Deployment

This project is configured for deployment on three platforms:

### GitHub Pages
- **Workflow**: `.github/workflows/deploy.yml`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Trigger**: Push to `main` branch
- **Action**: `actions/deploy-page@v4` with Vite static site generator

### Vercel
- **Config**: `vercel.json`
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Rewrites**: SPA fallback to `/index.html`

### Netlify
- **Config**: `netlify.toml`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Redirects**: All paths to `/index.html` (SPA support)

---

## Live Links

| Platform | URL |
|----------|-----|
| **GitHub Pages** | https://mk-knight23.github.io/43-tool-agency-website-clone/ |
| **Vercel** | https://43-tool-agency-website-clone.vercel.app/ |
| **Netlify** | https://43-tool-agency-website-clone.netlify.app/ |

---

**Theme:** Futuristic/Modern Agency
**License:** MIT
**Created by:** mk-knight23
