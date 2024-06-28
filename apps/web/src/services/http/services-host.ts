import { ResponseSuccess } from '../../types/response/response-success';
import { ServiceSearch } from './service-search';

export interface ServiceHost<T, R> {
    save(body: T): Promise<ResponseSuccess<R>>;
    search: ServiceSearch
    searchById<R>(id: number): Promise<R>;
    update(id: number, body: T): Promise<ResponseSuccess<R>>;
    remove(id: number): Promise<ResponseSuccess<R>>;
}
