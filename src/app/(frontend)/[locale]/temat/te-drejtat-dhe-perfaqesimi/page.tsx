import { Link } from '@/i18n/navigation'
import { getTranslations } from '@/i18n/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('rights_title') }
}

export default async function TeDrejtatDhePerfaqesimiPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'topics.rights' })
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#7b1a1a] to-[#b82020] flex items-center justify-center">
          <svg className="w-32 h-32 md:w-48 md:h-48 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
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
              <h2>{t('political_title')}</h2>
              <p>{t('political_text')}</p>
              <h2>{t('legal_title')}</h2>
              <p>{t('legal_text')}</p>
              <h2>{t('diaspora_title')}</h2>
              <p>{t('diaspora_text')}</p>
              <h2>{t('cooperation_title')}</h2>
              <p>{t('cooperation_text')}</p>
            </article>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-bg-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-text">{t('key_facts')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('municipalities')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">100+</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('advocacy_cases')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">~500</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('partner_orgs')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">30+</dd>
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
