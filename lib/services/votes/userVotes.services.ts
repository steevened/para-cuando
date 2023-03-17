import { fetcher } from '@/lib/helpers/fetcher.helper';
import { UserVotesResponse } from '@/lib/interfaces/votes/userVotes.interface';
import { useProfile } from '@/lib/services/profile/ProfileInfo.services';
import useSWR from 'swr';

function useUserVotes() {
  const { data: profile } = useProfile();
  const { data, error, isLoading, mutate } = useSWR<UserVotesResponse>(
    `/users/${profile?.results.id}/votes/`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
    }
  );
  return {
    data: data?.results.results,
    isLoading,
    error,
    mutate,
  };
}

// function usePublicationsVoted() {
//   const [publicationsId, setPublicationsId] = useState<any>([]);
//   const [userLoggedId, setUserLoggedId] = useState<string>('');

//   const { data: profileInfo, mutate } = useProfile();

//   useEffect(() => {
//     if (profileInfo) {
//       setUserLoggedId(profileInfo.results.id);
//     } else {
//       setUserLoggedId('');
//     }
//   }, [profileInfo]);

//   const { data } = useUserVotes(userLoggedId);

//   useEffect(() => {
//     const ids = data?.results.results.map((voteId) => {
//       return voteId.publications_id;
//     });
//     setPublicationsId(ids);
//   }, [data]);

//   return {
//     publicationsId,
//     mutate,
//   };
// }

export { useUserVotes };
