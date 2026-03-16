import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'

export const AlbforumIssues: CollectionConfig = {
  slug: 'albforum-issues',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'issueNumber', 'publishedAt'],
  },
  access: {
    read: () => true,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'issueNumber',
      type: 'number',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'pdfFile',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'pdf' },
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  defaultSort: '-issueNumber',
}
