import en from './i18n/locales/en.json'
import no from './i18n/locales/no.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    no,
  },
}));
