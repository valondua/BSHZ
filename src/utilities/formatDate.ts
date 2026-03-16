export function formatDate(date: string | Date, locale: string = 'sq'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  const localeMap: Record<string, string> = { sq: 'sq-AL', de: 'de-CH', fr: 'fr-CH', it: 'it-CH', en: 'en-GB' }
  return d.toLocaleDateString(localeMap[locale] || 'sq-AL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
