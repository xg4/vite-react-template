import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import PageLoading from './components/PageLoading'
import Layout from './layouts'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function LazyComponent(path: string) {
  const Comp = lazy(() => import(/* @vite-ignore */ path))
  return (
    <Suspense fallback={<PageLoading />}>
      <Comp />
    </Suspense>
  )
}

export const routes: RouteObject[] = [
  {
    element: <Layout />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: LazyComponent('./pages/About'),
      },
    ],
  },
  {
    element: <NotFound />,
    path: '*',
  },
]
