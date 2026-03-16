import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'
import { RichText } from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export default async function FeuilletonArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'feuilleton' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const payload = await getPayload()
  const prefix = `/${locale}`

  const result = await payload.find({
    collection: 'feuilleton',
    where: { slug: { equals: slug } },
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
    limit: 1,
  })

  const article = result.docs[0]
  if (!article) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href={`${prefix}/fejton`} className="text-primary hover:underline text-sm mb-6 inline-block">
        &larr; {tCommon('back')}
      </Link>

      {article.featuredImage && typeof article.featuredImage === 'object' && (
        <div className="aspect-video rounded-xl overflow-hidden mb-8">
          <img
            src={getMediaUrl(article.featuredImage as any)}
            alt={(article.featuredImage as any).alt || (article.title as string)}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title as string}</h1>

      <div className="flex gap-4 text-sm text-text-light mb-8">
        {article.author && <span>{t('by')} {article.author}</span>}
        {article.publishedAt && <span>{formatDate(article.publishedAt, locale)}</span>}
      </div>

      <div className="prose prose-lg max-w-none">
        <RichText content={article.content as any} />
      </div>
    </article>
  )
}
