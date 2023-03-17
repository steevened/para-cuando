import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';
import { PublicationTypesResponse } from '../../interfaces/publicationTypes/publicationTypes.interface';

function usePublicationTypes() {
  const { data, isLoading, error } = useSWR<PublicationTypesResponse>(
    '/publications-types',
    fetcher
  );
  return {
    data: data?.results.results,
    isLoading,
    error,
  };
}

export { usePublicationTypes };
