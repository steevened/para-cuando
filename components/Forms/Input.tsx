import Image from 'next/image';
import searchLogo from '../../public/search.svg';

export default function Input() {
  return (
    <form className="w-5/6 max-w-[465px] h-12 relative flex items-center mt-28 shadow-1">
      <input
        className="w-full h-full px-6 duration-300 rounded-3xl focus:outline-none focus:ring-2"
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
