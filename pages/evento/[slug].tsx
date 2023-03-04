import UserLogo from '@/components/atoms/UserLogo';
import BtnVote from '@/components/buttons/BtnVote';
import CategorieNavbar from '@/components/categories/homeCategories/CategorieNavbar';
import Categories from '@/components/categories/homeCategories/Categories';
import Layout from '@/components/layouts/Layout';
import SectionSlider from '@/components/sliders/SectionSlider';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

import db from '../../db.json';
import { NextPageWithLayout } from '../_app';
const EventoPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [evento, setEvento] = useState<any>();

  useEffect(() => {
    const eventoFilter = db.filter((event) => event.id === Number(slug));
    setEvento(eventoFilter);
  }, [slug]);
//  mt-[58px] space-x-1 md:space-x-3 md:mb-6

return (
    <>
      <Head>
        <title>{slug} - Para Cuándo</title>
        <meta name="description" content="description" />
      </Head>
      <CategorieNavbar />
      <div className="app-container">

        <section className="w-full grid items-start md:grid-cols-2 mt-[102px] gap-x-5">
          <div className='md:row-span-2'>
              <p>
                {evento?.[0]?.tipo} / {evento?.[0]?.categorias}
              </p>

            <div className='mt-1.5'>
              <h1 className="title-1 text-black">
                {evento?.[0]?.title}
              </h1>
              <p className='mt-[22px] text-app-grayDark'>{evento?.[0]?.description}</p>
            </div>

            <div className="mt-8">
              <p className='text-[#1B4DB1]'>{evento?.[0]?.web}</p>
              <div className='mt-4 flex gap-2'>
                <UserLogo />
                <p>{evento?.[0]?.votes} votos</p>
              </div>
            </div>
            </div>
          <Image
            className="mt-6 w-full md:mt-0 md:row-span-3"
            src={evento?.[0]?.img}
            alt={evento?.[0]?.title}
            width={539}
            height={381}
            />
            
          <div className="mt-7 w-full">
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
