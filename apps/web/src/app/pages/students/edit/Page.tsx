import { Helmet } from 'react-helmet-async';
import { useParams } from '../../../routes/hooks';
import NotFoundView from '../../../../presentation/404';
import { StudentEditView } from '../../../../presentation/students/views/StudentEditView';


export default function StudentEditPage() {
    const params = useParams();
    const { id } = params;


    if (!id) {
        return <NotFoundView />;
    }

    return (
        <>
            <Helmet>
                <title>Editar Estudiante</title>
            </Helmet>

            <StudentEditView id={+id} />
        </>
    );
}
