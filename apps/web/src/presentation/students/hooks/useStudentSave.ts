import { SubmitHandler } from "react-hook-form";
import { useRouter } from "../../../app/routes/hooks";
import { useMessage } from "../../../hooks/useMessage";
import { errorsShowNotification } from "../../../lib";
import { NewStudent } from "../domain/student";
import { CustomFormEvent } from "../../../components/hook-form";
import { studentsApi } from "../service/students.api";

type Props = {
    id?: number;
    callback: () => void;
}

export const useStudentSave = ({ id, callback }: Props) => {

    const { reload } = useRouter();
    const { showNotification } = useMessage();

    const onSubmit: SubmitHandler<NewStudent> = async (data, event) => {
        const { nativeEvent } = event as CustomFormEvent<HTMLFormElement>;
        try {

            const response = id
                ? await studentsApi.update(id, data)
                : await studentsApi.save(data)

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

