# Ashlin Siddharth – Software Developer Portfolio

## Project Overview
A professional personal portfolio website showcasing the profile, technical capabilities, selected projects, education, experience, and contact channels for Ashlin Siddharth.

- **Developer:** Ashlin Siddharth
- **Professional Title:** Full Stack Developer
- **Degree:** BCA – Data Science (Presidency University, Bengaluru, 2024–2027)
- **Location:** Bengaluru, India

## Design Direction
- Midnight Blue cinematic night landscape
- Frosted glassmorphism panels
- Electric cyan and blue highlights
- Clean typography (Space Grotesk, Inter, JetBrains Mono)
- Responsive desktop, tablet, and mobile layouts

---

## Technical Stack
- **Framework:** React 18 + Vite
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (v3) + PostCSS + Autoprefixer
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Typography:** Self-hosted Fontsource packages (`Space Grotesk`, `Inter`, `JetBrains Mono`)
- **Code Quality:** ESLint (v9 flat config) + TypeScript-ESLint
- **Hosting & Deployment:** Vercel

---

## Prerequisites
- **Node.js:** `v18.0.0` or higher (verified with `v24.22.1`)
- **npm:** `v9.0.0` or higher (verified with `v11.19.1`)

---

## Installation Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/ashlinsiddharth/ashlin-portfolio.git
   cd ashlin-portfolio
   ```

2. Check out the development branch:
   ```bash
   git checkout phase-1-foundation
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

---

## Development Server Instructions

To launch the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The application will be accessible at: `http://localhost:3000`

---

## Build Instructions

To compile the TypeScript project and bundle production-ready assets:
```bash
npm run build
```
Production output files are generated in the `dist/` directory.

To preview the production build locally:
```bash
npm run preview
```

---

## Lint Instructions

To run ESLint across all TypeScript and React files:
```bash
npm run lint
```

---

## Vercel Deployment Instructions

1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New...** → **Project**.
3. Import the repository: `ashlinsiddharth/ashlin-portfolio`.
4. Configure Build and Output Settings:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. The repository includes `vercel.json` configured with SPA rewrites directing all routes to `/index.html`.
6. Click **Deploy**. Vercel will build and assign a production URL.
