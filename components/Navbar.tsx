import Image from 'next/image';
import addLogo from '../public/add.svg';
import logo from '../public/icon-logo.svg';

export default function Navbar() {
  return (
    <div className="w-full h-[71px] text-center bg-black flex items-center justify-between px-5">
      <div>
        <Image src={logo} alt="para cuando logo" />
      </div>
      <div className="flex items-center gap-2">
        <Image src={addLogo} alt="add logo" />
        <p className="text-2 text-app-blue hidden xs:block">
          Crear Publicación
        </p>
      </div>
      <div className="flex gap-5 text-xs text-white">
        <p>Log in</p>
        <p>Sign Up</p>
      </div>
    </div>
  );
}
