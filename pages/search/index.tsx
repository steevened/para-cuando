import ButtonSave from '@/components/buttons/ButtonSave';
import Layout from '@/components/layouts/Layout';
import hero from '@/public/hero.png';

import Input from '@/components/Forms/Input';
import MobileMenuTabs from '@/components/Forms/MobileMenuTabs';
import CardSearch from '@/components/sliders/CardSearch';
import SectionSlider from '@/components/sliders/SectionSlider';
import { usePublications } from '@/lib/services/publications/publications.services';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import { NextPageWithLayout } from '../_app';

const Search: NextPageWithLayout = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const { asPath } = router;
    setQuery(asPath.split('?')[1]);
  }, [router]);

  // useEffect(() => {}, []);

  const {
    data: publications,
    // error,
    // isLoading,
    mutate,
  } = usePublications(query);

  const handleChangeTab = (id: number) => {
    setCurrentTab(id);
    const { asPath } = router;
    if (id === 0) {
      router.push(`${asPath.split('&')[0]}`);
    } else {
      router.push(
        `/search?title=${router.query.title}&publications_types_id=${id}`
      );
    }
  };

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
      <div className="text-sm shadow-lg shadow-app-gray-500/500">
        <div className="max-w-6xl px-2 mx-auto md:px-5 ">
          <div className="pt-[37px] flex gap-[37px]">
            <Input />
            <ButtonSave className="hidden md:block">Buscar</ButtonSave>
          </div>

          <div className="flex  item-center justify-between mt-[25px] cursor-pointer test-sm md:text-base text-app-grayDark">
            <button
              onClick={() => {
                handleChangeTab(0);
              }}
              className={`p-2  duration-200 border-b-4 hover:border-app-blue/30 ${
                currentTab === 0 && 'border-app-blue'
              }`}
            >
              <p className="">Todos los resultados</p>
            </button>
            <button
              onClick={() => {
                handleChangeTab(1);
              }}
              className={`p-2  duration-200 border-b-4 hover:border-app-blue/30 ${
                currentTab === 1 && 'border-app-blue'
              }`}
            >
              <p className="">Marcas y tiendas</p>
            </button>
            <button
              onClick={() => {
                handleChangeTab(2);
              }}
              className={`p-2 hidden sm:block duration-200 border-b-4 hover:border-app-blue/30 ${
                currentTab === 2 && 'border-app-blue'
              }`}
            >
              Artistas y conciertos
            </button>
            <button
              onClick={() => {
                handleChangeTab(3);
              }}
              className={`p-2 hidden sm:block   duration-200 border-b-4 hover:border-app-blue/30 ${
                currentTab === 3 && 'border-app-blue'
              }`}
            >
              Torneos
            </button>
            <div className="block sm:hidden">
              <MobileMenuTabs handleChangeTab={handleChangeTab} />
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
            mutate={mutate}
          />
        ))}
      </div>

      <section className="px-[20px]">
        <SectionSlider
          className="mb-24"
          title="Recientes"
          subtitle="Las personas últimamente están hablando de esto"
        />
      </section>
    </>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
