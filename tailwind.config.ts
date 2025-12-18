import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C84B31',
        'primary-dark': '#A13A24',
        'primary-light': '#E8D5D0',
        background: '#F7F6F5',
        'background-alt': '#EFEEEC',
        dark: '#1A1A1A',
        border: '#E5E3E0',
      },
      fontFamily: {
        display: ['var(--font-marcellus)', 'serif'],
        body: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config



