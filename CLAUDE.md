@AGENTS.md

# Doga Landing Page

Studio independiente de juegos. Landing page marketing-only, sin autenticación, sin base de datos.

## Stack
- Next.js 16 con App Router (ver AGENTS.md — APIs pueden diferir de v14)
- TypeScript estricto
- Tailwind CSS v4 — los estilos base van dentro de `@layer base` en globals.css
- Framer Motion v12 — solo para animaciones de scroll (FadeIn) y el bounce del scroll hint
- Sin librerías de UI (no Shadcn, no MUI)

## Estructura
```
app/
  page.tsx          — orquesta secciones, provee LangContext
  layout.tsx        — Inter font, metadata SEO
  globals.css       — variables CSS, keyframes hero, utilidades (.gradient-text)

components/
  FadeIn.tsx        — wrapper de animación scroll (framer-motion)
  ParticlesCanvas.tsx
  Navbar.tsx        — toggle idioma EN/ES
  Hero.tsx
  GamesSection.tsx  — GameCard incluido aquí
  AboutSection.tsx
  ContactSection.tsx
  Footer.tsx

lib/
  i18n.ts           — Lang, LangContext, useLang(), T (todas las traducciones ES/EN)
  games.ts          — GAMES[] + tipo Game
```

## Paleta de colores
- Fondo primario: #0A0A0A
- Fondo secundario: #111111
- Gradiente acento: #7C3AED → #06B6D4 (purple → cyan)
- Texto secundario: #A1A1AA (zinc-400)

## Idiomas
Toggle EN/ES en la navbar. El estado vive en `page.tsx` y se distribuye via `LangContext`.
Todas las strings están en `lib/i18n.ts` bajo el objeto `T`.

## Juegos (`lib/games.ts`)
Para agregar/editar un juego: modificar el array `GAMES`.
- `icon`: ruta en `/public/` o `null` (muestra `?` sobre el gradiente)
- `appStoreUrl` / `googlePlayUrl`: URL real o `null` (oculta el botón)
- `comingSoon: true`: oculta botones de tienda, muestra badge "Próximamente"

## Convenciones CSS importantes
- Estilos base SIEMPRE dentro de `@layer base {}` — si van fuera, sobreescriben las utilidades de Tailwind v4
- Animaciones above-the-fold: CSS `@keyframes` (hero-animate-1/2/scroll) — más confiable que framer-motion en SSR
- Animaciones scroll: framer-motion `useInView`

## Email de contacto
alan@domotics.mx
