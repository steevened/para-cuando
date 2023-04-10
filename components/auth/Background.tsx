import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import logo from '../../public/authRegister/LOGO.svg';
import heroImg from '../../public/authRegister/bg.png';

const Background: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative flex flex-col items-center justify-between gap-5 p-10 md:h-screen md:flex-row md:px-24">
      <Image src={logo} alt="logo para cuando" className="z-20 md:w-72" />
      <div className="absolute inset-0 ">
        <Image
          src={heroImg}
          alt="hero image"
          layout="fill"
          className="object-cover "
          // width={2000}
          // height={2000}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      <div className="">{children}</div>
    </div>
  );
};
export default Background;
