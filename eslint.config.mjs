// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'no-console': 'off',
    'vue/require-default-prop': 'off',
  },
});
