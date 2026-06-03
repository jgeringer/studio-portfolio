import {defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'linkType',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'url',
    },
  },
})
