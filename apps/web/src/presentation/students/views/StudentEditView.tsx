import { Container, Paper } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { useRouter } from '../../../app/routes/hooks/use-router';
import { useSearchByIdStudent } from '../hooks/useSearchByIdStudent';
import SearchIdNotFound from '../../../guard/SearchIdNotFound';
import { capitalize } from '../../../lib';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { StudentForm } from '../components/form/StudentForm';


type Props = {
    id: number;
}

export function StudentEditView({ id }: Props) {
    const router = useRouter();

    const { student, error, isLoading } = useSearchByIdStudent(id);
    const redirectData = () => router.push(paths.students.root);

    return (
        <SearchIdNotFound isLoading={isLoading} data={!!student} error={error}>
            <Container maxWidth='xl'>
                <CustomBreadcrumbs
                    sx={{ display: "inline" }}
                    heading={`Editar: ${capitalize(student?.name)} `}
                    links={[
                        { name: 'Inicio', href: paths.root },
                        { name: 'Estudiante', href: paths.students.root },
                        { name: `${capitalize(student?.name)}` },
                    ]}
                />
                <Paper sx={{ p: 4 }}>
                    <StudentForm callback={redirectData} student={student} />
                </Paper>
            </Container>
        </SearchIdNotFound>
    );
}

