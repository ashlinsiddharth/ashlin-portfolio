import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
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
          muted: '#A9B4C7',
          // backward compatibility
          secondary: '#A9B4C7',
        },
      },
      borderRadius: {
        card: '18px',
        'card-lg': '20px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.35)',
        'glow-cyan-sm': '0 0 10px rgba(0, 212, 255, 0.25)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.35)',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
