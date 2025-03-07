import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server:{
    allowedHosts: ["6e34-2400-1a00-bd11-8dd7-8-5384-e828-4a30.ngrok-free.app"]
  }
})
