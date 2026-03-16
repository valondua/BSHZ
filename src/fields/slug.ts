import type { Field } from 'payload'

const formatSlug = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

export const slugField: Field = {
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [
      ({ value, siblingData }) => {
        if (typeof value === 'string') {
          return formatSlug(value)
        }
        if (siblingData?.title && typeof siblingData.title === 'string') {
          return formatSlug(siblingData.title)
        }
        return value
      },
    ],
  },
}
