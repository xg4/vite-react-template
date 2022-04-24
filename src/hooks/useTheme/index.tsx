import { useEffect } from 'react'
import useLocalStorage from '../useLocalStorage'
import useMedia from '../useMedia'
import usePrevious from '../usePrevious'

type ThemeValue = 'light' | 'dark'

const LOCAL_THEME_KEY = '__COLOR_THEME__'

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}

export default function useTheme() {
  const [themeState, setThemeState] = useLocalStorage<ThemeValue>(
    LOCAL_THEME_KEY,
    'light'
  )
  // See if user has set a browser or OS preference for dark mode.
  // The usePrefersDarkMode hook composes a useMedia hook (see code below).
  const prefersDarkMode = usePrefersDarkMode()
  console.log(prefersDarkMode, 'prefersDarkMode')

  const systemTheme = prefersDarkMode ? 'dark' : 'light'

  const currentTheme =
    typeof themeState !== 'undefined' ? themeState : systemTheme

  const previousTheme = usePrevious(currentTheme)

  useEffect(
    () => {
      const root = window.document.documentElement
      previousTheme && root.classList.remove(previousTheme)
      root.classList.add(currentTheme)
    },
    [currentTheme] // Only re-call effect when value changes
  )
  // Return enabled state and setter
  return [currentTheme, setThemeState] as const
}
