import { Container, Paper } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { useRouter } from '../../../app/routes/hooks/use-router';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { StudentForm } from '../components/form/StudentForm';


export function StudentNewView() {
    const router = useRouter();

    const redirectData = () => router.push(paths.students.root);

    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                sx={{ display: "inline" }}
                heading="Crear nuevo estudiante"
                links={[
                    { name: 'Inicio', href: paths.root },
                    { name: 'Estudiante', href: paths.students.root },
                    { name: `Crear` },
                ]}
            />
            <Paper sx={{ p: 4 }}>
                <StudentForm callback={redirectData} />
            </Paper>
        </Container>
    );
}

