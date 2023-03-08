import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function useUsers() {
  const { data, error, isLoading, mutate } = useSWR('/users', fetcher);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useUsers };
