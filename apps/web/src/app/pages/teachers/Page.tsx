import { Helmet } from 'react-helmet-async';
import { TeacherView } from '../../../presentation/teachers/views/TeacherView';


export default function TeacherPage() {
    return (
        <>
            <Helmet>
                <title>Profesor</title>
            </Helmet>

            <TeacherView />
        </>
    );
}
