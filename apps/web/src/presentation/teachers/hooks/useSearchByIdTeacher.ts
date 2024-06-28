import { useState, useEffect } from 'react';
import { Teacher } from '../domain/teacher';
import { teachersApi } from '../service/teachers.api';
import { ErrorResponse } from '../../../types/error';

export const useSearchByIdTeacher = (id: number) => {
    const [teacher, setTeacher] = useState<Teacher | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<ErrorResponse | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await teachersApi.searchById<Teacher>(id);
            setTeacher(response);
        } catch (e) {
            const error = e as ErrorResponse
            setTeacher(null)
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
        teacher: teacher ?? undefined,
        isLoading,
        error,
        handleRefetch
    };
};
