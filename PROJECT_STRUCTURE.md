# Project Structure

How this portfolio is organized, and where to change things.

This is a Create React App frontend (no backend). Folders follow the same idea as a larger app: **app** wires the shell, **pages** compose screens, **components** render UI, **constants** hold copy and links.

---

## Tree

```text
portfolio/
├── public/                          # Static HTML shell, icons, PWA manifest
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── index.js                     # CRA entry: mounts React on #root
│   ├── setupTests.js                # Jest + jest-dom
│   ├── reportWebVitals.js           # Optional performance reporting
│   ├── app/                         # Application shell
│   │   ├── App.jsx                  # Router, document title, layout chrome
│   │   └── App.test.js
│   ├── pages/                       # One file per route (calls components)
│   │   ├── HomePage.jsx             # Landing: Hero + About + Skills + Projects + Contact
│   │   └── EcommercePage.jsx        # eCommerce case study
│   ├── components/
│   │   ├── layout/
│   │   │   └── NavBar.jsx           # Fixed header (scroll links vs home link)
│   │   ├── landing/                 # Homepage sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   └── Contact.jsx
│   │   └── projects/                # Project-specific UI
│   │       └── Ecommerce.jsx
│   ├── constants/                   # Edit links, copy, and lists here
│   │   ├── index.js                 # Re-exports everything
│   │   ├── colors.js                # primary / secondary + layout class names
│   │   ├── routes.js                # URL paths and section ids
│   │   ├── site.js                  # Name, title, role, CV URL
│   │   ├── nav.js                   # Navbar links + scroll timing
│   │   ├── social.js                # Social media hrefs
│   │   ├── contact.js               # Email and Telegram
│   │   ├── about.js                 # About paragraphs
│   │   ├── skills.js                # Skill list + carousel settings
│   │   ├── projects.js              # Project cards (images, demo, code)
│   │   └── ecommerce.js             # Case-study sections
│   ├── assets/
│   │   ├── logo/
│   │   │   ├── sena.png             # Brand mark used in NavBar
│   │   │   ├── senaLogo.png
│   │   │   ├── senaMark.png
│   │   │   └── senabg.png
│   │   ├── images/                  # Profile / unused photos
│   │   │   ├── sena.jpg
│   │   │   └── heroImage.JPG
│   │   └── portfolio/               # Project screenshots
│   ├── styles/
│   │   ├── index.css                # Global CSS, CSS variables, Tailwind
│   │   └── App.css                  # Leftover CRA App classes
│   └── utils/
│       └── links.js                 # isInternalPath()
├── tailwind.config.js               # Registers primary + secondary colors
├── package.json
├── README.md
└── PROJECT_STRUCTURE.md             # This file
```

---

## What lives where

| Folder | Responsibility |
| --- | --- |
| `src/app/` | App-wide shell: router, navbar, which page to show. Do not put section markup here. |
| `src/pages/` | Route screens. They only compose components. |
| `src/components/layout/` | Shared chrome (navbar). |
| `src/components/landing/` | Homepage sections. |
| `src/components/projects/` | Detail UI for a single project. |
| `src/constants/` | URLs, names, copy, lists. Change these instead of hunting through JSX. |
| `src/assets/` | Images only. |
| `src/styles/` | Global CSS. |
| `src/utils/` | Small helpers with no UI. |

---

## Brand colors

Taken from the Hero / landing page:

| Token | Hex | Tailwind | Used for |
| --- | --- | --- | --- |
| **primary** | `#06b6d4` (cyan-500) | `primary` | Hero Social Media CTA |
| **secondary** | `#1e3a8a` (blue-900) | `secondary` | Section gradients (`from-black to-secondary`) |

Defined in three places so they stay in sync:

1. `src/constants/colors.js` — JS tokens + reusable gradient class strings
2. `src/styles/index.css` — `--color-primary` / `--color-secondary`
3. `tailwind.config.js` — `theme.extend.colors`

To rebrand, change the hex in those three files (or update `LAYOUT` class names in `colors.js`).

---

## Where to change content

| I want to change… | Edit |
| --- | --- |
| Site name, role, tagline, CV link | `src/constants/site.js` |
| Page title in the browser tab | `src/constants/site.js` → `documentTitle` |
| Navbar items | `src/constants/nav.js` |
| Social links | `src/constants/social.js` |
| Contact form endpoint | `src/constants/contact.js` |
| About text | `src/constants/about.js` |
| Skills list | `src/constants/skills.js` |
| Project cards / GitHub / demo URLs | `src/constants/projects.js` |
| eCommerce case-study copy | `src/constants/ecommerce.js` |
| Routes (`/` and `/ecommerce`) | `src/constants/routes.js` |

If you add a new skill icon, add the name in `skills.js` **and** register the icon component in the `SKILL_ICONS` map in `Skills.jsx`. Same pattern for social icons in `Hero.jsx`.

---

## Request flow

```text
index.js
  └── app/App.jsx          # BrowserRouter + NavBar
        ├── pages/HomePage.jsx
        │     ├── landing/Hero.jsx
        │     ├── landing/About.jsx
        │     ├── landing/Skills.jsx
        │     ├── landing/Projects.jsx
        │     └── landing/Contact.jsx
        └── pages/EcommercePage.jsx
              └── projects/Ecommerce.jsx
```

`App.jsx` does not import landing sections directly. Pages do.

---

## Adding a new page

1. Add the path in `src/constants/routes.js`.
2. Create a component under `src/components/` (grouped by feature).
3. Create a page under `src/pages/` that renders that component.
4. Register a `<Route>` in `src/app/App.jsx`.
