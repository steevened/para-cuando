import ButtonSave from '@/components/buttons/ButtonSave';
import Layout from '@/components/layouts/Layout';
import hero from '@/public/hero.png';

import More from '@/components/Forms/More';
import CardSearch from '@/components/sliders/CardSearch';
import { SearchIcon } from '@/components/svg/Svg';
import { usePublications } from '@/lib/services/publications/publications.services';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';

const Search: NextPageWithLayout = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [inputvalue, setInputValue] = useState('');

  useEffect(() => {
    const query = router.asPath.split('?')[1];
    setQuery(query);
  }, [router.asPath]);

  const {
    data: publications,
    // error,
    // isLoading,
    // mutate,
  } = usePublications(query);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: '/search',
      query: { title: inputvalue },
    });
    // setQuery('');
  };

  console.log(publications);

  return (
    <>
      <div className="relative h-28">
        <Image
          src={hero}
          alt="Para Cuándo Querétaro"
          className="object-cover w-full h-full"
        />
        <div className="absolute z-10 flex font-semibold text-white left-14 bottom-2">
          <Link href={'/'}>Home</Link>
          <p className="ml-1 cursor-default"> / Search</p>
        </div>
      </div>
      <div className="shadow-lg shadow-app-gray-500/500">
        <div className="max-w-6xl px-2 mx-auto md:px-5 ">
          <div className="pt-[37px] flex gap-[37px]">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[465px]  h-12 relative flex items-center shadow-1 border-app-gray border rounded-full"
            >
              <input
                className="w-full h-full px-6 duration-300 rounded-3xl focus:outline-none focus:ring-2 placeholder:text-2"
                type="text"
                placeholder="¿Qué quieres ver en tu ciudad?"
                value={inputvalue}
                onChange={(e) => setInputValue(e.target.value)}
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
            <ButtonSave className="hidden md:block">Buscar</ButtonSave>
          </div>

          <div className="flex  item-center justify-between mt-[25px] cursor-pointer text-base font-normal  text-app-grayDark">
            <button
              onClick={() => {
                router.push(`/search?title=${inputvalue}`);
              }}
              className="p-2 border-b-4 border-app-blue"
            >
              <p className="">Todos los resultados</p>
            </button>
            <button
              onClick={() => {
                router.push(`/search?publications_types_id=1`);
              }}
            >
              <p className="">Marcas y tiendas</p>
            </button>
            <button
              onClick={() => {
                router.push(`/search?publications_types_id=2`);
              }}
            >
              <p className="hidden md:block">Artistas y conciertos</p>
            </button>
            <button
              onClick={() => {
                router.push(`/search?publications_types_id=3`);
              }}
            >
              <p className="hidden md:block">Torneos</p>
            </button>
            <div className="block md:hidden">
              <More />
            </div>
          </div>
        </div>
      </div>

      <div className="md:app-container mt-[44px] my-10 mx-4 min-h-[100px]">
        {publications?.map((card: any) => (
          <CardSearch
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            reference_link={card.reference_link}
            votes_count={card.votes_count}
            images={card.images}
            // mutate={mutate}
          />
        ))}
      </div>

      <section className="px-[20px]">
        {/* <SectionSlider
          className="mb-24"
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
        /> */}
      </section>
    </>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
