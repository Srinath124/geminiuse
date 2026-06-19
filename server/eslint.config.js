import js from '@eslint/js';

export default [
  {
    ignores: ['node_modules/**', '.git/**', 'dist/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': [
        'warn',
        {
          allow: ['log', 'warn', 'error'],
        },
      ],
      quotes: ['warn', 'single'],
      semi: ['error', 'always'],
    },
  },
];
