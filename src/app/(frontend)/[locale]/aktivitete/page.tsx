import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'

export default async function ActivitiesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ page?: string }>
}) {
  const { locale } = await params
  const { page: pageParam } = await searchParams
  const currentPage = Number(pageParam) || 1
  const t = await getTranslations({ locale, namespace: 'activities' })
  const payload = await getPayload()
  const prefix = `/${locale}`

  const result = await payload.find({
    collection: 'events',
    limit: 12,
    page: currentPage,
    sort: '-eventDate',
    locale: locale as 'sq' | 'de',
    where: { _status: { equals: 'published' } },
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>

      {result.docs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {result.docs.map((event: any) => (
              <Link
                key={event.id}
                href={`${prefix}/aktivitete/${event.slug}`}
                className="group block bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {event.featuredImage && typeof event.featuredImage === 'object' && (
                  <div className="aspect-video bg-bg-alt overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${event.featuredImage.filename}`}
                      alt={event.featuredImage.alt || event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="text-primary text-sm font-medium mb-2">
                    {formatDate(event.eventDate, locale)}
                  </div>
                  <h2 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h2>
                  {event.location && (
                    <p className="text-text-light text-sm flex items-center gap-1">
                      <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </p>
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
                  href={`${prefix}/aktivitete?page=${page}`}
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
        <p className="text-text-light">{t('no_events')}</p>
      )}
    </div>
  )
}
