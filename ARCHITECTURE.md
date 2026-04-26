# Architecture

## Project Structure

```
src/
├── main.tsx                  # Entry point - React Router setup
├── App.tsx                  # Root layout component
├── assets/                  # Images, fonts, icons (empty - planned)
├── components/
│   ├── button/            # Button component (empty - planned)
│   ├── nav-bar/
│   │   ├── Navbar.tsx
│   │   └── NavBar.scss
│   └── theme-toggle/
│       ├── ThemeToggle.tsx
│       └── ThemeToggle.scss
├── pages/
│   ├── home/
│   │   └── Home.tsx
│   ├── login/             # Login page (empty - planned)
│   ├── register/         # Register page (empty - planned)
│   └── not-found/
│       └── NotFoundPage.tsx
├── routes/                # Route definitions (empty - planned)
├── services/              # API services (empty - planned)
├── styles/
│   └── globalStyles.scss
├── themes/                # Theme config (empty - planned)
└── utils/                # Utilities (empty - planned)
```

## Routing Architecture

- Uses **React Router 7** with `createBrowserRouter` (defined in `main.tsx`)
- Root path `/` renders `App` as layout component
- Child route `/` renders `Home` page
- Error path renders `NotFoundPage`

## Technology Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **TypeScript** - Type safety
- **React Router 7** - Client-side routing
- **Bootstrap 5** - CSS framework (loaded globally)
- **Sass** - CSS preprocessor for component-scoped styles

## Folder Conventions

| Folder | Purpose |
|--------|---------|
| `components/` | Reusable UI components (each in own subfolder) |
| `pages/` | Page-level components (route views) |
| `services/` | API/service layer |
| `routes/` | Route definitions |
| `utils/` | Helper functions, constants |
| `themes/` | Theme configuration (dark/light) |
| `styles/` | Global styles |
| `assets/` | Static assets (images, fonts) |

## Empty Template Directories

The following directories exist as template placeholders but are empty:
- `assets/`
- `components/button/`
- `pages/login/`
- `pages/register/`
- `routes/`
- `services/`
- `themes/`
- `utils/`