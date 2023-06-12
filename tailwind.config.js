/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: 'oklch(var(--white) / <alpha-value>)',
      black: 'oklch(var(--black) / <alpha-value>)',

      'app-background': 'oklch(var(--app-background) / <alpha-value>)',
      'app-text': 'oklch(var(--app-text) / <alpha-value>)',
    },
  },
  plugins: [],
};
