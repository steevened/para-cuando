import Children from '@/lib/interfaces/components.interface';
import Image from 'next/image';
import logo from '../../public/authRegister/LOGO.svg';
import heroImg from '../../public/authRegister/bg.png';

export default function Background({ children }: Children) {
  return (
    <div className="relative flex flex-col items-center justify-between min-h-screen gap-5 p-10 md:flex-row md:px-24">
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
      <div className="mb-10 md:mb-0">{children}</div>
    </div>
  );
}
