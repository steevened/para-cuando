import Link from 'next/link';
import { AddPublication } from '../molecules/AddPublication';
import { ParaCuandoLogo } from '../molecules/ParaCuandoLogo';
import { NavbarContainer } from './NavbarContainer';

export const NoLoggedNavbar = () => {
  return (
    <NavbarContainer>
      <div className="flex items-center justify-between h-full md:gap-4">
        {/* logo */}
        <div className="flex md:grow">
          <ParaCuandoLogo />
          <div />
        </div>
        {/* add publication link */}
        <AddPublication />
        {/* login - sign up */}
        <div className="flex gap-5 text-xs text-white sm:subtitle-2">
          <Link href="/auth/login">Log in</Link>
          <Link href="/auth/register">Sign Up</Link>
        </div>
      </div>
    </NavbarContainer>
  );
};
