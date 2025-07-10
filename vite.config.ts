import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  server: {
    host: true
  },
  plugins: [
    tailwindcss()
  ]
})