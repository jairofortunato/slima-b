/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Gellix"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        petrona: ['"Petrona"', 'serif'],
      },
      colors: {
        navy: {
          800: '#1B2B41',
          900: '#0F1A2A',
        },
        gold: {
          300: '#FDE047',
          400: '#FACC15',
          500: '#FFC857',
        },
        brand: {
          blue: '#0499C7',
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
