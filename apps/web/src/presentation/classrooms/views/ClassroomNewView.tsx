import { Container, Paper } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { useRouter } from '../../../app/routes/hooks/use-router';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { ClassroomForm } from '../components/form/ClassroomForm';


export function ClassroomNewView() {
    const router = useRouter();

    const redirectData = () => router.push(paths.classrooms.root);

    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                sx={{ display: "inline" }}
                heading="Crear nuevo clase"
                links={[
                    { name: 'Inicio', href: paths.root },
                    { name: 'Clase', href: paths.classrooms.root },
                    { name: `Crear` },
                ]}
            />
            <Paper sx={{ p: 4 }}>
                <ClassroomForm callback={redirectData} />
            </Paper>
        </Container>
    );
}

