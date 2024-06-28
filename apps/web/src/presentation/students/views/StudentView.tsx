import { Button, Container } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { RouterLink } from '../../../app/routes/components';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { useSelectedValue } from '../../../hooks/useSelectedValue';
import { useBoolean } from '../../../hooks/useBoolean';
import { Student } from '../domain/student';
import { useStudentDelete } from '../hooks/useStudentDelete';
import { StudentTable } from '../components/table/StudentTable';
import { DeleteItemDialog } from '../../../components/delete-item/delete-item-dialog';

export function StudentView() {
    const { selected, handleSelected } = useSelectedValue<Student>();
    const deleteItem = useBoolean();
    const { handleDelete, isLoading } = useStudentDelete()

    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                heading="Gestión de Estudiante"
                links={[
                    { name: 'Estudiante', href: paths.students.root },
                    {
                        name: 'Listado',
                    }
                ]}
                action={
                    <Button
                        component={RouterLink}
                        href={paths.students.new}
                        variant="contained"
                    >
                        Nuevo Estudiante
                    </Button>
                }
            />
            {!isLoading &&
                <StudentTable
                    onSelected={handleSelected}
                    deleteItem={deleteItem.onTrue}
                />
            }

            {deleteItem.value && selected &&
                <DeleteItemDialog
                    open={deleteItem.value}
                    onAccept={() => handleDelete(selected.id, deleteItem.onFalse)}
                    onClose={deleteItem.onFalse}
                    onCancel={deleteItem.onFalse}
                />
            }
        </Container>
    );
}
