import {defineField, defineType} from 'sanity'

export const certificationType = defineType({
  name: 'certificationType',
  title: 'Certification',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'issuer',
      type: 'string',
    }),
    defineField({
      name: 'credentialUrl',
      title: 'Credential URL',
      type: 'url',
    }),
    defineField({
      name: 'expirationDate',
      title: 'Expiration Date',
      type: 'date',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        defineField({
          name: 'path',
          title: 'TwicPics Image Path',
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
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
    },
  },
})
