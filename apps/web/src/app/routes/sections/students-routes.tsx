import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../../../components/ui/loading/Loading';
import { LayoutDefault } from '../../../layouts';
import { paths } from '../paths';

const StudentPage = lazy(() => import('../../pages/students/Page'));
const StudentNewPage = lazy(() => import('../../pages/students/new/Page'));
const StudentEditPage = lazy(() => import('../../pages/students/edit/Page'));


export const studentsRoutes = [
    {
        path: paths.students.root,
        element: (
            <Suspense fallback={<Loading />}>
                <LayoutDefault>
                    <Outlet />
                </LayoutDefault>
            </Suspense>
        ),
        children: [
            { element: <StudentPage />, index: true },
            { path: 'crear', element: <StudentNewPage /> },
            { path: ':id', element: <StudentEditPage /> },
        ],
    },
];