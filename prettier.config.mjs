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
    // import('prettier-plugin-tailwindcss'),
    'prettier-plugin-organize-imports',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-classnames',
    'prettier-plugin-merge',
  ],
  endingPosition: 'absolute-with-indent',
};

export default config;
