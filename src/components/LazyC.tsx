import { lazy, Suspense } from 'react'

// lazy component
export default function LazyC(
  factory: () => Promise<{
    default: () => JSX.Element
  }>
) {
  const Component = lazy(factory)
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  )
}
