/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Правильное определение цветов - как отдельные цвета, не вложенные в brand
        'brand-blue': '#33a0d8',
        'brand-green': '#1d9e3e',
        'brand-lightgreen': '#abcb4e',
        'brand-orange': '#edb314',
        // Дополнительные оттенки
        'brand-blue-light': '#5cb8e6',
        'brand-blue-dark': '#2a8bc5',
        'brand-green-light': '#34b856',
        'brand-green-dark': '#178532',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #33a0d8 0%, #1d9e3e 100%)',
        'gradient-fresh': 'linear-gradient(135deg, #abcb4e 0%, #33a0d8 50%, #1d9e3e 100%)',
        'gradient-sun': 'linear-gradient(135deg, #edb314 0%, #abcb4e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}