import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher.helper';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<any>(
    '/publications',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublications };
