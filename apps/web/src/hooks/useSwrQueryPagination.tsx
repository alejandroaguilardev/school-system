import useSWR from 'swr';
import { Criteria } from '../types/criteria/criteria';
import { ServiceSearch } from '../services/http/service-search';


type Props = {
  key: string;
  criteria: Criteria;
  search: ServiceSearch;
}


export function useSwrQueryPagination<T>({ key, criteria, search }: Props) {
  const { data, error, isLoading, mutate } = useSWR([key, criteria], () => {
    return search<T>(criteria)
  });

  const handleRefetch = () => mutate();


  return {
    rows: data?.rows ?? [],
    count: data?.count ?? 0,
    isLoading,
    error,
    handleRefetch
  }
}