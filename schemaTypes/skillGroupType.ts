import {defineArrayMember, defineField, defineType} from 'sanity'

export const skillGroupType = defineType({
  name: 'skillGroupType',
  title: 'Skill Group',
  type: 'object',
  fields: [
    defineField({
      name: 'category',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'url',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'url',
            },
          },
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'category',
      subtitle: 'skills.0.name',
    },
  },
})
