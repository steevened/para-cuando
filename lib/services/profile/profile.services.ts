import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher.helper';

function useProfileInfoUser() {
  const { data, error, isLoading } = useSWR('url', fetcher);
  return { data, error, isLoading };
}

export { useProfileInfoUser };
