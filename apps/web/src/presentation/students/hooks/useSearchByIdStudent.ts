import { useState, useEffect } from 'react';
import { Student } from '../domain/student';
import { studentsApi } from '../service/students.api';
import { ErrorResponse } from '../../../types/error';

export const useSearchByIdStudent = (id: number) => {
    const [student, setStudent] = useState<Student | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<ErrorResponse | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await studentsApi.searchById<Student>(id);
            setStudent(response);
        } catch (e) {
            const error = e as ErrorResponse
            setStudent(null)
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
        student: student ?? undefined,
        isLoading,
        error,
        handleRefetch
    };
};
