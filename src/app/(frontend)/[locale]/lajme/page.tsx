import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export default async function NewsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { locale } = await params
  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1
  const t = await getTranslations({ locale, namespace: 'news' })
  const payload = await getPayload()


  const result = await payload.find({
    collection: 'news',
    limit: 12,
    page: currentPage,
    sort: '-publishedAt',
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
    where: { _status: { equals: 'published' } },
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      {result.docs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.docs.map((article: any) => (
              <Link
                key={article.id}
                href={{ pathname: '/lajme/[slug]', params: { slug: article.slug } }}
                className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {article.featuredImage && typeof article.featuredImage === 'object' && (
                  <div className="aspect-video bg-bg-alt overflow-hidden">
                    <img
                      src={getMediaUrl(article.featuredImage)}
                      alt={article.featuredImage.alt || article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  {article.summary && (
                    <p className="text-text-light text-sm line-clamp-2">{article.summary}</p>
                  )}
                  {article.publishedAt && (
                    <p className="text-text-light text-xs mt-3">{formatDate(article.publishedAt, locale)}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {result.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: result.totalPages }, (_, i) => i + 1).map((page) => (
                <Link
                  key={page}
                  href={`/lajme?page=${page}` as any}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-primary text-white'
                      : 'bg-bg-alt text-text hover:bg-border'
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <p className="text-text-light">{t('no_articles')}</p>
      )}
    </div>
  )
}
