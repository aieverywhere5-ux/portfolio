# Shaik Thaheed — Multi-page Portfolio

React + Vite portfolio with separate routes and reusable components.

## Pages
- `/` — Home
- `/about` — About, education and certifications
- `/services` — Services
- `/experience` — Career timeline and tools
- `/projects` — Project case studies
- `/achievements` — Selected achievements
- `/contact` — Contact form (opens the visitor's email application)

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract this ZIP.
2. Open the extracted `shaik-thaheed-portfolio-multipage` folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown by Vite, usually `http://localhost:5173`.

## Create production build

```bash
npm run build
npm run preview
```

The production website is generated in the `dist` folder.

## Before publishing
1. Replace `YOUR-DOMAIN.example` in `public/robots.txt` and `public/sitemap.xml` with the final website domain.
2. Update canonical URL and social preview metadata in `index.html` when the domain is known.
3. Add a professional portrait if desired; the current hero uses a designed monogram instead of an invented profile photo.
4. The contact form uses `mailto:`. Connect a backend service such as Formspree or Resend if you need server-side form submissions.
5. Verify all career dates, achievements and case-study details before publishing.

## Project structure

```text
src/
  components/
    Layout.jsx
    SectionHeading.jsx
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Experience.jsx
    Projects.jsx
    Achievements.jsx
    Contact.jsx
  App.jsx
  data.js
  main.jsx
  styles.css
public/
  favicon.svg
  robots.txt
  sitemap.xml
index.html
package.json
vite.config.js
```
