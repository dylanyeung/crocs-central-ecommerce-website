const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      colors: {
        coolMint: 'rgb(161, 230, 219)', // Logo color
        earthyGreen: {
          50: '#f0f8f7', // Lightest green
          100: '#e1f2ec', // Light green
          200: '#b2e1d6', // Medium light green
          300: '#8fd0c1', // Medium green
          400: '#6dbcb3', // Darker green
          500: '#4c9f98', // Base color
          600: '#3c7a78', // Darker base color
          700: '#2a5958', // Dark green
          800: '#1a4040', // Even darker green
          900: '#0a2525'  // Darkest green
        },
        deepGreen: {
          50: '#e4f3e6', // Very light green
          100: '#c6e1cb', // Light green
          200: '#9ec7a0', // Medium green
          300: '#77ad76', // Slightly darker green
          400: '#4f9352', // Darker green
          500: '#2f6a35', // Base deep green
          600: '#23562a', // Darker deep green
          700: '#1b4a23', // Even darker deep green
          800: '#13321a', // Very dark deep green
          900: '#0a1c10'  // Almost black green
        },
        lightGray: '#f9f9f9',
        darkGray: '#333',
        accentColor: '#a1e6db' // Accent color matching logo
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
