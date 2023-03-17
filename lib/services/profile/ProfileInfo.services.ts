import { fetcher } from '@/lib/helpers/fetcher.helper';
import {
  ProfileDetailsResponse,
  ProfileResponse,
} from '@/lib/interfaces/profile/profile.interface';
import useSWR from 'swr';
import axios from '../../helpers/axios.helper';

function useProfile() {
  const { data, error, isLoading, mutate } = useSWR<ProfileResponse>(
    '/auth/me',
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  );

  const {
    data: profileDetails,
    isLoading: loadingDetails,
    error: errorDetails,
    mutate: mutateDetails,
  } = useSWR<ProfileDetailsResponse>(`/users/${data?.results.id}`, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const updateUser = (body: any) => {
    return axios.put(`/users/${data?.results.id}`, body);
  };

  const addInterests = (body: any) => {
    return axios.post(`/users/${data?.results.id}/add-interest`, body);
  };

  function addImage(body: any) {
    return axios.post(`/users/${data?.results.id}/add-image`, body);
  }

  return {
    data,
    error,
    isLoading,
    mutate,
    updateUser,
    addInterests,
    addImage,
    profileDetails,
    loadingDetails,
    errorDetails,
    mutateDetails,
  };
}

export { useProfile };
