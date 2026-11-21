/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#183D32',
          dark: '#0F2620',
          deep: '#133229',
          light: '#235345',
          soft: '#2D6454',
        },
        ivory: {
          DEFAULT: '#F5F0E6',
          light: '#FCFAF7',
          warm: '#F0E8D9',
          dark: '#E5DAC6',
        },
        gold: {
          DEFAULT: '#C5A46D',
          light: '#D8BE8E',
          soft: '#E8D9BE',
          dark: '#AA8850',
          bronze: '#95743D',
        },
        walnut: {
          DEFAULT: '#654B3B',
          light: '#7F604D',
          dark: '#4B362A',
          muted: '#5A4234',
        },
        sage: {
          DEFAULT: '#DCE5D9',
          light: '#EEF3EC',
          dark: '#BACBB7',
          soft: '#CFDDD0',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 12px 36px -8px rgba(24, 61, 50, 0.08), 0 4px 12px -2px rgba(24, 61, 50, 0.04)',
        'luxury-lg': '0 24px 48px -12px rgba(24, 61, 50, 0.16)',
        'gold-glow': '0 0 20px rgba(197, 164, 109, 0.28)',
      },
      backgroundImage: {
        'nature-gradient': 'linear-gradient(to bottom, #183D32, #0F2620)',
        'ivory-gradient': 'linear-gradient(to bottom, #FCFAF7, #F5F0E6)',
        'gold-shimmer': 'linear-gradient(135deg, #C5A46D 0%, #E8D9BE 50%, #AA8850 100%)',
      }
    },
  },
  plugins: [],
}
