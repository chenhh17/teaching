import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { topicImageSearchPlugin } from './vite-plugins/topicImageSearch.mjs'

export default defineConfig(({ command }) => ({
  plugins: [react(), topicImageSearchPlugin()],
  base: command === 'build' ? '/teaching/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
}))
