# Phiri Budgeting Solutions

Marketing landing page for **Phiri Budgeting Solutions** — a financial planning service offering practical budgeting, spending analysis, and debt/goal planning for individuals and families.

*Control your money. Build your future.*

## Features

- **Hero section** with portrait imagery, trust indicators, and a primary call to action
- **Services overview** — budget setup & spending analysis, debt & financial goal planning
- **About / Why Choose Us** sections highlighting the company's approach
- **Consultation booking modal** with a contact form
- Self-hosted Inter variable font and locally served assets (no external requests)

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- TypeScript
- Plain CSS (global stylesheet, no CSS framework)

## Getting Started

### Prerequisites

- Node.js 18.18+ (Node 20+ recommended)
- [Yarn](https://yarnpkg.com/) (a `yarn.lock` is committed; npm works too)

### Install & Run

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Other Scripts

| Command      | Description                          |
| ------------ | ------------------------------------ |
| `yarn build` | Create an optimized production build |
| `yarn start` | Serve the production build           |
| `yarn lint`  | Run ESLint (Next.js config)          |

## Project Structure

```
src/
  app/
    layout.tsx    # Root layout and site metadata
    page.tsx      # Landing page (hero, services, contact, booking modal)
    globals.css   # Global styles
public/
  hero-portrait.png
  fonts/Inter-Variable.woff2
```

## License

[MIT](LICENSE) © 2026 Thabo Mollo
