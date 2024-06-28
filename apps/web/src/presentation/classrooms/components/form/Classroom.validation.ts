import * as Yup from 'yup';
import { NewClassroom } from '../../domain/classroom';

const defaultValues: NewClassroom = {
    name: "",
    description: "",
};

const classroomSchema: Yup.ObjectSchema<NewClassroom> = Yup.object().shape({
    name: Yup.string()
        .required("El nombre de la clase es requerido")
        .min(2, "El nombre de la clase debe tener al menos 2 caracteres")
        .max(255, "El nombre de la clase debe tener como máximo 255 caracteres"),
    description: Yup.string()
        .required("La descripción de la clase es requerida")
        .min(2, "La descripción de la clase debe tener al menos 2 caracteres")
        .max(250, "La descripción de la clase debe tener como máximo 250 caracteres"),
});

export { defaultValues, classroomSchema };
