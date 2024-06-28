import { Criteria } from './criteria/criteria';
import { ResponseSearch } from './response/response-search';

export interface Repository<T> {
  save(data: T): Promise<T>;
  search(criteria: Criteria): Promise<ResponseSearch<T>>;
  searchById(id: number): Promise<T | null>;
  update(id: number, data: T): Promise<T>;
  remove(id: number): Promise<T>;
}
