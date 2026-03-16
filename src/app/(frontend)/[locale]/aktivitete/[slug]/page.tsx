import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import { getPayload } from '@/utilities/getPayload'
import { formatDate } from '@/utilities/formatDate'
import { RichText } from '@/components/RichText'
import { getMediaUrl } from '@/utilities/getMediaUrl'

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: 'activities' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const payload = await getPayload()


  const result = await payload.find({
    collection: 'events',
    where: { slug: { equals: slug } },
    locale: locale as 'sq' | 'de' | 'fr' | 'it' | 'en',
    limit: 1,
  })

  const event = result.docs[0]
  if (!event) notFound()

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/aktivitete" className="text-primary hover:underline text-sm mb-6 inline-block">
        &larr; {tCommon('back')}
      </Link>

      {event.featuredImage && typeof event.featuredImage === 'object' && (
        <div className="aspect-video rounded-xl overflow-hidden mb-8">
          <img
            src={getMediaUrl(event.featuredImage as any)}
            alt={(event.featuredImage as any).alt || (event.title as string)}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{event.title as string}</h1>

      <div className="flex flex-wrap gap-4 text-sm text-text-light mb-8">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatDate(event.eventDate as string, locale)}
        </span>
        {event.location && (
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {event.location as string}
          </span>
        )}
      </div>

      {event.registrationLink && (
        <a
          href={event.registrationLink as string}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light transition-colors mb-8"
        >
          {t('register')}
        </a>
      )}

      <div className="prose prose-lg max-w-none">
        <RichText content={event.description as any} />
      </div>
    </article>
  )
}
