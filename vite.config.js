import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_ENV__: process.env.VITE_APP_NAME,
  },
  plugins: [
    react({
      fastRefresh: true, // ensure Fast Refresh is on
    }),
    tailwindcss,
    autoprefixer,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    watch: {
      usePolling: true,   // fixes file change detection issues
      interval: 100,      // how often to check for changes
    },
    host: true,           // allows network testing
    strictPort: true,     // prevents random port changes
  },
})
