import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@components", replacement: path.resolve(__dirname, "src/components") },
      { find: "@context", replacement: path.resolve(__dirname, "src/context") },
      { find: "@forms", replacement: path.resolve(__dirname, "src/forms") },
      { find: "@views", replacement: path.resolve(__dirname, "src/views") },
      { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
    ],
  },
})