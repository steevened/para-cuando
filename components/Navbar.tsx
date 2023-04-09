import { useProfile } from '@/lib/services/profile/ProfileInfo.services';

import { AuthContext } from '@/context/auth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { LoggedNavbar } from './navbar/LoggedNavbar';
import { NoLoggedNavbar } from './navbar/NoLoggedNavbar';

export default function Navbar() {
  const router = useRouter();
  const { data, mutate } = useProfile();
  // const { data: votes, mutate: mutateVotes } = useUserVotes();

  const { isUserLoged, logIn, logOut } = useContext(AuthContext);

  // console.log(isUserLoged);

  useEffect(() => {
    const tokenFounded = Cookies.get('token');
    if (!tokenFounded) return;
    logIn();
    mutate();
  }, [isUserLoged]);

  const handleLogOut = () => {
    Cookies.remove('token');
    logOut();
    router.push('/auth/login');
    // mutateVotes();
    mutate();
  };

  return (
    <>
      {isUserLoged ? (
        <LoggedNavbar email={data?.results.email} handleLogOut={handleLogOut} />
      ) : (
        <NoLoggedNavbar />
      )}
    </>
  );
}
