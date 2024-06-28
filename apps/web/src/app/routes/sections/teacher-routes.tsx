import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../../../components/ui/loading/Loading';
import { LayoutDefault } from '../../../layouts';
import { paths } from '../paths';

const TeacherPage = lazy(() => import('../../pages/teachers/Page'));
const TeacherNewPage = lazy(() => import('../../pages/teachers/new/Page'));
const TeacherEditPage = lazy(() => import('../../pages/teachers/edit/Page'));


export const teachersRoutes = [
    {
        path: paths.teachers.root,
        element: (
            <Suspense fallback={<Loading />}>
                <LayoutDefault>
                    <Outlet />
                </LayoutDefault>
            </Suspense>
        ),
        children: [
            { element: <TeacherPage />, index: true },
            { path: 'crear', element: <TeacherNewPage /> },
            { path: ':id', element: <TeacherEditPage /> },
        ],
    },
];