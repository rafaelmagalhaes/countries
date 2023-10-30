import { resolve } from 'path';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2'
import dts from 'vite-plugin-dts';
export default defineConfig({
  build: {
    lib: {
      formats: ['cjs', 'es'],
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@rrrm/countries',
      fileName: 'index',
    },
    emptyOutDir: false,
    outDir: 'dist',
    sourcemap: true,
    minify: true
  },
  plugins: [dts({
     insertTypesEntry: true,
  }), compression({exclude: [/\.(br)$/, /\.(gz)$/]})],
});