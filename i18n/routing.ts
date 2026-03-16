import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['sq', 'de', 'fr'],
  defaultLocale: 'sq',
  localePrefix: 'always',
})
