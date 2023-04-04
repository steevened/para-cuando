import { useProfile } from '@/lib/services/profile/ProfileInfo.services';

import useAuthStore from '@/store/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { LoggedNavbar } from './navbar/LoggedNavbar';
import { NoLoggedNavbar } from './navbar/NoLoggedNavbar';

export default function Navbar() {
  const { logOut, isLogedIn } = useAuthStore();
  const router = useRouter();
  const { data, mutate } = useProfile();
  // const { data: votes, mutate: mutateVotes } = useUserVotes();

  useEffect(() => {
    const tokenFounded = Cookies.get('token');
    if (!tokenFounded) return;

    mutate();
  }, [isLogedIn]);

  // console.log(data);

  const handleLogOut = () => {
    Cookies.remove('token');
    logOut();
    router.push('/auth/login');
    // mutateVotes();
    mutate();
  };

  return (
    <>
      {isLogedIn ? (
        <LoggedNavbar email={data.results.email} handleLogOut={handleLogOut} />
      ) : (
        <NoLoggedNavbar />
      )}
    </>
  );
}
