import * as Yup from 'yup';
import { NewTeacher } from '../../domain/teacher';

const defaultValues: NewTeacher = {
    name: "",
    lastName: "",
    email: ""
};

const teacherSchema: Yup.ObjectSchema<NewTeacher> = Yup.object().shape({
    name: Yup.string()
        .required("El nombre es requerido")
        .min(2, "El nombre debe tener al menos 2 caracteres")
        .max(255, "El nombre debe tener como máximo 255 caracteres"),
    lastName: Yup.string()
        .required("El apellido es requerido")
        .min(2, "El apellido debe tener al menos 2 caracteres")
        .max(50, "El apellido debe tener como máximo 50 caracteres"),
    email: Yup.string()
        .required("El correo electrónico es requerido")
        .min(3, "El correo electrónico debe tener al menos 3 caracteres")
        .max(100, "El correo electrónico debe tener como máximo 100 caracteres")
        .email("Debe ser un correo electrónico válido")
});

export { defaultValues, teacherSchema };
