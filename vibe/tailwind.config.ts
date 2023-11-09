import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        't-white' :'#F3F3F3',
        't-black' :'#1D1D1F',
        't-gray'  :'#C1C1C1',
        't-yellow':'#BDF704',
    },
    fontFamily: {
      'archivo-black':'var(--font-archivo-black)',
      'roboto-con':'var(--font-roboto-condensed)',
      'racing':'var(--font-racing-sans-one)',
    },
    keyframes: {
      'marquee': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-out': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      'fade-left': {
        '0%': { opacity: '0', transform: 'translateX(100%)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'fade-right': {
        '0%': { opacity: '0', transform: 'translateX(-100%)' },
        '100%': { opacity: '1', transform: 'translateX(0)' },
      },
      'fade-up':{
        '0%': { opacity: '0', transform: 'translateY(100%)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'fade-down':{
        '0%': { opacity: '0', transform: 'translateY(-100%)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      }
    },
    animation: {
      'infinite-marquee':'marquee 800s linear infinite',
      'fade-in': 'fade-in 0.5s ease-in-out',
      'fade-out': 'fade-out 0.5s ease-in-out',
      'fade-left': 'fade-left 0.5s ease-in-out',
      'fade-right': 'fade-right 0.5s ease-in-out',
      'fade-up': 'fade-up 0.5s ease-in-out',
      'fade-down': 'fade-down 0.5s ease-in-out',
    },
    
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ]
}

export default config
