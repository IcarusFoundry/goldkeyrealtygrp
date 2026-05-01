/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A3B',
          50:  '#E8ECF2',
          100: '#C5D0DD',
          200: '#9DAFC2',
          300: '#748EA7',
          400: '#4D6E8C',
          500: '#2E5070',
          600: '#1B2A3B',
          700: '#152231',
          800: '#0F1A26',
          900: '#09111A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          50:  '#FBF3E0',
          100: '#F5E4B8',
          200: '#EDD48D',
          300: '#E4C362',
          400: '#D9B247',
          500: '#C9A84C',
          600: '#B8972E',
          700: '#9A7E22',
          800: '#7C6518',
          900: '#5E4C10',
        },
        cream: {
          DEFAULT: '#F5F2EC',
          50:  '#FDFCFA',
          100: '#F9F7F2',
          200: '#F5F2EC',
          300: '#EDE8DF',
          400: '#E0D9CE',
          500: '#D0C8BB',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Jost', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero':    ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)',  { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'title':   ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
      },
      spacing: {
        'section': '6rem',
        'section-lg': '9rem',
      },
      maxWidth: {
        'site': '1400px',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #C9A84C 0%, #E4C362 40%, #B8972E 70%, #C9A84C 100%)',
        'navy-fade': 'linear-gradient(to bottom, rgba(27,42,59,0) 0%, rgba(27,42,59,0.85) 100%)',
        'hero-overlay': 'linear-gradient(to right, rgba(27,42,59,0.92) 0%, rgba(27,42,59,0.7) 50%, rgba(27,42,59,0.3) 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'shimmer':    'shimmer 3s ease-in-out infinite',
        'slide-right':'slideRight 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        slideRight: {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      boxShadow: {
        'gold':    '0 4px 24px rgba(201,168,76,0.25)',
        'gold-lg': '0 8px 48px rgba(201,168,76,0.35)',
        'navy':    '0 4px 24px rgba(27,42,59,0.3)',
        'card':    '0 2px 16px rgba(27,42,59,0.08)',
        'card-lg': '0 8px 40px rgba(27,42,59,0.12)',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
