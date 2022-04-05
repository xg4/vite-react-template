import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import { defineConfig } from 'vite'

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
    __APP_VERSION__: JSON.stringify(getLatestCommitHash()),
    __APP_ENV__: JSON.stringify(process.env.NODE_ENV),
    __BUILD_DATE__: JSON.stringify(Date.now()),
  },
  plugins: [react()],
  resolve: {},
})
