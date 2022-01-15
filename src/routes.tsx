import { lazy, Suspense } from 'react'
import { RouteObject } from 'react-router-dom'
import PageLoading from './components/PageLoading'
import Layout from './layouts'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const About = lazy(() => import('./pages/About'))

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
        element: (
          <Suspense fallback={<PageLoading />}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <NotFound />,
    path: '*',
  },
]
