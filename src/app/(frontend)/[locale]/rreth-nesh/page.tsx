import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { RichText } from '@/components/RichText'

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  const payload = await getPayload()

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'rreth-nesh' } },
    locale: locale as 'sq' | 'de',
    limit: 1,
  })

  const page = result.docs[0]

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{page?.title as string || t('title')}</h1>

      {page?.content ? (
        <div className="prose prose-lg max-w-none">
          <RichText content={page.content as any} />
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-text-light text-lg">
            {locale === 'sq'
              ? 'Përmbajtja do të shtohet së shpejti.'
              : 'Inhalt wird in Kürze hinzugefügt.'}
          </p>
        </div>
      )}
    </div>
  )
}
