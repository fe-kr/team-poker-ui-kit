import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import federation from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@utils': path.resolve(__dirname, './src/utils'),
      types: path.resolve(__dirname, './src/types'),
    },
  },
  plugins: [
    react(),
    svgr(),
    federation({
      name: 'ui-kit',
      filename: 'ui-kit.js',
      exposes: {
        './Button': './src/components/Button',
        './Input': './src/components/Input',
        './Dialog': './src/components/Dialog',
        './ToastsContainer': './src/components/ToastsContainer',
        './Chip': './src/components/Chip',
        './Checkbox': './src/components/Checkbox',
        './Card': './src/components/Card',
        './useDialog': './src/hooks/useDialogStore',
        './useToasts': './src/hooks/useToastsStore',
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
