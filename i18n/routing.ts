import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['sq', 'de', 'fr', 'it', 'en'],
  defaultLocale: 'sq',
  localePrefix: 'always',
})
