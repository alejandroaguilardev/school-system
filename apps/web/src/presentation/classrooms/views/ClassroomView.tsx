import { Button, Container } from '@mui/material';
import { paths } from '../../../app/routes/paths';
import { RouterLink } from '../../../app/routes/components';
import { CustomBreadcrumbs } from '../../../components/ui/custom-breadcrumbs';
import { useSelectedValue } from '../../../hooks/useSelectedValue';
import { useBoolean } from '../../../hooks/useBoolean';
import { Classroom } from '../domain/classroom';
import { useClassroomDelete } from '../hooks/useClassroomDelete';
import { ClassroomTable } from '../components/table/ClassroomTable';
import { DeleteItemDialog } from '../../../components/delete-item/delete-item-dialog';

export function ClassroomView() {
    const { selected, handleSelected } = useSelectedValue<Classroom>();
    const deleteItem = useBoolean();
    const { handleDelete, isLoading } = useClassroomDelete()

    return (
        <Container maxWidth='xl'>
            <CustomBreadcrumbs
                heading="Gestión de Clase"
                links={[
                    { name: 'Clase', href: paths.classrooms.root },
                    {
                        name: 'Listado',
                    }
                ]}
                action={
                    <Button
                        component={RouterLink}
                        href={paths.classrooms.new}
                        variant="contained"
                    >
                        Nuevo Clase
                    </Button>
                }
            />
            {!isLoading &&
                <ClassroomTable
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
