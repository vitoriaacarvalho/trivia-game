import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@trivia': '/src',
      '@trivia/components': '/src/components',
      '@trivia/screens': '/src/screens',
      '@trivia/hooks': '/src/hooks',
      '@trivia/utils': '/src/utils',
      '@trivia/types': '/src/types',
    },
  },
})
