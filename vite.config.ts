import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Увеличиваем лимит до 1000 кб
    rollupOptions: {
      output: {
        manualChunks: {
          // Разделяем крупные библиотеки в отдельные чанки
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})
