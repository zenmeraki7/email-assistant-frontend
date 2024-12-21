import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.html'], // Ensures .html files are treated as static assets
  build: {
    outDir: 'dist', // Output directory
    emptyOutDir: true, // Clean output directory before building
  },
})
