import { PublicationsResponse } from '@/lib/interfaces/publications/publications.interface';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';

import axios from '../../helpers/axios.helper';

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

function createPublication(data: any) {
  return axios.post('/publications', data);
}

function uploadImgPublication(img: any, id: number) {
  return axios.post(`/publications/${id}/add-image`, img);
}

export { usePublications, createPublication, uploadImgPublication };
