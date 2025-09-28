/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0B0B0D',
        'card': '#1C1C1E',
        'primary': '#1E90FF',
        'accent': '#7A1FA2',
        'text': '#E5E5E5',
        'input-bg': '#0F0F10',
        'placeholder': '#A0A0A0',
        'dracula': {
          'purple': 'hsl(269, 100%, 75%)',
          'pink': 'hsl(326, 100%, 74%)',
          'cyan': 'hsl(191, 97%, 77%)',
          'green': 'hsl(135, 94%, 65%)',
          'orange': 'hsl(31, 100%, 71%)',
          'red': 'hsl(0, 100%, 67%)',
          'yellow': 'hsl(65, 92%, 76%)',
        }
      },
      borderRadius: {
        'lg': '0.75rem',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(30,144,255,0.3)',
        'card-hover': '0 6px 24px rgba(30,144,255,0.4)',
      },
      backgroundImage: {
        'gradient-dracula': 'linear-gradient(135deg, hsl(269, 100%, 75%), hsl(326, 100%, 74%))',
        'gradient-neon': 'linear-gradient(45deg, hsl(191, 97%, 77%), hsl(135, 94%, 65%))',
        'gradient-primary': 'linear-gradient(to right, #1E90FF, #7A1FA2)',
        'gradient-primary-hover': 'linear-gradient(to right, #7A1FA2, #1E90FF)',
      }
    },
  },
  plugins: [],
} 