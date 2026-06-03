import {defineField, defineType} from 'sanity'

export const imageBlockType = defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'image',
      alt: 'alt',
    },
    prepare({title, media, alt}) {
      return {
        title: title || 'Image block',
        subtitle: alt,
        media,
      }
    },
  },
})
