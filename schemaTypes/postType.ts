import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(320),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'object',
      fields: [
        defineField({
          name: 'path',
          title: 'TwicPics Image Path',
          description:
            'Paste full TwicPics URL, e.g. https://joegeringer.twic.pics/images/blog-cover.jpg?twic=v1/refit-cover=1200x800/quality=80/output=auto',
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
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'blogTag'}],
        }),
      ],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      initialValue: false,
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
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'additionalLinks',
      type: 'array',
      of: [defineArrayMember({type: 'linkType'})],
    }),
    defineField({
      name: 'seoDescription',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
    },
  },
})