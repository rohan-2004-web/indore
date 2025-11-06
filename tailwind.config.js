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
        'primary-pink': {
          light: '#FF80AB',
          DEFAULT: '#E91E63',
          dark: '#C2185B'
        },
        'primary-orange': {
          light: '#FFB74D', 
          DEFAULT: '#FF9800',
          dark: '#F57C00'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E91E63 0%, #FF9800 100%)',
      },
    },
  },
  plugins: [],
}