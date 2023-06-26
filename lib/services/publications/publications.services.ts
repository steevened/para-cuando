import { PublicationsResponse } from '@/lib/interfaces/publications/publications.interface';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';

import { PublicationbyID } from '@/lib/interfaces/publications/publicationId.interface';
import axios from '../../helpers/axios.helper';

const usePublications = (query?: string) => {
  const { data, error, isLoading, mutate } = useSWR<PublicationsResponse>(
    query ? `/publications?${query}` : '/publications',
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      // revalidateOnMount: false,
    }
  );

  return {
    data: data?.results.results,
    error,
    isLoading,
    mutate,
  };
};

function usePublicationById(id: string) {
  const { data, error, isLoading, mutate } = useSWR<PublicationbyID>(
    id ? `/publications/${id}` : null,
    fetcher
  );

  return {
    data,
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

export {
  usePublications,
  createPublication,
  uploadImgPublication,
  usePublicationById,
};
