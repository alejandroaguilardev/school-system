import { Helmet } from 'react-helmet-async';
import { ClassroomNewView } from '../../../../presentation/classrooms/views/ClassroomNewView';


export default function ClassroomPage() {
    return (
        <>
            <Helmet>
                <title>Crear Clase</title>
            </Helmet>

            <ClassroomNewView />
        </>
    );
}
