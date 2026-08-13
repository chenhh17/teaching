import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { topicImageSearchPlugin } from './vite-plugins/topicImageSearch.mjs'

const teachingApiProxy = {
  target: 'http://127.0.0.1:9011',
  changeOrigin: true,
  rewrite: (path: string) => path.replace(/^\/api/, '/teaching/api'),
}

export default defineConfig(({ command }) => ({
  plugins: [react(), topicImageSearchPlugin()],
  base: command === 'build' ? '/teaching/' : '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    proxy: {
      '/api/auth': teachingApiProxy,
      '/api/progress': teachingApiProxy,
      '/api/admin': teachingApiProxy,
    },
  },
}))