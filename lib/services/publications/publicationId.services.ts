import { fetcher } from '@/lib/helpers/fetcher.helper';
import useSWR from 'swr';

function usePublicationId(id: string) {
  const { data, error, isLoading, mutate } = useSWR<any>(
    `/publications/${id}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { usePublicationId };
