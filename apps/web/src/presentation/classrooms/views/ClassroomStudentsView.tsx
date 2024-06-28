import { Container, Paper } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { useRouter } from '../../../app/routes/hooks/use-router';
import { useSearchByIdClassroom } from '../hooks/useSearchByIdClassroom';
import SearchIdNotFound from '../../../guard/SearchIdNotFound';
import { capitalize } from '../../../lib';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { ClassroomFormStudents } from '../components/form-students/ClassroomFormStudents';


type Props = {
    id: number;
}

export function ClassroomStudentsView({ id }: Props) {
    const router = useRouter();

    const { classroom, error, isLoading } = useSearchByIdClassroom(id);
    const redirectData = () => router.push(paths.classrooms.root);

    return (
        <SearchIdNotFound isLoading={isLoading} data={!!classroom} error={error}>
            <Container maxWidth='xl'>
                <CustomBreadcrumbs
                    sx={{ display: "inline" }}
                    heading={`Asignar Estudiantes: ${capitalize(classroom?.name)} `}
                    links={[
                        { name: 'Inicio', href: paths.root },
                        { name: 'Clase', href: paths.classrooms.root },
                        { name: `${capitalize(classroom?.name)}` },
                    ]}
                />
                <Paper sx={{ p: 4 }}>
                    <ClassroomFormStudents callback={redirectData} classroom={classroom!} />
                </Paper>
            </Container>
        </SearchIdNotFound>
    );
}

