import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#222222',
        'main-text': '#FFFFFF',
        'accent': '#B896E3',
      },
      fontFamily: {
        serif: ['serif'],
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
