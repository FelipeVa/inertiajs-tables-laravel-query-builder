import path from 'node:path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve('./js/index.ts'),
      name: 'Inertia.js Tables for Laravel Query Builder',
      formats: ['es', 'umd'],
      fileName: format => `inertiajs-tables-laravel-query-builder.${format}.js`,
    },
    rollupOptions: {
      external: [
        /^@inertiajs.*/,
        /^@popperjs.*/,
        /^lodash-es.*/,
        'qs',
        'react',
        'react-dom',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
