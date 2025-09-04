// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Splitting common dependencies into separate chunks
          'react-vendors': ['react', 'react-dom', 'react-router-dom'],
          // Customize this to split any other large dependencies
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set the limit to avoid warnings
  },
});
