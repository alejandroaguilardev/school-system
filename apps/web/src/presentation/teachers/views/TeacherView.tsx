import { Button, Container } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { RouterLink } from '../../../app/routes/components';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { useSelectedValue } from '../../../hooks/useSelectedValue';
import { useBoolean } from '../../../hooks/useBoolean';
import { Teacher } from '../domain/teacher';
import { useTeacherDelete } from '../hooks/useTeacherDelete';
import { TeacherTable } from '../components/table/TeacherTable';
import { DeleteItemDialog } from '../../../components/delete-item/delete-item-dialog';

export function TeacherView() {
    const { selected, handleSelected } = useSelectedValue<Teacher>();
    const deleteItem = useBoolean();
    const { handleDelete, isLoading } = useTeacherDelete()

    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                heading="Gestión de Profesor"
                links={[
                    { name: 'Profesor', href: paths.teachers.root },
                    {
                        name: 'Listado',
                    }
                ]}
                action={
                    <Button
                        component={RouterLink}
                        href={paths.teachers.new}
                        variant="contained"
                    >
                        Nuevo Profesor
                    </Button>
                }
            />
            {!isLoading &&
                <TeacherTable
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
