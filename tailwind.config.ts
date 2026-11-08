import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A192F',
          card: '#0F2A4D',
          cyan: '#00D4FF',
          blue: '#3B82F6',
          border: 'rgba(0, 212, 255, 0.2)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A9B4C7',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px rgba(0, 212, 255, 0.35)',
        'glow-blue': '0 0 25px rgba(59, 130, 246, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;

