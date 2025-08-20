import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // During local dev, calls to /api/* go to the backend server
      '/api': 'http://localhost:3000'
    }
  },
  build: {
    outDir: 'dist'
  }
})
