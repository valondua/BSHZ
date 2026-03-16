import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })
  return { title: t('albforum_title') }
}

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
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4">{t('title')}</h1>
      <p className="text-text-light mb-10">{t('description')}</p>

      {(() => {
        const gradients = [
          'from-[#1a1a2e] via-[#16213e] to-[#0f3460]',
          'from-[#2d1b69] via-[#1e1245] to-[#11071f]',
          'from-[#0a3d62] via-[#1b5e7b] to-[#0a3d62]',
          'from-[#1a1a2e] via-[#2d1b69] to-[#0f3460]',
          'from-[#11071f] via-[#16213e] to-[#1e1245]',
        ]
        const placeholderIssues = [
          { id: 'p1', issueNumber: 1, title: 'ALBFORUM #1', description: `${t('issue')} 1 - ALBFORUM` },
          { id: 'p2', issueNumber: 2, title: 'ALBFORUM #2', description: `${t('issue')} 2 - ALBFORUM` },
          { id: 'p3', issueNumber: 3, title: 'ALBFORUM #3', description: `${t('issue')} 3 - ALBFORUM` },
          { id: 'p4', issueNumber: 4, title: 'ALBFORUM #4', description: `${t('issue')} 4 - ALBFORUM` },
          { id: 'p5', issueNumber: 5, title: 'ALBFORUM #5', description: `${t('issue')} 5 - ALBFORUM` },
          { id: 'p6', issueNumber: 6, title: 'ALBFORUM #6', description: `${t('issue')} 6 - ALBFORUM` },
        ]
        const issues = result.docs.length > 0 ? result.docs : placeholderIssues

        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue: any, idx: number) => {
              const pdfUrl =
                issue.pdfFile && typeof issue.pdfFile === 'object'
                  ? getMediaUrl(issue.pdfFile)
                  : null
              const isPlaceholder = result.docs.length === 0
              const gradient = gradients[idx % gradients.length]

              return (
                <div
                  key={issue.id}
                  className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {issue.coverImage && typeof issue.coverImage === 'object' ? (
                    <div className="aspect-[3/4] bg-bg-alt overflow-hidden">
                      <img
                        src={getMediaUrl(issue.coverImage)}
                        alt={issue.coverImage.alt || issue.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className={`aspect-[3/4] bg-gradient-to-br ${gradient} flex flex-col items-center justify-between relative overflow-hidden`}>
                      {/* Decorative newspaper lines */}
                      <div className="absolute inset-0 opacity-[0.07]">
                        <div className="absolute top-6 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute top-10 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute top-20 left-5 w-[45%] h-[2px] bg-white" />
                        <div className="absolute top-24 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute top-28 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute top-32 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute top-36 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute bottom-20 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute bottom-16 left-5 right-5 h-[1px] bg-white" />
                        <div className="absolute bottom-12 left-5 w-[60%] h-[1px] bg-white" />
                        {/* Column divider */}
                        <div className="absolute top-[40%] left-1/2 w-[1px] h-[35%] bg-white" />
                      </div>
                      {/* Top: masthead */}
                      <div className="relative z-10 w-full pt-8 px-5">
                        <div className="border-b border-white/20 pb-3 mb-3">
                          <div className="text-white/50 text-[10px] tracking-[0.3em] uppercase text-center">
                            {t('newspaper_subtitle')}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-bold text-2xl tracking-wide">ALBFORUM</div>
                        </div>
                      </div>
                      {/* Center: large issue number */}
                      <div className="relative z-10 flex-1 flex items-center justify-center">
                        <div className="text-white/[0.08] text-[120px] font-black leading-none select-none absolute">
                          {issue.issueNumber}
                        </div>
                        <div className="relative text-center">
                          <div className="text-white/60 text-xs tracking-[0.2em] uppercase mb-1">
                            {t('issue')}
                          </div>
                          <div className="text-white text-6xl font-black">#{issue.issueNumber}</div>
                        </div>
                      </div>
                      {/* Bottom bar */}
                      <div className="relative z-10 w-full pb-5 px-5">
                        <div className="border-t border-white/20 pt-3 flex items-center justify-between">
                          <div className="text-white/40 text-[10px] tracking-wider uppercase">BSHZ</div>
                          <div className="flex gap-1">
                            <div className="w-1 h-1 rounded-full bg-white/30" />
                            <div className="w-1 h-1 rounded-full bg-white/30" />
                            <div className="w-1 h-1 rounded-full bg-white/30" />
                          </div>
                        </div>
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
        )
      })()}
    </div>
  )
}
