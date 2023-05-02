import { useRouter } from 'next/router';
import { useState } from 'react';
import { SearchIcon } from '../svg/Svg';

export default function Input() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: { title: query },
    });
    // setQuery('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[465px]  h-12 relative flex items-center shadow-1 border-app-gray border rounded-full"
    >
      <input
        className="w-full h-full px-6 duration-300 rounded-3xl focus:outline-none focus:ring-2 placeholder:text-2"
        type="text"
        placeholder="¿Qué quieres ver en tu ciudad?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        disabled={!query}
        className="absolute hidden duration-200 xs:block right-5 text-app-grayDark hover:text-app-blue disabled:text-app-grayLight"
      >
        {/* <Image src={searchLogo} alt="search logo" /> */}
        <SearchIcon />
      </button>
    </form>
  );
}
