import { defineConfig } from '@tofrankie/eslint'

export default defineConfig(
  {
    typescript: true,
    react: true,
  },
  {
    files: ['**/*.md', '**/*.md/**'],
    rules: {
      'no-new': 'off',
    },
  }
)
