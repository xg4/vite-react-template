import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import dayjs from 'dayjs'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'

function getLatestCommitHash() {
  try {
    const hash = execSync('git rev-parse --short HEAD')
    return hash.toString().trim()
  } catch {}
  return 'unknown'
}

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(getLatestCommitHash()),
    __ENV__: JSON.stringify(process.env.NODE_ENV),
    __DATE__: JSON.stringify(dayjs().format('YYYY-MM-DD HH:mm:ss')),
  },
  plugins: [react(), eslintPlugin()],
  resolve: {},
})
