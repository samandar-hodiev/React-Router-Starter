/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import  path  from "path"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/views"),
      "@layouts": path.resolve(__dirname, "./src/components/layouts"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@mocks":path.resolve(__dirname, "./src/mocks/router.jsx")
    }
  }
})
