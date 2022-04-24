import { useEffect } from 'react'
import useLocalStorage from '../useLocalStorage'
import useMedia from '../useMedia'

const LOCAL_STORAGE_KEY = '__DARK_MODE_ENABLED__'

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}

export default function useDarkMode() {
  const [enabledState, setEnabledState] =
    useLocalStorage<boolean>(LOCAL_STORAGE_KEY)

  const prefersDarkMode = usePrefersDarkMode()

  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

  useEffect(() => {
    const root = window.document.documentElement
    if (enabled) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [enabled])
  return [enabled, setEnabledState] as const
}
