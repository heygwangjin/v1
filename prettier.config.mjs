const config = {
  printWidth: 80,
  trailingComma: 'all',
  singleQuote: true,
  tabWidth: 2,
  semi: true,
  jsxSingleQuote: false,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  plugins: [
    'prettier-plugin-organize-imports',
    import('prettier-plugin-tailwindcss'),
  ],
};

export default config;
