import { Link } from '@/i18n/navigation'
import { getTranslations } from '@/i18n/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('albanians_title') }
}

export default async function ShqiptaretNeZvicerPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'topics.albanians' })
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
        <div className="absolute inset-0 flex">
          <div className="w-1/2 h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/flag-albania.png" alt="Albanian flag" className="h-full w-full object-cover object-center" />
          </div>
          <div className="w-1/2 h-full bg-[#ff0000] flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-3/5 h-4/5" xmlns="http://www.w3.org/2000/svg">
              <rect x="13" y="6" width="6" height="20" fill="#fff" />
              <rect x="6" y="13" width="20" height="6" fill="#fff" />
            </svg>
          </div>
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
              <h2>{t('community_title')}</h2>
              <p>{t('community_text')}</p>
              <h2>{t('history_title')}</h2>
              <p>{t('history_text')}</p>
              <h2>{t('integration_title')}</h2>
              <p>{t('integration_text')}</p>
              <h2>{t('bshz_title')}</h2>
              <p>{t('bshz_text')}</p>
            </article>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-bg-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-text">{t('key_facts')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('population')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">~250,000</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('countries')}</dt>
                  <dd className="text-sm text-text mt-1">{t('countries_list')}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('main_cantons')}</dt>
                  <dd className="text-sm text-text mt-1">{t('cantons_list')}</dd>
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
