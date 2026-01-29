# Futuristic/Modern Agency Design System

**Theme Identity:** Dark theme with neon accents, bold typography, and modern animations

## Color Palette

### Primary Colors
```css
--agency-primary: #2563eb;      /* Electric blue */
--agency-accent: #38bdf8;       /* Cyan accent */
--agency-secondary: #8b5cf6;    /* Purple */
--agency-pink: #ec4899;         /* Hot pink accent */
```

### Background & Surface
```css
--agency-bg: #020617;           /* Deep midnight blue */
--agency-surface: #0f172a;      /* Lighter navy */
--agency-surface-alt: #1e293b;  /* Slate surface */
```

### Neon Accents
```css
--neon-blue: #00d4ff;          /* Neon cyan */
--neon-purple: #a855f7;        /* Neon purple */
--neon-pink: #f472b6;          /* Neon pink */
```

### Text Colors
```css
--agency-text-primary: #f8fafc; /* Near white */
--agency-text-secondary: #94a3b8; /* Slate gray */
--agency-text-muted: #64748b;   /* Muted slate */
```

## Typography

### Font Families
```css
--font-display: "Space Grotesk", sans-serif;  /* Bold headlines */
--font-body: "Inter", system-ui, sans-serif;   /* Body text */
```

### Type Scale
```css
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-4xl: 2.25rem;    /* 36px */
--text-6xl: 3.75rem;    /* 60px */
```

### Font Weights
```css
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-black: 900;
```

## Border Radius

```css
--radius-sm: 0.5rem;    /* 8px */
--radius-md: 1rem;      /* 16px */
--radius-lg: 1.5rem;    /* 24px */
--radius-xl: 2rem;      /* 32px */
--radius-2xl: 2.5rem;   /* 40px */
--radius-3xl: 3rem;     /* 48px */
```

## Component Patterns

### Glass Morphism Card
```css
.glass {
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
}
```

### Gradient Text
```css
.gradient-text {
  background: linear-gradient(135deg, var(--agency-primary) 0%, var(--agency-accent) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

### Neon Button
```css
.btn-neon {
  background: var(--agency-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: var(--radius-2xl);
  font-weight: var(--font-black);
  box-shadow: 0 0 30px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
}

.btn-neon:hover {
  box-shadow: 0 0 50px rgba(37, 99, 235, 0.5);
  transform: translateY(-2px);
}
```

### Animated Gradient Overlay
```css
.gradient-overlay {
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.2) 0%,
    rgba(139, 92, 246, 0.1) 50%,
    transparent 100%
  );
}
```

## Animation Presets

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(37, 99, 235, 0.4); }
  50% { box-shadow: 0 0 40px rgba(37, 99, 235, 0.8); }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
```

## Glow Effects

### Text Glow
```css
.text-glow {
  text-shadow:
    0 0 10px rgba(37, 99, 235, 0.5),
    0 0 20px rgba(37, 99, 235, 0.3),
    0 0 30px rgba(37, 99, 235, 0.2);
}
```

### Box Glow
```css
.box-glow {
  box-shadow:
    0 0 20px rgba(37, 99, 235, 0.3),
    0 0 40px rgba(37, 99, 235, 0.2),
    inset 0 0 60px rgba(37, 99, 235, 0.05);
}
```

## Design Tokens Summary

| Token | Value | Purpose |
|-------|-------|---------|
| Primary | #2563eb | Main accent color |
| Accent | #38bdf8 | Cyan highlights |
| Background | #020617 | Deep background |
| Surface | #0f172a | Card backgrounds |
| Neon Blue | #00d4ff | Glow effects |
| Neon Purple | #a855f7 | Secondary glow |
