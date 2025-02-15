import en from './locales/en.json';
import no from './locales/no.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    no,
  },
}));
