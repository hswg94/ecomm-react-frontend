import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://ecomm-api-alb-783376611.ap-southeast-1.elb.amazonaws.com/',
        changeOrigin: true
      },
      '/uploads': {
        target: 'http://ecomm-api-alb-783376611.ap-southeast-1.elb.amazonaws.com/',
        changeOrigin: true
      }
    }
  }
})
