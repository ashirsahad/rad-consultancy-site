# Privatily-style site (Learning Clone)

This is a static, responsive replica of the layout/UX patterns seen on privatily.com, built **only for learning**. 
All copy, artwork, and prices here are placeholders. Replace everything with your own content before publishing.

## Structure

- `index.html` – Landing (hero, KPIs, features, steps, pricing tabs, testimonials, FAQ + CTA)
- `pricing.html` – Jurisdiction tabs with 3 cards each
- `about.html` – Mission/values/support
- `contact.html` – Contact form (no backend wired)
- `faq.html` – Accordion FAQ
- `privacy.html`, `terms.html`
- `styles.css` – Minimal modern design system (CSS variables, grids)
- `scripts.js` – Mobile menu, FAQ accordion, simple tab switcher
- `assets/logo.svg` – Placeholder logo

## Run locally

Just open `index.html` in a browser. For a local server:

```bash
# Python 3
python -m http.server 8080
# or Node
npx serve .
```

Then visit http://localhost:8080

## Deploy

- **Netlify**: drag‑and‑drop the folder, or push to Git and connect.
- **Vercel**: `vercel` deploy a static project.
- **GitHub Pages**: push to a repo and enable Pages (root /docs).

## Hook up the contact form

- **Formspree**: set `<form action="https://formspree.io/f/xxxx" method="POST">`
- **Netlify Forms**: add `netlify` attribute and a hidden input `name="contact"`.
- **Serverless**: create a Vercel/Netlify function to email or log submissions.

## Notes

- This is not an exact copy; it mirrors the overall structure and components.
- Replace prices, text, and images. Update SEO tags and legal docs before launch.
