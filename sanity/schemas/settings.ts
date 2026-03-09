import { defineField, defineType } from 'sanity'

export const settings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'heroHeadline', title: 'Hero Headline', type: 'string' }),
    defineField({ name: 'heroSubheadline', title: 'Hero Subheadline', type: 'text', rows: 2 }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string',
      description: 'Include country code, e.g. 919876543210' }),
    defineField({ name: 'whatsappMessage', title: 'WhatsApp Pre-fill Message', type: 'string' }),
    defineField({ name: 'trustStats', title: 'Trust Stats Bar',
      type: 'array', of: [{ type: 'string' }],
      description: 'e.g. "10,000+ readings", "IIT Alumni"' }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
})
