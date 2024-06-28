import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../../../components/ui/loading/Loading';
import { LayoutDefault } from '../../../layouts';

const Home = lazy(() => import('../../pages/Page'));

export const defaultRoutes = [
    {
        path: '/',
        element: (
            <Suspense fallback={<Loading />}>
                <LayoutDefault>
                    <Outlet />
                </LayoutDefault>
            </Suspense>
        ),
        children: [
            { element: <Home />, index: true }
        ],
    },
];