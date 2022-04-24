import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
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
      __APP_VERSION__: JSON.stringify(getAppVersion()),
      __APP_ENV__: JSON.stringify(mode),
      __APP_BRANCH__: JSON.stringify(getCurrentGitBranch()),
      __BUILD_DATE__: JSON.stringify(Date.now()),
    },
    plugins: [react()],
    resolve: {
      alias,
    },
  }
})

function getCurrentCommitHash() {
  try {
    const hash = execSync('git rev-parse --short HEAD')
    return hash.toString().trim()
  } catch {}
  return 'unknown'
}

function getCurrentGitTag() {
  try {
    const tag = execSync('git describe --abbrev=0 --tags')
    return tag.toString().trim()
  } catch {}
  return 'unknown'
}

function getAppVersion() {
  return `${getCurrentGitTag()}-${getCurrentCommitHash()}`
}

function getCurrentGitBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD')
    return branch.toString().trim()
  } catch {}
  return 'unknown'
}
