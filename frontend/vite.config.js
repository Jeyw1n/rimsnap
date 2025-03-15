import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()], // Подключение плагина для React
  server: {
    host: '0.0.0.0', // Хост для сервера разработки
    port: 3000, // Порт для сервера разработки
  },
})
