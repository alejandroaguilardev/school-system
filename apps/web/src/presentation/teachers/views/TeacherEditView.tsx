import { Container, Paper } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { useRouter } from '../../../app/routes/hooks/use-router';
import { useSearchByIdTeacher } from '../hooks/useSearchByIdTeacher';
import SearchIdNotFound from '../../../guard/SearchIdNotFound';
import { capitalize } from '../../../lib';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { TeacherForm } from '../components/form/TeacherForm';


type Props = {
    id: number;
}

export function TeacherEditView({ id }: Props) {
    const router = useRouter();

    const { teacher, error, isLoading } = useSearchByIdTeacher(id);
    const redirectData = () => router.push(paths.teachers.root);

    return (
        <SearchIdNotFound isLoading={isLoading} data={!!teacher} error={error}>
            <Container maxWidth='xl'>
                <CustomBreadcrumbs
                    sx={{ display: "inline" }}
                    heading={`Editar: ${capitalize(teacher?.name)} `}
                    links={[
                        { name: 'Inicio', href: paths.root },
                        { name: 'Profesor', href: paths.teachers.root },
                        { name: `${capitalize(teacher?.name)}` },
                    ]}
                />
                <Paper sx={{ p: 4 }}>
                    <TeacherForm callback={redirectData} teacher={teacher} />
                </Paper>
            </Container>
        </SearchIdNotFound>
    );
}

