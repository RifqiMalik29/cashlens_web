import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#122A20',
        green: {
          DEFAULT: '#13C97A',
          deep: '#0A7F4E',
          soft: '#E8F9F0',
        },
        coral: {
          DEFAULT: '#FF6B4A',
          soft: '#FFE8E2',
        },
        violet: {
          DEFAULT: '#7A5BFF',
          soft: '#E8E4FF',
        },
        sunny: {
          DEFAULT: '#FFC93C',
          soft: '#FFF3CC',
        },
        warm: '#FAFAF5',
        desk: '#ECECE3',
        body: '#33443C',
        muted: '#6B7A72',
        hairline: '#E4E4DA',
        darktint: {
          bg: '#1D3A2C',
          border: '#2C4438',
          text: '#9FEFC7',
          muted: '#8FB0A1',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        sans: ['var(--font-jakarta)', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
      boxShadow: {
        hard: '6px 6px 0 #122A20',
        'hard-sm': '4px 4px 0 #122A20',
        'hard-lg': '8px 8px 0 #122A20',
        'hard-xl': '10px 10px 0 #122A20',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
