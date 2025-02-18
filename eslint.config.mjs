import globals from 'globals';
import jest from 'eslint-plugin-jest';
import eslintRecommended from 'eslint-plugin-prettier/recommended';

export default [
  eslintRecommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'prefer-const': 'off',
      'no-unused-vars': 'off',
      semi: 'error',
    },
  },
  {
    files: ['src/**/*.js'],
    ...jest.configs['flat/recommended'],
  },
];
