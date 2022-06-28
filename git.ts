import { execSync } from 'node:child_process'

export function getBranchName() {
  try {
    return execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
  } catch {
    console.error('Cannot read branch name')
    return 'unknown'
  }
}

export function getLastTag() {
  try {
    return execSync('git describe --abbrev=0 --tags').toString().trim()
  } catch {
    console.error(
      'Repository does not contain tags, defaulting to version 0.0.0'
    )
    return '0.0.0'
  }
}

export function getLastCommit() {
  try {
    return execSync('git rev-parse --short HEAD').toString().trim()
  } catch {
    console.error('Cannot read last commit hash')
    return 'unknown'
  }
}

export function getVersion() {
  return `${getLastTag()}-${getLastCommit()}`
}
