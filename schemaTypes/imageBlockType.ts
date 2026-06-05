import {defineField, defineType} from 'sanity'

export const imageBlockType = defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'path',
      title: 'TwicPics Image Path',
      description:
        'Paste full TwicPics URL, e.g. https://joegeringer.twic.pics/images/example.jpg?twic=v1/refit-cover=1200x800/quality=80/output=auto',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }),
    }),
    defineField({
      name: 'altText',
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
      subtitle: 'path',
      altText: 'altText',
    },
    prepare({title, subtitle, altText}) {
      return {
        title: title || 'Image block',
        subtitle: altText || subtitle,
      }
    },
  },
})
