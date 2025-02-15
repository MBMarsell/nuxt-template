import { defineVitestConfig } from '@nuxt/test-utils/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt', // IF YOU HAVE OTHER TESTS (NON-NUXT) - DO NOT SET THIS HERE
  },
});
