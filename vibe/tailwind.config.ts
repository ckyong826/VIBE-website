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
      'roboto-con':'var(--font-roboto-condensed)',
      'racing':'var(--font-racing-sans-one)',
    },
    keyframes: {
      'marquee': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      'infinite-marquee':'marquee 40s linear infinite',
    },
    
    },
  },
  plugins: [],
}

export default config
