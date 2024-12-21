import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  root: './frontend', // Set the frontend folder as the root directory for Vite
  plugins: [react()],
  build: {
    outDir: '../dist', // Output the build files outside the frontend folder
    emptyOutDir: true, // Clean the output directory before building
  }
})
