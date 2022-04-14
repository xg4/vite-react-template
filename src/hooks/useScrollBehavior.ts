import { useEffect, useRef } from 'react'
import { Location, useLocation } from 'react-router-dom'
import { usePrevious } from 'react-use'

type PromiseCallback = (
  to: Location,
  from: Location | undefined,
  savedPositions: { top: number; left: number }
) => Promise<ScrollToOptions>

type Callback = (
  to: Location,
  from: Location | undefined,
  savedPositions: { top: number; left: number }
) => ScrollToOptions

export default function useScrollBehavior(
  options: ScrollToOptions | PromiseCallback | Callback
) {
  const location = useLocation()

  const prevLocation = usePrevious(location)
  const savedPositions = useRef(new Map())

  useEffect(() => {
    if (typeof options === 'function') {
      const cb = options
      async function scroll() {
        const _options = await cb(
          location,
          prevLocation,
          savedPositions.current.get(location.pathname)
        )
        _options && window.scrollTo(_options)
      }
      scroll()
    } else {
      options && window.scrollTo(options)
    }

    return () => {
      savedPositions.current.set(location.pathname, {
        left: window.scrollX,
        top: window.scrollY,
      })
    }
  }, [location.pathname])
}
