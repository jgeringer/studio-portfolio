import {defineArrayMember, defineField, defineType} from 'sanity'

export const pizzaType = defineType({
  name: 'pizza',
  title: 'Pizza Place',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [defineArrayMember({type: 'imageBlock'})],
    }),
    defineField({
      name: 'establishedYear',
      title: 'Established Year',
      type: 'number',
      validation: (rule) => rule.required().integer().min(1800).max(2100),
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      type: 'string',
    }),
    defineField({
      name: 'website',
      type: 'url',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'area',
      type: 'string',
      options: {
        list: [
          {title: 'North Side', value: 'north-side'},
          {title: 'South Side', value: 'south-side'},
          {title: 'West Side', value: 'west-side'},
          {title: 'Downtown', value: 'downtown'},
          {title: 'Burbs', value: 'burbs'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'styles',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'pizzaStyle'}],
        }),
      ],
    }),
    defineField({
      name: 'highlights',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Example: Includes RC Cola, Cash only',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [
        defineArrayMember({type: 'block'}),
        defineArrayMember({type: 'imageBlock'}),
        defineArrayMember({type: 'videoEmbed'}),
        defineArrayMember({type: 'codeSnippet'}),
      ],
    }),
    defineField({
      name: 'additionalLinks',
      type: 'array',
      of: [defineArrayMember({type: 'linkType'})],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'establishedYear',
      media: 'heroImage',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle ? `Est. ${subtitle}` : undefined,
        media,
      }
    },
  },
})
