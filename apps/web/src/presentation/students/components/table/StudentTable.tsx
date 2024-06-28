import { FC, useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Student } from '../../domain/student';
import { RenderRowActionMenuItem } from '../../../../components/table-wrapper/RenderRowActionMenuItem';
import { paths } from '../../../../app/routes/paths';
import { TablePagination } from '../../../../components/material-react-table/TablePagination';
import { COLLECTIONS } from '../../../../types/collections';
import { RemoveRedEye, Edit } from '@mui/icons-material';
import { RenderRowActionMenuItemButton } from '../../../../components/table-wrapper/RenderRowActionMenuItemButton';


type Props = {
    onSelected: (student: Student) => void;
    deleteItem: () => void;
}

export const StudentTable: FC<Props> = ({ onSelected, deleteItem, }) => {
    const columns = useMemo<MRT_ColumnDef<Student>[]>(
        () => [
            {
                header: 'Nombre',
                accessorKey: 'name',
                accessorFn: (row) => row.name?.toUpperCase(),
                minSize: 200
            },
            {
                header: 'Apellido',
                accessorKey: 'lastName',
                accessorFn: (row) => row.lastName?.toUpperCase(),
                minSize: 200
            },

            {
                header: 'Correo Electrónico',
                accessorKey: 'email',
                accessorFn: (row) => row.email?.toUpperCase(),
                minSize: 400

            },
        ],
        [],
    );


    return (
        <TablePagination<Student>
            name={StudentTable?.displayName || 'table'}
            globalFilterProperties={[]}
            collection={COLLECTIONS.students}
            columns={columns}
            renderRowActionMenuItems={({ row }) => [
                <RenderRowActionMenuItem
                    key="edit"
                    item={{
                        name: "Editar",
                        icon: <Edit />,
                        href: paths.students.edit(row.original.id)
                    }}
                />,
                <RenderRowActionMenuItemButton<Student>
                    key="delete"
                    item={{
                        name: "Eliminar",
                        icon: <RemoveRedEye />,
                    }}
                    row={row.original}
                    onSelected={(value) => {
                        onSelected(value);
                        deleteItem();
                    }}
                />
            ]}
        />
    )
}
