import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xl: '1261px',
      },
      fontFamily: {
        chilanka: ['var(--chilanka-font)'],
        'nanum-pen': ['var(--nanum-pen-font)'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: '#2F9FF0',
      },
    },
  },
  plugins: [require('tailwindcss-multi')],
};
export default config;
