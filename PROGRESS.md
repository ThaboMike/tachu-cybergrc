# Project Progress and Decision Log — Tachu Cyber GRC

## Overview
This document tracks key decisions, rationale, and implementation progress for the Tachu Cyber GRC website and business assets.

---

## Timeline Highlights
- Initial service catalog and templates created (policies, risk, incident, privacy, sales)
- Website content authored (Home, Services, About, Resources, Contact)
- Static site scaffolded (HTML/CSS/JS) and deployed via GitHub Pages
- Custom domain and email set: tachu.co.za, thabo@tachu.co.za (Microsoft 365)
- Accessibility and SEO improvements (skip links, meta descriptions, active nav)
- Coming Soon page strategy implemented; full site available at /index-full.html

---

## Decisions and Rationale
### 1) Productized services and templates
- Decision: Provide Bronze/Silver/Gold retainers + specialist services
- Rationale: Clear value, predictable scope, easy quoting; templates accelerate delivery

### 2) Static site (GitHub Pages)
- Decision: Static HTML/CSS/JS hosted on GitHub Pages
- Rationale: Zero-cost hosting, fast CDN, simple deployment, no backend required

### 3) Custom domain and email
- Decision: Use tachu.co.za + Microsoft 365 (Outlook)
- Rationale: Professional brand, reliable email delivery, M365 suite benefits

### 4) DNS setup
- Decision: Use CNAME for www → thabomike.github.io, MX/SPF/Autodiscover for M365
- Rationale: Best practice for GitHub Pages and Microsoft 365 interoperability

### 5) Coming Soon vs Dev site
- Decision: Show Coming Soon at root (index.html); develop full site at /index-full.html
- Rationale: Public professionalism during build; safe dev URL for validation

### 6) Accessibility & SEO
- Decision: Add skip links, focus-visible styles, meta descriptions, active nav
- Rationale: WCAG 2.2 AA alignment, keyboard usability, better search snippets

### 7) Design direction
- Decision: Sleek, minimalist design; white background, navy accents; small typography; refined cards
- Rationale: Professional, trustworthy tone for cybersecurity consulting; fast UI

---

## Implemented Work
- Templates folder (Policy, Risk, Incident, Privacy, Awareness, Sales) populated
- Website pages added + content tailored to “Tachu Cyber GRC”
- Assets: styles.css (tokens, cards, forms), app.js (menu)
- Legal pages: Privacy, Terms; SEO: robots.txt, sitemap.xml
- Lead magnets pages + downloads wired
- Coming Soon page created and activated at root
- Full site content restored at /index-full.html for dev

---

## Operational Notes
- Repo: https://github.com/ThaboMike/tachu-website
- Live: https://www.tachu.co.za
- Dev home: https://www.tachu.co.za/index-full.html
- Local dev: `python3 -m http.server 5173` then open http://localhost:5173/index-full.html

---

## Next Steps
- Continue full-site polish (copy, visuals, sections) at /index-full.html
- Add founder bio image path once available (`assets/img/thabo.jpg`)
- Add analytics (privacy-friendly) and simple contact submission if needed
- Publish case studies and blog resources for SEO

---

## Change Log (recent)
- chore: keep coming-soon at root; full site at index-full.html
- feat(dev): restore full homepage content for dev
- chore: remove CTAs from coming-soon page
- fix: set CNAME to www.tachu.co.za for GitHub Pages
- feat: coming-soon index + a11y tokens, skip links, meta descriptions, active nav; refine styles
