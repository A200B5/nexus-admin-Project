# Nexus Admin

A responsive admin dashboard built with React 19, Vite and Recharts. It has animated KPI cards, a revenue chart, an activity feed, a searchable and filterable users table, a settings page and a dark/light theme switch.

**Live demo:** https://nexus-admin-project-seven.vercel.app/

## Features

- **Dashboard**: four KPI cards with count-up numbers and sparkline bars, a monthly revenue and orders area chart (Recharts), and a recent activity feed. A short loading state plays on every page change.
- **Users**: search by name, email or role, filter by status (active, pending, inactive), and paginate through the table. Shows an empty state when nothing matches.
- **Settings**: toggle switches for workspace preferences.
- **Layout**: collapsible sidebar, top navbar with search, notification and chart buttons.
- **Theme**: dark and light mode, switched from the navbar.

## Tech stack

- React 19
- Vite 8
- Recharts 3
- Plain CSS with theme variables (no UI framework)
- ESLint with the React hooks rules

## Getting started

You need Node.js 18 or newer.

```bash
git clone https://github.com/A200B5/nexus-admin-Project.git
cd nexus-admin-Project
npm install
npm run dev
```

Open the local URL that Vite prints (usually http://localhost:5173).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  components/   Sidebar, Navbar, StatsCard, UsersTable
  pages/        Dashboard, Users, Settings
  App.jsx       Page switching, theme and layout state
  index.css     Theme variables and styles
```

## Deployment

The app is a static Vite build. It is deployed on Vercel from the `main` branch with the default Vite preset (build command `npm run build`, output directory `dist`). Any static host works the same way.

## Notes

All numbers, users and activity items are sample data for demonstration. There is no backend.

## Author

Ahmed Bakr. GitHub: [@A200B5](https://github.com/A200B5)
