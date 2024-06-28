import { useState } from 'react';
import { useMessage } from '../../../hooks/useMessage';
import { classroomsApi } from '../service/classrooms.api';
import { ErrorResponse } from '../../../types/error';


export const useClassroomDelete = () => {
    const { showNotification } = useMessage();
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (id: number, callback: () => void) => {
        setIsLoading(true);
        try {
            const response = await classroomsApi.remove(id);
            showNotification(response.message);
            callback();
        } catch (e) {
            const error = e as ErrorResponse;
            showNotification(error.message, { variant: "error" })
        } finally {
            setIsLoading(false)
        }
    }

    return {
        isLoading,
        handleDelete
    }
}
