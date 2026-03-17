import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { getTranslations } from '@/i18n/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'
import { RichText } from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'common' })
  const payload = await getPayload()


  const result = await payload.find({
    collection: 'news',
    where: { slug: { equals: slug } },
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
    limit: 1,
  })

  const article = result.docs[0]
  if (!article) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/lajme" className="text-primary hover:underline text-sm mb-6 inline-block">
        &larr; {t('back')}
      </Link>

      {article.featuredImage && typeof article.featuredImage === 'object' && (
        <div className="aspect-video rounded-xl overflow-hidden mb-8">
          <img
            src={getMediaUrl(article.featuredImage)}
            alt={(article.featuredImage as any).alt || (article.title as string)}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title as string}</h1>

      {article.publishedAt && (
        <p className="text-text-light text-sm mb-8">{formatDate(article.publishedAt, locale)}</p>
      )}

      <div className="prose prose-lg max-w-none">
        <RichText content={article.content} />
      </div>
    </article>
  )
}
