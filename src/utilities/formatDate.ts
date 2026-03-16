export function formatDate(date: string | Date, locale: string = 'sq'): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString(locale === 'sq' ? 'sq-AL' : 'de-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
