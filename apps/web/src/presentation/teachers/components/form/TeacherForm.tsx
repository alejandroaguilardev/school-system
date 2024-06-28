import { FC } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../../../components/hook-form/form-provider';
import { ActionsButtonsForm } from '../../../../components/hook-form/actions-buttons-form';
import { defaultValues, teacherSchema } from "./teacher.validation";
import { RHFTextField } from "../../../../components/hook-form";
import { Stack } from "@mui/material";
import { NewTeacher, Teacher } from "../../domain/teacher";
import { useTeacherSave } from "../../hooks/useTeacherSave";

type Props = {
    teacher?: Teacher;
    callback: () => void
}

export const TeacherForm: FC<Props> = ({ teacher, callback }) => {
    const { id, ...data } = teacher ?? {};
    const methods = useForm({
        resolver: yupResolver<NewTeacher>(teacherSchema),
        defaultValues: data as NewTeacher ?? defaultValues,
    });

    const { onSubmit } = useTeacherSave({ id, callback });

    return (
        <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={1} marginBottom={1}>
                <RHFTextField
                    name="name"
                    label="Nombre del profesor (*)"
                />
                <RHFTextField
                    name="lastName"
                    label="Apellido del profesor (*)"
                />
                <RHFTextField
                    name="email"
                    label="Correo Electrónico (*)"
                />
            </Stack >
            <ActionsButtonsForm
                name="profesor"
                edit={!!teacher}
            />
        </FormProvider >
    )
}
