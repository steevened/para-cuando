import Children from '@/lib/interfaces/components.interface';
import Image from 'next/image';
import heroImg from '../../public/authRegister/bg.png';
import logo from '../../public/authRegister/LOGO.svg';

const styles = {
  backgroundImage: `url('${heroImg.src}')`,
};

export default function Background({ children }: Children) {
  return (
    <div
      style={styles}
      className="min-h-screen flex bg-center bg-no-repeat px-[18px] flex-col items-center pt-12 gap-8 md:flex-row md:justify-between md:px-20 lg:px-40   relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
      <Image src={logo} alt="logo para cuando" className="z-10 md:w-72" />
      {children}
    </div>
  );
}
