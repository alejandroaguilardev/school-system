import { Helmet } from 'react-helmet-async';
import { useParams } from '../../../routes/hooks';
import NotFoundView from '../../../../presentation/404';
import { ClassroomEditView } from '../../../../presentation/classrooms/views/ClassroomEditView';


export default function ClassroomEditPage() {
    const params = useParams();
    const { id } = params;


    if (!id) {
        return <NotFoundView />;
    }

    return (
        <>
            <Helmet>
                <title>Editar Clase</title>
            </Helmet>

            <ClassroomEditView id={+id} />
        </>
    );
}
