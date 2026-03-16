import { getTranslations } from 'next-intl/server'

export default async function StatutiPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'statuti' })

  const sections = t('sections').split('|')

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-6">{t('program_subtitle')}</h2>

        <p className="font-medium text-primary-dark">{t('program_intro')}</p>

        {sections.map((text, i) => (
          <p key={i}>{text}</p>
        ))}

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-6">{t('history_subtitle')}</h2>
        <p>{t('history_text')}</p>
        <p>{t('current_statute')}</p>
        <p>{t('cooperation')}</p>

        <p className="mt-8 text-sm text-text-muted font-medium">
          {t('dates')}
        </p>
      </div>
    </div>
  )
}
