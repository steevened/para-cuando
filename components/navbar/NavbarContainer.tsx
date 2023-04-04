import { FC, PropsWithChildren } from 'react';

export const NavbarContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-[70px] bg-black  px-5 sm:px-[52px]">
      {children}
    </div>
  );
};
