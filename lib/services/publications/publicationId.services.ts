import { fetcher } from '@/lib/helpers/fetcher.helper';
import useSWR from 'swr';
import { PublicationID } from '../../interfaces/publications/publicationId.interface';

function usePublicationId(id: string) {
  const { data, error, isLoading, mutate } = useSWR<PublicationID>(
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
