import { FC } from 'react';
import UserOutlined from '../atoms/UserOutlined';
import { AddPublication } from '../molecules/AddPublication';
import { ParaCuandoLogo } from '../molecules/ParaCuandoLogo';
import { VotesLink } from '../molecules/VotesLink';
import { NavbarContainer } from './NavbarContainer';
import { NavbarMenu } from './NavbarMenu';

interface Props {
  email: string;
  handleLogOut: () => void;
}

export const LoggedNavbar: FC<Props> = ({ email, handleLogOut }) => {
  return (
    <NavbarContainer>
      <div className="flex items-center justify-between h-full ">
        {/* logo */}
        <div className="flex md:grow ">
          <ParaCuandoLogo />
          <div />
        </div>

        {/* options  */}
        <div className="flex items-center gap-9">
          <div className="hidden md:block">
            <AddPublication />
          </div>
          <VotesLink />
          <div className="flex items-center gap-3 text-white">
            <UserOutlined />
            <p className="text-sm sm:text-base">{email}</p>
            <NavbarMenu handleLogOut={handleLogOut} />
          </div>
        </div>
      </div>
    </NavbarContainer>
  );
};
