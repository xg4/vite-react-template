import { lazy, Suspense } from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'

const BaseLayout = lazy(() => import('./layouts/index'))
const Home = lazy(() => import('./pages/index'))
const About = lazy(() => import('./pages/about'))
const NotFound = lazy(() => import('./pages/notFound'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default function Routes() {
  return <Suspense fallback={null}>{useRoutes(routes)}</Suspense>
}
