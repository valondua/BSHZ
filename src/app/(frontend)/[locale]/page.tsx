import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'
import { getMediaUrl } from '@/utilities/getMediaUrl'

type Locale = 'sq' | 'de' | 'fr' | 'it' | 'en'
type Texts = Record<Locale, string>

function tx(locale: string, texts: Texts): string {
  return texts[locale as Locale] || texts.sq
}

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
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6 text-sm text-white/80">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              {tx(locale, { sq: 'Organizata kryesore shqiptare ne Zvicër', de: 'Die albanische Dachorganisation in der Schweiz', fr: "L'organisation albanaise principale en Suisse", it: "L'organizzazione albanese principale in Svizzera", en: 'The leading Albanian organisation in Switzerland' })}
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
                href={`${prefix}/albforum`}
                className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-lg text-sm hover:bg-accent-light transition-all hover:shadow-lg"
              >
                {t('cta_albforum')}
              </Link>
            </div>
          </div>

          {/* Right sidebar: Sponsor + Facebook */}
          <div className="hidden lg:flex flex-col gap-6 w-72 shrink-0">
            {/* Main Sponsor */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-3">
                {tx(locale, { sq: 'Sponsori kryesor', de: 'Hauptsponsor', fr: 'Sponsor principal', it: 'Sponsor principale', en: 'Main sponsor' })}
              </p>
              <a
                href="https://www.helsana.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#b51867] rounded-lg px-6 py-4 text-center hover:opacity-90 transition-opacity"
              >
                <span className="text-white text-3xl font-bold tracking-tight">Helsana</span>
              </a>
            </div>

            {/* Facebook Follow */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50 mb-3">
                {tx(locale, { sq: 'Na ndiqni', de: 'Folgen Sie uns', fr: 'Suivez-nous', it: 'Seguiteci', en: 'Follow us' })}
              </p>
              <a
                href="https://www.facebook.com/bshz.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-lg transition-all group"
              >
                <svg className="w-8 h-8 text-[#1877F2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-gray-900 truncate">BSHZ</div>
                  <div className="text-xs text-gray-500">35,011 followers</div>
                </div>
                <svg className="w-4 h-4 text-gray-400 shrink-0 ml-auto group-hover:text-[#1877F2] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
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
              <div className="text-xs text-white/50">{tx(locale, { sq: 'Behu pjese e komunitetit', de: 'Werden Sie Mitglied', fr: 'Rejoignez la communaute', it: 'Entrate a far parte della comunita', en: 'Become part of the community' })}</div>
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
              <div className="text-xs text-white/50">{tx(locale, { sq: 'Merrni lajmet e fundit', de: 'Erhalten Sie aktuelle Nachrichten', fr: 'Recevez les dernieres nouvelles', it: 'Ricevete le ultime notizie', en: 'Get the latest news' })}</div>
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
      locale: locale as Locale,
      where: { _status: { equals: 'published' } },
    }),
    payload.find({
      collection: 'events',
      limit: 3,
      sort: 'eventDate',
      locale: locale as Locale,
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
              {tx(locale, { sq: 'Informohu', de: 'Informieren', fr: "S'informer", it: 'Informarsi', en: 'Stay informed' })}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              {tx(locale, { sq: 'Lajmet e fundit', de: 'Neueste Nachrichten', fr: 'Dernieres actualites', it: 'Ultime notizie', en: 'Latest news' })}
            </h2>
          </div>
          <Link href={`${prefix}/lajme`} className="text-primary hover:text-primary-light text-sm font-semibold transition-colors hidden sm:block">
            {tx(locale, { sq: 'Shiko te gjitha', de: 'Alle anzeigen', fr: 'Voir tout', it: 'Vedi tutto', en: 'View all' })} &rarr;
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
                      src={getMediaUrl(article.featuredImage)}
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
            <p className="text-text-muted">{tx(locale, { sq: 'Lajmet do te shtohen se shpejti.', de: 'Nachrichten werden in Kürze hinzugefügt.', fr: 'Les actualites seront ajoutees prochainement.', it: 'Le notizie saranno aggiunte presto.', en: 'News will be added soon.' })}</p>
          </div>
        )}

        <div className="sm:hidden mt-6 text-center">
          <Link href={`${prefix}/lajme`} className="text-primary text-sm font-semibold">
            {tx(locale, { sq: 'Shiko te gjitha', de: 'Alle anzeigen', fr: 'Voir tout', it: 'Vedi tutto', en: 'View all' })} &rarr;
          </Link>
        </div>
      </section>

      {/* Topics Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            {tx(locale, { sq: 'Temat kryesore', de: 'Schwerpunkte', fr: 'Themes principaux', it: 'Temi principali', en: 'Key topics' })}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-text">
            {tx(locale, { sq: 'Fushat e angazhimit tonë', de: 'Unsere Themenbereiche', fr: "Nos domaines d'engagement", it: 'I nostri ambiti di impegno', en: 'Our areas of engagement' })}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href={`${prefix}/temat/shqiptaret-ne-zvicer`} className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80 block">
            <img src="/images/topic-shqiptaret.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-white text-xl md:text-2xl font-bold leading-snug">
                {tx(locale, { sq: 'Shqiptaret në Zvicër', de: 'Albaner in der Schweiz', fr: 'Les Albanais en Suisse', it: 'Gli Albanesi in Svizzera', en: 'Albanians in Switzerland' })}
              </h3>
            </div>
          </Link>

          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-64 md:h-80">
            <img src="/images/topic-integracioni.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">
                {tx(locale, { sq: 'Integracioni dhe Arsimi', de: 'Integration und Bildung', fr: 'Integration et education', it: 'Integrazione e istruzione', en: 'Integration and Education' })}
              </h3>
              <p className="text-white/70 text-sm mt-2">
                {tx(locale, { sq: 'Mbështetja e integrimit dhe arsimit të komunitetit', de: 'Unterstützung bei Integration und Bildung', fr: "Soutien a l'integration et a l'education", it: "Sostegno all'integrazione e all'istruzione della comunita", en: 'Supporting community integration and education' })}
              </p>
            </div>
          </div>

          <Link href={`${prefix}/temat/qendrat-kulturore`} className="relative rounded-2xl overflow-hidden group cursor-pointer h-56 block">
            <img src="/images/topic-kultura.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">
                {tx(locale, { sq: 'Qendrat Kulturore', de: 'Kulturzentren', fr: 'Centres culturels', it: 'Centri culturali', en: 'Cultural Centres' })}
              </h3>
              <p className="text-white/70 text-sm mt-2">
                {tx(locale, { sq: 'Qendrat Kulturore Shqiptare në Zvicër', de: 'Albanische Kulturzentren in der Schweiz', fr: 'Centres culturels albanais en Suisse', it: 'Centri culturali albanesi in Svizzera', en: 'Albanian Cultural Centres in Switzerland' })}
              </p>
            </div>
          </Link>

          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-56">
            <img src="/images/topic-rinia.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">
                {tx(locale, { sq: 'Rinia dhe Sporti', de: 'Jugend und Sport', fr: 'Jeunesse et sport', it: 'Gioventu e sport', en: 'Youth and Sport' })}
              </h3>
              <p className="text-white/70 text-sm mt-2">
                {tx(locale, { sq: 'Aktivitete për të rinjtë e komunitetit', de: 'Aktivitäten für die Jugend der Gemeinschaft', fr: 'Activites pour les jeunes de la communaute', it: 'Attivita per i giovani della comunita', en: 'Activities for community youth' })}
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden group cursor-pointer h-56">
            <img src="/images/topic-tedrejtat.png" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-bold leading-snug">
                {tx(locale, { sq: 'Të drejtat dhe Përfaqësimi', de: 'Rechte und Vertretung', fr: 'Droits et representation', it: 'Diritti e rappresentanza', en: 'Rights and Representation' })}
              </h3>
              <p className="text-white/70 text-sm mt-2">
                {tx(locale, { sq: 'Mbrojtja e të drejtave të diasporës shqiptare', de: 'Schutz der Rechte der albanischen Diaspora', fr: 'Protection des droits de la diaspora albanaise', it: 'Protezione dei diritti della diaspora albanese', en: 'Protecting the rights of the Albanian diaspora' })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-bg-alt border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                {tx(locale, { sq: 'Kalendari', de: 'Kalender', fr: 'Calendrier', it: 'Calendario', en: 'Calendar' })}
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                {tx(locale, { sq: 'Aktivitetet e ardhshme', de: 'Kommende Aktivitäten', fr: 'Prochaines activites', it: 'Prossime attivita', en: 'Upcoming activities' })}
              </h2>
            </div>
            <Link href={`${prefix}/aktivitete`} className="text-primary hover:text-primary-light text-sm font-semibold transition-colors hidden sm:block">
              {tx(locale, { sq: 'Shiko te gjitha', de: 'Alle anzeigen', fr: 'Voir tout', it: 'Vedi tutto', en: 'View all' })} &rarr;
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
                        {new Date(event.eventDate).toLocaleDateString({ sq: 'sq', de: 'de', fr: 'fr', it: 'it', en: 'en' }[locale] || 'sq', { month: 'short' })}
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
              <p className="text-text-muted">{tx(locale, { sq: 'Aktivitetet do te shtohen se shpejti.', de: 'Aktivitäten werden in Kürze hinzugefügt.', fr: 'Les activites seront ajoutees prochainement.', it: 'Le attivita saranno aggiunte presto.', en: 'Activities will be added soon.' })}</p>
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
              {tx(locale, { sq: 'Rreth Bashkësisë Shqiptare', de: 'Über die Albanische Gemeinschaft', fr: 'A propos de la Communaute albanaise', it: 'Informazioni sulla Comunita albanese', en: 'About the Albanian Community' })}
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              {tx(locale, { sq: 'Bashkësia Shqiptare në Zvicër është organizata kryesore që përfaqëson interesat e komunitetit shqiptar në Zvicër. Ne punojmë për integrimin, kulturën dhe ruajtjen e identitetit kombëtar.', de: 'Die Albanische Gemeinschaft in der Schweiz ist die führende Organisation, die die Interessen der albanischen Gemeinschaft in der Schweiz vertritt.', fr: "La Communaute albanaise en Suisse est la principale organisation representant les interets de la communaute albanaise en Suisse. Nous oeuvrons pour l'integration, la culture et la preservation de l'identite nationale.", it: "La Comunita albanese in Svizzera e l'organizzazione principale che rappresenta gli interessi della comunita albanese in Svizzera. Lavoriamo per l'integrazione, la cultura e la preservazione dell'identita nazionale.", en: 'The Albanian Community in Switzerland is the leading organisation representing the interests of the Albanian community in Switzerland. We work for integration, culture and the preservation of national identity.' })}
            </p>
            <Link
              href={`${prefix}/rreth-nesh`}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg text-sm hover:bg-white/90 transition-all"
            >
              {tx(locale, { sq: 'Lexo me shume', de: 'Mehr erfahren', fr: 'En savoir plus', it: 'Scopri di piu', en: 'Learn more' })}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
