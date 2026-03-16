import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const prefix = `/${locale}`
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto">
      {/* Main footer */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo-crest.jpg"
                  alt="BSHZ"
                  className="w-10 h-12 object-contain"
                />
                <div>
                  <div className="text-base font-bold leading-tight">BSHZ</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest">Est. 1999</div>
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Bashkësia Shqiptare në Zvicër
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {{ sq: 'Navigimi', de: 'Navigation', fr: 'Navigation', it: 'Navigazione', en: 'Navigation' }[locale] || 'Navigation'}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href={`${prefix}/aktivitete`} className="text-white/60 hover:text-white transition-colors">{tNav('activities')}</Link></li>
                <li><Link href={`${prefix}/lajme`} className="text-white/60 hover:text-white transition-colors">{tNav('news')}</Link></li>
                <li><Link href={`${prefix}/fejton`} className="text-white/60 hover:text-white transition-colors">{tNav('feuilleton')}</Link></li>
                <li><Link href={`${prefix}/albforum`} className="text-white/60 hover:text-white transition-colors">{tNav('albforum')}</Link></li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {{ sq: 'Shërbime', de: 'Dienstleistungen', fr: 'Services', it: 'Servizi', en: 'Services' }[locale] || 'Services'}
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href={`${prefix}/newsletter`} className="text-white/60 hover:text-white transition-colors">{tNav('newsletter')}</Link></li>
                <li><Link href={`${prefix}/regjistrimi`} className="text-white/60 hover:text-white transition-colors">{tNav('register')}</Link></li>
                <li><Link href={`${prefix}/rreth-nesh`} className="text-white/60 hover:text-white transition-colors">{tNav('about')}</Link></li>
                <li><Link href={`${prefix}/kontakt`} className="text-white/60 hover:text-white transition-colors">{tNav('contact')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                {tNav('contact')}
              </h4>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <a href="tel:+41715081541" className="hover:text-white transition-colors">071 508 15 41</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <a href="mailto:info@bshz.ch" className="hover:text-white transition-colors">info@bshz.ch</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            &copy; {year} Bashkësia Shqiptare në Zvicër. {t('rights')}
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/bshz.ch" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
