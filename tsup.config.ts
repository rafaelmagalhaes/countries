import { defineConfig } from 'tsup'
import { default as pkg } from './package.json' assert { type: 'json' }

export default defineConfig({
  banner: () => ({ js: `/*! @rrrm/countries v${pkg.version} by Rafael Magalhaes | MIT */` }),
 splitting: true,
  clean: true, // clean up the dist folder
  dts: true, // generate dts files
  format: ['cjs', 'esm'], // generate cjs and esm files
  minify:true,
  bundle:true,
  skipNodeModulesBundle: true,
  watch: false,
  target: 'es2020',
  outDir:'dist',
  entry: ['src/**/*.ts'], //include all files under src
})