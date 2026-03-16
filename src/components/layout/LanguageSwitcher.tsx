'use client'

import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    if (segments[1] === 'sq' || segments[1] === 'de') {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }
    // Hard navigation ensures the server layout re-renders with the correct locale messages
    window.location.href = segments.join('/') || `/${newLocale}`
  }

  return (
    <div className="flex items-center gap-0.5 text-xs">
      <button
        onClick={() => switchLocale('sq')}
        className={`px-2.5 py-1 rounded-full transition-all ${
          locale === 'sq'
            ? 'bg-white text-primary-dark font-bold'
            : 'text-white/60 hover:text-white'
        }`}
      >
        SQ
      </button>
      <span className="text-white/30">|</span>
      <button
        onClick={() => switchLocale('de')}
        className={`px-2.5 py-1 rounded-full transition-all ${
          locale === 'de'
            ? 'bg-white text-primary-dark font-bold'
            : 'text-white/60 hover:text-white'
        }`}
      >
        DE
      </button>
    </div>
  )
}
