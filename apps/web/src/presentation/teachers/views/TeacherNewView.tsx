import { Container, Paper } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { useRouter } from '../../../app/routes/hooks/use-router';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { TeacherForm } from '../components/form/TeacherForm';


export function TeacherNewView() {
    const router = useRouter();

    const redirectData = () => router.push(paths.teachers.root);

    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                sx={{ display: "inline" }}
                heading="Crear nuevo profesor"
                links={[
                    { name: 'Inicio', href: paths.root },
                    { name: 'Profesor', href: paths.teachers.root },
                    { name: `Crear` },
                ]}
            />
            <Paper sx={{ p: 4 }}>
                <TeacherForm callback={redirectData} />
            </Paper>
        </Container>
    );
}

