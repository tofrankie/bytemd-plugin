import { defineConfig } from '@tofrankie/eslint'

export default defineConfig(
  {
    typescript: true,
  },
  {
    files: ['**/*.md', '**/*.md/**'],
    rules: {
      'no-new': 'off',
    },
  }
)
