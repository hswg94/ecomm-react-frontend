import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://api.ecomm.hswg94.com/',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://api.ecomm.hswg94.com/',
        changeOrigin: true
      }
    }
  }
})
