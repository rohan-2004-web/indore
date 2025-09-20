/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: {
            light: '#FF80AB',
            DEFAULT: '#FF4081',
            dark: '#F50057'
          },
          orange: {
            light: '#FFB74D',
            DEFAULT: '#FF9800',
            dark: '#F57C00'
          }
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, var(--tw-colors-primary-pink-DEFAULT) 0%, var(--tw-colors-primary-orange-DEFAULT) 100%)',
      },
    },
  },
  plugins: [],
}