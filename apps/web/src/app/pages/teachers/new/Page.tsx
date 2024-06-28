import { Helmet } from 'react-helmet-async';
import { TeacherNewView } from '../../../../presentation/teachers/views/TeacherNewView';


export default function TeacherNewPage() {
    return (
        <>
            <Helmet>
                <title>Crear Profesor</title>
            </Helmet>

            <TeacherNewView />
        </>
    );
}
