import react from '@vitejs/plugin-react'
import { getBranchName, getLastCommit } from '@xg4/git'
import { defineConfig } from 'vite'

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
      __APP_VERSION__: JSON.stringify(
        process.env.npm_package_version + '-' + getLastCommit()
      ),
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
