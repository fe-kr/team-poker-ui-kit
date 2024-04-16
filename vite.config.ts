import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
    },
  },
  plugins: [
    react(),
    federation({
      name: 'ui-kit',
      filename: 'ui-kit.js',
      exposes: {
        './Button': './src/components/Button',
        './Input': './src/components/Input',
        './theme': './src/constants/theme.ts',
      },
      shared: ['react', 'styled-components'],
    }),
  ],
  build: {
    target: 'esnext',
  },
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
});
