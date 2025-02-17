// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Core Configuration
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Modules
  modules: [
    // UI & Styling
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    
    // Forms & Validation
    '@vee-validate/nuxt',
    
    // Internationalization
    '@nuxtjs/i18n',
    
    // Utilities
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    
    // State Management
    '@pinia/nuxt',
    
    // Development & Testing
    '@nuxt/test-utils/module',
    '@nuxt/image',
    '@nuxt/eslint',
  ],

  // UI Configuration
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  colorMode: {
    classSuffix: '',
    classPrefix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'nuxt-color-mode',
  },

  // Image Optimization
  image: {
    provider: 'ipx',
    quality: 80,
    format: ['webp', 'jpg'],
  },

  // Internationalization
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },

  // State Management
  pinia: {
    storesDirs: ['./stores/**'],
  },

  // Development Tools
  eslint: {},
});
