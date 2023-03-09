import { fetcher } from '@/lib/helpers/fetcher.helper';
import { ProfileResponse } from '@/lib/interfaces/profile/profile.interface';
import useSWR from 'swr';

function useProfile() {
  const { data, error, isLoading, mutate } = useSWR<ProfileResponse>(
    '/auth/me',
    fetcher
  );
  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useProfile };
