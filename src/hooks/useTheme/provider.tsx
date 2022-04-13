import noop from 'lodash/noop'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'

type ThemeValue = 'light' | 'dark'

const LOCAL_THEME_KEY = '__COLOR_THEME__'

// get theme from localStorage or match with user system theme
function getInitialTheme(): ThemeValue {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem(LOCAL_THEME_KEY)
    if (typeof storedTheme === 'string') {
      return storedTheme as ThemeValue
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)')
    if (userMedia.matches) {
      return 'dark'
    }
  }

  return 'light' // light theme as the default;
}

// 1. set theme to localStorage
// 2. set theme to htmlElement for tailwind
function setRawTheme(rawTheme: ThemeValue) {
  const root = window.document.documentElement
  const isDark = rawTheme === 'dark'

  root.classList.remove(isDark ? 'light' : 'dark')
  root.classList.add(rawTheme)

  localStorage.setItem(LOCAL_THEME_KEY, rawTheme)
}

export const ThemeContext = createContext<{
  theme: ThemeValue
  toggleTheme: () => void
}>({
  theme: getInitialTheme(),
  toggleTheme: noop,
})

export interface ThemeProviderProps {
  initialTheme?: ThemeValue
  children?: ReactNode
}

export const ThemeProvider = ({
  initialTheme,
  children,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState(initialTheme ?? getInitialTheme)

  if (initialTheme) {
    setRawTheme(initialTheme)
  }

  useEffect(() => {
    setRawTheme(theme)
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
