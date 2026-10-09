/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dbe6ff',
          200: '#bed2ff',
          300: '#91b4ff',
          400: '#5d8bff',
          500: '#3563f5',
          600: '#2145e0',
          700: '#1b36b5',
          800: '#1b3092',
          900: '#1c2d74',
        },
        ink: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
          300: '#cbd5e1',
          200: '#e2e8f0',
          100: '#f1f5f9',
          50: '#f8fafc',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'Roboto',
          'sans-serif',
        ],
        mono: ['"SF Mono"', 'Consolas', '"Liberation Mono"', 'Menlo', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.06)',
        pop: '0 8px 24px -4px rgba(15, 23, 42, 0.12), 0 2px 8px -2px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
