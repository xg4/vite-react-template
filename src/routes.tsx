import { RouteObject, useRoutes } from 'react-router-dom'
import LazyComponent from './components/LazyComponent'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: LazyComponent(() => import('./layouts/index')),
    children: [
      {
        index: true,
        element: LazyComponent(() => import('./pages/Home')),
      },
      {
        path: 'about',
        element: LazyComponent(() => import('./pages/About')),
      },
    ],
  },
  {
    path: '*',
    element: LazyComponent(() => import('./pages/NotFound')),
  },
]

export default function Routes() {
  return useRoutes(routes)
}
