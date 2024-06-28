import { SubmitHandler } from "react-hook-form";
import { useRouter } from "../../../app/routes/hooks";
import { useMessage } from "../../../hooks/useMessage";
import { errorsShowNotification } from "../../../lib";
import { NewTeacher } from "../domain/teacher";
import { CustomFormEvent } from "../../../components/hook-form";
import { teachersApi } from "../service/teachers.api";

type Props = {
    id?: number;
    callback: () => void;
}

export const useTeacherSave = ({ id, callback }: Props) => {

    const { reload } = useRouter();
    const { showNotification } = useMessage();

    const onSubmit: SubmitHandler<NewTeacher> = async (data, event) => {
        const { nativeEvent } = event as CustomFormEvent<HTMLFormElement>;
        try {

            const response = id
                ? await teachersApi.update(id, data)
                : await teachersApi.save(data)

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

