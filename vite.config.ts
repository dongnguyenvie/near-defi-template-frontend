import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import alias from '@rollup/plugin-alias'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
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
      ],
    }),
  ],
  publicDir: 'public',
})
