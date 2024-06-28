import * as Yup from 'yup';
import { AssignTeacher } from '../../domain/classroom';

const defaultValues: AssignTeacher = {
    teacher: 0
};

const classroomTeacherSchema: Yup.ObjectSchema<AssignTeacher> = Yup.object().shape({
    teacher: Yup.number().required("El ID del profesor es requerido").min(1),
});

export { defaultValues, classroomTeacherSchema };
