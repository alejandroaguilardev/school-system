import axiosInstance from '../../../services/adapter/axios.host';
import { servicesHost } from '../../../services/http/http.services.host';
import { endpoints } from '../../../types/endpoint';
import { Student, NewStudent } from '../domain/student';

export const studentsApi = {
    ...servicesHost<NewStudent, Student>(axiosInstance, endpoints.students.root),
} 
