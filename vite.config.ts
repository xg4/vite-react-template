import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { getBranchName, getVersion } from './git'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const alias = {}
  if (!isDev) {
    Object.assign(alias, {})
  }
  return {
    envPrefix: ['VITE_'],
    define: {
      __APP_VERSION__: JSON.stringify(getVersion()),
      __APP_ENV__: JSON.stringify(mode),
      __APP_BRANCH__: JSON.stringify(getBranchName()),
      __BUILD_DATE__: JSON.stringify(Date.now()),
    },
    plugins: [react()],
    resolve: {
      alias,
    },
  }
})
