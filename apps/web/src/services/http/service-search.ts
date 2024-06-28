import { Criteria } from "../../types/criteria/criteria";
import { ResponseSearch } from "../../types/response/response-search";

export type ServiceSearch = <R>(criteria: Criteria) => Promise<ResponseSearch<R>>;
