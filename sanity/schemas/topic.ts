import { defineField, defineType } from 'sanity'

export const topic = defineType({
  name: 'topic',
  title: 'Sub-topic Articles',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug',
      options: { source: 'title', maxLength: 96 } }),
    defineField({ name: 'pillar', title: 'Pillar', type: 'string',
      options: { list: ['career', 'health', 'business', 'love', 'wealth'] } }),
    defineField({ name: 'date', title: 'Publish Date', type: 'date' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 }),
    defineField({ name: 'published', title: 'Published', type: 'boolean',
      initialValue: false }),
    defineField({ name: 'body', title: 'Body', type: 'array',
      of: [{ type: 'block' }, {
        type: 'image', options: { hotspot: true },
        fields: [{ name: 'alt', title: 'Alt text', type: 'string' }],
      }],
    }),
  ],
  orderings: [{ title: 'Date, Newest', name: 'dateDesc',
    by: [{ field: 'date', direction: 'desc' }] }],
  preview: {
    select: { title: 'title', subtitle: 'pillar' },
    prepare: ({ title, subtitle }) => ({ title, subtitle: `/${subtitle}` }),
  },
})
