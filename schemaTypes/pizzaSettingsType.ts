import {defineArrayMember, defineField, defineType} from 'sanity'

export const pizzaSettingsType = defineType({
  name: 'pizzaSettings',
  title: 'Pizza Listing Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Chicago Pizzas',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      initialValue: 'Neighborhood spots and old school favorites.',
    }),
    defineField({
      name: 'stylesFilterLabel',
      title: 'Styles Filter Label',
      type: 'string',
      initialValue: 'Styles',
    }),
    defineField({
      name: 'sortLabel',
      title: 'Sort Label',
      type: 'string',
      initialValue: 'Sort by Est.',
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
