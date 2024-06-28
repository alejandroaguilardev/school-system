import { AxiosInstance } from "axios";
import { ServiceHost } from "./services-host";
import { ResponseSuccess } from "../../types/response/response-success";
import { ResponseSearch } from "../../types/response/response-search";
import { Criteria, criteriaToQueryString } from "../../types/criteria/criteria";

export function servicesHost<T, R>(axios: AxiosInstance, endpoint: string): ServiceHost<T, R> {
    return {
        save: async (body: T): Promise<ResponseSuccess<R>> => {
            const { data } = await axios.post<ResponseSuccess<R>>(`${endpoint}`, body);
            return data;
        },
        search: async (criteria: Criteria): Promise<ResponseSearch<R>> => {
            const { data } = await axios.get(`${endpoint}${criteriaToQueryString(criteria)}`);
            return data;
        },
        searchById: async <R>(id: number): Promise<R> => {
            const { data } = await axios.get(`${endpoint}/${id}`);
            return data;
        },
        update: async (id: number, body: T): Promise<ResponseSuccess<R>> => {
            const { data } = await axios.put<ResponseSuccess<R>>(`${endpoint}/${id}`, body);
            return data;
        },
        remove: async (id: number): Promise<ResponseSuccess<R>> => {
            const { data } = await axios.delete<ResponseSuccess<R>>(`${endpoint}/${id}`);
            return data;
        },
    }
}