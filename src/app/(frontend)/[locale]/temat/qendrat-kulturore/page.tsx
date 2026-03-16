import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('culture_title') }
}

export default async function QendratKulturorePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'topics.culture' })

  const projectItems = t('project_items').split('|')

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src="/images/topic-kultura.png" alt={t('title')} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
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
              <h2>{t('title')}</h2>
              <p>{t('intro_1')}</p>
              <p>{t('intro_2')}</p>
              <p>{t('intro_3')}</p>
              <p>{t('intro_4')}</p>

              <h2>{t('vision_title')}</h2>
              <p>{t('vision_1')}</p>
              <p>{t('vision_2')}</p>
              <p>{t('vision_3')}</p>

              <h2>{t('project_title')}</h2>
              <p>{t('project_intro')}</p>
              <ol>
                {projectItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>

              <h2>{t('arch_title')}</h2>
              <p>{t('arch_author')}</p>
              <p>{t('arch_intro')}</p>
              <p>{t('arch_phase')}</p>

              <h3>{t('parcel_title')}</h3>
              <p>{t('parcel_text')}</p>
              <p>{t('parcel_zones')}</p>
              <ol>
                <li>{t('parcel_zone1')}</li>
                <li>{t('parcel_zone2')}</li>
              </ol>

              <h3>{t('building_title')}</h3>
              <p>{t('building_text')}</p>
              <p>{t('building_facade')}</p>

              <h3>{t('ground_title')}</h3>
              <p>{t('ground_text_1')}</p>
              <p>{t('ground_text_2')}</p>

              <h3>{t('floor1_title')}</h3>
              <p>{t('floor1_text_1')}</p>
              <p>{t('floor1_text_2')}</p>

              <h3>{t('floor2_title')}</h3>
              <p>{t('floor2_text_1')}</p>
              <p>{t('floor2_text_2')}</p>

              <h2>{t('areas_title')}</h2>
              <p className="font-semibold">{t('areas_total')}</p>
            </article>
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <div className="bg-bg-alt rounded-2xl p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-text">{t('key_facts')}</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('total_area')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">4,200 m&sup2;</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('visitors_year')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">~50,000</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('hall_capacity')}</dt>
                  <dd className="text-sm text-text mt-1">{t('hall_capacity_value')}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('parking')}</dt>
                  <dd className="text-sm text-text mt-1">~100</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">{t('year_initiative')}</dt>
                  <dd className="text-2xl font-bold text-primary mt-1">2018</dd>
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
          </aside>
        </div>
      </div>
    </>
  )
}
