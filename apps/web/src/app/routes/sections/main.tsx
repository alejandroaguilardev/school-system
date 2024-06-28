import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutDefault } from '../../../layouts';

const Page404 = lazy(() => import('../../pages/404'));

export const mainRoutes = [
  {
    element: (
      <LayoutDefault>
        <Outlet />
      </LayoutDefault>
    ),
    children: [{ path: '404', element: <Page404 /> }],
  },
];
