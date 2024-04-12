import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'neutral-50': 'rgb(250 249 247)',
        'neutral-100': 'rgb(245 244 242)',
        'neutral-150': 'rgb(237 236 234)',
        'neutral-200': 'rgb(229 228 226)',
        'neutral-250': 'rgb(221 220 218)',
        'neutral-300': 'rgb(212 211 209)',
        'neutral-400': 'rgb(163 162 160)',
        'neutral-500': 'rgb(115 114 112)',
        'neutral-600': 'rgb(82 81 79)',
        'neutral-700': 'rgb(64 63 61)',
        'neutral-750': 'rgb(51 50 48)',
        'neutral-800': 'rgb(38 37 36)',
        'neutral-850': 'rgb(30 29 27)',
        'neutral-900': 'rgb(23 22 20)',
        'neutral-925': 'rgb(19 18 16)',
        'neutral-950': 'rgb(10 9 7)',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
