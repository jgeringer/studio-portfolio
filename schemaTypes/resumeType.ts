import {defineArrayMember, defineField, defineType} from 'sanity'

export const resumeType = defineType({
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      type: 'string',
      description: 'Example: Frontend Web Developer',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
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
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'downloadResume',
      title: 'Download Resume File',
      type: 'file',
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [defineArrayMember({type: 'linkType'})],
    }),
    defineField({
      name: 'experience',
      type: 'array',
      of: [defineArrayMember({type: 'jobType'})],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'certifications',
      type: 'array',
      of: [defineArrayMember({type: 'certificationType'})],
    }),
    defineField({
      name: 'education',
      type: 'array',
      of: [defineArrayMember({type: 'educationType'})],
    }),
    defineField({
      name: 'accolades',
      type: 'array',
      of: [defineArrayMember({type: 'text'})],
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [defineArrayMember({type: 'skillGroupType'})],
    }),
    defineField({
      name: 'additionalLinks',
      type: 'array',
      of: [defineArrayMember({type: 'linkType'})],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'headline',
    },
  },
})
