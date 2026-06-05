import {defineArrayMember, defineField, defineType} from 'sanity'

export const recipeType = defineType({
  name: 'recipe',
  title: 'Recipe',
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
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Main', value: 'main'},
          {title: 'Side', value: 'side'},
          {title: 'Topping', value: 'topping'},
        ],
        layout: 'radio',
      },
      initialValue: 'main',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
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
            'Paste full TwicPics URL, e.g. https://joegeringer.twic.pics/images/chicken-picatta.jpg?twic=v1/refit-cover=1600x900/quality=80/output=auto',
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
      name: 'ingredients',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'amount',
              type: 'number',
            }),
            defineField({
              name: 'unit',
              type: 'string',
              options: {
                list: [
                  {title: 'teaspoon', value: 'teaspoon'},
                  {title: 'tablespoon', value: 'tablespoon'},
                  {title: 'cup', value: 'cup'},
                  {title: 'ounce', value: 'ounce'},
                  {title: 'pound', value: 'pound'},
                  {title: 'clove', value: 'clove'},
                  {title: 'stick', value: 'stick'},
                  {title: 'piece', value: 'piece'},
                  {title: 'to taste', value: 'to taste'},
                  {title: 'bunch', value: 'bunch'},
                  {title: 'slice', value: 'slice'},
                ],
              },
            }),
            defineField({
              name: 'ingredient',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'note',
              type: 'string',
              description: 'Optional details, e.g. divided, zested, chopped.',
            }),
          ],
          preview: {
            select: {
              amount: 'amount',
              unit: 'unit',
              ingredient: 'ingredient',
              note: 'note',
            },
            prepare({amount, unit, ingredient, note}) {
              const quantity = amount ? `${amount}${unit ? ` ${unit}` : ''}` : unit || ''
              return {
                title: ingredient,
                subtitle: [quantity, note].filter(Boolean).join(' - '),
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'instructions',
      title: 'Instructions',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
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
    defineField({
      name: 'sortOrder',
      type: 'number',
      description: 'Optional manual sort for listing pages.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
    prepare({title, category}) {
      return {
        title,
        subtitle: category,
      }
    },
  },
})
