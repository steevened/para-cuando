import { AuthContext } from '@/context/auth';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { LoggedNavbar } from './navbar/LoggedNavbar';
import { NoLoggedNavbar } from './navbar/NoLoggedNavbar';

export default function Navbar() {
  const router = useRouter();

  const { isUserLoged, logOut, userData } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
    router.push('/auth/login');
  };

  return (
    <>
      {isUserLoged && userData.email.length > 0 ? (
        <LoggedNavbar email={userData.email} handleLogOut={handleLogOut} />
      ) : (
        <NoLoggedNavbar />
      )}
    </>
  );
}
