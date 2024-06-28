import { FC } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../../../components/hook-form/form-provider';
import { ActionsButtonsForm } from '../../../../components/hook-form/actions-buttons-form';
import { Stack } from "@mui/material";
import { AssignStudents, Classroom } from "../../domain/classroom";
import { classroomStudentsSchema, defaultValues } from "./classroom-students.validation";
import { AutocompleteStudents } from "./AutocompleteStudents";
import { useClassroomStudent } from "../../hooks/useClassroomStudent";

type Props = {
    classroom: Classroom;
    callback: () => void
}

export const ClassroomFormStudents: FC<Props> = ({ classroom, callback }) => {
    const { id, students } = classroom ?? {};
    const methods = useForm({
        resolver: yupResolver<AssignStudents>(classroomStudentsSchema),
        defaultValues: { students: students.map(_ => _.id) ?? defaultValues.students },
    });

    const { onSubmit } = useClassroomStudent({ id, callback });


    return (
        <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={1} marginBottom={1}>
                <AutocompleteStudents students={students} />
            </Stack >
            <ActionsButtonsForm
                name="clase"
                edit={!!classroom}
            />
        </FormProvider >
    )
}
