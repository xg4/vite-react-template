import { lazy, Suspense } from 'react';

export default function LazyComponent(
  factory: () => Promise<{
    default: () => JSX.Element;
  }>,
) {
  const Component = lazy(factory);
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
