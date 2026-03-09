import { defineField, defineType } from 'sanity'

export const founders = defineType({
  name: 'founders',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'items',
      title: 'Team Members',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', title: 'Name', type: 'string' },
          { name: 'role', title: 'Role', type: 'string' },
          { name: 'photo', title: 'Photo', type: 'image',
            options: { hotspot: true } },
          { name: 'description', title: 'Bio', type: 'text', rows: 3 },
          { name: 'credentials', title: 'Credentials',
            type: 'array', of: [{ type: 'string' }] },
          { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
          { name: 'instagram', title: 'Instagram URL', type: 'url' },
          { name: 'website', title: 'Website URL', type: 'url' },
          { name: 'iconType', title: 'Icon (fallback)', type: 'string',
            options: { list: ['graduation-cap', 'building', 'star'] } },
        ],
        preview: {
          select: { title: 'name', subtitle: 'role', media: 'photo' },
        },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: 'Team Members' }) },
})
