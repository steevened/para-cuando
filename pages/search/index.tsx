import ButtonSave from '@/components/buttons/ButtonSave';
import Input from '@/components/Forms/Input';
import More from '@/components/Forms/More';
import Layout from '@/components/layouts/Layout';
import CardSearch from '@/components/sliders/CardSearch';
import SectionSlider from '@/components/sliders/SectionSlider';
import { usePublications } from '@/lib/services/publications.services';
import Link from 'next/link';
import { ReactElement } from 'react';
import { NextPageWithLayout } from '../_app';

// const INFO_CARD = [
//   {
//     id: 1,
//     title: 'Concierto de Lady Gaga',
//     description:
//       'El concierto con la temática de Lady Gaga en Las Vegas.El concierto con la temática de Lady Gaga en Las Vegas.',
//     web: 'ladygaga.com',
//     votes: 90800756,
//     img: '../../public/imgSearch/card1.png',
//   },
//   {
//     id: 2,
//     title: 'Concierto de Lady Gaga',
//     description:
//       'El concierto con la temática de Lady Gaga en Las Vegas.El concierto con la temática de Lady Gaga en Las Vegas.',
//     web: 'ladygaga.com',
//     votes: 90800756,
//     img: '../../public/imgSearch/card2.png',
//   },
//   {
//     id: 3,
//     title: 'Concierto de Lady Gaga',
//     description:
//       'El concierto con la temática de Lady Gaga en Las Vegas.El concierto con la temática de Lady Gaga en Las Vegas.',
//     web: 'ladygaga.com',
//     votes: 90800756,
//     img: '../../public/imgSearch/card3.png',
//   },
//   {
//     id: 4,
//     title: 'Concierto de Lady Gaga',
//     description:
//       'El concierto con la temática de Lady Gaga en Las Vegas.El concierto con la temática de Lady Gaga en Las Vegas.',
//     web: 'ladygaga.com',
//     votes: 90800756,
//     img: '../../public/imgSearch/card4.png',
//   },
//   {
//     id: 5,
//     title: 'Concierto de Lady Gaga',
//     description:
//       'El concierto con la temática de Lady Gaga en Las Vegas.El concierto con la temática de Lady Gaga en Las Vegas.',
//     web: 'ladygaga.com',
//     votes: 90800756,
//     img: '../../public/imgSearch/card5.png',
//   },
// ];

const Search: NextPageWithLayout = () => {
  const { data: publications, error, isLoading } = usePublications();

  console.log(publications);

  return (
    <div>
      <div className="bg-[url('/hero.png')] h-[108px] bg-no-repeat bg-cover">
        <Link href={'/'}>
          <p className="pl-[21px] pt-[67px] relative text-base text-app-grayLighter font-medium leading-[18px]">
            Home / Search
          </p>
        </Link>
      </div>
      <div className="shadow-lg shadow-app-gray-500/500">
        <div className="app-container">
          <div className="pt-[37px] flex gap-[37px]">
            <Input />
            <ButtonSave className="hidden md:block">Buscar</ButtonSave>
          </div>
          <div className=" flex flex-row item-center justify-between pt-[25px] cursor-pointer text-base font-normal  text-app-grayDark ">
            <h2 className="">Todos los resultados</h2>
            <h2 className="">Marcas y tiendas</h2>
            <h2 className="hidden md:block">Artistas y conciertos</h2>
            <h2 className="hidden md:block">Torneos</h2>
            <div className=" block md:hidden">
              <More />
            </div>
          </div>
        </div>
      </div>

      <div className="md:app-container mt-[44px] mb-5 mx-4">
        {publications?.results.results.map((card: any) => (
          <CardSearch
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            reference_link={card.reference_link}
            votes_count={card.votes_count}
            images={card.images}
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
    </div>
  );
};

Search.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Search;
