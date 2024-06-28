import { FC, useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from '../../../../components/hook-form/form-provider';
import { ActionsButtonsForm } from '../../../../components/hook-form/actions-buttons-form';
import { MenuItem, Stack } from "@mui/material";
import { AssignTeacher, Classroom } from "../../domain/classroom";
import { useClassroomTeacher } from "../../hooks/useClassroomTeacher";
import { classroomTeacherSchema, defaultValues } from "./classroom-teacher.validation";
import { teachersApi } from "../../../teachers/service/teachers.api";
import { Criteria } from '../../../../types/criteria/criteria';
import { Teacher } from "../../../teachers/domain/teacher";
import { RHFTextField } from "../../../../components/hook-form";

type Props = {
    classroom: Classroom;
    callback: () => void
}

export const ClassroomFormTeacher: FC<Props> = ({ classroom, callback }) => {
    const { id, teacher } = classroom ?? {};
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const methods = useForm({
        resolver: yupResolver<AssignTeacher>(classroomTeacherSchema),
        defaultValues: { teacher: teacher?.id ?? defaultValues.teacher },
    });

    const { onSubmit } = useClassroomTeacher({ id, callback });

    useEffect(() => {
        const criteria: Criteria = { start: 0, size: 100, filters: [], globalFilter: "", globalFilterProperties: [], selectProperties: [], sorting: [] };
        teachersApi.search<Teacher>(criteria).then((data) => {
            setTeachers(data.rows);
        }).catch(() => setTeachers([]))
    }, [])


    return (
        <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
            <Stack spacing={1} marginBottom={1}>
                <RHFTextField
                    name="teacher"
                    label="Asignar Profesor (*)"
                    select
                >
                    {teachers.map(_ => (
                        <MenuItem key={_.id} value={_.id}>{_.name} {_.lastName}</MenuItem>
                    ))}
                </RHFTextField>

            </Stack >
            <ActionsButtonsForm
                name="clase"
                edit={!!classroom}
            />
        </FormProvider >
    )
}
