import { FC } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../../../components/hook-form/form-provider';
import { ActionsButtonsForm } from '../../../../components/hook-form/actions-buttons-form';
import { defaultValues, classroomSchema } from "./Classroom.validation";
import { RHFTextField } from "../../../../components/hook-form";
import { Stack } from "@mui/material";
import { NewClassroom, Classroom } from "../../domain/classroom";
import { useClassroomSave } from "../../hooks/useClassroomSave";

type Props = {
    classroom?: Classroom;
    callback: () => void
}

export const ClassroomForm: FC<Props> = ({ classroom, callback }) => {
    const { id, name, description } = classroom ?? {};
    const methods = useForm({
        resolver: yupResolver<NewClassroom>(classroomSchema),
        defaultValues: { name, description } as NewClassroom ?? defaultValues,
    });

    const { onSubmit } = useClassroomSave({ id, callback });

    return (
        <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={1} marginBottom={1}>
                <RHFTextField
                    name="name"
                    label="Nombre del clase (*)"
                />
                <RHFTextField
                    name="description"
                    label="Descripción del clase (*)"
                />
            </Stack >
            <ActionsButtonsForm
                name="clase"
                edit={!!classroom}
            />
        </FormProvider >
    )
}
