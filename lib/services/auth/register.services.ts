import { fetcher } from '@/lib/helpers/fetcher.helper';
import useSWR from 'swr';

function useAuthRegister() {
  const { data, error, isLoading, mutate } = useSWR('/auth/sign-up', fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}

export { useAuthRegister };
