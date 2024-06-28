import { FC } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../../../components/hook-form/form-provider';
import { ActionsButtonsForm } from '../../../../components/hook-form/actions-buttons-form';
import { defaultValues, studentSchema } from "./student.validation";
import { RHFTextField } from "../../../../components/hook-form";
import { Stack } from "@mui/material";
import { NewStudent, Student } from "../../domain/student";
import { useStudentSave } from "../../hooks/useStudentSave";

type Props = {
    student?: Student;
    callback: () => void
}

export const StudentForm: FC<Props> = ({ student, callback }) => {
    const { id, ...data } = student ?? {};
    const methods = useForm({
        resolver: yupResolver<NewStudent>(studentSchema),
        defaultValues: data as NewStudent ?? defaultValues,
    });

    const { onSubmit } = useStudentSave({ id, callback });

    return (
        <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={1} marginBottom={1}>
                <RHFTextField
                    name="name"
                    label="Nombre del estudiante (*)"
                />
                <RHFTextField
                    name="lastName"
                    label="Apellido del estudiante (*)"
                />
                <RHFTextField
                    name="email"
                    label="Correo Electrónico (*)"
                />
            </Stack >
            <ActionsButtonsForm
                name="estudiante"
                edit={!!student}
            />
        </FormProvider >
    )
}
