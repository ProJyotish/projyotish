import { defineField, defineType } from 'sanity'

export const testimonials = defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Testimonials',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text', rows: 3 },
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'location', title: 'Location / Role', type: 'string' },
        ],
        preview: { select: { title: 'name', subtitle: 'quote' } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Testimonials' }) },
})
