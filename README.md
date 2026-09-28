# Gomez Barber — Landing Page

Landing page en Next.js 14 (App Router) + TypeScript + Tailwind CSS para
Gomez Barber, barbería en Barrio Güemes, Córdoba Capital.

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

- `lib/constants.ts` — todos los datos del negocio (contacto, servicios,
  testimonios, horarios, FAQs) y el helper `getWhatsAppLink()`.
- `components/` — un componente por sección (Navbar, Hero, Services,
  GalleryShowcase, LocationHours, Testimonials, FAQ, Footer,
  FloatingWhatsApp).
- `app/page.tsx` — arma la página con todas las secciones.
- `app/layout.tsx` — metadata SEO en español y carga de tipografías
  (Bebas Neue para títulos, Manrope para texto).

## Pendientes antes de publicar

- Reemplazar los placeholders de `GalleryShowcase.tsx` por fotos reales
  guardadas en `public/gallery/`.
- Agregar una imagen `public/og-image.jpg` (1200×630) para el preview de
  WhatsApp/redes, referenciada en `app/layout.tsx`.
- Confirmar el enlace de "Dejar una reseña en Google" en
  `Testimonials.tsx` con el Place ID real del negocio.
- Ajustar `BUSINESS.mapsEmbedUrl` en `lib/constants.ts` si cambia la
  dirección exacta o se consigue un link de Google Maps más preciso.
