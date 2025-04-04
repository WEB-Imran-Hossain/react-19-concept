import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' //follow this

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(), //foloww this
  ],
})