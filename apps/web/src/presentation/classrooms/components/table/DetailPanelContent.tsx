import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Student } from "../../../students/domain/student";

type Props = {
    students: Student[];
}

export const DetailPanelContent: React.FC<Props> = ({ students }) => {
    return (
        <Box>
            <Typography variant="h6">Lista de Estudiantes</Typography>
            <TableContainer component={Paper}>
                <Table >
                    <TableHead>
                        <TableRow >
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellido</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.lastName}</TableCell>
                                <TableCell>{student.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}