import { useEffect, useRef } from 'react'

export default function usePrevious<T>(state: T): T | undefined {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = state
  }, [state])

  return ref.current
}
