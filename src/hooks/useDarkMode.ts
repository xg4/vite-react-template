import { useEffect } from 'react'
import { useMedia, useLocalStorage } from 'react-use'

const LOCAL_STORAGE_KEY = '__DARK_MODE_ENABLED__'

function usePrefersDarkMode() {
  return useMedia('(prefers-color-scheme: dark)', false)
}

interface Options {
  // Switch dark mode on/off to match system settings
  automatic?: boolean
}

export default function useDarkMode({ automatic }: Options = {}): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean | undefined>>
] {
  const [enabledState, setEnabledState] =
    useLocalStorage<boolean>(LOCAL_STORAGE_KEY)

  const prefersDarkMode = usePrefersDarkMode()

  const manualEnabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode

  const enabled = !automatic ? manualEnabled : prefersDarkMode

  useEffect(() => {
    const root = window.document.documentElement
    if (enabled) {
      root.classList.remove('light')
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
  }, [enabled])
  return [enabled, setEnabledState]
}
