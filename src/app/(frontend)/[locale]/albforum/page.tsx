import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'

export default async function AlbforumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'albforum' })
  const payload = await getPayload()

  const result = await payload.find({
    collection: 'albforum-issues',
    limit: 100,
    sort: '-issueNumber',
    locale: locale as 'sq' | 'de',
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-text-light mb-10">{t('description')}</p>

      {result.docs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {result.docs.map((issue: any) => {
            const pdfUrl =
              issue.pdfFile && typeof issue.pdfFile === 'object'
                ? `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${issue.pdfFile.filename}`
                : null

            return (
              <div
                key={issue.id}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                {issue.coverImage && typeof issue.coverImage === 'object' ? (
                  <div className="aspect-[3/4] bg-bg-alt overflow-hidden">
                    <img
                      src={`${process.env.NEXT_PUBLIC_SERVER_URL}/media/${issue.coverImage.filename}`}
                      alt={issue.coverImage.alt || issue.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-[3/4] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-5xl font-bold mb-2">Nr. {issue.issueNumber}</div>
                      <div className="text-lg">ALBFORUM</div>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <h2 className="font-semibold text-lg mb-2">{issue.title}</h2>
                  {issue.description && (
                    <p className="text-text-light text-sm mb-3">{issue.description}</p>
                  )}
                  {issue.publishedAt && (
                    <p className="text-text-light text-xs mb-4">{formatDate(issue.publishedAt, locale)}</p>
                  )}
                  {pdfUrl && (
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-light transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      {t('download')}
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📰</div>
          <p className="text-text-light text-lg">
            {locale === 'sq'
              ? 'Numrat e ALBFORUM do të shtohen së shpejti.'
              : 'ALBFORUM-Ausgaben werden in Kürze hinzugefügt.'}
          </p>
        </div>
      )}
    </div>
  )
}
