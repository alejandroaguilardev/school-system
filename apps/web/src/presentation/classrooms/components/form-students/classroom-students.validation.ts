import * as Yup from 'yup';
import { AssignStudents } from '../../domain/classroom';

const defaultValues: AssignStudents = {
    students: []
};

const classroomStudentsSchema: Yup.ObjectSchema<AssignStudents> = Yup.object().shape({
    students: Yup.array().of(
        Yup.number().required("El ID del estudiante es requerido").min(1)
    ).required("Debe seleccionar al menos un estudiante"),
});

export { defaultValues, classroomStudentsSchema };
