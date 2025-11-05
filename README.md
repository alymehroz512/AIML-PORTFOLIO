# AIML-PORTFOLIO

A modern, single-page portfolio template built with React and Vite for Syed Faraz Mehdi (AIML portfolio). This repository provides a responsive, developer-friendly starting point for hosting an AIML-focused personal portfolio, with common tooling for development, linting, and production builds.

---

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Quick start](#quick-start)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [Configuration notes](#configuration-notes)
- [Contributing](#contributing)
- [License & contact](#license--contact)

---

## About

This repository contains a Vite + React application configured as a personal portfolio site. The app mounts at the `#root` element (see `src/main.jsx`) and is intended to present projects, visualizations, and biographical information in a clean, responsive layout.

The HTML title is set to "Syed Faraz Mehdi" and the project includes an icon referenced from `src/assets/WebIcon.svg`.

---

## Features

- Responsive single-page React application
- Routing with react-router-dom
- State management with Redux Toolkit
- Form handling via react-hook-form
- Charts and visualizations (Recharts)
- Reusable UI components (Bootstrap + react-bootstrap)
- Icon libraries included (react-icons, Heroicons, Tabler, Iconify)
- Linting configured with ESLint for consistent code style

---

## Tech stack

Core technologies and notable dependencies:

- React, React DOM
- Vite (dev server / bundler)
- @vitejs/plugin-react
- Redux Toolkit (@reduxjs/toolkit, react-redux)
- react-router-dom
- Bootstrap, react-bootstrap
- react-icons, @heroicons/react, @tabler/icons-react
- axios
- react-hook-form
- react-type-animation
- recharts
- ESLint (and related plugins)
- TypeScript type definitions (@types/react, @types/react-dom)

Note: package.json contains an override mapping that replaces `vite` with `npm:rolldown-vite@7.1.14`. See the "Configuration notes" section below.

---

## Quick start

Prerequisites

- Node.js (recommended: current LTS)
- npm

Clone and run locally

```bash
git clone https://github.com/alymehroz512/AIML-PORTFOLIO.git
cd AIML-PORTFOLIO
npm install
npm run dev
```

Open your browser to the address Vite prints (commonly http://localhost:5173).

Build and preview production bundle

```bash
# build for production
npm run build

# locally preview the production build
npm run preview
```

Run linters

```bash
npm run lint
```

---

## Available scripts

As defined in package.json:

- npm run dev — start Vite dev server
- npm run build — build production assets
- npm run preview — preview production build locally
- npm run lint — run ESLint across the project

Run scripts with `npm run <script>`.

---

## Project structure

Top-level files
- index.html — HTML entry, includes `<div id="root"></div>` and an icon reference
- package.json / package-lock.json — dependencies and npm scripts
- vite.config.js — Vite configuration
- eslint.config.js — linting configuration
- .gitignore

Key directories
- public/ — static public assets
- src/
  - main.jsx — application entrypoint (mounts the React app)
  - App.jsx — application root component
  - index.css, App.css — global and app styles
  - assets/ — images, icons (index.html references `/src/assets/WebIcon.svg`)
  - components/ — reusable UI components
  - pages/ — route pages
  - redux/ — Redux store and slices
  - styles/ — shared styles

Some directories serve as structure placeholders — open them to review component implementations.

---

## Configuration notes & gotchas

- Vite override: package.json maps `vite` to `npm:rolldown-vite@7.1.14`. If you see compatibility or unexpected behavior from Vite, check the overrides section in package.json and consider reverting to the official Vite package if necessary.
- Iconify: index.html includes an external Iconify script:
  ```html
  <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script>
  ```
  Remove or pin this if you require offline builds or stricter CSP.
- Title: index.html title is "Syed Faraz Mehdi".
- Type definitions: the repo includes @types packages where necessary for tooling; the project itself is JavaScript (React) with optional TypeScript types installed.

---

## Contributing

Contributions are welcome. Suggested workflow:

1. Open an issue describing the feature or bug you want to address.
2. Create a feature branch:
   ```bash
   git checkout -b feat/your-feature
   ```
3. Make clear, atomic commits and push your branch.
4. Open a Pull Request with a descriptive title and summary of changes.
5. Include tests or manual verification steps for behavioral changes where applicable.

If you plan a larger refactor, open an issue first to discuss the approach.

---

## License & contact

- License: No LICENSE file is included in this repository. If you want others to reuse or contribute, add a LICENSE (for example MIT or Apache-2.0).
- Author / Contact:
  - GitHub: https://github.com/alymehroz512
  - Gmail: alimehroz621@gmail.com

---
