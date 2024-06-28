import { FC, useEffect, useState } from "react";
import { Student } from "../../../students/domain/student";
import { Criteria } from "../../../../types/criteria/criteria";
import { studentsApi } from "../../../students/service/students.api";
import { useFormContext } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

type Props = {
    students: Student[];
};

export const AutocompleteStudents: FC<Props> = ({ students }) => {
    const { setValue } = useFormContext();
    const [studentSelected, setStudentSelected] = useState<Student[]>(students ?? []);
    const [dataStudents, setDataStudents] = useState<Student[]>([]);

    const handleStudents = (values: Student[]) => {
        setStudentSelected(values);
        setValue("students", values.map(student => student.id));
    };

    useEffect(() => {
        const criteria: Criteria = { start: 0, size: 100, filters: [], globalFilter: "", globalFilterProperties: [], selectProperties: [], sorting: [] };
        studentsApi.search<Student>(criteria).then((data) => {
            setDataStudents(data.rows);
        }).catch(() => setDataStudents([]));
    }, []);

    return (
        <Autocomplete
            multiple
            options={dataStudents}
            defaultValue={studentSelected}
            value={studentSelected}
            getOptionLabel={(student: Student) => `${student.name} ${student.lastName}`}
            onChange={(_, value) => handleStudents(value)}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label="Asignar Estudiantes (*)"
                />
            )}
        />
    );
};
