import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    mimeTypes: {
      'text/javascript': ['js', 'mjs', 'ts', 'tsx']
    }
  }
})
