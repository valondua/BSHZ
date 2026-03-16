import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'

function HeroSection({ t, locale }: { t: (key: string) => string; locale: string }) {
  const prefix = `/${locale}`

  return (
    <section className="relative bg-primary-dark text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm text-white/80">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            {locale === 'sq' ? 'Organizata kryesore shqiptare ne Zvicër' : 'Die albanische Dachorganisation in der Schweiz'}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {t('hero_title')}
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
            {t('hero_subtitle')}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`${prefix}/aktivitete`}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/90 transition-all hover:shadow-lg"
            >
              {t('cta_activities')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link
              href={`${prefix}/lajme`}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg text-sm border border-white/20 hover:bg-white/20 transition-all"
            >
              {t('cta_news')}
            </Link>
            <Link
              href={`${prefix}/albforum`}
              className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-accent-light transition-all hover:shadow-lg"
            >
              {t('cta_albforum')}
            </Link>
          </div>
        </div>
      </div>

      {/* Quick action cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href={`${prefix}/regjistrimi`}
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all"
          >
            <div className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" /></svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{t('cta_register')}</div>
              <div className="text-xs text-white/50">{locale === 'sq' ? 'Behu pjese e komunitetit' : 'Werden Sie Mitglied'}</div>
            </div>
          </Link>
          <Link
            href={`${prefix}/newsletter`}
            className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-all"
          >
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-accent-light" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{t('cta_newsletter')}</div>
              <div className="text-xs text-white/50">{locale === 'sq' ? 'Merrni lajmet e fundit' : 'Erhalten Sie aktuelle Nachrichten'}</div>
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
    payload.find({
      collection: 'news',
      limit: 3,
      sort: '-publishedAt',
      locale: locale as 'sq' | 'de',
      where: { _status: { equals: 'published' } },
    }),
    payload.find({
      collection: 'events',
      limit: 3,
      sort: 'eventDate',
      locale: locale as 'sq' | 'de',
      where: {
        _status: { equals: 'published' },
        eventDate: { greater_than_equal: new Date().toISOString() },
      },
    }),
  ])

  const prefix = `/${locale}`

  return (
    <>
      <HeroSection t={(key: string) => t(key)} locale={locale} />

      {/* Latest News */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:pt-24">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              {locale === 'sq' ? 'Informohu' : 'Informieren'}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              {locale === 'sq' ? 'Lajmet e fundit' : 'Neueste Nachrichten'}
            </h2>
          </div>
          <Link href={`${prefix}/lajme`} className="text-primary hover:text-primary-light text-sm font-semibold transition-colors hidden sm:block">
            {locale === 'sq' ? 'Shiko te gjitha' : 'Alle anzeigen'} &rarr;
          </Link>
        </div>

        {newsResult.docs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsResult.docs.map((article: any) => (
              <Link
                key={article.id}
                href={`${prefix}/lajme/${article.slug}`}
                className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {article.featuredImage && typeof article.featuredImage === 'object' && (
                  <div className="aspect-video bg-bg-alt overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${article.featuredImage.filename}`}
                      alt={article.featuredImage.alt || article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  {article.publishedAt && (
                    <p className="text-text-muted text-xs font-medium mb-2">{formatDate(article.publishedAt, locale)}</p>
                  )}
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  {article.summary && (
                    <p className="text-text-light text-sm line-clamp-2 leading-relaxed">{article.summary}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-bg-alt rounded-2xl p-12 text-center">
            <p className="text-text-muted">{locale === 'sq' ? 'Lajmet do te shtohen se shpejti.' : 'Nachrichten werden in Kürze hinzugefügt.'}</p>
          </div>
        )}

        <div className="sm:hidden mt-6 text-center">
          <Link href={`${prefix}/lajme`} className="text-primary text-sm font-semibold">
            {locale === 'sq' ? 'Shiko te gjitha' : 'Alle anzeigen'} &rarr;
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                {locale === 'sq' ? 'Kalendari' : 'Kalender'}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                {locale === 'sq' ? 'Aktivitetet e ardhshme' : 'Kommende Aktivitäten'}
              </h2>
            </div>
            <Link href={`${prefix}/aktivitete`} className="text-primary hover:text-primary-light text-sm font-semibold transition-colors hidden sm:block">
              {locale === 'sq' ? 'Shiko te gjitha' : 'Alle anzeigen'} &rarr;
            </Link>
          </div>

          {eventsResult.docs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsResult.docs.map((event: any) => (
                <Link
                  key={event.id}
                  href={`${prefix}/aktivitete/${event.slug}`}
                  className="group block bg-white rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/5 rounded-xl p-3 text-center shrink-0 min-w-[60px]">
                      <div className="text-2xl font-bold text-primary leading-none">
                        {new Date(event.eventDate).getDate()}
                      </div>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-primary/60 mt-1">
                        {new Date(event.eventDate).toLocaleDateString(locale === 'sq' ? 'sq' : 'de', { month: 'short' })}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 group-hover:text-primary transition-colors leading-snug">
                        {event.title}
                      </h3>
                      {event.location && (
                        <p className="text-text-muted text-sm flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {event.location}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-12 text-center border border-border">
              <p className="text-text-muted">{locale === 'sq' ? 'Aktivitetet do te shtohen se shpejti.' : 'Aktivitäten werden in Kürze hinzugefügt.'}</p>
            </div>
          )}
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {locale === 'sq' ? 'Rreth Bashkësisë Shqiptare' : 'Über die Albanische Gemeinschaft'}
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              {locale === 'sq'
                ? 'Bashkësia Shqiptare në Zvicër është organizata kryesore që përfaqëson interesat e komunitetit shqiptar në Zvicër. Ne punojmë për integrimin, kulturën dhe ruajtjen e identitetit kombëtar.'
                : 'Die Albanische Gemeinschaft in der Schweiz ist die führende Organisation, die die Interessen der albanischen Gemeinschaft in der Schweiz vertritt.'}
            </p>
            <Link
              href={`${prefix}/rreth-nesh`}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/90 transition-all"
            >
              {locale === 'sq' ? 'Lexo me shume' : 'Mehr erfahren'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
