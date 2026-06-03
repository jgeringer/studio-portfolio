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
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'issuer',
      media: 'image',
    },
  },
})
