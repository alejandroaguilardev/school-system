import { Helmet } from 'react-helmet-async';
import { TeacherEditView } from '../../../../presentation/teachers/views/TeacherEditView';
import { useParams } from '../../../routes/hooks';
import NotFoundView from '../../../../presentation/404';


export default function TeacherEditPage() {
    const params = useParams();
    const { id } = params;


    if (!id) {
        return <NotFoundView />;
    }

    return (
        <>
            <Helmet>
                <title>Editar Profesor</title>
            </Helmet>

            <TeacherEditView id={+id} />
        </>
    );
}
