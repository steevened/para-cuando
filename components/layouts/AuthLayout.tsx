import Head from 'next/head';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';
import bg from '../../public/authRegister/bg.png';
import logo from '../../public/authRegister/LOGO.svg';

interface Props {
  title?: string;
}

export const AuthLayout: FC<PropsWithChildren<Props>> = ({
  children,
  title = 'Para Cuándo',
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative flex flex-col items-center justify-between min-h-screen gap-5 px-2 py-5 md:h-screen md:flex-row md:px-24 ">
        <Image src={logo} alt="logo para cuando" className="z-20 md:w-72" />
        <div className="absolute inset-0 ">
          <Image
            src={bg}
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
    </>
  );
};
