'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    if (['sq', 'de', 'fr'].includes(segments[1])) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }
    // Hard navigation ensures the server layout re-renders with the correct locale messages
    window.location.href = segments.join('/') || `/${newLocale}`
  }

  const locales = ['sq', 'de', 'fr'] as const

  return (
    <div className="flex items-center gap-0.5 text-xs">
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="text-white/30">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`px-2.5 py-1 rounded-full transition-all ${
              locale === loc
                ? 'bg-white text-primary-dark font-bold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {loc.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
