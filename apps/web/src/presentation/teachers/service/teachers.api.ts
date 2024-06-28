import axiosInstance from '../../../services/adapter/axios.host';
import { servicesHost } from '../../../services/http/http.services.host';
import { endpoints } from '../../../types/endpoint';
import { NewTeacher, Teacher } from '../domain/teacher';

export const teachersApi = {
    ...servicesHost<NewTeacher, Teacher>(axiosInstance, endpoints.teachers.root),
} 
