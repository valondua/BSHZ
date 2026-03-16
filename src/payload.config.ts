import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { News } from './collections/News'
import { Events } from './collections/Events'
import { Feuilleton } from './collections/Feuilleton'
import { AlbforumIssues } from './collections/AlbforumIssues'
import { Pages } from './collections/Pages'
import { NewsletterSubscribers } from './collections/NewsletterSubscribers'
import { CommunityRegistrations } from './collections/CommunityRegistrations'
import { ContactSubmissions } from './collections/ContactSubmissions'

import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    News,
    Events,
    Feuilleton,
    AlbforumIssues,
    Pages,
    NewsletterSubscribers,
    CommunityRegistrations,
    ContactSubmissions,
  ],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'default-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
    push: true,
  }),
  sharp,
  localization: {
    locales: [
      { label: 'Shqip', code: 'sq' },
      { label: 'Deutsch', code: 'de' },
    ],
    defaultLocale: 'sq',
    fallback: true,
  },
  plugins: [
    seoPlugin({
      collections: ['news', 'events', 'feuilleton', 'pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: { doc: Record<string, unknown> }) =>
        `${doc?.title || ''} | BSHZ`,
      generateDescription: ({ doc }: { doc: Record<string, unknown> }) =>
        (doc?.summary as string) || (doc?.title as string) || '',
    }),
    ...(process.env.BLOB_READ_WRITE_TOKEN
      ? [
          vercelBlobStorage({
            collections: {
              media: true,
            },
            token: process.env.BLOB_READ_WRITE_TOKEN,
          }),
        ]
      : []),
  ],
})
