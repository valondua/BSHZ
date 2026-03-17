import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import { sql } from 'drizzle-orm'
import config from '@payload-config'

// Temporary seed secret - will be removed after seeding
const SEED_SECRET = 'bshz-temp-seed-2024-remove-after-use'
function checkSecret(secret: string) {
  return secret === process.env.PAYLOAD_SECRET || secret === SEED_SECRET
}

export async function PUT(request: Request) {
  try {
    const { secret, email, password, action, updates } = await request.json()
    if (!checkSecret(secret)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await getPayload({ config })

    // Bulk translation update via direct SQL
    if (action === 'translate') {
      const results = []

      // Discovery mode: list tables/columns/enums
      if (updates.length === 1 && updates[0].id === 0) {
        const enums = await payload.db.drizzle.execute(
          sql`SELECT typname, enumlabel FROM pg_enum JOIN pg_type ON pg_enum.enumtypid = pg_type.oid ORDER BY typname, enumsortorder`
        )
        const sample = await payload.db.drizzle.execute(
          sql`SELECT id, _locale, _parent_id, LEFT(title, 40) as title_preview FROM news_locales LIMIT 10`
        )
        return NextResponse.json({ enums: enums.rows, sample: sample.rows })
      }

      for (const update of updates) {
        try {
          const { id, locale, title, summary } = update

          // Cast locale to enum type and use raw SQL for locale comparison
          const existing = await payload.db.drizzle.execute(
            sql`SELECT id FROM news_locales WHERE _parent_id = ${id} AND _locale = ${sql.raw(`'${locale}'::_locales`)}`
          )

          if (existing.rows && existing.rows.length > 0) {
            await payload.db.drizzle.execute(
              sql`UPDATE news_locales SET title = ${title}, summary = ${summary || ''} WHERE _parent_id = ${id} AND _locale = ${sql.raw(`'${locale}'::_locales`)}`
            )
            results.push({ id, locale, status: 'updated' })
          } else {
            // Get the SQ content to use as base for the new locale
            const sqRow = await payload.db.drizzle.execute(
              sql`SELECT content FROM news_locales WHERE _parent_id = ${id} AND _locale = 'sq'::_locales`
            )
            const sqContent = (sqRow.rows as any)?.[0]?.content
            const contentStr = typeof sqContent === 'string' ? sqContent : JSON.stringify(sqContent || '{}')

            await payload.db.drizzle.execute(
              sql`INSERT INTO news_locales (title, summary, content, _locale, _parent_id) VALUES (${title}, ${summary || ''}, ${contentStr}::jsonb, ${sql.raw(`'${locale}'::_locales`)}, ${id})`
            )
            results.push({ id, locale, status: 'created' })
          }
        } catch (e) {
          results.push({ id: update.id, locale: update.locale, status: 'error', error: String(e).substring(0, 300) })
        }
      }

      return NextResponse.json({ success: true, results })
    }

    // Original user create/update logic
    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: email } },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      await payload.update({
        collection: 'users',
        id: existing.docs[0].id,
        data: { password, role: 'admin' },
      })
      return NextResponse.json({ success: true, action: 'updated', email })
    } else {
      await payload.create({
        collection: 'users',
        data: { email, password, role: 'admin' },
      })
      return NextResponse.json({ success: true, action: 'created', email })
    }
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const { secret, articles } = await request.json()
    if (!checkSecret(secret)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await getPayload({ config })
    const results = []

    for (const article of articles) {
      try {
        const existing = await payload.find({
          collection: article.collection || 'news',
          where: { slug: { equals: article.slug } },
          limit: 1,
        })

        if (existing.docs.length > 0) {
          results.push({ slug: article.slug, status: 'already_exists', id: existing.docs[0].id })
          continue
        }

        const doc = await payload.create({
          collection: article.collection || 'news',
          data: article.sq,
          locale: 'sq',
        })

        if (article.de) {
          await payload.update({
            collection: article.collection || 'news',
            id: doc.id,
            data: article.de,
            locale: 'de',
          })
        }

        results.push({ slug: article.slug, status: 'created', id: doc.id })
      } catch (e) {
        results.push({ slug: article.slug, status: 'error', error: String(e).substring(0, 200) })
      }
    }

    return NextResponse.json({ success: true, results })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    const { secret, collection, id, locale, data } = await request.json()
    if (!checkSecret(secret)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await getPayload({ config })

    const result = await payload.update({
      collection,
      id,
      locale,
      data,
    })

    return NextResponse.json({ success: true, title: result.title })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { secret } = await request.json()
    if (!checkSecret(secret)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const payload = await getPayload({ config })

    const results: Record<string, unknown> = {}

    const imageMap = [
      { url: 'https://bshz.ch/wp-content/uploads/2026/02/images-16.jpeg', filename: 'kosovo-day.jpeg', alt: 'Dita e Pavarësisë së Kosovës', newsSlug: 'urime-dita-e-pavarsise-se-kosoves' },
      { url: 'https://bshz.ch/wp-content/uploads/2025/08/IMG_6328-1-scaled.jpg', filename: 'helsana.jpg', alt: 'Helsana marrëveshje', newsSlug: 'sigurimi-helsana-flet-shqip' },
      { url: 'https://bshz.ch/wp-content/uploads/2025/08/IMG_20250814_105940.jpg', filename: 'maqedoni.jpg', alt: 'Shqiptarët në Maqedoni', newsSlug: 'numri-i-shqiptareve-ne-maqedoni' },
      { url: 'https://bshz.ch/wp-content/uploads/2021/08/cropped-profilfoto.png', filename: 'departizim.png', alt: 'BSHZ Logo', newsSlug: 'apel-per-departizimin-e-diaspores' },
    ]

    const imageResults = []

    for (const img of imageMap) {
      try {
        const imgRes = await fetch(img.url)
        const buffer = Buffer.from(await imgRes.arrayBuffer())

        const media = await payload.create({
          collection: 'media',
          data: { alt: img.alt },
          file: {
            data: buffer,
            mimetype: imgRes.headers.get('content-type') || 'image/jpeg',
            name: img.filename,
            size: buffer.length,
          },
        })

        const newsQuery = await payload.find({
          collection: 'news',
          where: { slug: { equals: img.newsSlug } },
          limit: 1,
        })

        if (newsQuery.docs.length > 0) {
          await payload.update({
            collection: 'news',
            id: newsQuery.docs[0].id,
            data: { featuredImage: media.id },
          })
        }

        imageResults.push({ file: img.filename, mediaId: media.id, newsLinked: newsQuery.docs.length > 0 })
      } catch (e) {
        imageResults.push({ file: img.filename, error: String(e) })
      }
    }

    results.images = imageResults

    const albforumResults = []
    const issues = [
      { title: 'ALBFORUM Nr. 25', issueNumber: 25, publishedAt: '2025-12-01T00:00:00.000Z', description: 'Numri 25 i gazetës ALBFORUM' },
      { title: 'ALBFORUM Nr. 24', issueNumber: 24, publishedAt: '2025-06-01T00:00:00.000Z', description: 'Numri 24 i gazetës ALBFORUM' },
      { title: 'ALBFORUM Nr. 23', issueNumber: 23, publishedAt: '2024-12-01T00:00:00.000Z', description: 'Numri 23 i gazetës ALBFORUM' },
      { title: 'ALBFORUM Nr. 22', issueNumber: 22, publishedAt: '2024-06-01T00:00:00.000Z', description: 'Numri 22 i gazetës ALBFORUM' },
      { title: 'ALBFORUM Nr. 21', issueNumber: 21, publishedAt: '2023-12-01T00:00:00.000Z', description: 'Numri 21 i gazetës ALBFORUM' },
    ]

    for (const iss of issues) {
      try {
        const doc = await payload.create({
          collection: 'albforum-issues',
          data: iss,
        })
        albforumResults.push({ title: iss.title, id: doc.id })
      } catch (e) {
        albforumResults.push({ title: iss.title, error: String(e).substring(0, 200) })
      }
    }

    results.albforum = albforumResults

    return NextResponse.json(results)
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
