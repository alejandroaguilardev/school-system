import { Navigate, useRoutes } from 'react-router-dom';
import { defaultRoutes } from './default-routes';
import { classroomsRoutes } from './classroom-routes';
import { studentsRoutes } from './students-routes';
import { teachersRoutes } from './teacher-routes';


export default function Router() {
  return useRoutes([
    ...defaultRoutes,
    ...classroomsRoutes,
    ...studentsRoutes,
    ...teachersRoutes,

    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
