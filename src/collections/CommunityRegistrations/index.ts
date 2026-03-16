import type { CollectionConfig } from 'payload'
import { authenticated } from '@/access/authenticated'

export const CommunityRegistrations: CollectionConfig = {
  slug: 'community-registrations',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['firstName', 'lastName', 'email', 'status', 'submittedAt'],
  },
  access: {
    read: authenticated,
    create: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'address',
      type: 'group',
      fields: [
        { name: 'street', type: 'text' },
        { name: 'city', type: 'text' },
        { name: 'canton', type: 'text' },
        { name: 'postalCode', type: 'text' },
      ],
    },
    {
      name: 'dateOfBirth',
      type: 'date',
    },
    {
      name: 'nationality',
      type: 'text',
    },
    {
      name: 'membershipType',
      type: 'select',
      defaultValue: 'individual',
      options: [
        { label: 'Individual', value: 'individual' },
        { label: 'Family', value: 'family' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ value }) => value || new Date().toISOString(),
        ],
      },
    },
  ],
}
