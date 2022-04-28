import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'
import GlobalsPolyfills from '@esbuild-plugins/node-globals-polyfill'
const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      buffer: 'buffer',
    },
  },
  plugins: [
    react(),
    alias({
      entries: [
        { find: '#pages', replacement: resolve(projectRootDir, '/src/pages') },
        { find: '#utils', replacement: resolve(projectRootDir, '/src/utils') },
        { find: '#components', replacement: resolve(projectRootDir, '/src/components') },
        { find: '#layouts', replacement: resolve(projectRootDir, '/src/layouts') },
        { find: '#assets', replacement: resolve(projectRootDir, '/src/assets') },
        { find: '#types', replacement: resolve(projectRootDir, '/src/types') },
        { find: '#providers', replacement: resolve(projectRootDir, '/src/providers') },
        { find: '#modules', replacement: resolve(projectRootDir, '/src/modules') },
      ],
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        GlobalsPolyfills({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  publicDir: 'public',
})
