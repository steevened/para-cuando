import Image from 'next/image';
import Link from 'next/link';
import addLogo from '../public/add.svg';
import logo from '../public/icon-logo.svg';

export default function Navbar() {
  return (
    <div className="w-full h-[71px] text-center bg-black flex items-center justify-between px-5 sm:px-[52px]">
      <Link href="/" className="sm:flex-1">
        <Image src={logo} alt="para cuando logo" />
      </Link>
      <div className="flex items-center gap-2 sm:mr-9">
        <Image src={addLogo} alt="add logo" />
        <p className="text-2 sm:subtitle-2 text-app-blue hidden xs:block">
          Crear Publicación
        </p>
      </div>
      <div className="flex gap-5 text-xs sm:subtitle-2 text-white">
        <Link href="/auth/login">Log in</Link>
        <Link href="/auth/register">Sign Up</Link>
      </div>
    </div>
  );
}
