import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { topicImageSearchPlugin } from './vite-plugins/topicImageSearch.mjs'

export default defineConfig({
  plugins: [react(), topicImageSearchPlugin()],
})
