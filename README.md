# Sena's Portfolio

Personal portfolio site for **Sena Zeleke**, a software engineer and full-stack web/mobile developer. The site is a single-page React app with a dedicated case-study page for the eCommerce project.

Live local URL (development): [http://localhost:3000](http://localhost:3000)

---

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and styled with [Tailwind CSS](https://tailwindcss.com/). Visitors land on a one-page layout (Home, About, Skills, Projects, Contact) with smooth-scroll navigation. Choosing **Demo** on the eCommerce project opens a separate route (`/ecommerce`) with a full write-up of the work.

The document title is set in `App.js` to `Sena's Portfolio`.

---

## Tech Stack

| Layer | Tools |
| --- | --- |
| UI | React 19 |
| Routing | `react-router-dom` v7 (`BrowserRouter`) |
| In-page navigation | `react-scroll` |
| Icons | `react-icons` (Font Awesome, Simple Icons, Bootstrap Icons, Devicons) |
| Skills carousel | `react-slick` + `slick-carousel` |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Contact form | Getform (`POST` to `https://getform.io/f/pbnrrwzb`) |
| Tests | Jest + React Testing Library (CRA defaults) |
| Build | `react-scripts` 5 (webpack, Babel, ESLint) |

---

## Features

- Fixed gradient navbar with smooth-scroll section links on the homepage
- Mobile hamburger menu (`FaBars` / `FaTimes`) that covers the viewport
- Hero section with profile photo, social-media toggle, and CV download
- About section describing web, mobile, and backend skills
- Auto-playing skills carousel (responsive slide counts)
- Project cards with hover overlay, Demo, and Code actions
- Internal demo route for the eCommerce case study
- Contact form (name, email, message) submitted through Getform
- Dark blue/black gradient theme used across all sections

---

## Project Structure

```text
portfolio/
├── public/
│   ├── index.html          # HTML shell; React mounts on #root
│   ├── favicon.ico
│   ├── manifest.json       # PWA metadata
│   └── robots.txt
├── src/
│   ├── App.js              # Router, routes, page composition
│   ├── App.css             # Unused CRA default styles
│   ├── App.test.js         # Default CRA test (still looks for "learn react")
│   ├── index.js            # React 18/19 root render + StrictMode
│   ├── index.css           # Global styles + Tailwind directives
│   ├── setupTests.js       # jest-dom matchers
│   ├── reportWebVitals.js  # Optional web-vitals reporting
│   ├── assets/
│   │   ├── sena.jpg        # Hero / profile photo
│   │   └── portfolio/      # Project screenshots
│   │       ├── ecommerce.png
│   │       ├── installNode.jpg
│   │       ├── navbar.jpg
│   │       ├── reactParallax.jpg
│   │       ├── reactSmooth.jpg
│   │       └── reactWeather.jpg
│   └── components/
│       ├── NavBar.jsx      # Fixed header, scroll vs router links
│       ├── Home.jsx        # Hero, social links, CV
│       ├── About.jsx       # Bio
│       ├── Skills.jsx      # Tech carousel
│       ├── Projects.jsx    # Project grid
│       ├── Contact.jsx     # Getform contact form
│       └── Ecommerce.jsx   # eCommerce case-study page
├── tailwind.config.js      # Scans ./src/**/*.{js,jsx,ts,tsx}
├── package.json
└── README.md
```

---

## How the App Boots

1. `public/index.html` provides the `#root` div.
2. `src/index.js` creates a React root, wraps `App` in `React.StrictMode`, and optionally reports web vitals.
3. `src/index.css` resets the body and injects Tailwind (`@tailwind base/components/utilities`).
4. `App.js` wraps everything in `BrowserRouter`, renders `NavBar` on every route, and defines two routes.

`App.css` is imported but only contains leftover Create React App logo/header styles. Layout and theming come from Tailwind classes in the components.

---

## Routing

Defined in `src/App.js`:

| Path | What renders |
| --- | --- |
| `/` | `Home` + `About` + `Skill` + `Projects` + `Contact` (stacked single page) |
| `/ecommerce` | `Ecommerce` case-study page |

`NavBar` always sits above the routes. On `/`, the brand name and menu use `react-scroll` `Link`s targeting section `name` attributes (`home`, `about`, `skills`, `projects`, `contact`). On `/ecommerce`, the brand name is a `react-router-dom` `Link` back to `/`, and the section menu is hidden.

---

## Components

### `NavBar.jsx`

- Fixed full-width bar: `bg-gradient-to-b from-black to-blue-900`.
- Local state `nav` toggles the mobile overlay.
- `useLocation()` decides whether to show homepage scroll links.
- Desktop: horizontal list (`hidden md:flex`).
- Mobile: hamburger icon; open menu is a full-screen column of links. Clicking a link closes the menu.
- Smooth scroll duration: `500` ms.

### `Home.jsx` (`name="home"`)

- Full-viewport hero, column-reverse on small screens so the photo sits above the text.
- Introduces Sena as a software engineer who builds full-stack web and mobile apps.
- **Social Media** button toggles `showSocial`. Links:

  | Label | Destination |
  | --- | --- |
  | LinkedIn | `https://linkedin.com` |
  | GitHub | `https://github.com/senazeleke` |
  | Mail | `mailto:senazeleke258@gmail.com` |
  | Telegram | `https://t.me/Theotokos_ICU` |

- **CV** opens a Google Drive resume in a new tab.
- Profile image: `src/assets/sena.jpg`.

### `About.jsx` (`name="about"`)

- Full-height section with a short bio: Jimma University graduate, React/Node/Tailwind/GraphQL on the web, Flutter + Flask/Python for mobile, interest in AI, data structures, and collaboration.

### `Skills.jsx` (`name="skills"`)

Exported as `Skill` (singular). Renders an autoplay `react-slick` carousel of 17 items, each an icon + title:

HTML, CSS, JavaScript, React, Tailwind, Next.js, Python, SQL (PostgreSQL icon), Flutter, Node.js, GraphQL, Docker, Postman, VS Code, GitHub, Flask, REST API.

Carousel settings:

- Infinite, autoplay every 2s, 5 slides on large screens
- Breakpoints: 4 / 3 / 2 / 1 slides at 1280 / 1024 / 640 / 480 px

Older image-based skill cards are left in the file as comments.

### `Projects.jsx` (`name="projects"`)

A 3-column (responsive) card grid. Each card shows a screenshot; on hover an overlay appears with title, **Demo**, and **Code**.

| Project | Demo | Code |
| --- | --- | --- |
| Full-Stack eCommerce Platform | Internal route `/ecommerce` (`<Link>`) | [ECommerce-Shop](https://github.com/senazeleke/ECommerce-Shop) |
| Parallax Scroll Effect | `#` placeholder | `#` |
| Responsive Navbar | `#` placeholder | `#` |
| Smooth Scroll Website | `#` placeholder | `#` |
| Node.js Installer | `#` placeholder | `#` |
| Weather App | `#` placeholder | `#` |

If `demo` starts with `/`, it is treated as an in-app route; otherwise it is an external `<a>`.

An unused `links` array (`[{ id: 1, link: 'ecommerce' }]`) is declared in this file and not rendered.

### `Ecommerce.jsx` (`name="ecommerce"`)

Standalone case study (not part of the homepage stack). Extra top padding (`pt-32`) clears the fixed navbar. Sections, each a text + image (or gray placeholder) row:

1. Header
2. Elevator Pitch
3. Role & Team (team lead)
4. Tech Stack & Skills — React, Node/Express, GraphQL, REST fallback for image uploads, PostgreSQL, Mailtrap, load balancing, indexing
5. Problem Statement
6. Solution / Key Features
7. Results / Impact
8. Visual Showcase / Demo (placeholders for screenshots, video, diagram, metrics)

Images currently reused: `ecommerce.png`, `navbar.jpg`, `reactSmooth.jpg`. Later blocks still use labeled placeholders.

### `Contact.jsx` (`name="contact"`)

- `POST` form to Getform endpoint `https://getform.io/f/pbnrrwzb`
- Fields: `name`, `email`, `message`
- Submit button labeled **Chat**
- Transparent bordered inputs on the same dark gradient background

---

## Styling

- Tailwind is enabled in `src/index.css` and configured in `tailwind.config.js`.
- Content glob: `./src/**/*.{js,jsx,ts,tsx}`.
- Visual language: black → `blue-900` gradients, white headings, gray body copy, cyan/blue CTAs, amber Demo buttons.
- `react-slick` CSS is imported inside `Skills.jsx`.

There is no `postcss.config.js` in the repo; CRA still processes Tailwind through the installed `postcss` and `autoprefixer` packages.

---

## Scripts

From the project root:

```bash
npm install
npm start      # development server, http://localhost:3000
npm test       # interactive Jest runner
npm run build  # production build in /build
npm run eject  # one-way eject of CRA config (do not use unless needed)
```

`npm start` hot-reloads on file changes.

---

## Tests

`src/setupTests.js` loads `@testing-library/jest-dom`.

`src/App.test.js` is the default CRA test and still looks for the text `/learn react/i`. That string is not in the current UI, so this test will fail until it is updated.

---

## Environment and Git

- Node dependencies live in `package.json` / `package-lock.json`.
- `.gitignore` excludes `node_modules`, `coverage`, `build`, local env files, and npm/yarn debug logs.
- No `.env` files are required for the current UI. The contact form posts directly to Getform.

---

## Notes for Contributors

- Section IDs used by `react-scroll` are `name` attributes on the outer `div` of each homepage component. Renaming them requires matching updates in `NavBar.jsx`.
- Commented-out previous implementations remain at the bottom of `App.js` and `Skills.jsx` (and an older `tailwind.config.js`). They are not used at runtime.
- `SocialLinks.jsx` was removed; social links now live in `Home.jsx`.
- Skill icons replaced the older PNG skill images (`html.png`, `css.png`, and similar), which were deleted from `src/assets`.
- To add a project: append an object to the `projects` array in `Projects.jsx` (`id`, `src`, `title`, `demo`, `code`). Use a path starting with `/` for an in-app demo page.
- To add a skill: append to the `techs` array in `Skills.jsx` with an icon component and title.
