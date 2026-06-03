import {defineArrayMember, defineField, defineType} from 'sanity'

export const blogSettingsType = defineType({
  name: 'blogSettings',
  title: 'Blog Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Blog',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      initialValue: 'Random thoughts & fun projects.',
    }),
    defineField({
      name: 'showRecentTitle',
      title: 'Recent Section Title',
      type: 'string',
      initialValue: 'Recent articles',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'additionalLinks',
      type: 'array',
      of: [defineArrayMember({type: 'linkType'})],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
