import { Helmet } from 'react-helmet-async';
import { StudentNewView } from '../../../../presentation/students/views/StudentNewView';


export default function StudentNewPage() {
    return (
        <>
            <Helmet>
                <title>Crear Estudiante</title>
            </Helmet>

            <StudentNewView />
        </>
    );
}
