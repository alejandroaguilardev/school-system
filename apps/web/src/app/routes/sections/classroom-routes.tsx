import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loading } from '../../../components/ui/loading/Loading';
import { LayoutDefault } from '../../../layouts';
import { paths } from '../paths';

const ClassroomPage = lazy(() => import('../../pages/classrooms/Page'));
const ClassroomNewPage = lazy(() => import('../../pages/classrooms/new/Page'));
const ClassroomEditPage = lazy(() => import('../../pages/classrooms/edit/Page'));
const ClassroomStudentsPage = lazy(() => import('../../pages/classrooms/students/Page'));
const ClassroomTeacherPage = lazy(() => import('../../pages/classrooms/teacher/Page'));


export const classroomsRoutes = [
    {
        path: paths.classrooms.root,
        element: (
            <Suspense fallback={<Loading />}>
                <LayoutDefault>
                    <Outlet />
                </LayoutDefault>
            </Suspense>
        ),
        children: [
            { element: <ClassroomPage />, index: true },
            { path: 'crear', element: <ClassroomNewPage /> },
            { path: 'students/:id', element: <ClassroomStudentsPage /> },
            { path: 'teacher/:id', element: <ClassroomTeacherPage /> },
            { path: ':id', element: <ClassroomEditPage /> },
        ],
    },
];