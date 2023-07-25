export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  htmlWhitespaceSensitivity: 'strict',
  printWidth: 120,
  proseWrap: 'never',
  // semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

