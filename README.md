# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Portfolio documentation

The portfolio requirements and architecture decisions are documented in [`docs/`](docs/PROJECT_OVERVIEW.md):

- [Project overview](docs/PROJECT_OVERVIEW.md)
- [Frontend documentation](docs/FRONTEND_DOCUMENTATION.md)
- [Architecture and structure](docs/ARCHITECTURE_AND_STRUCTURE.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Content and asset guide](docs/CONTENT_AND_ASSET_GUIDE.md)
- [Integrations](docs/INTEGRATIONS.md)
- [SEO, accessibility, and performance](docs/SEO_ACCESSIBILITY_PERFORMANCE.md)
- [Development roadmap](docs/DEVELOPMENT_ROADMAP.md)
- [Test plan](docs/TEST_PLAN.md)

The planned theme follows the operating system preference. React Router routes, availability content, EmailJS handling, and resume fallback are specified in the linked guides.
