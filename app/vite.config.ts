/// <reference types='vitest'/>
/// <reference types='vite/client'/>

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }]
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  //needed for the Docker container port mapping to work
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    port: 5173
  }
})
