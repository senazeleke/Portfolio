# Sena's Portfolio

Personal portfolio site for **Sena Zeleke**, a software engineer and full-stack web/mobile developer. The site is a React app with a one-page landing layout and a dedicated eCommerce case-study route.

Local development: [http://localhost:3000](http://localhost:3000)

Folder layout, brand tokens, and “where to edit” notes live in **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)**.

---

## Overview

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [Tailwind CSS](https://tailwindcss.com/).

- `/` — Home, About, Skills, Projects, Contact (smooth-scroll sections)
- `/ecommerce` — Full-stack eCommerce case study

`src/app/App.jsx` is the shell (router + navbar). `src/pages/` composes screens. `src/components/` renders UI. Links, copy, and lists live in `src/constants/` so they can be changed in one place.

Brand colors from the Hero landing page:

- **primary** `#06b6d4` (cyan) — main CTA
- **secondary** `#1e3a8a` (deep blue) — section backgrounds

---

## Tech Stack

| Layer | Tools |
| --- | --- |
| UI | React 19 |
| Routing | `react-router-dom` v7 (`BrowserRouter`) |
| In-page navigation | `react-scroll` |
| Icons | `react-icons` |
| Skills carousel | `react-slick` + `slick-carousel` |
| Styling | Tailwind CSS 3 (`primary` / `secondary` tokens) |
| Contact | Email (`mailto`) and Telegram links |
| Tests | Jest + React Testing Library |
| Build | `react-scripts` 5 |

---

## Features

- Fixed gradient navbar with smooth-scroll section links on the homepage
- Mobile hamburger menu
- Hero with profile photo, social-media toggle, and CV download
- About, skills carousel, project cards, contact form
- Internal demo route for the eCommerce write-up
- Shared primary / secondary brand colors

---

## How the App Boots

1. `public/index.html` provides `#root`.
2. `src/index.js` renders `app/App.jsx` inside `React.StrictMode` and loads `styles/index.css`.
3. `App.jsx` sets the document title from `constants/site.js`, renders `NavBar`, and maps routes from `constants/routes.js`.
4. `HomePage` stacks landing components. `EcommercePage` renders the case-study component.

---

## Routing

| Path | Page | Components |
| --- | --- | --- |
| `/` | `pages/HomePage.jsx` | `Hero`, `About`, `Skills`, `Projects`, `Contact` |
| `/ecommerce` | `pages/EcommercePage.jsx` | `Ecommerce` |

On `/`, the navbar uses `react-scroll` against section ids (`home`, `about`, `skills`, `projects`, `contact`). On other routes the brand name is a router link home, and section links are hidden.

---

## Components

### `components/layout/NavBar.jsx`

Fixed header. Brand mark is `SITE.logo` (`sena.png`) plus Allura “Sena” in cyan–gold. Nav links keep their existing fonts.

### `components/landing/Hero.jsx` (`name="home"`)

Hero / landing block. Name, role, tagline, CV URL, and social hrefs come from `constants/site.js` and `constants/social.js`. Profile image: `src/assets/images/sena.jpg`.

### `components/landing/About.jsx`

Bio paragraphs from `constants/about.js`.

### `components/landing/Skills.jsx`

Carousel of skills from `constants/skills.js`. Icon components stay in the JSX file; titles and icon names are constants.

### `components/landing/Projects.jsx`

Project grid from `constants/projects.js`. Paths that start with `/` are in-app routes; anything else is an external link.

### `components/landing/Contact.jsx`

Email and Telegram links from `constants/contact.js`.

### `components/projects/Ecommerce.jsx`

Case-study sections from `constants/ecommerce.js`. Extra top padding clears the fixed navbar.

---

## Constants (edit here first)

Do not hardcode new URLs inside components. Add them under `src/constants/` and import from `src/constants` (barrel file `index.js`).

| File | Contents |
| --- | --- |
| `site.js` | Brand name, logo (`sena.png`), full name, tab title, role, tagline, CV URL |
| `routes.js` | `/`, `/ecommerce`, section ids |
| `nav.js` | Navbar items, scroll duration |
| `social.js` | LinkedIn, GitHub, mail, Telegram |
| `contact.js` | Email and Telegram links |
| `projects.js` | Card images, titles, demo, code |
| `skills.js` | Skill titles + carousel settings |
| `about.js` | About copy |
| `ecommerce.js` | Case-study copy and images |
| `colors.js` | Primary / secondary hex and gradient class names |

---

## Styling

- Global CSS: `src/styles/index.css` (`@tailwind` + `--color-primary` / `--color-secondary`)
- Tailwind: `tailwind.config.js` content glob `./src/**/*.{js,jsx,ts,tsx}`
- Reusable gradient classes: `LAYOUT` in `src/constants/colors.js`

---

## Scripts

```bash
npm install
npm start      # http://localhost:3000
npm test
npm run build
npm run eject  # one-way; avoid unless you need it
```

---

## Tests

`src/setupTests.js` loads `@testing-library/jest-dom`.

`src/app/App.test.js` is still the default CRA test (`/learn react/i`) and does not match the current UI.

---

## Notes

- Rename a section id in `constants/routes.js` and keep `NAV_LINKS` in sync.
- New skill: add a row in `constants/skills.js` and map the icon in `Skills.jsx`.
- New project: append to `constants/projects.js`. Use a path starting with `/` for an in-app demo page, then add a page + route.
- Brand logo: `src/assets/logo/sena.png`, via `SITE.logo` in `src/constants/site.js`, rendered in `src/components/layout/NavBar.jsx` with Allura (`font-logo`) next to it.
- Browser tab icon: `public/favicon.ico`, `public/favicon.png`, `public/logo192.png`, `public/logo512.png`.
- Unused images: `src/assets/images/heroImage.JPG`, `src/assets/portfolio/usestate.jpg`, `src/assets/logo/senabg.png`.
