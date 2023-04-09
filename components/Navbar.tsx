import { useProfile } from '@/lib/services/profile/ProfileInfo.services';

import { AuthContext } from '@/context/auth';
import useAuthStore from '@/store/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { LoggedNavbar } from './navbar/LoggedNavbar';
import { NoLoggedNavbar } from './navbar/NoLoggedNavbar';

export default function Navbar() {
  const { logOut, isLogedIn } = useAuthStore();
  const router = useRouter();
  const { data, mutate } = useProfile();
  // const { data: votes, mutate: mutateVotes } = useUserVotes();

  const { isUserLoged } = useContext(AuthContext);

  console.log(isUserLoged);

  useEffect(() => {
    const tokenFounded = Cookies.get('token');
    if (!tokenFounded) return;

    mutate();
  }, [isUserLoged, mutate]);

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
