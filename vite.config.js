import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  root: './frontend',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  // BEGIN no idea what all this does, but it allows me to run it through an ssh tunnel
  server: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    cors: true,
    strictPort: true,
    hmr: {
      clientPort: 443,
      host: 'tunnel.liz-lovelace.com'
    },
  }
  // END no idea what this does
}) 