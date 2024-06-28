import { useState, useEffect } from 'react';
import { Classroom } from '../domain/classroom';
import { classroomsApi } from '../service/classrooms.api';
import { ErrorResponse } from '../../../types/error';

export const useSearchByIdClassroom = (id: number) => {
    const [classroom, setClassroom] = useState<Classroom | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<ErrorResponse | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await classroomsApi.searchById<Classroom>(id);
            setClassroom(response);
        } catch (e) {
            const error = e as ErrorResponse
            setClassroom(null)
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    const handleRefetch = () => {
        fetchData();
    };

    return {
        classroom: classroom ?? undefined,
        isLoading,
        error,
        handleRefetch
    };
};
