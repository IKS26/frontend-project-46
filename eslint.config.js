import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.js'],
    ignores: ['node_modules/', 'dist/', 'build/', '*.min.js', 'coverage/'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        browser: 'readonly',
        node: 'readonly',
        process: 'readonly',
        console: 'writable',
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'constructor-super': 'off',
      'implicit-arrow-linebreak': ['error', 'beside'],
    },
  },
];
