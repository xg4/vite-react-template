import rollupReplace from '@rollup/plugin-replace'
import react from '@vitejs/plugin-react'
import dayjs from 'dayjs'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rollupReplace({
      __ENV__: process.env.NODE_ENV,
      __DATE__: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    }),
    react(),
  ],
  resolve: {
    alias: { lodash: 'lodash-es' },
  },
})
