import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('integration_title') }
}

export default async function IntegracioniDheArsimiPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'topics.integration' })
  const payload = await getPayload()
  const newsResult = await payload.find({
    collection: 'news',
    limit: 3,
    sort: '-publishedAt',
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
    where: { _status: { equals: 'published' } },
  })

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] flex items-center justify-center">
          <svg className="w-32 h-32 md:w-48 md:h-48 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-10">
          <div>
            <Link href="/" className="text-white/70 hover:text-white text-sm mb-3 inline-flex items-center gap-1 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              {t('home')}
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{t('title')}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <article className="prose prose-lg max-w-none">
              <h2>{t('overview_title')}</h2>
              <p>{t('overview_text')}</p>
              <h2>{t('language_title')}</h2>
              <p>{t('language_text')}</p>
              <h2>{t('training_title')}</h2>
              <p>{t('training_text')}</p>
              <h2>{t('programs_title')}</h2>
              <p>{t('programs_text')}</p>
              <h2>{t('bshz_title')}</h2>
              <p>{t('bshz_text')}</p>
            </article>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-bg-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-text">{t('key_facts')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('programs_offered')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">~20</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('languages')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">5</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('participants_year')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">~3,000</dd>
                </div>
              </dl>
            </div>

            <div className="bg-bg-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-text">{t('further_info')}</h3>
              <ul className="space-y-3">
                {[
                  { href: '/rreth-nesh' as const, label: t('about_bshz') },
                  { href: '/aktivitete' as const, label: t('our_activities') },
                  { href: '/kontakt' as const, label: t('contact_us') },
                  { href: '/regjistrimi' as const, label: t('become_member') },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-primary hover:text-primary-light text-sm font-medium transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {newsResult.docs.length > 0 && (
              <div className="bg-bg-alt rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4 text-text">{t('related_news')}</h3>
                <ul className="space-y-4">
                  {newsResult.docs.map((article: any) => (
                    <li key={article.id}>
                      <Link href={`/lajme/${article.slug}` as any} className="group block">
                        <h4 className="text-sm font-semibold text-text group-hover:text-primary transition-colors leading-snug">{article.title}</h4>
                        {article.publishedAt && <p className="text-xs text-text-muted mt-1">{formatDate(article.publishedAt, locale)}</p>}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/lajme" className="text-primary hover:text-primary-light text-sm font-semibold mt-4 inline-block transition-colors">
                  {t('all_news')} &rarr;
                </Link>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  )
}
