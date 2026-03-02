import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'projyotish',
  title: 'ProJyotish CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Site Settings').id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem().title('Pricing').id('pricing')
              .child(S.document().schemaType('pricing').documentId('pricing')),
            S.listItem().title('Testimonials').id('testimonials')
              .child(S.document().schemaType('testimonials').documentId('testimonials')),
            S.listItem().title('Team Members').id('founders')
              .child(S.document().schemaType('founders').documentId('founders')),
            S.divider(),
            S.documentTypeListItem('blogPost').title('Blog Posts'),
            S.documentTypeListItem('topic').title('Sub-topic Articles'),
          ]),
    }),
    visionTool(),
  ],

  schema: { types: schemaTypes },
})
