import { Helmet } from 'react-helmet-async';
import { StudentView } from '../../../presentation/students/views/StudentView';


export default function StudentPage() {
    return (
        <>
            <Helmet>
                <title> Estudiante</title>
            </Helmet>

            <StudentView />
        </>
    );
}
