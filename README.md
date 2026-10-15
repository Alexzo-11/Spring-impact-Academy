# Spring Impact Academy — landing page

A polished, responsive single-page React + Vite website for Spring Impact Academy. Includes glassmorphism, scroll reveal animations, responsive navigation, programme information, subject cards, pricing, FAQs and registration CTAs.

## Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

## Install and run
```bash
npm install
npm run dev
```
Vite prints the local development URL (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Folder structure
```text
spring-impact-academy/
├── public/
│   └── assets/
│       └── jamb-flyer.png
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── README.md
```

## Before publishing — important edits
Open `src/App.jsx` and replace:
1. `FORM_URL` with the actual Google Forms registration URL.
2. `WHATSAPP_URL` with the academy's official WhatsApp click-to-chat URL, e.g. `https://wa.me/2348012345678` (international format, no `+` or spaces).

Review the fee, cohort start date, subject list, class platform, and programme claims before publishing. The current page uses details visible in the supplied flyer; FAQ copy is editable sample copy. Do not imply guaranteed JAMB scores or admission outcomes.

## Deployment
Build with `npm run build`, then deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages or any static hosting provider. For Vercel/Netlify, the standard Vite build command is `npm run build` and output directory is `dist`.

## Notes
- Icons use `lucide-react`.
- Google Fonts are loaded from Google Fonts; if you prefer fully local fonts, remove the external font links and bundle font files.
- The uploaded flyer is included as a visual reference in the hero section. Replace it with a custom academy photo or a new programme image whenever available.
