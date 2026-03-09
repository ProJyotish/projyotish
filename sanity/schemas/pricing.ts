import { defineField, defineType } from 'sanity'

export const pricing = defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Section Heading', type: 'string' }),
    defineField({ name: 'description', title: 'Section Description', type: 'string' }),
    defineField({ name: 'trialBadge', title: 'Trial Badge Text', type: 'string' }),
    defineField({
      name: 'india',
      title: 'India Plans',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Plan Name', type: 'string' },
          { name: 'iconType', title: 'Icon', type: 'string',
            options: { list: ['crown', 'users', 'star'] } },
          { name: 'monthlyPrice', title: 'Monthly Price', type: 'string' },
          { name: 'monthlyTotal', title: 'Monthly Total Label', type: 'string' },
          { name: 'monthlyWhatsapp', title: 'Monthly WhatsApp Message', type: 'string' },
          { name: 'quarterlyPrice', title: 'Quarterly Price', type: 'string' },
          { name: 'quarterlyTotal', title: 'Quarterly Total Label', type: 'string' },
          { name: 'quarterlyWhatsapp', title: 'Quarterly WhatsApp Message', type: 'string' },
          { name: 'quarterlySavings', title: 'Quarterly Savings Label', type: 'string' },
          { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
          { name: 'badge', title: 'Badge Text (e.g. Most Popular)', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'monthlyPrice' } },
      }],
    }),
    defineField({
      name: 'global',
      title: 'Global Plans',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Plan Name', type: 'string' },
          { name: 'iconType', title: 'Icon', type: 'string',
            options: { list: ['crown', 'users', 'star'] } },
          { name: 'monthlyPrice', title: 'Monthly Price (USD)', type: 'string' },
          { name: 'monthlyTotal', title: 'Monthly Total Label', type: 'string' },
          { name: 'monthlyWhatsapp', title: 'Monthly WhatsApp Message', type: 'string' },
          { name: 'quarterlyPrice', title: 'Quarterly Price (USD)', type: 'string' },
          { name: 'quarterlyTotal', title: 'Quarterly Total Label', type: 'string' },
          { name: 'quarterlyWhatsapp', title: 'Quarterly WhatsApp Message', type: 'string' },
          { name: 'quarterlySavings', title: 'Quarterly Savings Label', type: 'string' },
          { name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] },
          { name: 'badge', title: 'Badge Text', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'monthlyPrice' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Pricing' }) },
})
