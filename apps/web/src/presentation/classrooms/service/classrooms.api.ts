import axiosInstance from '../../../services/adapter/axios.host';
import { servicesHost } from '../../../services/http/http.services.host';
import { endpoints } from '../../../types/endpoint';
import { NewClassroom, Classroom, AssignTeacher, AssignStudents } from '../domain/classroom';

export const classroomsApi = {
    ...servicesHost<NewClassroom, Classroom>(axiosInstance, endpoints.classrooms.root),
    teacher: async (id: number, body: AssignTeacher): Promise<Classroom> => {
        const { data } = await axiosInstance.post(`${endpoints.classrooms.root}/${id}/assign-teacher`, body);
        return data;
    },
    students: async (id: number, body: AssignStudents): Promise<Classroom> => {
        const { data } = await axiosInstance.post(`${endpoints.classrooms.root}/${id}/assign-students`, body);
        return data;
    },
} 
