import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'
import { getMediaUrl } from '@/utilities/getMediaUrl'

type Locale = 'sq' | 'de' | 'fr' | 'it' | 'en'

function HeroSection({ t }: { t: (key: string) => string }) {
  return (
    <section className="relative bg-primary-dark text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm text-white/80">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              {t('hero_badge')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{t('hero_title')}</h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">{t('hero_subtitle')}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/aktivitete" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/90 transition-all hover:shadow-lg">
                {t('cta_activities')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/albforum" className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-accent-light transition-all hover:shadow-lg">
                {t('cta_albforum')}
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-6 w-72 shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-3">{t('main_sponsor')}</p>
              <a href="https://www.helsana.ch" target="_blank" rel="noopener noreferrer" className="block bg-[#b51867] rounded-lg px-6 py-4 text-center hover:opacity-90 transition-opacity">
                <span className="text-white text-3xl font-bold tracking-tight">Helsana</span>
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-3">{t('follow_us')}</p>
              <a href="https://www.facebook.com/bshz.ch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-lg transition-all group">
                <svg className="w-8 h-8 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900 truncate">BSHZ</div>
                  <div className="text-xs text-gray-500">35,011 {t('followers')}</div>
                </div>
                <svg className="w-4 h-4 text-gray-400 shrink-0 ml-auto group-hover:text-[#1877F2] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/regjistrimi" className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all">
            <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{t('cta_register')}</div>
              <div className="text-xs text-white/50">{t('register_subtitle')}</div>
            </div>
          </Link>
          <Link href="/newsletter" className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{t('cta_newsletter')}</div>
              <div className="text-xs text-white/50">{t('newsletter_subtitle')}</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'home' })
  const payload = await getPayload()

  const [newsResult, eventsResult] = await Promise.all([
    payload.find({ collection: 'news', limit: 3, sort: '-publishedAt', locale: locale as Locale, where: { _status: { equals: 'published' } } }),
    payload.find({ collection: 'events', limit: 3, sort: 'eventDate', locale: locale as Locale, where: { _status: { equals: 'published' }, eventDate: { greater_than_equal: new Date().toISOString() } } }),
  ])

  return (
    <>
      <HeroSection t={(key: string) => t(key)} />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:pt-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('news_label')}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-text">{t('latest_news')}</h2>
          </div>
          <Link href="/lajme" className="text-primary hover:text-primary-light text-sm font-semibold transition-colors hidden sm:block">{t('view_all')} &rarr;</Link>
        </div>
        {newsResult.docs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsResult.docs.map((article: any) => (
              <Link key={article.id} href={{ pathname: '/lajme/[slug]', params: { slug: article.slug } }} className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {article.featuredImage && typeof article.featuredImage === 'object' && (
                  <div className="aspect-video bg-bg-alt overflow-hidden">
                    <img src={getMediaUrl(article.featuredImage)} alt={article.featuredImage.alt || article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-6">
                  {article.publishedAt && <p className="text-text-muted text-xs font-medium mb-2">{formatDate(article.publishedAt, locale)}</p>}
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">{article.title}</h3>
                  {article.summary && <p className="text-text-light text-sm line-clamp-2 leading-relaxed">{article.summary}</p>}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-bg-alt rounded-2xl p-12 text-center"><p className="text-text-muted">{t('news_empty')}</p></div>
        )}
        <div className="sm:hidden mt-6 text-center">
          <Link href="/lajme" className="text-primary text-sm font-semibold">{t('view_all')} &rarr;</Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('topics_label')}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-text">{t('topics_title')}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/temat/shqiptaret-ne-zvicer" className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80 block">
            <div className="absolute inset-0 flex">
              <div className="w-1/2 h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/flag-albania.png" alt="Albanian flag" className="h-full w-full object-cover" />
              </div>
              <div className="w-1/2 h-full bg-[#ff0000] flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-2/5 h-3/5" xmlns="http://www.w3.org/2000/svg">
                  <rect x="13" y="6" width="6" height="20" fill="#fff" />
                  <rect x="6" y="13" width="20" height="6" fill="#fff" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-white text-xl md:text-2xl font-bold leading-snug">{t('topic_albanians')}</h3>
            </div>
          </Link>
          {/* Integration & Education — green */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1b4332] to-[#2d6a4f]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-32 h-32 text-white/15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 12c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zM38 38c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm44 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM30 62h60v4H30v-4zm8 10h44v4H38v-4zm8 10h28v4H46v-4zm-16 10h60v4H30v-4z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">{t('topic_integration')}</h3>
              <p className="text-white/70 text-sm mt-2">{t('topic_integration_desc')}</p>
            </div>
          </div>
          {/* Cultural Centres — navy blue */}
          <Link href="/temat/qendrat-kulturore" className="relative rounded-2xl overflow-hidden group cursor-pointer h-56 block">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a6e] to-[#2e2ea8]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-28 h-28 text-white/15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 10L20 35v5h80v-5L60 10zm-30 35v30h10V45H30zm15 0v30h10V45H45zm15 0v30h10V45H60zm15 0v30h10V45H75zm-55 35v10h80V80H20z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">{t('topic_culture')}</h3>
              <p className="text-white/70 text-sm mt-2">{t('topic_culture_desc')}</p>
            </div>
          </Link>
          {/* Youth & Sport — gold */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7b6b1a] to-[#b8960c]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-28 h-28 text-white/15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="30" r="14" />
                <path d="M40 52c-4 0-7 3-7 7v16c0 2 1.5 3.5 3.5 3.5H39v18c0 2 1.5 3.5 3.5 3.5h35c2 0 3.5-1.5 3.5-3.5v-18h2.5c2 0 3.5-1.5 3.5-3.5V59c0-4-3-7-7-7H40z" />
                <circle cx="94" cy="42" r="6" opacity="0.6" />
                <path d="M88 52h12c2 0 4 2 4 4v10h-4v12h-12V66h-4V56c0-2 2-4 4-4z" opacity="0.5" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">{t('topic_youth')}</h3>
              <p className="text-white/70 text-sm mt-2">{t('topic_youth_desc')}</p>
            </div>
          </div>
          {/* Rights & Representation — deep red */}
          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7b1a1a] to-[#b82020]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-28 h-28 text-white/15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M60 10c-2.2 0-4 1.8-4 4v6H42c-3.3 0-6 2.7-6 6v58c0 3.3 2.7 6 6 6h36c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6H64v-6c0-2.2-1.8-4-4-4zM50 36h20c1.1 0 2 .9 2 2s-.9 2-2 2H50c-1.1 0-2-.9-2-2s.9-2 2-2zm0 12h20c1.1 0 2 .9 2 2s-.9 2-2 2H50c-1.1 0-2-.9-2-2s.9-2 2-2zm0 12h12c1.1 0 2 .9 2 2s-.9 2-2 2H50c-1.1 0-2-.9-2-2s.9-2 2-2z" />
                <path d="M22 30c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h12V30H22zm64 0v60h12c3.3 0 6-2.7 6-6V36c0-3.3-2.7-6-6-6H86z" opacity="0.4" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">{t('topic_rights')}</h3>
              <p className="text-white/70 text-sm mt-2">{t('topic_rights_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{t('events_label')}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-text">{t('upcoming_events')}</h2>
            </div>
            <Link href="/aktivitete" className="text-primary hover:text-primary-light text-sm font-semibold transition-colors hidden sm:block">{t('view_all')} &rarr;</Link>
          </div>
          {eventsResult.docs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsResult.docs.map((event: any) => (
                <Link key={event.id} href={{ pathname: '/aktivitete/[slug]', params: { slug: event.slug } }} className="group block bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/5 rounded-xl p-3 text-center shrink-0 min-w-[60px]">
                      <div className="text-2xl font-bold text-primary leading-none">{new Date(event.eventDate).getDate()}</div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-primary/60 mt-1">
                        {new Date(event.eventDate).toLocaleDateString({ sq: 'sq', de: 'de', fr: 'fr', it: 'it', en: 'en' }[locale] || 'sq', { month: 'short' })}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-primary transition-colors leading-snug">{event.title}</h3>
                      {event.location && (
                        <p className="text-text-muted text-sm flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                          {event.location}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-border"><p className="text-text-muted">{t('events_empty')}</p></div>
          )}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('about_section_title')}</h2>
            <p className="text-white/70 leading-relaxed mb-6">{t('about_section_text')}</p>
            <Link href="/rreth-nesh" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/90 transition-all">
              {t('about_section_cta')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
