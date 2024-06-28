import { SubmitHandler } from "react-hook-form";
import { useRouter } from "../../../app/routes/hooks";
import { useMessage } from "../../../hooks/useMessage";
import { errorsShowNotification } from "../../../lib";
import { NewClassroom } from "../domain/classroom";
import { CustomFormEvent } from "../../../components/hook-form";
import { classroomsApi } from "../service/classrooms.api";

type Props = {
    id?: number;
    callback: () => void;
}

export const useClassroomSave = ({ id, callback }: Props) => {

    const { reload } = useRouter();
    const { showNotification } = useMessage();

    const onSubmit: SubmitHandler<NewClassroom> = async (data, event) => {
        const { nativeEvent } = event as CustomFormEvent<HTMLFormElement>;
        try {

            const response = id
                ? await classroomsApi.update(id, data)
                : await classroomsApi.save(data)

            showNotification(response.message);
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

