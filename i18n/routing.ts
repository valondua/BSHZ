import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['sq', 'de'],
  defaultLocale: 'sq',
  localePrefix: 'always',
})
