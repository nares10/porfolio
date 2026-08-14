# Minimalistic Portfolio

This is a Vite + React + Tailwind starter for a minimal black & white portfolio.

Quick start:

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Deploy to Vercel: connect this repo and set the build command to `npm run build` and output directory to `dist`.

Vercel (recommended)

- This project includes a `vercel.json` and a `vercel-build` script for a smooth Vercel deployment.
- In Vercel: import the repository, then in Project Settings ensure the Build Command is `npm run vercel-build` and the Output Directory is `dist` (Vite default).
- For single-page routing to work (client-side routes), `vercel.json` sends all requests to `index.html`.

If you prefer CLI deployment:

```bash
# Install Vercel CLI if needed
npm i -g vercel

# From the project root
vercel login
vercel --prod
```

Replace `public/resume.pdf` and images in `public/images/` with your own assets. Update `src/pages/Contact.jsx` with your email.
