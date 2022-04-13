import { useContext } from 'react'
import { ThemeContext } from './provider'

export default function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return [theme, toggleTheme] as const
}
