import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Sitemap from 'vite-plugin-sitemap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),

    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),

    Sitemap({
      dynamicRoutes: ['/who-we-are', '/products', '/talk-to-us'],
      hostname: 'https://www.sunnyfoods.com.ph/',
      outDir: 'dist',
    }),
  ],

  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  server: {
    allowedHosts: true,
  },
});
