import { useState } from 'react';
import { useMessage } from '../../../hooks/useMessage';
import { studentsApi } from '../service/students.api';
import { ErrorResponse } from '../../../types/error';


export const useStudentDelete = () => {
    const { showNotification } = useMessage();
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async (id: number, callback: () => void) => {
        setIsLoading(true);
        try {
            const response = await studentsApi.remove(id);
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
