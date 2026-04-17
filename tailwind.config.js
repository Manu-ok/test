/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 20px rgba(122, 95, 255, 0.35), 0 0 60px rgba(86, 220, 255, 0.15)',
      },
    },
  },
  plugins: [],
};
