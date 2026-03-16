import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { RichText } from '@/components/RichText'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('about_title') }
}

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
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
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
          <p className="text-text-light text-lg">{t('content_coming_soon')}</p>
        </div>
      )}

      <div className="mt-12 prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-6">{t('vm_section_title')}</h2>

        <h3 className="text-xl font-semibold mt-8 mb-3">{t('vm_vision_title')}</h3>
        <p>{t('vm_vision_text')}</p>

        <h3 className="text-xl font-semibold mt-8 mb-3">{t('vm_mission_title')}</h3>
        <p>{t('vm_mission_p1')}</p>
        <p>{t('vm_mission_p2')}</p>
        <p>{t('vm_mission_p3')}</p>
      </div>
    </div>
  )
}
