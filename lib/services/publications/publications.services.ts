import { PublicationsResponse } from '@/lib/interfaces/publications/publications.interface';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';

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
