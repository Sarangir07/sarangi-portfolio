# Sarangi R — Portfolio

Personal portfolio for Sarangi R (Software Developer | MERN Stack & AI).
Built with React 18, Vite 6 and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

## Structure

```
public/
  Sarangi_R_Resume.pdf   # served at /Sarangi_R_Resume.pdf (Download Resume button)
  favicon.svg
src/
  data/portfolio.js      # ALL site copy lives here — edit this to update content
  hooks/                 # useReveal (scroll reveal), useActiveSection (nav highlight)
  components/            # Navbar, Hero, About, Skills, Experience, Projects,
                         # ProjectCard, ProjectDetails, Education, Certifications,
                         # Contact, Footer + shared Section/Reveal/Button/Icons
  App.jsx
  index.css              # Tailwind import, design tokens, animations
```

## Updating content

Everything shown on the site (name, intro, skills, experience, projects, education,
certifications, contact links) is defined in `src/data/portfolio.js`. To replace the
resume, overwrite `public/Sarangi_R_Resume.pdf`.

## Deploy

The `dist/` folder is a static site and can be deployed directly to Vercel, Netlify,
GitHub Pages or any static host. On Vercel: import the repo, framework preset "Vite".
