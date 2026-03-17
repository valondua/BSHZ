import { getTranslations } from '@/i18n/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('insurance_title') }
}

export default async function SigurimiKolektivPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'insurance' })

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="prose prose-lg max-w-none space-y-6">
        <p>{t('intro')}</p>

        <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-r-lg">
          <p className="font-semibold text-accent mb-1">20% {t('discount_label')} &mdash; KN30001072</p>
          <p className="text-sm text-text-light">{t('discount')}</p>
        </div>

        <p>{t('how_to')}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="mailto:info@bshz.ch"
            className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@bshz.ch
          </a>
        </div>

        <p className="text-text-light italic">{t('financing')}</p>

        <div className="bg-gold/10 border border-gold/30 p-4 rounded-lg">
          <p className="text-sm font-medium">{t('note')}</p>
        </div>

        <h2 className="text-2xl font-bold mt-10">{t('companies_title')}</h2>
        <p>{t('companies_text')}</p>
      </div>
    </div>
  )
}
