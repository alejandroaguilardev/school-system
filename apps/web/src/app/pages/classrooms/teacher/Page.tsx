import { Helmet } from 'react-helmet-async';
import { useParams } from '../../../routes/hooks';
import NotFoundView from '../../../../presentation/404';
import { ClassroomTeacherView } from '../../../../presentation/classrooms/views/ClassroomTeacherView';


export default function ClassroomAssignTeacherPage() {
    const params = useParams();
    const { id } = params;


    if (!id) {
        return <NotFoundView />;
    }

    return (
        <>
            <Helmet>
                <title>Asignar Profesor a la  Clase</title>
            </Helmet>

            <ClassroomTeacherView id={+id} />
        </>
    );
}
