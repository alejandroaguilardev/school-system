import { Helmet } from 'react-helmet-async';
import { useParams } from '../../../routes/hooks';
import NotFoundView from '../../../../presentation/404';
import { ClassroomAssignView } from '../../../../presentation/classrooms/views/ClassroomStudentsView';


export default function ClassroomAssignPage() {
    const params = useParams();
    const { id } = params;


    if (!id) {
        return <NotFoundView />;
    }

    return (
        <>
            <Helmet>
                <title>Asignar Estudiante a la  Clase</title>
            </Helmet>

            <ClassroomAssignView id={+id} />
        </>
    );
}
