import rollupReplace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'
import dayjs from 'dayjs'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    rollupReplace({
      __ENV__: process.env.NODE_ENV,
      __DATE__: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }),
  ],
  resolve: {
    alias: { 'lodash/fp': 'lodash/fp', lodash: 'lodash-es' },
  },
})
