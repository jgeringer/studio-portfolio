import {defineArrayMember, defineField, defineType} from 'sanity'

export const kitchenSettingsType = defineType({
  name: 'kitchenSettings',
  title: 'Kitchen Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      initialValue: 'Kitchen',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
    }),
    defineField({
      name: 'allLabel',
      title: 'All Filter Label',
      type: 'string',
      initialValue: 'All',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categoryLabels',
      title: 'Category Labels',
      type: 'object',
      fields: [
        defineField({
          name: 'main',
          type: 'string',
          initialValue: 'main',
        }),
        defineField({
          name: 'side',
          type: 'string',
          initialValue: 'side',
        }),
        defineField({
          name: 'topping',
          type: 'string',
          initialValue: 'topping',
        }),
      ],
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
