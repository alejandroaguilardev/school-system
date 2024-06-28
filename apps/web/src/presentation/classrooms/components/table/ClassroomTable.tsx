import { FC, useMemo } from 'react';
import { MRT_ColumnDef } from 'material-react-table';
import { Classroom } from '../../domain/classroom';
import { RenderRowActionMenuItem } from '../../../../components/table-wrapper/RenderRowActionMenuItem';
import { paths } from '../../../../app/routes/paths';
import { TablePagination } from '../../../../components/material-react-table/TablePagination';
import { COLLECTIONS } from '../../../../types/collections';
import { RemoveRedEye, Edit, Add } from '@mui/icons-material';
import { RenderRowActionMenuItemButton } from '../../../../components/table-wrapper/RenderRowActionMenuItemButton';
import { DetailPanelContent } from './DetailPanelContent';


type Props = {
    onSelected: (classroom: Classroom) => void;
    deleteItem: () => void;
}

export const ClassroomTable: FC<Props> = ({ onSelected, deleteItem, }) => {
    const columns = useMemo<MRT_ColumnDef<Classroom>[]>(
        () => [
            {
                header: 'Nombre',
                accessorKey: 'name',
                accessorFn: (row) => row.name?.toUpperCase(),
                minSize: 150
            },
            {
                header: 'Descripción',
                accessorKey: 'description',
                accessorFn: (row) => row.description?.length > 50 ? `${row.description?.substring(0, 49)}...` : row.description,
                minSize: 300
            },

            {
                header: 'Profesor',
                accessorKey: 'teacher.name',
                accessorFn: (row) => row?.teacher
                    ? `${row.teacher?.name?.toUpperCase()} ${row.teacher.lastName?.toUpperCase()}`
                    : "NO-ASIGNADO",
                minSize: 500
            },
            {
                header: 'Estudiantes',
                accessorKey: 'students',
                accessorFn: (row) => row.students.map(student => `${student.name} ${student.lastName}`).join(', '), // Concatenar nombres de estudiantes
                minSize: 300
            }
        ],
        [],
    );


    return (
        <TablePagination<Classroom>
            name={ClassroomTable?.displayName || 'table'}
            globalFilterProperties={[]}
            collection={COLLECTIONS.classrooms}
            columns={columns}
            enableExpanding={true}
            renderDetailPanel={({ row }) => {
                return row?.original?.students && row?.original?.students?.length > 0 ? <DetailPanelContent students={row.original.students} /> : null
            }}
            renderRowActionMenuItems={({ row }) => [
                <RenderRowActionMenuItem
                    key="teacher"
                    item={{
                        name: "Asignar Profesor",
                        icon: <Add />,
                        href: paths.classrooms.teacher(row.original.id)
                    }}
                />,
                <RenderRowActionMenuItem
                    key="students"
                    item={{
                        name: "Asignar Estudiante",
                        icon: <Add />,
                        href: paths.classrooms.students(row.original.id)
                    }}
                />,
                <RenderRowActionMenuItem
                    key="edit"
                    item={{
                        name: "Editar",
                        icon: <Edit />,
                        href: paths.classrooms.edit(row.original.id)
                    }}
                />,
                <RenderRowActionMenuItemButton<Classroom>
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
