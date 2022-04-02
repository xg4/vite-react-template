import { RouteObject, useRoutes } from 'react-router-dom';
import LazyComponent from './components/LazyComponent';

export const routes: RouteObject[] = [
  {
    element: LazyComponent(() => import('./layouts/index')),
    path: '/',
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
    element: LazyComponent(() => import('./pages/NotFound')),
    path: '*',
  },
];

export default function Routes() {
  return useRoutes(routes);
}
