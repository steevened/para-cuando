import { fetcher } from '@/lib/helpers/fetcher.helper';
import { UserVotesResponse } from '@/lib/interfaces/votes/userVotes.interface';
import { useProfile } from '@/lib/services/profile/ProfileInfo.services';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

function useUserVotes(id: string) {
  const { data, error, isLoading } = useSWR<UserVotesResponse>(
    `/users/${id}/votes/`,
    fetcher
  );
  return {
    data,
    isLoading,
    error,
  };
}

function usePublicationsVoted() {
  const [publicationsId, setPublicationsId] = useState<any>([]);
  const [userLoggedId, setUserLoggedId] = useState<string>('');

  const { data: profileInfo } = useProfile();

  useEffect(() => {
    if (profileInfo) {
      setUserLoggedId(profileInfo.results.id);
    } else {
      setUserLoggedId('');
    }
  }, [profileInfo]);

  const { data } = useUserVotes(userLoggedId);

  useEffect(() => {
    const ids = data?.results.results.map((voteId) => {
      return voteId.publications_id;
    });
    setPublicationsId(ids);
  }, [data]);

  return {
    publicationsId,
  };
}

export { useUserVotes, usePublicationsVoted };
