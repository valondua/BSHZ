'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'

const navLinks: { key: string; href: string; external?: boolean }[] = [
  { key: 'activities', href: '/aktivitete' },
  { key: 'news', href: '/lajme' },
  { key: 'feuilleton', href: '/fejton' },
  { key: 'albforum', href: '/albforum' },
  { key: 'insurance', href: '/sigurimi-kolektiv' },
  { key: 'register', href: '/regjistrimi' },
  { key: 'statuti', href: '/statuti' },
  { key: 'about', href: '/rreth-nesh' },
  { key: 'contact', href: '/kontakt' },
]

export function Header() {
  const t = useTranslations('nav')
  const locale = useLocale()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const prefix = `/${locale}`

  const isActive = (href: string) => {
    const full = `${prefix}${href}`
    if (href === '/') return pathname === prefix || pathname === `${prefix}/`
    return pathname.startsWith(full)
  }

  return (
    <>
      {/* Top accent stripe */}
      <div className="h-1 bg-gradient-to-r from-accent via-gold to-primary" />

      {/* Utility bar */}
      <div className="bg-primary-dark text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-4">
            <a href="tel:+41715081541" className="hover:text-white transition-colors flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              071 508 15 41
            </a>
            <a href="mailto:info@bshz.ch" className="hover:text-white transition-colors hidden sm:flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@bshz.ch
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logo */}
            <Link href={`${prefix}/`} className="flex items-center gap-3 group shrink-0">
              <img
                src="/logo-crest.jpg"
                alt="BSHZ"
                className="w-10 h-12 lg:w-12 lg:h-14 object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-base font-bold text-primary leading-tight tracking-tight">BSHZ</div>
                <div className="text-[10px] text-text-muted uppercase tracking-[0.15em] leading-tight">Bashkësia Shqiptare në Zvicër</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative px-3 xl:px-3.5 py-2 text-[13px] font-medium transition-colors text-text-light hover:text-primary"
                  >
                    {t(link.key)}
                  </a>
                ) : (
                  <Link
                    key={link.key}
                    href={`${prefix}${link.href}`}
                    className={`relative px-3 xl:px-3.5 py-2 text-[13px] font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-accent'
                        : 'text-text-light hover:text-primary'
                    }`}
                  >
                    {t(link.key)}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                    )}
                  </Link>
                ),
              )}
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 -mr-2 text-text hover:text-primary rounded-lg hover:bg-bg-alt transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav overlay */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-white shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-3 space-y-0.5">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.key}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors text-text hover:bg-bg-alt hover:text-primary"
                  >
                    {t(link.key)}
                  </a>
                ) : (
                  <Link
                    key={link.key}
                    href={`${prefix}${link.href}`}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'bg-accent/10 text-accent font-semibold'
                        : 'text-text hover:bg-bg-alt hover:text-primary'
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                ),
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
