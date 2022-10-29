import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'automatic', // <---
    jsxImportSource: '@emotion/react',
    babel: {
      plugins: ['@emotion/babel-plugin'],
    },
  })],
  base: 'src',
  resolve: {
    alias: {
      'src': resolve(__dirname, 'src'),
      'components': resolve(__dirname, 'src', 'components'),
      'hooks': resolve(__dirname, 'src', 'hooks'),
      'services': resolve(__dirname, 'src', 'services'),
      'store': resolve(__dirname, 'src', 'store'),
      'assets': resolve(__dirname, 'src', 'assets'),
      'styles': resolve(__dirname, 'src', 'styles'),
      'utils': resolve(__dirname, 'src', 'utils'),
      'pages': resolve(__dirname, 'src', 'pages'),
      'containers': resolve(__dirname, 'src', 'containers'),
    },
  },
})
