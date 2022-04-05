import { RouteObject, useRoutes } from 'react-router-dom'
import LazyC from './components/LazyC'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: LazyC(() => import('./layouts/index')),
    children: [
      {
        index: true,
        element: LazyC(() => import('./pages/home')),
      },
      {
        path: 'about',
        element: LazyC(() => import('./pages/about')),
      },
    ],
  },
  {
    path: '*',
    element: LazyC(() => import('./pages/notFound')),
  },
]

export default function Routes() {
  return useRoutes(routes)
}
