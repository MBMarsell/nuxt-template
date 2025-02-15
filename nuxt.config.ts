// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/icon',
    '@vee-validate/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@formkit/auto-animate',
    '@pinia/nuxt',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    '@nuxt/eslint',
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  eslint: {},
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
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  colorMode: {
    classSuffix: '',
    classPrefix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'nuxt-color-mode',
  },
});
