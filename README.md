# Nuxt 3 Starter Template

A small Nuxt 3 Template that can be used for a quicker start when creating a new project.
Easy to configure for the projects needs and easily extendable with more packages and modules🤠

## Features

- 🎨 [Tailwind CSS](https://tailwindcss.com/) with [Shadcn Vue](https://www.shadcn-vue.com/)
- 🌙 Dark mode with `@nuxtjs/color-mode`
- 🌍 i18n support with English and Norwegian
- 📦 State management with Pinia
- ✨ Auto-animate with FormKit
- 🧪 Testing setup with Vitest
- 📝 ESLint + Prettier
- 🚀 Type-safe development with TypeScript

### Quick Start

#### 1. Clone the repository

```bash
git clone https://github.com/MBMarsell/nuxt-template
cd nuxt-template
```

#### 2. Install dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

#### 3. Start development server

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Locally preview production build
npm run preview

# Lint with ESLint
npm run lint

# Fix ESLint errors
npm run lint:fix

# Format with Prettier
npm run format

# Check formatting
npm run format:check
```

## Project Structure

```bash
├── assets/          # Static assets
├── components/      # Vue components
│   └── ui/         # Shadcn components
├── layouts/         # Layout components
├── pages/          # Route pages
├── public/         # Public static files
├── stores/         # Pinia stores
├── utils/          # Utility functions
└── locales/        # i18n translations
```

## Included Modules

- [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/) - CSS framework
- [shadcn-nuxt](https://www.shadcn-vue.com/) - UI components
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) - Dark/Light mode
- [@nuxt/icon](https://nuxt.com/modules/icon) - Icon support
- [@vee-validate/nuxt](https://vee-validate.logaretm.com/v4/) - Form validation
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/) - Internationalization
- [@vueuse/nuxt](https://vueuse.org/) - Vue composition utilities
- [@formkit/auto-animate](https://auto-animate.formkit.com/) - Automatic animations
- [@pinia/nuxt](https://pinia.vuejs.org/) - State management
- [@nuxt/test-utils](https://nuxt.com/docs/getting-started/testing) - Testing utilities
- [@nuxt/image](https://image.nuxt.com/) - Image optimization
- [@nuxt/eslint](https://nuxt.com/modules/eslint) - Code linting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT License](LICENSE) - feel free to use this template for your own projects!
