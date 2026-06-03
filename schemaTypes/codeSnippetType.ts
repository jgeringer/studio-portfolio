import {defineField, defineType} from 'sanity'

export const codeSnippetType = defineType({
  name: 'codeSnippet',
  title: 'Code Snippet',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Optional label shown above the snippet.',
    }),
    defineField({
      name: 'filename',
      type: 'string',
    }),
    defineField({
      name: 'language',
      type: 'string',
      options: {
        list: [
          {title: 'TypeScript', value: 'typescript'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'TSX', value: 'tsx'},
          {title: 'JSX', value: 'jsx'},
          {title: 'JSON', value: 'json'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'SCSS', value: 'scss'},
          {title: 'Bash', value: 'bash'},
          {title: 'Plain Text', value: 'text'},
        ],
      },
      initialValue: 'typescript',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'code',
      type: 'text',
      rows: 14,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'filename',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Code snippet',
        subtitle,
      }
    },
  },
})
