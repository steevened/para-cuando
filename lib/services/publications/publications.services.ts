import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';
import { PublicationsResponse } from '../../interfaces/publications/publications.interface';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    '/publications',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublications };
