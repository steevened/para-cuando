import Image from 'next/image';
import searchLogo from '../../public/search.svg';

export default function Input() {
  return (
    <form className="w-5/6 max-w-md relative flex items-center mt-28">
      <input
        className="w-full rounded-3xl py-4 px-6"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
      />
      <Image
        className="hidden xs:block absolute right-5"
        src={searchLogo}
        alt="search logo"
      />
    </form>
  );
}
