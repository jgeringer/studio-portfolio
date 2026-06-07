import {defineArrayMember, defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'jobType',
  title: 'Job',
  type: 'object',
  fields: [
    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {dateFormat: 'MMM YYYY'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {dateFormat: 'MMM YYYY'},
      hidden: ({parent}) => parent?.isCurrent,
    }),
    defineField({
      name: 'isCurrent',
      title: 'Current Role',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'responsibilities',
      type: 'array',
      of: [defineArrayMember({type: 'text'})],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'title',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle,
      }
    },
  },
})
