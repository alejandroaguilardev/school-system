import { SubmitHandler } from "react-hook-form";
import { useRouter } from "../../../app/routes/hooks";
import { useMessage } from "../../../hooks/useMessage";
import { errorsShowNotification } from "../../../lib";
import { AssignStudents } from "../domain/classroom";
import { CustomFormEvent } from "../../../components/hook-form";
import { classroomsApi } from "../service/classrooms.api";

type Props = {
    id: number;
    callback: () => void;
}

export const useClassroomStudent = ({ id, callback }: Props) => {

    const { reload } = useRouter();
    const { showNotification } = useMessage();

    const onSubmit: SubmitHandler<AssignStudents> = async (data, event) => {
        const { nativeEvent } = event as CustomFormEvent<HTMLFormElement>;
        try {
            await classroomsApi.students(id, data)
            showNotification("Actualizado con éxito");
            nativeEvent.submitter?.value === "reload"
                ? setTimeout(() => reload(), 1500)
                : callback();

        } catch (error) {
            errorsShowNotification(error, showNotification)
        }
    };

    return {
        onSubmit,
    }
}

