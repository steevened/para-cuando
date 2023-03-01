import Image from 'next/image';
import searchLogo from '../../public/search.svg';

export default function Input() {
  return (
    <form className="w-full max-w-[465px] h-12 relative flex items-center shadow-1 border-app-gray border rounded-full">
      <input
        className="w-full h-full px-6 duration-300 rounded-3xl focus:outline-none focus:ring-2 placeholder:text-2"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <Image
        className="absolute hidden xs:block right-5"
        src={searchLogo}
        alt="search logo"
      />
    </form>
  );
}
