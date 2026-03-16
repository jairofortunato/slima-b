import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://slimasaude.com',
  output: 'static',
  integrations: [
    react(),
    tailwind(),
  ],
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      }
    }
  }
});
