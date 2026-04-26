# System Template Web

A React + Vite + TypeScript web application with Bootstrap and Sass.

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **TypeScript** - Type safety
- **React Router 7** - Routing
- **Bootstrap 5** - CSS framework (with react-bootstrap)
- **Sass** - CSS preprocessor
- **React Icons** - Icon library

## Prerequisites

- Node.js 18+
- npm 9+

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

## Build

```bash
npm run build
```

Builds the app for production.

## Lint

```bash
npm run lint
```

Runs ESLint to check code quality.

## Preview Production Build

```bash
npm run preview
```

Preview the production build locally.

## Project Structure

```
├── src
├── assets (images, fonts, etc.)
├── components (Button, Input, etc.)
├── pages (Home, About, etc.)
│   ├── Home
│   ├── About
├── services (home.ts, about.ts, etc.)
├── styles (global.css, theme.css, etc.)
├── utils (constants, helpers, etc.)
├── routes (routes.tsx, routes.ts, etc.)
├── theme (dark, light)
```