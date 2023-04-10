import { fetcher } from '@/lib/helpers/fetcher.helper';
import useSWR from 'swr';
import { TagsResponse } from '../../interfaces/tags/tagsResponse.interface';
function useTags() {
  const { data, error, isLoading } = useSWR<TagsResponse>('/tags', fetcher);

  return {
    tags: data?.results.results,
    error,
    isLoading,
  };
}

export { useTags };
