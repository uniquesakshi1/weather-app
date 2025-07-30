import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/weather-app/', // <--- यह लाइन जोड़ें
  plugins: [react()],
})
