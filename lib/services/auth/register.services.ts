import { fetcher } from '@/lib/helpers/fetcher.helper';
import useSWR from 'swr';

function useAuthRegister() {
  const { mutate } = useSWR('/auth/sign-up', fetcher);

  return {
    mutate,
  };
}

export { useAuthRegister };
