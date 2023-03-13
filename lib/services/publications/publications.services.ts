import { PublicationsResponse } from '@/lib/interfaces/publications/publications.interface';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';

import axios from '../../helpers/axios.helper';
import { CreatePublication } from '../../interfaces/publications/createPublication.interface';

function usePublications() {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    '/publications',
    fetcher
  );

  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
}

function useCreatePublication(data: CreatePublication) {
  return axios.post('/publications', data);
}

export { usePublications, useCreatePublication };
