import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';
import {
  PublicationTypeByID,
  PublicationTypesResponse,
} from '../../interfaces/publicationTypes/publicationTypes.interface';

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

function usePublicationTypesById(id: string) {
  const { data, isLoading, error } = useSWR<PublicationTypeByID>(
    id ? `/publications-types/${id}` : null,
    fetcher
  );
  return {
    data: data?.result,
    isLoading,
    error,
  };
}

export { usePublicationTypes, usePublicationTypesById };
