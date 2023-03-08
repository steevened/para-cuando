import UserLogo from '@/components/atoms/UserLogo';
import BtnVote from '@/components/buttons/BtnVote';
import CategorieNavbar from '@/components/categories/homeCategories/CategorieNavbar';
import Categories from '@/components/categories/homeCategories/Categories';
import Layout from '@/components/layouts/Layout';
import SectionSlider from '@/components/sliders/SectionSlider';
import { usePublicationId } from '@/lib/services/publications/publicationId.services';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { NextPageWithLayout } from '../_app';
const EventoPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;

  const {
    data: publication,
    error,
    isLoading,
    mutate,
  } = usePublicationId(String(slug));

  console.log(publication);

  return (
    <>
      <Head>
        <title>{publication?.title} - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <CategorieNavbar />
      <div className="app-container">
        <section className="w-full grid items-start md:grid-cols-2 mt-[102px] gap-x-5">
          <div className="md:row-span-2">
            <p>
              {publication?.publications_type.name} /{' '}
              {publication?.publications_type.name}
            </p>

            <div className="mt-1.5">
              <h1 className="text-black title-1">{publication?.title}</h1>
              <p className="mt-[22px] text-app-grayDark">
                {publication?.description}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-[#1B4DB1]">{/* {evento?.[0]?.web} */}</p>
              <div className="flex gap-2 mt-4">
                <UserLogo />
                <p>
                  {publication?.votes_count}{' '}
                  {publication?.votes_count !== 1 ? 'votos' : 'voto'}
                </p>
              </div>
            </div>
          </div>
          {/* <Image
            className="w-full mt-6 md:mt-0 md:row-span-3"
            src={evento?.[0]?.img}
            alt={evento?.[0]?.title}
            width={539}
            height={381}
          /> */}

          <div className="w-full mt-7">
            <BtnVote voted={false} />
          </div>
        </section>

        <Categories />
        <SectionSlider
          title="Recientes"
          subtitle="Las personas últimanete están hablando de esto"
        />
      </div>
    </>
  );
};

EventoPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default EventoPage;
