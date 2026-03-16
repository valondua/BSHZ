'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale })
  }

  const locales = ['sq', 'de', 'fr', 'it', 'en'] as const

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
