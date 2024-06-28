import { Helmet } from 'react-helmet-async';
import { ClassroomView } from '../../../presentation/classrooms/views/ClassroomView';


export default function ClassroomPage() {
    return (
        <>
            <Helmet>
                <title>Clase</title>
            </Helmet>

            <ClassroomView />
        </>
    );
}
