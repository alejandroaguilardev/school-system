import { FC, useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Teacher } from '../../domain/teacher';
import { RenderRowActionMenuItem } from '../../../../components/table-wrapper/RenderRowActionMenuItem';
import { paths } from '../../../../app/routes/paths';
import { TablePagination } from '../../../../components/material-react-table/TablePagination';
import { COLLECTIONS } from '../../../../types/collections';
import { RemoveRedEye, Edit } from '@mui/icons-material';
import { RenderRowActionMenuItemButton } from '../../../../components/table-wrapper/RenderRowActionMenuItemButton';


type Props = {
    onSelected: (teacher: Teacher) => void;
    deleteItem: () => void;
}

export const TeacherTable: FC<Props> = ({ onSelected, deleteItem, }) => {
    const columns = useMemo<MRT_ColumnDef<Teacher>[]>(
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
        <TablePagination<Teacher>
            name={TeacherTable?.displayName || 'table'}
            globalFilterProperties={[]}
            collection={COLLECTIONS.teachers}
            columns={columns}
            renderRowActionMenuItems={({ row }) => [
                <RenderRowActionMenuItem
                    key="edit"
                    item={{
                        name: "Editar",
                        icon: <Edit />,
                        href: paths.teachers.edit(row.original.id)
                    }}
                />,
                <RenderRowActionMenuItemButton<Teacher>
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
