import {defineField, defineType} from 'sanity'

export const educationType = defineType({
  name: 'educationType',
  title: 'Education',
  type: 'object',
  fields: [
    defineField({
      name: 'degree',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'focus',
      title: 'Program / Focus',
      type: 'string',
    }),
    defineField({
      name: 'graduationDate',
      title: 'Graduation Date',
      type: 'date',
      options: {dateFormat: 'MMM YYYY'},
    }),
    defineField({
      name: 'institution',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'degree',
      subtitle: 'institution',
    },
  },
})
