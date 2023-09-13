import { createI18n } from 'vue-i18n'
import ar from '@/locales/ar.ts'
import en from '@/locales/en.ts'
export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  messages: {
    en,
    ar,
  },
})
